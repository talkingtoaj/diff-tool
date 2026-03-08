import re
from difflib import SequenceMatcher
from typing import List, Dict


class DiffService:
    @staticmethod
    def split_into_sentences(text: str) -> List[str]:
        sentences = []
        current = ""

        i = 0
        while i < len(text):
            char = text[i]
            current += char

            if char in '.!?;' and i + 1 < len(text):
                next_char = text[i + 1]
                if next_char in ' \n\t\r':
                    sentences.append(current.strip())
                    current = ""
                    i += 1
                    while i < len(text) and text[i] in ' \n\t\r':
                        i += 1
                    continue

            i += 1

        if current.strip():
            sentences.append(current.strip())

        return [s for s in sentences if s]

    @staticmethod
    def split_into_words(text: str) -> List[str]:
        words = []
        current = ""

        for char in text:
            if char.isspace() or char in '.,;:!?()[]{}"\'-':
                if current:
                    words.append(current)
                    current = ""
                if char not in ' \t\n\r':
                    words.append(char)
            else:
                current += char

        if current:
            words.append(current)

        return words

    @staticmethod
    def get_word_diff(original: str, modified: str) -> List[Dict]:
        original_words = DiffService.split_into_words(original)
        modified_words = DiffService.split_into_words(modified)

        matcher = SequenceMatcher(None, original_words, modified_words)
        opcodes = matcher.get_opcodes()

        word_diffs = []
        for tag, i1, i2, j1, j2 in opcodes:
            words = {
                'type': tag,
                'original': original_words[i1:i2],
                'modified': modified_words[j1:j2]
            }
            word_diffs.append(words)

        return word_diffs

    @staticmethod
    def generate_diff(original: str, modified: str) -> List[Dict]:
        original_sentences = DiffService.split_into_sentences(original)
        modified_sentences = DiffService.split_into_sentences(modified)

        matcher = SequenceMatcher(None, original_sentences, modified_sentences)
        opcodes = matcher.get_opcodes()

        blocks = []
        original_idx = 0
        modified_idx = 0

        for tag, i1, i2, j1, j2 in opcodes:
            orig_sentences = original_sentences[i1:i2]
            mod_sentences = modified_sentences[j1:j2]

            orig_text = ' '.join(orig_sentences)
            mod_text = ' '.join(mod_sentences)

            word_diffs = DiffService.get_word_diff(orig_text, mod_text) if (tag in ['replace', 'changed'] and orig_text and mod_text) else []

            block = {
                "type": tag,
                "original_sentences": orig_sentences,
                "modified_sentences": mod_sentences,
                "original_start": i1,
                "modified_start": j1,
                "word_diffs": word_diffs
            }

            if tag == 'replace':
                block["type"] = 'changed'
            elif tag == 'delete':
                block["type"] = 'removed'
            elif tag == 'insert':
                block["type"] = 'added'
            else:
                block["type"] = 'unchanged'

            blocks.append(block)
            original_idx = i2
            modified_idx = j2

        return blocks

    @staticmethod
    def reconstruct_from_blocks(blocks: List[Dict], side: str = 'modified') -> str:
        sentences = []
        for block in blocks:
            if side == 'original':
                sentences.extend(block['original_sentences'])
            else:
                sentences.extend(block['modified_sentences'])
        return '\n\n'.join(sentences)
