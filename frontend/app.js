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
            error: null
        }
    },
    watch: {
        has_active_session(newVal) {
            if (newVal) {
                setTimeout(() => {
                    this.setupScrollSync();
                }, 500);
            }
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
                modifiedBlocks: Array
            },
            emits: ['copy-to-original', 'copy-to-modified'],
            data() {
                return {
                    isScrolling: false
                };
            },
            methods: {
                getWordHtml(words, type) {
                    if (!words || words.length === 0) return '';
                    return words.map(w => {
                        if (type === 'insert') {
                            return `<span class="word-added">${this.escapeHtml(w)}</span>`;
                        } else if (type === 'delete') {
                            return `<span class="word-removed">${this.escapeHtml(w)}</span>`;
                        } else if (type === 'equal') {
                            return `<span class="word-equal">${this.escapeHtml(w)}</span>`;
                        }
                        return this.escapeHtml(w);
                    }).join(' ');
                },
                escapeHtml(text) {
                    const div = document.createElement('div');
                    div.textContent = text;
                    return div.innerHTML;
                },
                renderBlockContent(block, side) {
                    if (side === 'original') {
                        return block.original_sentences ? block.original_sentences.join(' ') : '';
                    } else {
                        return block.modified_sentences ? block.modified_sentences.join(' ') : '';
                    }
                },
                syncScroll(event, sourcePanel) {
                    if (this.isScrolling) return;
                    
                    const source = event.target;
                    const panels = this.$el.querySelectorAll('.panel');
                    const targetIndex = sourcePanel === 'left' ? 1 : 0;
                    const target = panels[targetIndex];
                    
                    const maxScroll = source.scrollHeight - source.clientHeight;
                    if (maxScroll <= 0 || !target) return;
                    
                    this.isScrolling = true;
                    const scrollPct = source.scrollTop / maxScroll;
                    const targetMaxScroll = target.scrollHeight - target.clientHeight;
                    target.scrollTop = scrollPct * targetMaxScroll;
                    
                    setTimeout(() => { this.isScrolling = false; }, 50);
                }
            },
            mounted() {
                const panels = this.$el.querySelectorAll('.panel');
                panels[0].addEventListener('scroll', (e) => this.syncScroll(e, 'left'));
                panels[1].addEventListener('scroll', (e) => this.syncScroll(e, 'right'));
            },
            template: `
                <div class="diff-viewer">
                    <div class="panel" @scroll="syncScroll($event, 'left')">
                        <div class="panel-header">Original</div>
                        <div v-for="(block, index) in originalBlocks" :key="'orig-' + index" 
                             :class="['block', block.type]">
                            <div v-for="(sentence, sIndex) in block.sentences" :key="'orig-s-' + index + '-' + sIndex">
                                {{ sentence }}
                            </div>
                        </div>
                    </div>
                    <div class="divider">
                        <div class="scroll-indicator-top" title="More changes above">↑</div>
                        <div v-for="(block, index) in originalBlocks" :key="'ctrl-' + index" 
                             class="copy-controls">
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
                        <div class="scroll-indicator-bottom" title="More changes below">↓</div>
                    </div>
                    <div class="panel" @scroll="syncScroll($event, 'right')">
                        <div class="panel-header">Modified</div>
                        <div v-for="(block, index) in modifiedBlocks" :key="'mod-' + index" 
                             :class="['block', block.type]">
                            <div v-for="(sentence, sIndex) in block.sentences" :key="'mod-s-' + index + '-' + sIndex">
                                {{ sentence }}
                            </div>
                        </div>
                    </div>
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
                this.originalBlocks = this.processBlocks(response.data.blocks, 'original');
                this.modifiedBlocks = this.processBlocks(response.data.blocks, 'modified');
                this.has_active_session = true;
                this.undo_stack = [];
                this.can_undo = false;
                this.has_unsaved_changes = false;
                
                // Set up scroll sync after DOM is updated
                this.$nextTick(() => {
                    setTimeout(() => this.setupScrollSync(), 100);
                });
                
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
        handleCopyToOriginal(index) {
            this.saveStateToUndo();
            this.originalBlocks[index] = {
                ...this.modifiedBlocks[index],
                type: 'copied'
            };
        },
        handleCopyToModified(index) {
            this.saveStateToUndo();
            this.modifiedBlocks[index] = {
                ...this.originalBlocks[index],
                type: 'copied'
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
        },
        async saveChanges() {
            if (!this.has_unsaved_changes) return;
            
            this.isSaving = true;
            this.error = null;
            
            try {
                const blocksForSave = this.originalBlocks.map((block, index) => ({
                    type: block.type,
                    original_sentences: this.originalBlocks[index].sentences,
                    modified_sentences: this.modifiedBlocks[index].sentences,
                    original_start: index,
                    modified_start: index
                }));
                
                await axios.post(`/api/diff/${this.session_id}/save`, blocksForSave);
                
                this.has_unsaved_changes = false;
                this.undo_stack = [];
                this.can_undo = false;
                
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
            this.file1 = null;
            this.file2 = null;
            
            const inputs = document.querySelectorAll('input[type="file"]');
            inputs.forEach(input => input.value = '');
        },
        updated() {
            if (this.has_active_session) {
                this.setupScrollSync();
            }
        },
        setupScrollSync() {
            const panels = document.querySelectorAll('.diff-viewer .panel');
            if (panels.length < 2) {
                window.scrollSyncError = 'Not enough panels';
                return;
            }
            
            window.scrollSyncSetup = true;
            let syncing = false;
            
            const updateScrollIndicators = () => {
                const left = panels[0];
                const topIndicator = document.querySelector('.scroll-indicator-top');
                const bottomIndicator = document.querySelector('.scroll-indicator-bottom');
                
                if (topIndicator) {
                    topIndicator.classList.toggle('visible', left.scrollTop > 10);
                }
                if (bottomIndicator) {
                    const maxScroll = left.scrollHeight - left.clientHeight;
                    bottomIndicator.classList.toggle('visible', left.scrollTop < maxScroll - 10);
                }
            };
            
            const handleScroll = (sourcePanel) => {
                if (syncing) return;
                
                const source = panels[sourcePanel];
                const sourceMaxScroll = source.scrollHeight - source.clientHeight;
                if (sourceMaxScroll <= 0) return;
                
                const target = panels[sourcePanel === 0 ? 1 : 0];
                const targetMaxScroll = target.scrollHeight - target.clientHeight;
                
                syncing = true;
                
                let scrollPct = source.scrollTop / sourceMaxScroll;
                scrollPct = Math.max(0, Math.min(1, scrollPct));
                
                if (targetMaxScroll > 0) {
                    target.scrollTop = scrollPct * targetMaxScroll;
                }
                
                updateScrollIndicators();
                setTimeout(() => { syncing = false; }, 50);
            };
            
            panels[0].addEventListener('scroll', () => {
                window.leftScrollFired = true;
                handleScroll(0);
            });
            
            panels[1].addEventListener('scroll', () => {
                window.rightScrollFired = true;
                handleScroll(1);
            });
            
            window.syncLeftScroll = () => handleScroll(0);
            window.syncRightScroll = () => handleScroll(1);
            
            setTimeout(updateScrollIndicators, 100);
        }
    }
}).mount('#app');
