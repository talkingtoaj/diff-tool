from fastapi import FastAPI, UploadFile, Form, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional
import uvicorn
import shutil
import os
import sys
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from file_service import FileService
from diff_service import DiffService


class DiffBlock(BaseModel):
    type: str
    original_sentences: List[str]
    modified_sentences: List[str]
    original_start: int
    modified_start: int


app = FastAPI()
file_service = FileService()
diff_service = DiffService()
sessions: Dict[str, Dict] = {}


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
frontend_path = Path(__file__).parent.parent / "frontend"
app.mount("/static", StaticFiles(directory=str(frontend_path)), name="static")


@app.get("/", response_class=HTMLResponse)
async def read_root():
    frontend_path = Path(__file__).parent.parent / "frontend" / "index.html"
    with open(frontend_path, 'r', encoding='utf-8') as f:
        return f.read()


@app.post("/api/diff/start")
async def start_diff(
    file1: UploadFile = Form(...),
    file2: UploadFile = Form(...)
):
    temp_dir = Path(__file__).parent.parent / "tmp" / "uploads"
    temp_dir.mkdir(exist_ok=True)
    
    file1_path = temp_dir / file1.filename
    file2_path = temp_dir / file2.filename
    
    # Read file contents directly from UploadFile
    content1 = await file1.read()
    content2 = await file2.read()
    
    with open(file1_path, 'wb') as f:
        f.write(content1)
    
    with open(file2_path, 'wb') as f:
        f.write(content2)
    
    backup_path1 = file_service.create_backup(str(file1_path))
    backup_path2 = file_service.create_backup(str(file2_path))
    
    session_data = file_service.create_temp_session(str(file1_path), str(file2_path))
    session_id = session_data["session_id"]
    
    original_text = file_service.read_file(session_data["temp_original"])
    modified_text = file_service.read_file(session_data["temp_modified"])
    
    blocks = diff_service.generate_diff(original_text, modified_text)
    
    sessions[session_id] = {
        **session_data,
        "blocks": blocks,
        "original_text": original_text,
        "modified_text": modified_text
    }
    
    return {
        "session_id": session_id,
        "blocks": blocks,
        "original_text": original_text,
        "modified_text": modified_text
    }


@app.post("/api/diff/{session_id}/save")
async def save_changes(session_id: str, blocks: List[DiffBlock]):
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    
    session = sessions[session_id]
    
    # Convert Pydantic models to dicts for the diff service
    blocks_dict = [block.model_dump() for block in blocks]
    modified_text = diff_service.reconstruct_from_blocks(blocks_dict, 'modified')
    
    file_service.write_file(session["temp_modified"], modified_text)
    file_service.save_to_original(session["temp_modified"], session["modified_path"])
    
    session["modified_text"] = modified_text
    session["blocks"] = blocks_dict
    
    return {"success": True}


@app.delete("/api/diff/{session_id}")
async def cancel_session(session_id: str):
    if session_id not in sessions:
        raise HTTPException(status_code=404, detail="Session not found")
    
    file_service.cleanup_session(session_id)
    del sessions[session_id]
    
    return {"success": True}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8006)
