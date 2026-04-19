<template>
  <div class="diff-tool-viewer">
    <div class="diff-tool-viewer__toolbar">
      <span v-if="has_unsaved_changes" class="diff-tool-viewer__unsaved">Unsaved changes</span>
      <div class="diff-tool-viewer__highlight">
        <label>Highlight:</label>
        <select v-model="highlightLevel" class="diff-tool-viewer__select">
          <option value="off">Off</option>
          <option value="word">Word Level</option>
        </select>
      </div>
      <div class="diff-tool-viewer__toolbar-btns">
        <button type="button" class="diff-tool-viewer__btn diff-tool-viewer__btn--secondary" :disabled="!can_undo" @click="undo" title="Ctrl+Z">Undo</button>
        <button type="button" class="diff-tool-viewer__btn diff-tool-viewer__btn--secondary" :disabled="!can_redo" @click="redo" title="Ctrl+Y">Redo</button>
        <button type="button" class="diff-tool-viewer__btn diff-tool-viewer__btn--primary" :disabled="!has_unsaved_changes || isSaving" @click="handleSave">
          {{ isSaving ? 'Saving...' : 'Save' }}
        </button>
        <button type="button" class="diff-tool-viewer__btn diff-tool-viewer__btn--danger" @click="handleCancel">Cancel</button>
      </div>
    </div>
    <DiffViewer
      :original-blocks="originalBlocks"
      :modified-blocks="modifiedBlocks"
      :highlight-level="highlightLevel"
      :left-label="leftLabel"
      :right-label="rightLabel"
      @copy-to-original="handleCopyToOriginal"
      @copy-to-modified="handleCopyToModified"
      @modified-sentence-input="handleModifiedSentenceInput"
    />
  </div>
</template>

<script>
import DiffViewer from './DiffViewer.vue';

export default {
  name: 'ViewerApp',
  components: { DiffViewer },
  props: {
    initialBlocks: { type: Array, default: () => [] },
    originalText: { type: String, default: '' },
    modifiedText: { type: String, default: '' },
    leftLabel: { type: String, default: 'Original' },
    rightLabel: { type: String, default: 'Modified' },
    highlightLevel: { type: String, default: 'off' },
    onSave: { type: Function, required: true },
    onCancel: { type: Function, required: true },
    getStateRef: { type: Object, default: null },
  },
  mounted() {
    if (this.getStateRef && typeof this.getStateRef === 'object') {
      this.getStateRef.getBlocks = () => this.buildBlocksForSave();
    }
    document.addEventListener('keydown', this.onKeydown);
  },
  data() {
    const synced = this.synchronizeBlockLines(this.initialBlocks);
    return {
      originalBlocks: synced.originalBlocks,
      modifiedBlocks: synced.modifiedBlocks,
      undo_stack: [],
      redo_stack: [],
      can_undo: false,
      can_redo: false,
      has_unsaved_changes: false,
      isSaving: false,
      highlightLevel: this.highlightLevel || 'off',
      _modifiedUndoCellKey: null,
    };
  },
  beforeUnmount() {
    if (this.getStateRef && typeof this.getStateRef === 'object') {
      this.getStateRef.getBlocks = undefined;
    }
    document.removeEventListener('keydown', this.onKeydown);
  },
  methods: {
    onKeydown(e) {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z' && !e.shiftKey) {
          e.preventDefault();
          this.undo();
        } else if (e.key === 'y' || (e.key === 'z' && e.shiftKey)) {
          e.preventDefault();
          this.redo();
        }
      }
    },
    synchronizeBlockLines(blocks) {
      const originalBlocks = [];
      const modifiedBlocks = [];
      (blocks || []).forEach((block) => {
        const origSentences = block.original_sentences || [];
        const modSentences = block.modified_sentences || [];
        const maxLines = Math.max(origSentences.length, modSentences.length);
        const paddedOriginal = [...origSentences];
        const paddedModified = [...modSentences];
        while (paddedOriginal.length < maxLines) paddedOriginal.push('');
        while (paddedModified.length < maxLines) paddedModified.push('');
        originalBlocks.push({
          ...block,
          sentences: paddedOriginal,
          isBlank: origSentences.length === 0,
        });
        modifiedBlocks.push({
          ...block,
          sentences: paddedModified,
          isBlank: modSentences.length === 0,
        });
      });
      return { originalBlocks, modifiedBlocks };
    },
    saveStateToUndo() {
      this.undo_stack.push({
        original: JSON.parse(JSON.stringify(this.originalBlocks)),
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks)),
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
      const sourceSentences = this.modifiedBlocks[index].sentences.filter((s) => s !== '');
      const targetSentences = this.originalBlocks[index].sentences;
      const maxLines = Math.max(sourceSentences.length, targetSentences.length);
      const paddedSource = [...sourceSentences];
      while (paddedSource.length < maxLines) paddedSource.push('');
      this.originalBlocks[index] = {
        ...this.originalBlocks[index],
        sentences: paddedSource,
        type: 'copied',
        isBlank: sourceSentences.length === 0,
      };
    },
    handleCopyToModified(index) {
      this._modifiedUndoCellKey = null;
      this.saveStateToUndo();
      const sourceSentences = this.originalBlocks[index].sentences.filter((s) => s !== '');
      const targetSentences = this.modifiedBlocks[index].sentences;
      const maxLines = Math.max(sourceSentences.length, targetSentences.length);
      const paddedSource = [...sourceSentences];
      while (paddedSource.length < maxLines) paddedSource.push('');
      this.modifiedBlocks[index] = {
        ...this.modifiedBlocks[index],
        sentences: paddedSource,
        type: 'copied',
        isBlank: sourceSentences.length === 0,
      };
    },
    undo() {
      if (this.undo_stack.length === 0) return;
      this.redo_stack.push({
        original: JSON.parse(JSON.stringify(this.originalBlocks)),
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks)),
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
        modified: JSON.parse(JSON.stringify(this.modifiedBlocks)),
      });
      this.can_undo = true;
      const nextState = this.redo_stack.pop();
      this.originalBlocks = nextState.original;
      this.modifiedBlocks = nextState.modified;
      this.can_redo = this.redo_stack.length > 0;
      this.has_unsaved_changes = true;
      this._modifiedUndoCellKey = null;
    },
    buildBlocksForSave() {
      return this.originalBlocks.map((block, index) => ({
        type: block.type,
        original_sentences: this.originalBlocks[index].sentences.filter((s) => s !== ''),
        modified_sentences: this.modifiedBlocks[index].sentences.filter((s) => s !== ''),
        original_start: block.original_start ?? index,
        modified_start: block.modified_start ?? index,
      }));
    },
    handleSave() {
      if (!this.has_unsaved_changes) return;
      this.isSaving = true;
      try {
        const blocks = this.buildBlocksForSave();
        this.onSave({ blocks });
        this.has_unsaved_changes = false;
        this.undo_stack = [];
        this.can_undo = false;
        this._modifiedUndoCellKey = null;
      } finally {
        this.isSaving = false;
      }
    },
    handleCancel() {
      if (this.has_unsaved_changes && !confirm('You have unsaved changes. Are you sure you want to cancel?')) {
        return;
      }
      this.onCancel();
    },
  },
};
</script>
