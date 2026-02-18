# Diff Tool

A simple FastAPI + Vue.js application for comparing text files with sentence-level diff visualization and copy functionality.

## Features

- Side-by-side file comparison
- Sentence-level diff detection
- Copy sections between original and modified files
- Undo functionality
- Automatic backup creation before modifications
- Centralized backup folder

## Setup

1. Install Python dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. Run the FastAPI server:
   ```bash
   cd backend
   uv run python main.py
   ```

3. Open your browser and navigate to:
   ```
    http://localhost:8006
   ```

## Usage

1. Upload two text files (Original and Modified)
2. Click "Compare" to view the diff
3. Use the arrow buttons in the divider to copy sections:
   - `←` Copy from Modified → Original
   - `→` Copy from Original → Modified
4. Click "Undo" to revert the last change
5. Click "Save Changes" to write changes to disk
6. Click "Cancel" to close the session without saving

## Backup Location

All backups are stored in the `backups/` directory with the format:
`filename.txt.bu-YYYYMMDD-HHMMSS`

## Temporary Files

Session temporary files are stored in `tmp/<session_id>/` and are manually cleaned up when you cancel a session.
