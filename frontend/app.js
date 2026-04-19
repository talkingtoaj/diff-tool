// Check if Vue is loaded
if (typeof Vue === 'undefined') {
    document.body.innerHTML = '<div style="color: red; padding: 20px; font-family: sans-serif;"><h1>Error</h1><p>Vue.js failed to load. Please check your internet connection and refresh the page.</p><p>If the problem persists, the CDN may be down.</p></div>';
    throw new Error('Vue.js not loaded');
}

const { createApp } = Vue;

createApp({
    data() {
        return {
            file1: null,
            file2: null,
            has_active_session: false,
            session_id: null,
            originalBlocks: [],
            modifiedBlocks: [],
            undo_stack: [],
            redo_stack: [],
            can_undo: false,
            can_redo: false,
            has_unsaved_changes: false,
            isLoading: false,
            isSaving: false,
            error: null,
            highlightLevel: 'off', // 'off', 'sentence', 'word'
            _modifiedUndoCellKey: null,
        }
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 'z' && !e.shiftKey) {
                    e.preventDefault();
                    this.undo();
                } else if ((e.key === 'y') || (e.key === 'z' && e.shiftKey)) {
                    e.preventDefault();
                    this.redo();
                }
            }
        });
    },
            components: {
        'diff-viewer': {
            props: {
                originalBlocks: Array,
                modifiedBlocks: Array,
                highlightLevel: String
            },
            emits: ['copy-to-original', 'copy-to-modified', 'modified-sentence-input'],
            data() {
                return {
                    wordDiffCache: {}
                };
            },
            methods: {
                escapeHtml(text) {
                    const div = document.createElement('div');
                    div.textContent = text;
                    return div.innerHTML;
                },
                splitWords(text) {
                    const words = [];
                    let current = "";
                    for (const char of text) {
                        if (/\s/.test(char)) {
                            if (current) {
                                words.push(current);
                                current = "";
                            }
                            if (char === '\n') {
                                words.push('\n');
                            }
                        } else if ('.,;:!?()[]{}"\'-'.includes(char)) {
                            if (current) {
                                words.push(current);
                                current = "";
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
                    
                    // Simple LCS-based diff
                    const diffs = [];
                    let i = 0, j = 0;
                    
                    while (i < origWords.length || j < modWords.length) {
                        if (i < origWords.length && j < modWords.length && origWords[i] === modWords[j]) {
                            diffs.push({ type: 'equal', word: origWords[i] });
                            i++;
                            j++;
                        } else {
                            // Look ahead for match
                            let origMatch = -1, modMatch = -1;
                            for (let k = i; k < Math.min(i + 5, origWords.length); k++) {
                                const idx = modWords.slice(j, j + 5).indexOf(origWords[k]);
                                if (idx !== -1) {
                                    origMatch = k;
                                    modMatch = j + idx;
                                    break;
                                }
                            }
                            
                            if (origMatch !== -1 && origMatch - i <= 3 && modMatch - j <= 3) {
                                // Found match nearby, mark intermediate as changes
                                while (i < origMatch) {
                                    if (origWords[i] !== '\n') {
                                        diffs.push({ type: 'removed', word: origWords[i] });
                                    }
                                    i++;
                                }
                                while (j < modMatch) {
                                    if (modWords[j] !== '\n') {
                                        diffs.push({ type: 'added', word: modWords[j] });
                                    }
                                    j++;
                                }
                            } else if (i < origWords.length && j < modWords.length) {
                                if (origWords[i] !== '\n') {
                                    diffs.push({ type: 'removed', word: origWords[i] });
                                }
                                if (modWords[j] !== '\n') {
                                    diffs.push({ type: 'added', word: modWords[j] });
                                }
                                i++;
                                j++;
                            } else if (i < origWords.length) {
                                if (origWords[i] !== '\n') {
                                    diffs.push({ type: 'removed', word: origWords[i] });
                                }
                                i++;
                            } else {
                                if (modWords[j] !== '\n') {
                                    diffs.push({ type: 'added', word: modWords[j] });
                                }
                                j++;
                            }
                        }
                    }
                    return diffs;
                },
                renderSentenceWordDiff(origSentence, modSentence, side) {
                    if (!origSentence && !modSentence) return '';
                    if (!origSentence) {
                        return side === 'modified' ? `<span class="word-added">${this.escapeHtml(modSentence)}</span>` : '';
                    }
                    if (!modSentence) {
                        return side === 'original' ? `<span class="word-removed">${this.escapeHtml(origSentence)}</span>` : '';
                    }
                    if (origSentence === modSentence) {
                        return this.escapeHtml(origSentence);
                    }
                    
                    const cacheKey = `${origSentence}|||${modSentence}|||${side}`;
                    if (this.wordDiffCache[cacheKey]) {
                        return this.wordDiffCache[cacheKey];
                    }
                    
                    const diffs = this.computeWordDiff(origSentence, modSentence);
                    const html = diffs.map(d => {
                        const escaped = this.escapeHtml(d.word);
                        if (d.type === 'equal') return escaped;
                        if (d.type === 'removed' && side === 'original') {
                            return `<span class="word-removed">${escaped}</span>`;
                        }
                        if (d.type === 'added' && side === 'modified') {
                            return `<span class="word-added">${escaped}</span>`;
                        }
                        return '';
                    }).filter(h => h).join(' ');
                    
                    this.wordDiffCache[cacheKey] = html;
                    return html;
                }
            },
            template: `
                <div class="diff-viewer">
                    <table class="diff-table">
                        <thead>
                            <tr>
                                <th class="panel-header">Original</th>
                                <th class="divider-header"></th>
                                <th class="panel-header">Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(block, index) in originalBlocks" :key="'row-' + index">
                                <td :class="['block-cell', block.type, { 'blank-block': block.isBlank }]">
                                    <div v-for="(sentence, sIndex) in block.sentences" :key="'orig-s-' + index + '-' + sIndex"
                                         :class="{ 'sentence-placeholder': sentence === '' }">
                                        <template v-if="sentence === ''">&nbsp;</template>
                                        <template v-else-if="highlightLevel === 'word'">
                                            <span v-html="renderSentenceWordDiff(sentence, modifiedBlocks[index]?.sentences?.[sIndex] || '', 'original')"></span>
                                        </template>
                                        <template v-else>{{ sentence }}</template>
                                    </div>
                                </td>
                                <td class="divider-cell">
                                    <div class="copy-controls">
                                        <button v-if="block.type === 'added' || block.type === 'changed'"
                                                class="copy-btn copy-to-original"
                                                @click="$emit('copy-to-original', index)"
                                                title="Copy to Original">
                                            ←
                                        </button>
                                        <button v-if="block.type === 'removed' || block.type === 'changed'"
                                                class="copy-btn copy-to-modified"
                                                @click="$emit('copy-to-modified', index)"
                                                title="Copy to Modified">
                                            →
                                        </button>
                                    </div>
                                </td>
                                <td :class="['block-cell', modifiedBlocks[index]?.type, { 'blank-block': modifiedBlocks[index]?.isBlank }]">
                                    <textarea v-for="(sentence, sIndex) in modifiedBlocks[index]?.sentences || []" :key="'mod-s-' + index + '-' + sIndex"
                                        class="modified-sentence-input"
                                        rows="1"
                                        spellcheck="false"
                                        :value="sentence"
                                        @input="$emit('modified-sentence-input', { blockIndex: index, sentenceIndex: sIndex, value: $event.target.value })"
                                    ></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        }
    },
    methods: {
        handleFile1(event) {
            this.file1 = event.target.files[0];
        },
        handleFile2(event) {
            this.file2 = event.target.files[0];
        },
        async startDiff() {
            if (!this.file1 || !this.file2) return;
            
            this.isLoading = true;
            this.error = null;
            
            try {
                const formData = new FormData();
                formData.append('file1', this.file1);
                formData.append('file2', this.file2);
                
                const response = await axios.post('/api/diff/start', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                
                this.session_id = response.data.session_id;
                const synced = this.synchronizeBlockLines(response.data.blocks);
                this.originalBlocks = synced.originalBlocks;
                this.modifiedBlocks = synced.modifiedBlocks;
                this.has_active_session = true;
                this.undo_stack = [];
                this.can_undo = false;
                this.has_unsaved_changes = false;
                
            } catch (err) {
                this.error = 'Error comparing files: ' + (err.response?.data?.detail || err.message);
            } finally {
                this.isLoading = false;
            }
        },
        processBlocks(blocks, side) {
            return blocks.map(block => ({
                ...block,
                sentences: side === 'original' ? block.original_sentences : block.modified_sentences
            }));
        },
        synchronizeBlockLines(blocks) {
            const originalBlocks = [];
            const modifiedBlocks = [];
            
            blocks.forEach(block => {
                const origSentences = block.original_sentences || [];
                const modSentences = block.modified_sentences || [];
                const maxLines = Math.max(origSentences.length, modSentences.length);
                
                const paddedOriginal = [...origSentences];
                const paddedModified = [...modSentences];
                
                while (paddedOriginal.length < maxLines) {
                    paddedOriginal.push('');
                }
                while (paddedModified.length < maxLines) {
                    paddedModified.push('');
                }
                
                originalBlocks.push({
                    ...block,
                    sentences: paddedOriginal,
                    isBlank: origSentences.length === 0
                });
                
                modifiedBlocks.push({
                    ...block,
                    sentences: paddedModified,
                    isBlank: modSentences.length === 0
                });
            });
            
            return { originalBlocks, modifiedBlocks };
        },
        saveStateToUndo() {
            this.undo_stack.push({
                original: JSON.parse(JSON.stringify(this.originalBlocks)),
                modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
            });
            this.can_undo = true;
            this.redo_stack = [];
            this.can_redo = false;
            this.has_unsaved_changes = true;
        },
        handleModifiedSentenceInput({ blockIndex, sentenceIndex, value }) {
            const key = `${blockIndex}-${sentenceIndex}`;
            if (this._modifiedUndoCellKey !== key) {
                this.saveStateToUndo();
                this._modifiedUndoCellKey = key;
            }
            const block = this.modifiedBlocks[blockIndex];
            if (!block) return;
            block.sentences[sentenceIndex] = value;
            block.isBlank = !block.sentences.some((s) => s !== '');
            this.has_unsaved_changes = true;
        },
        handleCopyToOriginal(index) {
            this._modifiedUndoCellKey = null;
            this.saveStateToUndo();
            const sourceSentences = this.modifiedBlocks[index].sentences.filter(s => s !== '');
            const targetSentences = this.originalBlocks[index].sentences;
            const maxLines = Math.max(sourceSentences.length, targetSentences.length);
            const paddedSource = [...sourceSentences];
            while (paddedSource.length < maxLines) {
                paddedSource.push('');
            }
            this.originalBlocks[index] = {
                ...this.originalBlocks[index],
                sentences: paddedSource,
                type: 'copied',
                isBlank: sourceSentences.length === 0
            };
        },
        handleCopyToModified(index) {
            this._modifiedUndoCellKey = null;
            this.saveStateToUndo();
            const sourceSentences = this.originalBlocks[index].sentences.filter(s => s !== '');
            const targetSentences = this.modifiedBlocks[index].sentences;
            const maxLines = Math.max(sourceSentences.length, targetSentences.length);
            const paddedSource = [...sourceSentences];
            while (paddedSource.length < maxLines) {
                paddedSource.push('');
            }
            this.modifiedBlocks[index] = {
                ...this.modifiedBlocks[index],
                sentences: paddedSource,
                type: 'copied',
                isBlank: sourceSentences.length === 0
            };
        },
        undo() {
            if (this.undo_stack.length === 0) return;
            
            this.redo_stack.push({
                original: JSON.parse(JSON.stringify(this.originalBlocks)),
                modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
            });
            this.can_redo = true;
            
            const previousState = this.undo_stack.pop();
            this.originalBlocks = previousState.original;
            this.modifiedBlocks = previousState.modified;
            
            this.can_undo = this.undo_stack.length > 0;
            this.has_unsaved_changes = true;
            this._modifiedUndoCellKey = null;
        },
        redo() {
            if (this.redo_stack.length === 0) return;
            
            this.undo_stack.push({
                original: JSON.parse(JSON.stringify(this.originalBlocks)),
                modified: JSON.parse(JSON.stringify(this.modifiedBlocks))
            });
            this.can_undo = true;
            
            const nextState = this.redo_stack.pop();
            this.originalBlocks = nextState.original;
            this.modifiedBlocks = nextState.modified;
            
            this.can_redo = this.redo_stack.length > 0;
            this.has_unsaved_changes = true;
            this._modifiedUndoCellKey = null;
        },
        async saveChanges() {
            if (!this.has_unsaved_changes) return;
            
            this.isSaving = true;
            this.error = null;
            
            try {
                const blocksForSave = this.originalBlocks.map((block, index) => ({
                    type: block.type,
                    original_sentences: this.originalBlocks[index].sentences.filter(s => s !== ''),
                    modified_sentences: this.modifiedBlocks[index].sentences.filter(s => s !== ''),
                    original_start: index,
                    modified_start: index
                }));
                
                await axios.post(`/api/diff/${this.session_id}/save`, blocksForSave);
                
                this.has_unsaved_changes = false;
                this.undo_stack = [];
                this.can_undo = false;
                this._modifiedUndoCellKey = null;

                alert('Changes saved successfully!');
                
            } catch (err) {
                this.error = 'Error saving changes: ' + (err.response?.data?.detail || err.message);
            } finally {
                this.isSaving = false;
            }
        },
        async cancelSession() {
            if (this.has_unsaved_changes) {
                if (!confirm('You have unsaved changes. Are you sure you want to cancel?')) {
                    return;
                }
            }
            
            try {
                await axios.delete(`/api/diff/${this.session_id}`);
                this.resetSession();
            } catch (err) {
                this.error = 'Error canceling session: ' + (err.response?.data?.detail || err.message);
            }
        },
        resetSession() {
            this.has_active_session = false;
            this.session_id = null;
            this.originalBlocks = [];
            this.modifiedBlocks = [];
            this.undo_stack = [];
            this.can_undo = false;
            this.has_unsaved_changes = false;
            this._modifiedUndoCellKey = null;
            this.file1 = null;
            this.file2 = null;
            
            const inputs = document.querySelectorAll('input[type="file"]');
            inputs.forEach(input => input.value = '');
        }
    }
}).mount('#app');
