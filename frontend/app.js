const { createApp } = Vue;

createApp({
    data() {
        return {
            file1: null,
            file2: null,
            has_active_session: false,
            session_id: null,
            original_blocks: [],
            modified_blocks: [],
            undo_stack: [],
            can_undo: false,
            has_unsaved_changes: false,
            isLoading: false,
            isSaving: false,
            error: null
        }
    },
    components: {
        'diff-viewer': {
            props: ['original_blocks', 'modified_blocks'],
            emits: ['copy-to-original', 'copy-to-modified'],
            template: `
                <div class="diff-viewer">
                    <div class="panel">
                        <div class="panel-header">Original</div>
                        <div v-for="(block, index) in original_blocks" :key="'orig-' + index" 
                             :class="['block', block.type]">
                            <div v-for="sentence in block.sentences" :key="sentence">
                                {{ sentence }}
                            </div>
                        </div>
                    </div>
                    <div class="divider">
                        <div v-for="(block, index) in original_blocks" :key="'ctrl-' + index" 
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
                    </div>
                    <div class="panel">
                        <div class="panel-header">Modified</div>
                        <div v-for="(block, index) in modified_blocks" :key="'mod-' + index" 
                             :class="['block', block.type]">
                            <div v-for="sentence in block.sentences" :key="sentence">
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
                this.original_blocks = this.processBlocks(response.data.blocks, 'original');
                this.modified_blocks = this.processBlocks(response.data.blocks, 'modified');
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
        saveStateToUndo() {
            this.undo_stack.push({
                original: JSON.parse(JSON.stringify(this.original_blocks)),
                modified: JSON.parse(JSON.stringify(this.modified_blocks))
            });
            this.can_undo = true;
            this.has_unsaved_changes = true;
        },
        handleCopyToOriginal(index) {
            this.saveStateToUndo();
            this.original_blocks[index] = {
                ...this.modified_blocks[index],
                type: 'copied'
            };
        },
        handleCopyToModified(index) {
            this.saveStateToUndo();
            this.modified_blocks[index] = {
                ...this.original_blocks[index],
                type: 'copied'
            };
        },
        undo() {
            if (this.undo_stack.length === 0) return;
            
            const previousState = this.undo_stack.pop();
            this.original_blocks = previousState.original;
            this.modified_blocks = previousState.modified;
            
            this.can_undo = this.undo_stack.length > 0;
            this.has_unsaved_changes = this.undo_stack.length > 0;
        },
        async saveChanges() {
            if (!this.has_unsaved_changes) return;
            
            this.isSaving = true;
            this.error = null;
            
            try {
                const blocksForSave = this.original_blocks.map((block, index) => ({
                    type: block.type,
                    original_sentences: this.original_blocks[index].sentences,
                    modified_sentences: this.modified_blocks[index].sentences,
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
            this.original_blocks = [];
            this.modified_blocks = [];
            this.undo_stack = [];
            this.can_undo = false;
            this.has_unsaved_changes = false;
            this.file1 = null;
            this.file2 = null;
            
            const inputs = document.querySelectorAll('input[type="file"]');
            inputs.forEach(input => input.value = '');
        }
    }
}).mount('#app');
