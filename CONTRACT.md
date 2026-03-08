# diff-tool contract (consumers)

This document defines the **canonical block shape** and **reconstruct behavior** so host applications (e.g. markdown-editor-app) can consume diff-tool as a dependency.

## Python package usage

```python
from diff_tool import DiffService

blocks = DiffService.generate_diff(original_text, modified_text)
# blocks: list of block dicts (see Block shape below)

text = DiffService.reconstruct_from_blocks(blocks, side="modified")
# text: str (paragraphs joined with "\n\n")
```

## Block shape (canonical)

`DiffService.generate_diff(original: str, modified: str)` returns a list of block dicts. Each block:

| Key                   | Type       | Description |
|-----------------------|------------|-------------|
| `type`                | `str`      | One of: `"unchanged"`, `"changed"`, `"added"`, `"removed"` |
| `original_sentences`  | `list[str]`| Sentences from original (empty for `added`) |
| `modified_sentences`  | `list[str]`| Sentences from modified (empty for `removed`) |
| `original_start`      | `int`      | Sentence index in original |
| `modified_start`      | `int`      | Sentence index in modified |
| `word_diffs`          | `list`     | Optional; word-level diff for `changed` blocks (host may ignore) |

Consumers send this exact shape (or a superset) back when calling “Save” so that `reconstruct_from_blocks` can rebuild text. If the host allows copy operations that change `original_sentences` / `modified_sentences` per block, the same structure must be used for reconstruction.

## Reconstruct behavior

- `DiffService.reconstruct_from_blocks(blocks, side="original" | "modified")` returns a single string.
- Sentences are joined with **`"\n\n"`** (double newline). Consumers that need different paragraph separation may post-process the result or use it only for display and keep their own text for persistence.

## Optional HTTP API (no files)

For HTTP-only consumers, the standalone backend exposes:

- **`POST /api/diff/from-text`**  
  Body: `{ "original": "...", "modified": "..." }`  
  Response: `{ "blocks": [...], "original_text": "...", "modified_text": "..." }`

Hosts that depend on the Python package can compute blocks locally and do not need this endpoint.

---

## Frontend library (embedding the Vue diff viewer)

Build the viewer library from the repo:

```bash
cd frontend && npm install && npm run build:lib
```

Artifacts: `frontend/dist/diff-tool-viewer.js` (ESM), `frontend/dist/diff-tool-viewer.umd.cjs` (UMD), `frontend/dist/style.css`.

### Mount API

Load the JS bundle (and CSS) in your page, then:

```js
const { mount } = DiffTool; // or import { mount } from 'diff-tool-viewer'

const instance = mount(containerElement, {
  blocks,           // from DiffService.generate_diff(original, modified)
  originalText: '', // optional
  modifiedText: '', // optional
  labels: { left: 'Original', right: 'Rewritten' },
  highlightLevel: 'off', // or 'word'
  onSave(result) {
    // result.blocks: use DiffService.reconstruct_from_blocks(result.blocks, 'modified') to get final text
  },
  onCancel() {
    // close modal / discard
  },
});

// When closing the viewer:
instance.unmount();
```

### SaveResult contract

**Option A (used):** `onSave` receives `{ blocks: DiffBlock[] }`. The host can call `DiffService.reconstruct_from_blocks(blocks, 'modified')` to get the final text. Paragraph breaks in the reconstructed string are `\n\n`.

### Styling and environment

- All library CSS is namespaced under `.diff-tool-viewer` so host styles do not clash.
- Give the mount container a minimum height (e.g. 400px) for a good experience.
- Vue is bundled in the library; the host does not need to load Vue.
- Keyboard: Ctrl+Z / Ctrl+Y work within the mounted viewer for undo/redo.
