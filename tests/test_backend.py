import pytest
import shutil
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from diff_tool import DiffService
from backend.file_service import FileService


class TestDiffService:
    @pytest.fixture
    def diff_service(self):
        return DiffService()
    
    def test_split_into_sentences_basic(self, diff_service):
        text = "Hello world. This is a test. Another sentence."
        sentences = diff_service.split_into_sentences(text)
        assert len(sentences) == 3
        assert sentences[0] == "Hello world."
        assert sentences[1] == "This is a test."
        assert sentences[2] == "Another sentence."
    
    def test_split_into_sentences_with_exclamation(self, diff_service):
        text = "Hello! This is exciting! Really cool."
        sentences = diff_service.split_into_sentences(text)
        assert len(sentences) == 3
        assert "Hello!" in sentences
        assert "This is exciting!" in sentences
    
    def test_split_into_sentences_with_question(self, diff_service):
        text = "How are you? I am fine. Great!"
        sentences = diff_service.split_into_sentences(text)
        assert len(sentences) == 3
        assert "How are you?" in sentences
    
    def test_split_into_sentences_with_semicolon(self, diff_service):
        text = "First part; second part. Third part."
        sentences = diff_service.split_into_sentences(text)
        assert "First part;" in sentences
        assert "second part." in sentences
    
    def test_split_into_sentences_with_newlines(self, diff_service):
        text = "Hello.\n\nWorld.\n\nTest."
        sentences = diff_service.split_into_sentences(text)
        assert len(sentences) == 3
    
    def test_generate_diff_unchanged(self, diff_service):
        original = "Hello world. This is a test."
        modified = "Hello world. This is a test."
        blocks = diff_service.generate_diff(original, modified)
        assert len(blocks) == 1
        assert blocks[0]["type"] == "unchanged"
    
    def test_generate_diff_added_sentence(self, diff_service):
        original = "Hello world."
        modified = "Hello world. New sentence added."
        blocks = diff_service.generate_diff(original, modified)
        assert any(block["type"] == "added" for block in blocks)
        assert any("New sentence added" in sentence 
                  for block in blocks 
                  for sentence in block.get("modified_sentences", []))
    
    def test_generate_diff_removed_sentence(self, diff_service):
        original = "Hello world. This will be removed. Goodbye."
        modified = "Hello world. Goodbye."
        blocks = diff_service.generate_diff(original, modified)
        assert any(block["type"] == "removed" for block in blocks)
        assert any("This will be removed" in sentence 
                  for block in blocks 
                  for sentence in block.get("original_sentences", []))
    
    def test_generate_diff_changed_sentence(self, diff_service):
        original = "Hello world. This is old."
        modified = "Hello world. This is new."
        blocks = diff_service.generate_diff(original, modified)
        assert any(block["type"] == "changed" for block in blocks)
    
    def test_generate_diff_multiple_blocks(self, diff_service):
        original = "Sentence 1. Sentence 2. Sentence 3. Sentence 4."
        modified = "Sentence 1. Modified 2. Sentence 3. Modified 4."
        blocks = diff_service.generate_diff(original, modified)
        assert len(blocks) >= 2
        assert blocks[0]["type"] == "unchanged"
    
    def test_reconstruct_from_blocks_original(self, diff_service):
        blocks = [
            {
                "type": "unchanged",
                "original_sentences": ["First sentence.", "Second sentence."],
                "modified_sentences": ["First sentence.", "Second sentence."]
            },
            {
                "type": "added",
                "original_sentences": [],
                "modified_sentences": ["Added sentence."]
            }
        ]
        text = diff_service.reconstruct_from_blocks(blocks, 'original')
        assert "First sentence." in text
        assert "Second sentence." in text
        assert "Added sentence." not in text
    
    def test_reconstruct_from_blocks_modified(self, diff_service):
        blocks = [
            {
                "type": "unchanged",
                "original_sentences": ["First sentence.", "Second sentence."],
                "modified_sentences": ["First sentence.", "Second sentence."]
            },
            {
                "type": "added",
                "original_sentences": [],
                "modified_sentences": ["Added sentence."]
            }
        ]
        text = diff_service.reconstruct_from_blocks(blocks, 'modified')
        assert "First sentence." in text
        assert "Second sentence." in text
        assert "Added sentence." in text


class TestFileService:
    @pytest.fixture
    def file_service(self, tmp_path, monkeypatch):
        original_backup = FileService.BACKUP_DIR
        original_temp = FileService.TEMP_DIR
        
        monkeypatch.setattr(FileService, 'BACKUP_DIR', str(tmp_path / "backups"))
        monkeypatch.setattr(FileService, 'TEMP_DIR', str(tmp_path / "tmp"))
        
        fs = FileService()
        
        yield fs
        
        monkeypatch.setattr(FileService, 'BACKUP_DIR', original_backup)
        monkeypatch.setattr(FileService, 'TEMP_DIR', original_temp)
    
    @pytest.fixture
    def test_file(self, tmp_path):
        file_path = tmp_path / "test.txt"
        file_path.write_text("Test content")
        return str(file_path)
    
    def test_create_backup(self, file_service, test_file):
        backup_path = file_service.create_backup(test_file)
        assert os.path.exists(backup_path)
        assert ".bu-" in backup_path
        with open(backup_path, 'r') as f:
            assert f.read() == "Test content"
    
    def test_create_temp_session(self, file_service, test_file, tmp_path):
        test_file2 = tmp_path / "test2.txt"
        test_file2.write_text("Test content 2")
        
        session = file_service.create_temp_session(test_file, str(test_file2))
        
        assert "session_id" in session
        assert "temp_original" in session
        assert "temp_modified" in session
        assert os.path.exists(session["temp_original"])
        assert os.path.exists(session["temp_modified"])
        
        with open(session["temp_original"], 'r') as f:
            assert f.read() == "Test content"
    
    def test_read_write_file(self, file_service, tmp_path):
        file_path = tmp_path / "readwrite.txt"
        file_service.write_file(str(file_path), "New content")
        content = file_service.read_file(str(file_path))
        assert content == "New content"
    
    def test_save_to_original(self, file_service, test_file, tmp_path):
        temp_file = tmp_path / "temp.txt"
        temp_file.write_text("Modified content")
        file_service.save_to_original(str(temp_file), test_file)
        with open(test_file, 'r') as f:
            assert f.read() == "Modified content"
    
    def test_cleanup_session(self, file_service, test_file, tmp_path):
        test_file2 = tmp_path / "test2.txt"
        test_file2.write_text("Test content 2")
        
        session = file_service.create_temp_session(test_file, str(test_file2))
        session_id = session["session_id"]
        session_dir = file_service.TEMP_DIR + "/" + session_id
        
        assert os.path.exists(session_dir)
        
        file_service.cleanup_session(session_id)
        assert not os.path.exists(session_dir)
