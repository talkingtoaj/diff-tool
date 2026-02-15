import os
import shutil
from datetime import datetime
from typing import Dict, Tuple
import uuid


class FileService:
    BACKUP_DIR = "./backups"
    TEMP_DIR = "./tmp"
    
    def __init__(self):
        os.makedirs(self.BACKUP_DIR, exist_ok=True)
        os.makedirs(self.TEMP_DIR, exist_ok=True)
    
    def create_backup(self, filepath: str) -> str:
        timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        filename = os.path.basename(filepath)
        backup_name = f"{filename}.bu-{timestamp}"
        backup_path = os.path.join(self.BACKUP_DIR, backup_name)
        shutil.copy2(filepath, backup_path)
        return backup_path
    
    def create_temp_session(self, file1_path: str, file2_path: str) -> Dict[str, str]:
        session_id = str(uuid.uuid4())
        session_dir = os.path.join(self.TEMP_DIR, session_id)
        os.makedirs(session_dir, exist_ok=True)
        
        temp1 = os.path.join(session_dir, "original.txt")
        temp2 = os.path.join(session_dir, "modified.txt")
        
        shutil.copy2(file1_path, temp1)
        shutil.copy2(file2_path, temp2)
        
        return {
            "session_id": session_id,
            "temp_original": temp1,
            "temp_modified": temp2,
            "original_path": file1_path,
            "modified_path": file2_path
        }
    
    def save_to_original(self, temp_path: str, original_path: str):
        shutil.copy2(temp_path, original_path)
    
    def cleanup_session(self, session_id: str):
        session_dir = os.path.join(self.TEMP_DIR, session_id)
        if os.path.exists(session_dir):
            shutil.rmtree(session_dir)
    
    def read_file(self, filepath: str) -> str:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    
    def write_file(self, filepath: str, content: str):
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
