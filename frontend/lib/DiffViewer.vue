<template>
  <div class="diff-tool-viewer__viewer">
    <table class="diff-tool-viewer__table">
      <thead>
        <tr>
          <th class="diff-tool-viewer__panel-header">{{ leftLabel }}</th>
          <th class="diff-tool-viewer__divider-header"></th>
          <th class="diff-tool-viewer__panel-header">{{ rightLabel }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(block, index) in originalBlocks" :key="'row-' + index">
          <td :class="['diff-tool-viewer__cell', block.type, { 'diff-tool-viewer__blank': block.isBlank }]">
            <div
              v-for="(sentence, sIndex) in block.sentences"
              :key="'orig-s-' + index + '-' + sIndex"
              :class="{ 'diff-tool-viewer__placeholder': sentence === '' }"
            >
              <template v-if="sentence === ''">&nbsp;</template>
              <template v-else-if="highlightLevel === 'word'">
                <span v-html="renderSentenceWordDiff(sentence, modifiedBlocks[index]?.sentences?.[sIndex] || '', 'original')"></span>
              </template>
              <template v-else>{{ sentence }}</template>
            </div>
          </td>
          <td class="diff-tool-viewer__divider-cell">
            <div class="diff-tool-viewer__copy-controls">
              <button
                v-if="block.type === 'added' || block.type === 'changed'"
                class="diff-tool-viewer__copy-btn diff-tool-viewer__copy-to-original"
                @click="$emit('copy-to-original', index)"
                title="Copy to Original"
              >
                ←
              </button>
              <button
                v-if="block.type === 'removed' || block.type === 'changed'"
                class="diff-tool-viewer__copy-btn diff-tool-viewer__copy-to-modified"
                @click="$emit('copy-to-modified', index)"
                title="Copy to Modified"
              >
                →
              </button>
            </div>
          </td>
          <td :class="['diff-tool-viewer__cell', modifiedBlocks[index]?.type, { 'diff-tool-viewer__blank': modifiedBlocks[index]?.isBlank }]">
            <div
              v-for="(sentence, sIndex) in modifiedBlocks[index]?.sentences || []"
              :key="'mod-s-' + index + '-' + sIndex"
              :class="{ 'diff-tool-viewer__placeholder': sentence === '' }"
            >
              <template v-if="sentence === ''">&nbsp;</template>
              <template v-else-if="highlightLevel === 'word'">
                <span v-html="renderSentenceWordDiff(originalBlocks[index]?.sentences?.[sIndex] || '', sentence, 'modified')"></span>
              </template>
              <template v-else>{{ sentence }}</template>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DiffViewer',
  props: {
    originalBlocks: { type: Array, required: true },
    modifiedBlocks: { type: Array, required: true },
    highlightLevel: { type: String, default: 'off' },
    leftLabel: { type: String, default: 'Original' },
    rightLabel: { type: String, default: 'Modified' },
  },
  emits: ['copy-to-original', 'copy-to-modified'],
  data() {
    return { wordDiffCache: {} };
  },
  methods: {
    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    },
    splitWords(text) {
      const words = [];
      let current = '';
      for (const char of text) {
        if (/\s/.test(char)) {
          if (current) {
            words.push(current);
            current = '';
          }
          if (char === '\n') words.push('\n');
        } else if ('.,;:!?()[]{}"\'-'.includes(char)) {
          if (current) {
            words.push(current);
            current = '';
          }
          words.push(char);
        } else {
          current += char;
        }
      }
      if (current) words.push(current);
      return words;
    },
    computeWordDiff(origText, modText) {
      const origWords = this.splitWords(origText);
      const modWords = this.splitWords(modText);
      const diffs = [];
      let i = 0,
        j = 0;
      while (i < origWords.length || j < modWords.length) {
        if (i < origWords.length && j < modWords.length && origWords[i] === modWords[j]) {
          diffs.push({ type: 'equal', word: origWords[i] });
          i++;
          j++;
        } else {
          let origMatch = -1,
            modMatch = -1;
          for (let k = i; k < Math.min(i + 5, origWords.length); k++) {
            const idx = modWords.slice(j, j + 5).indexOf(origWords[k]);
            if (idx !== -1) {
              origMatch = k;
              modMatch = j + idx;
              break;
            }
          }
          if (origMatch !== -1 && origMatch - i <= 3 && modMatch - j <= 3) {
            while (i < origMatch) {
              if (origWords[i] !== '\n') diffs.push({ type: 'removed', word: origWords[i] });
              i++;
            }
            while (j < modMatch) {
              if (modWords[j] !== '\n') diffs.push({ type: 'added', word: modWords[j] });
              j++;
            }
          } else if (i < origWords.length && j < modWords.length) {
            if (origWords[i] !== '\n') diffs.push({ type: 'removed', word: origWords[i] });
            if (modWords[j] !== '\n') diffs.push({ type: 'added', word: modWords[j] });
            i++;
            j++;
          } else if (i < origWords.length) {
            if (origWords[i] !== '\n') diffs.push({ type: 'removed', word: origWords[i] });
            i++;
          } else {
            if (modWords[j] !== '\n') diffs.push({ type: 'added', word: modWords[j] });
            j++;
          }
        }
      }
      return diffs;
    },
    renderSentenceWordDiff(origSentence, modSentence, side) {
      if (!origSentence && !modSentence) return '';
      if (!origSentence) {
        return side === 'modified' ? `<span class="diff-tool-viewer__word-added">${this.escapeHtml(modSentence)}</span>` : '';
      }
      if (!modSentence) {
        return side === 'original' ? `<span class="diff-tool-viewer__word-removed">${this.escapeHtml(origSentence)}</span>` : '';
      }
      if (origSentence === modSentence) return this.escapeHtml(origSentence);
      const cacheKey = `${origSentence}|||${modSentence}|||${side}`;
      if (this.wordDiffCache[cacheKey]) return this.wordDiffCache[cacheKey];
      const diffs = this.computeWordDiff(origSentence, modSentence);
      const html = diffs
        .map((d) => {
          const escaped = this.escapeHtml(d.word);
          if (d.type === 'equal') return escaped;
          if (d.type === 'removed' && side === 'original') return `<span class="diff-tool-viewer__word-removed">${escaped}</span>`;
          if (d.type === 'added' && side === 'modified') return `<span class="diff-tool-viewer__word-added">${escaped}</span>`;
          return '';
        })
        .filter((h) => h)
        .join(' ');
      this.wordDiffCache[cacheKey] = html;
      return html;
    },
  },
};
</script>
