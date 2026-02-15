import pytest
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

from fastapi.testclient import TestClient
from backend.main import app


@pytest.fixture
def client():
    return TestClient(app)


@pytest.fixture
def sample_file1():
    from io import BytesIO
    content = b"""The quick brown fox jumps over the lazy dog.
This is the original text.
Testing diff functionality with multiple sentences.
Some more content here.
And another sentence."""
    return BytesIO(content)


@pytest.fixture
def sample_file2():
    from io import BytesIO
    content = b"""The quick brown fox jumps over the lazy dog.
This is modified text with changes.
New sentence added here.
Testing diff functionality with multiple sentences.
Different content here.
And another sentence."""
    return BytesIO(content)


class TestAPIEndpoints:
    def test_root_endpoint(self, client):
        response = client.get("/")
        assert response.status_code == 200
        assert "Diff Tool" in response.text
        assert "vue" in response.text.lower()
    
    def test_start_diff_success(self, client):
        from io import BytesIO
        
        content1 = b"""The quick brown fox jumps over the lazy dog.
This is the original text.
Testing diff functionality with multiple sentences.
Some more content here.
And another sentence."""
        
        content2 = b"""The quick brown fox jumps over the lazy dog.
This is modified text with changes.
New sentence added here.
Testing diff functionality with multiple sentences.
Different content here.
And another sentence."""
        
        files = {
            'file1': ('test1.txt', BytesIO(content1), 'text/plain'),
            'file2': ('test2.txt', BytesIO(content2), 'text/plain')
        }
        response = client.post("/api/diff/start", files=files)
        
        assert response.status_code == 200
        data = response.json()
        assert "session_id" in data
        assert "blocks" in data
        assert "original_text" in data
        assert "modified_text" in data
        assert len(data["blocks"]) > 0
    
    def test_start_diff_no_files(self, client):
        response = client.post("/api/diff/start")
        assert response.status_code == 422
    
    def test_start_diff_missing_file(self, client, sample_file1):
        files = {'file1': ('test1.txt', sample_file1, 'text/plain')}
        response = client.post("/api/diff/start", files=files)
        
        assert response.status_code == 422
    
    def test_save_changes_success(self, client, sample_file1, sample_file2):
        # First, start a session
        files = {
            'file1': ('test1.txt', sample_file1, 'text/plain'),
            'file2': ('test2.txt', sample_file2, 'text/plain')
        }
        start_response = client.post("/api/diff/start", files=files)
        
        session_id = start_response.json()["session_id"]
        blocks = start_response.json()["blocks"]
        
        # Then save changes
        save_response = client.post(f"/api/diff/{session_id}/save", json=blocks)
        assert save_response.status_code == 200
        assert save_response.json()["success"] == True
    
    def test_save_changes_invalid_session(self, client):
        response = client.post("/api/diff/invalid-session-id/save", json=[])
        assert response.status_code == 404
    
    def test_cancel_session_success(self, client, sample_file1, sample_file2):
        # First, start a session
        files = {
            'file1': ('test1.txt', sample_file1, 'text/plain'),
            'file2': ('test2.txt', sample_file2, 'text/plain')
        }
        start_response = client.post("/api/diff/start", files=files)
        
        session_id = start_response.json()["session_id"]
        
        # Then cancel
        cancel_response = client.delete(f"/api/diff/{session_id}")
        assert cancel_response.status_code == 200
        assert cancel_response.json()["success"] == True
    
    def test_cancel_session_invalid_session(self, client):
        response = client.delete("/api/diff/invalid-session-id")
        assert response.status_code == 404
    
    def test_diff_blocks_structure(self, client, sample_file1, sample_file2):
        files = {
            'file1': ('test1.txt', sample_file1, 'text/plain'),
            'file2': ('test2.txt', sample_file2, 'text/plain')
        }
        response = client.post("/api/diff/start", files=files)
        
        blocks = response.json()["blocks"]
        for block in blocks:
            assert "type" in block
            assert "original_sentences" in block
            assert "modified_sentences" in block
            assert block["type"] in ["unchanged", "added", "removed", "changed"]
    
    def test_identical_files(self, client):
        from io import BytesIO
        content = b"Hello world. This is a test."
        
        files = {
            'file1': ('test1.txt', BytesIO(content), 'text/plain'),
            'file2': ('test2.txt', BytesIO(content), 'text/plain')
        }
        response = client.post("/api/diff/start", files=files)
        
        blocks = response.json()["blocks"]
        assert all(block["type"] == "unchanged" for block in blocks)
