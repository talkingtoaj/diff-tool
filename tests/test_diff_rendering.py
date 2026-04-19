import pytest
import tempfile
import os
from playwright.sync_api import Page, expect


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
            
            # Check that blocks have content (app uses .block-cell for table cells)
            blocks = page.locator(".block-cell")
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
            
            # Word-level diff is inline (word-added, word-removed spans), no separate .word-diff section
            # Get all changed blocks (app uses .block-cell)
            changed_blocks = page.locator(".block-cell.changed")
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

    def test_block_line_synchronization(self, page: Page, base_url: str):
        """Test that blocks with different sentence counts are synchronized with placeholder lines"""
        page.goto(base_url)
        
        # Create files where one side has more sentences than the other
        # This creates a 'removed' or 'added' block where line counts differ
        original_content = """First line. Second line. Third line. Fourth line.
Unchanged sentence here."""
        
        modified_content = """First line only.
Unchanged sentence here."""
        
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

            # Check that both sides have the same number of lines (original: divs; modified: textareas)
            left_cells = page.locator(".diff-table tbody td.block-cell:first-of-type")
            right_cells = page.locator(".diff-table tbody td.block-cell:last-of-type")
            left_sentences = left_cells.locator("div")
            right_sentences = right_cells.locator("textarea.modified-sentence-input")

            assert left_sentences.count() == right_sentences.count(), (
                "Both panels should have equal number of sentence rows (divs vs textareas)"
            )
                
        finally:
            os.unlink(original_path)
            os.unlink(modified_path)

    def test_modified_textarea_shows_full_multiline_sentence_without_inner_scroll(
        self, page: Page, base_url: str
    ):
        """Multiline modified text must expand the textarea so content is not clipped."""
        page.goto(base_url)

        original_content = "Short original."
        modified_content = (
            "line0\nline1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\nline9."
        )

        with tempfile.NamedTemporaryFile(mode="w", suffix=".txt", delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode="w", suffix=".txt", delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name

        try:
            page.locator('input[type="file"]').first.set_input_files(original_path)
            page.locator('input[type="file"]').nth(1).set_input_files(modified_path)
            page.locator("button:has-text('Compare')").click()
            page.wait_for_selector(".diff-viewer", timeout=5000)

            ta = page.locator(".block-cell.changed textarea.modified-sentence-input").first
            expect(ta).to_be_visible()

            dims = ta.evaluate(
                """(el) => ({
                clientHeight: el.clientHeight,
                scrollHeight: el.scrollHeight,
            })"""
            )
            assert dims["clientHeight"] >= dims["scrollHeight"] - 2, (
                f"Textarea should grow to fit content; clientHeight={dims['clientHeight']}, "
                f"scrollHeight={dims['scrollHeight']}"
            )
        finally:
            os.unlink(original_path)
            os.unlink(modified_path)

    def test_modified_pane_editing_marks_unsaved(self, page: Page, base_url: str):
        """Modified column is editable; typing enables save and unsaved indicator."""
        page.goto(base_url)

        original_content = "Alpha sentence. Beta sentence."
        modified_content = "Alpha sentence. Beta modified."

        with tempfile.NamedTemporaryFile(mode="w", suffix=".txt", delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode="w", suffix=".txt", delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name

        try:
            page.locator('input[type="file"]').first.set_input_files(original_path)
            page.locator('input[type="file"]').nth(1).set_input_files(modified_path)
            page.locator("button:has-text('Compare')").click()
            page.wait_for_selector(".diff-viewer", timeout=5000)

            first_modified = page.locator("textarea.modified-sentence-input").first
            expect(first_modified).to_be_visible()
            expect(page.locator(".unsaved-indicator")).not_to_be_visible()

            first_modified.fill("Alpha sentence EDITED.")

            expect(page.locator(".unsaved-indicator")).to_be_visible()
            save_btn = page.locator("button.btn.primary:has-text('Save Changes')")
            expect(save_btn).to_be_enabled()
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
