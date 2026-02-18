# Diff Tool - Implementation Summary

## Project Structure

```
tmp/diff-tool/
├── backend/
│   ├── main.py                 # FastAPI application with API endpoints
│   ├── diff_service.py         # Sentence-level diff algorithm
│   ├── file_service.py         # File I/O, backups, temp file management
│   └── requirements.txt        # Python dependencies
├── frontend/
│   ├── index.html              # Main HTML page
│   ├── app.js                  # Vue.js application
│   └── styles.css              # CSS styling
├── backups/                    # Centralized backup directory
├── tmp/                        # Temporary files (auto-cleaned on session cancel)
└── README.md                   # User documentation
```

## Implementation Details

### Backend (FastAPI)

**File Service (`file_service.py`)**
- Creates backups with `.bu-YYYYMMDD-HHMMSS` suffix in `backups/` directory
- Creates temp session files in `tmp/<session_id>/`
- Provides methods for saving changes to original files

**Diff Service (`diff_service.py`)**
- Splits text into sentences using `.`, `!`, `?`, `;` delimiters
- Uses `difflib.SequenceMatcher` for sentence-level comparison
- Groups changes into blocks: `added`, `removed`, `changed`, `unchanged`

**API Endpoints (`main.py`)**
- `POST /api/diff/start` - Initialize diff session
- `POST /api/diff/{session_id}/save` - Save changes to disk
- `DELETE /api/diff/{session_id}` - Cancel session and cleanup

### Frontend (Vue.js 3)

**Main App (`app.js`)**
- File upload handling
- Session management
- Undo/redo stack
- Save/Cancel operations

**Diff Viewer Component**
- Side-by-side panels (Original vs Modified)
- Color-coded blocks:
  - Green: Added sentences
  - Red: Removed sentences
  - Yellow: Changed sentences
  - No color: Unchanged
- Copy buttons in divider:
  - `←` Copy from Modified → Original
  - `→` Copy from Original → Modified

**Features**
- Undo functionality (stack-based)
- Unsaved changes indicator
- Confirmation before canceling with unsaved changes

## Testing Results

✅ API successfully creates backups
✅ Sentence-level diff detection working
✅ Side-by-side comparison working
✅ Block grouping (unchanged, changed, added, removed) working
✅ Session management working
✅ Temp file cleanup on session cancel working

## Setup Instructions

1. Create virtual environment:
   ```bash
   cd /home/talkingtoaj/tmp/diff-tool
   uv venv
   ```

2. Install dependencies:
   ```bash
   uv pip install --python .venv/bin/python fastapi uvicorn python-multipart
   ```

3. Run server:
   ```bash
   uv run python backend/main.py
   ```

4. Open browser:
   ```
    http://localhost:8006
   ```

## Usage Flow

1. Upload two text files (Original and Modified)
2. Click "Compare" to generate diff
3. Use arrow buttons to copy sections between files
4. Click "Undo" to revert changes
5. Click "Save Changes" to write to disk
6. Click "Cancel" to close without saving

## Backup Strategy

- All backups stored in centralized `backups/` directory
- Format: `filename.txt.bu-YYYYMMDD-HHMMSS`
- No auto-cleanup - user manages backups
- Original files are only modified when user clicks "Save"
