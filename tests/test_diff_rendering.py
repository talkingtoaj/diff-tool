import pytest
import tempfile
import os
from playwright.sync_api import Page, expect


@pytest.fixture(scope="session")
def base_url():
    return "http://localhost:8000"


class TestDiffRendering:
    """Test that diff content actually renders correctly"""
    
    def test_diff_content_renders(self, page: Page, base_url: str):
        """Test that uploaded files show actual content in diff viewer"""
        page.goto(base_url)
        
        # Create test files with clear content
        original_content = """First sentence here.
Second sentence here.
Third sentence here."""
        
        modified_content = """First sentence here.
Modified second sentence here.
Third sentence here."""
        
        # Create temporary files
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name
        
        try:
            # Upload files using proper file input
            page.locator('input[type="file"]').first.set_input_files(original_path)
            page.locator('input[type="file"]').nth(1).set_input_files(modified_path)
            
            # Click compare
            page.locator("button:has-text('Compare')").click()
            
            # Wait for diff viewer
            page.wait_for_selector(".diff-viewer", timeout=5000)
            
            # Debug: Take screenshot
            page.screenshot(path="test_diff_rendering.png")
            
            # Debug: Log console errors
            console_logs = page.evaluate("() => { return window.consoleLogs || []; }")
            print(f"Console logs: {console_logs}")
            
            # Debug: Check Vue data
            vue_data = page.evaluate("""
                () => {
                    const app = document.getElementById('app');
                    if (app && app.__vue_app__) {
                        const instance = app.__vue_app__._instance;
                        if (instance && instance.proxy) {
                            return {
                                has_active_session: instance.proxy.has_active_session,
                                original_blocks_count: instance.proxy.original_blocks?.length,
                                modified_blocks_count: instance.proxy.modified_blocks?.length,
                                first_original_block: instance.proxy.original_blocks?.[0],
                                first_modified_block: instance.proxy.modified_blocks?.[0]
                            };
                        }
                    }
                    return { error: 'Vue not accessible' };
                }
            """)
            print(f"Vue data: {vue_data}")
            
            # Check that blocks have content
            blocks = page.locator(".block")
            print(f"Number of blocks found: {blocks.count()}")
            
            # Verify at least some content is visible
            expect(blocks.first).to_be_visible()
            
            # Check that text content exists in blocks
            block_text = blocks.first.text_content()
            print(f"First block text: '{block_text}'")
            assert block_text and len(block_text.strip()) > 0, "Block should have text content"
            
            # Cleanup screenshot
            if os.path.exists("test_diff_rendering.png"):
                os.unlink("test_diff_rendering.png")
        finally:
            os.unlink(original_path)
            os.unlink(modified_path)

    def test_changed_blocks_no_duplicate_content(self, page: Page, base_url: str):
        """Test that changed blocks don't show content twice (sentences AND word_diff)"""
        page.goto(base_url)
        
        # Create files with multi-sentence paragraphs that will be detected as changed
        original_content = """# Header

First paragraph with multiple sentences. Second sentence here.

Another paragraph here."""
        
        modified_content = """# Header Modified

First paragraph with many sentences. Second sentence here.

Another paragraph here."""
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name
        
        try:
            page.locator('input[type="file"]').first.set_input_files(original_path)
            page.locator('input[type="file"]').nth(1).set_input_files(modified_path)
            page.locator("button:has-text('Compare')").click()
            
            page.wait_for_selector(".diff-viewer", timeout=5000)
            
            # Check that word-diff sections don't exist (they were causing duplication)
            word_diffs = page.locator(".word-diff")
            assert word_diffs.count() == 0, "word-diff sections should not exist (they duplicate content)"
            
            # Get all changed blocks
            changed_blocks = page.locator(".block.changed")
            count = changed_blocks.count()
            assert count > 0, "Should have at least one changed block"
            
            # For each changed block, check that content doesn't appear twice
            for i in range(count):
                block = changed_blocks.nth(i)
                block_text = block.text_content()
                
                # Check for obvious duplication - if the same long substring appears twice
                # This catches the case where word-diff duplicates sentence content
                text_lines = [line.strip() for line in block_text.split('\n') if line.strip()]
                
                # If we have a long text (like a paragraph), it shouldn't appear twice
                unique_lines = set(text_lines)
                
                # If we have few unique lines but many total lines, content is duplicated
                if len(text_lines) > 4:
                    ratio = len(text_lines) / max(len(unique_lines), 1)
                    assert ratio < 1.5, f"Content appears duplicated in changed block. Text: {block_text[:200]}..."
                    
        finally:
            os.unlink(original_path)
            os.unlink(modified_path)

    
    def test_diff_viewer_shows_sentences(self, page: Page, base_url: str):
        """Test that sentences are displayed in diff blocks"""
        page.goto(base_url)
        
        # Create files with distinct sentences
        original_content = "Sentence one. Sentence two. Sentence three."
        modified_content = "Sentence one. Modified sentence two. Sentence three."
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name
        
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name
        
        try:
            page.locator('input[type="file"]').first.set_input_files(original_path)
            page.locator('input[type="file"]').nth(1).set_input_files(modified_path)
            page.locator("button:has-text('Compare')").click()
            
            page.wait_for_selector(".diff-viewer", timeout=5000)
            
            # Check that sentences appear in the DOM
            page_content = page.content()
            
            # Should find "Sentence one" text somewhere
            assert "Sentence one" in page_content, "Should display 'Sentence one'"
            assert "Modified sentence two" in page_content, "Should display 'Modified sentence two'"
            
        finally:
            os.unlink(original_path)
            os.unlink(modified_path)
