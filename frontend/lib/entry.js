/**
 * diff-tool-viewer library entry.
 * Host apps: load the JS and CSS, then call DiffTool.mount(container, options).
 */
import { createApp } from 'vue';
import ViewerApp from './ViewerApp.vue';
import './viewer.css';

/**
 * Mount the diff viewer into a DOM container.
 *
 * @param {HTMLElement} container - Element to mount the viewer into (e.g. modal body).
 * @param {object} options - Configuration and callbacks.
 * @param {Array} options.blocks - Block list from DiffService.generate_diff (see CONTRACT.md).
 * @param {string} [options.originalText] - Optional full original text for display/fallback.
 * @param {string} [options.modifiedText] - Optional full modified text for display/fallback.
 * @param {{ left?: string, right?: string }} [options.labels] - Column labels, e.g. { left: 'Original', right: 'Rewritten' }.
 * @param {'off'|'sentence'|'word'} [options.highlightLevel='off'] - Highlight level.
 * @param {(result: { blocks: Array }) => void} options.onSave - Called when user clicks Save. Result.blocks can be passed to DiffService.reconstruct_from_blocks(blocks, 'modified').
 * @param {() => void} options.onCancel - Called when user clicks Cancel.
 * @returns {{ unmount: () => void }} - Call unmount() when closing the viewer (e.g. when closing the modal).
 */
export function mount(container, options) {
  const app = createApp(ViewerApp, {
    initialBlocks: options.blocks || [],
    originalText: options.originalText,
    modifiedText: options.modifiedText,
    leftLabel: options.labels?.left ?? 'Original',
    rightLabel: options.labels?.right ?? 'Modified',
    highlightLevel: options.highlightLevel ?? 'off',
    onSave: options.onSave,
    onCancel: options.onCancel,
  });
  app.mount(container);
  return {
    unmount() {
      app.unmount();
    },
  };
}

// For script-tag usage: window.DiffTool = { mount }
export default { mount };
