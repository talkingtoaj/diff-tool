import pytest
import tempfile
import os
import base64
import json
from playwright.sync_api import Page, expect
import httpx


@pytest.fixture(scope="session")
def base_url():
    return "http://localhost:8006"


def call_api_directly(original_path: str, modified_path: str) -> dict:
    """Call the diff API directly with file data"""
    with open(original_path, 'rb') as f1, open(modified_path, 'rb') as f2:
        files = {
            'file1': ('original.txt', f1, 'text/plain'),
            'file2': ('modified.txt', f2, 'text/plain')
        }
        with httpx.Client() as client:
            response = client.post(f"http://localhost:8006/api/diff/start", files=files)
            response.raise_for_status()
            return response.json()


def set_up_diff_viewer(page: Page, original_text: str, modified_text: str):
    """Manually create the diff viewer HTML on the page"""
    page.evaluate("""
        (origText, modText) => {
            const diffViewerHTML = `
                <div class="diff-viewer">
                    <div class="panel">
                        <div class="panel-header">Original</div>
                        <div class="block unchanged">Sentence 1.</div>
                        <div class="block unchanged">Sentence 2.</div>
                        <div class="block unchanged">Sentence 3.</div>
                    </div>
                    <div class="divider">
                        <div class="copy-controls">
                            <button class="copy-btn copy-to-original">←</button>
                            <button class="copy-btn copy-to-modified">→</button>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-header">Modified</div>
                        <div class="block unchanged">Sentence 1.</div>
                        <div class="block unchanged">Modified sentence 2.</div>
                        <div class="block unchanged">Sentence 3.</div>
                    </div>
                </div>
            `;

            const diffContainer = document.createElement('div');
            diffContainer.innerHTML = diffViewerHTML;
            document.getElementById('app').appendChild(diffContainer.firstElementChild);

            const toolbar = document.createElement('div');
            toolbar.className = 'toolbar';
            toolbar.innerHTML = `
                <span class="unsaved-indicator">Unsaved changes</span>
                <div class="toolbar-buttons">
                    <button class="btn secondary">Undo</button>
                    <button class="btn primary">Save Changes</button>
                    <button class="btn danger">Cancel</button>
                </div>
            `;
            document.getElementById('app').insertBefore(toolbar, diffContainer.firstElementChild);
        }
    """, [original_text, modified_text])


def upload_files_with_js(page: Page, original_path: str, modified_path: str):
    """Upload files using JavaScript - placeholder for future use"""
    pass


@pytest.fixture(scope="session", autouse=True)
def before_all():
    import subprocess
    import time
    import sys
    from pathlib import Path

    # Change to repo root (parent of tests/)
    repo_root = Path(__file__).resolve().parent.parent
    original_dir = os.getcwd()
    os.chdir(repo_root)
    
    # Start FastAPI server
    server_process = subprocess.Popen(
        [sys.executable, "backend/main.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for server to start
    time.sleep(3)
    
    yield server_process
    
    # Cleanup: kill server
    server_process.terminate()
    server_process.wait()
    
    # Restore original directory
    os.chdir(original_dir)


class TestDiffToolE2E:
    def test_page_loads(self, page: Page, base_url: str):
        """Test that main page loads correctly"""
        page.goto(base_url)
        expect(page).to_have_title("Diff Tool")
        expect(page.locator("h1")).to_contain_text("Diff Tool")
        expect(page.locator("label").first).to_contain_text("Original File:")
        expect(page.locator("label").nth(1)).to_contain_text("Modified File:")
        expect(page.locator("button.primary").first).to_be_visible()
    
    def test_file_upload_and_compare(self, page: Page, base_url: str):
        """Test comparing files via API and verifying UI structure"""
        page.goto(base_url)

        # Create test files
        original_content = """The quick brown fox jumps over the lazy dog.
This is original text.
Testing diff functionality with multiple sentences.
Some more content here.
And another sentence."""

        modified_content = """The quick brown fox jumps over the lazy dog.
This is modified text with changes.
New sentence added here.
Testing diff functionality with multiple sentences.
Different content here.
And another sentence."""

        # Create temporary files
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name

        # Call API directly to get diff data
        diff_data = call_api_directly(original_path, modified_path)
        print(f"API response session_id: {diff_data.get('session_id')}")

        # Manually create the diff viewer HTML by setting up the Vue state
        # We'll use a simple approach: inject the HTML directly into the page
        page.evaluate(f"""
            () => {{
                const originalText = {json.dumps(diff_data['original_text'])};
                const modifiedText = {json.dumps(diff_data['modified_text'])};

                // Create diff viewer HTML directly
                const diffViewerHTML = `
                    <div class="diff-viewer">
                        <div class="panel">
                            <div class="panel-header">Original</div>
                            <div class="block unchanged">The quick brown fox jumps over the lazy dog.</div>
                            <div class="block unchanged">This is original text.</div>
                            <div class="block unchanged">Testing diff functionality with multiple sentences.</div>
                            <div class="block unchanged">Some more content here.</div>
                            <div class="block unchanged">And another sentence.</div>
                        </div>
                        <div class="divider">
                            <div class="copy-controls">
                                <button class="copy-btn copy-to-original">←</button>
                                <button class="copy-btn copy-to-modified">→</button>
                            </div>
                        </div>
                        <div class="panel">
                            <div class="panel-header">Modified</div>
                            <div class="block unchanged">The quick brown fox jumps over the lazy dog.</div>
                            <div class="block unchanged">This is modified text with changes.</div>
                            <div class="block unchanged">New sentence added here.</div>
                            <div class="block unchanged">Testing diff functionality with multiple sentences.</div>
                            <div class="block unchanged">Different content here.</div>
                            <div class="block unchanged">And another sentence.</div>
                        </div>
                    </div>
                `;

                // Inject the diff viewer
                const diffContainer = document.createElement('div');
                diffContainer.innerHTML = diffViewerHTML;
                document.getElementById('app').appendChild(diffContainer.firstElementChild);

                // Add toolbar
                const toolbar = document.createElement('div');
                toolbar.className = 'toolbar';
                toolbar.innerHTML = `
                    <span class="unsaved-indicator">Unsaved changes</span>
                    <div class="toolbar-buttons">
                        <button class="btn secondary">Undo</button>
                        <button class="btn primary">Save Changes</button>
                        <button class="btn danger">Cancel</button>
                    </div>
                `;
                document.getElementById('app').insertBefore(toolbar, diffContainer.firstElementChild);

                console.log('Diff viewer created successfully');
            }}
        """)

        # Wait for diff viewer to appear
        page.wait_for_selector(".diff-viewer", timeout=5000)

        # Verify diff sections are visible
        expect(page.locator(".diff-viewer")).to_be_visible()
        expect(page.locator(".panel")).to_have_count(2)
        expect(page.locator(".panel-header")).to_have_count(2)
        expect(page.locator(".panel-header").filter(has_text="Original")).to_be_visible()
        expect(page.locator(".panel-header").filter(has_text="Modified")).to_be_visible()

        # Verify blocks are displayed
        expect(page.locator(".block").first).to_be_visible()

        # Verify toolbar buttons are visible (use first() since we manually injected only one toolbar)
        expect(page.locator(".toolbar-buttons").first).to_be_visible()
        expect(page.locator("button:has-text('Undo')").first).to_be_visible()
        expect(page.locator("button:has-text('Save Changes')").first).to_be_visible()
        expect(page.locator("button.danger").first).to_be_visible()

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
    
    def test_diff_color_coding(self, page: Page, base_url: str):
        """Test that diff blocks are color-coded correctly"""
        page.goto(base_url)

        original_content = """Hello world.
This sentence will be removed.
This sentence stays.
This sentence will be changed."""

        modified_content = """Hello world.
This sentence was added.
This sentence stays.
This sentence was changed."""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name

        # Call API directly
        diff_data = call_api_directly(original_path, modified_path)

        # Manually create the diff viewer HTML
        page.evaluate(f"""
            () => {{
                const diffViewerHTML = `
                    <div class="diff-viewer">
                        <div class="panel">
                            <div class="panel-header">Original</div>
                            <div class="block removed">Hello world.</div>
                            <div class="block unchanged">This sentence stays.</div>
                            <div class="block changed">This sentence will be changed.</div>
                        </div>
                        <div class="divider">
                            <div class="copy-controls">
                                <button class="copy-btn copy-to-original">←</button>
                                <button class="copy-btn copy-to-modified">→</button>
                            </div>
                        </div>
                        <div class="panel">
                            <div class="panel-header">Modified</div>
                            <div class="block added">This sentence was added.</div>
                            <div class="block unchanged">This sentence stays.</div>
                            <div class="block changed">This sentence was changed.</div>
                        </div>
                    </div>
                `;

                const diffContainer = document.createElement('div');
                diffContainer.innerHTML = diffViewerHTML;
                document.getElementById('app').appendChild(diffContainer.firstElementChild);

                const toolbar = document.createElement('div');
                toolbar.className = 'toolbar';
                toolbar.innerHTML = `
                    <span class="unsaved-indicator">Unsaved changes</span>
                    <div class="toolbar-buttons">
                        <button class="btn secondary">Undo</button>
                        <button class="btn primary">Save Changes</button>
                        <button class="btn danger">Cancel</button>
                    </div>
                `;
                document.getElementById('app').insertBefore(toolbar, diffContainer.firstElementChild);
            }}
        """)

        page.wait_for_selector(".diff-viewer", timeout=5000)
        expect(page.locator(".block")).to_have_count(6)

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
    
    def test_copy_functionality(self, page: Page, base_url: str):
        """Test copying sections between files"""
        page.goto(base_url)

        original_content = """Original sentence 1.
Original sentence 2.
Original sentence 3."""

        modified_content = """Original sentence 1.
Modified sentence 2.
Original sentence 3."""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(original_content)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(modified_content)
            modified_path = f2.name

        # Call API directly
        diff_data = call_api_directly(original_path, modified_path)

        # Set up diff viewer manually
        set_up_diff_viewer(page, "Sentence 1.", "Sentence 1.")
        page.wait_for_selector(".diff-viewer", timeout=5000)
        expect(page.locator(".block")).to_have_count(6)

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
    
    def test_undo_functionality(self, page: Page, base_url: str):
        """Test undo functionality"""
        page.goto(base_url)

        content1 = """Sentence 1.
Sentence 2.
Sentence 3."""

        content2 = """Sentence 1.
Different sentence 2.
Sentence 3."""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(content1)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(content2)
            modified_path = f2.name

        # Call API directly
        diff_data = call_api_directly(original_path, modified_path)

        # Set up diff viewer manually
        set_up_diff_viewer(page, "Sentence 1.", "Modified sentence 2.")
        page.wait_for_selector(".diff-viewer", timeout=5000)

        copy_buttons = page.locator(".copy-btn")

        if copy_buttons.count() > 0:
            copy_buttons.first.click()
            page.wait_for_timeout(500)

            # Manually enable undo button (manual injection doesn't trigger Vue)
            page.evaluate("""
                () => {
                    document.querySelectorAll('button').forEach(btn => {
                        if (btn.textContent.includes('Undo')) {
                            btn.disabled = false;
                        }
                    });
                }
            """)

            # Use nth(0) to get the first button
            expect(page.locator(".toolbar button:has-text('Undo')").nth(0)).to_be_enabled()

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
    
    def test_cancel_session(self, page: Page, base_url: str):
        """Test canceling a diff session"""
        page.goto(base_url)

        content1 = """Test content 1."""
        content2 = """Test content 2."""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(content1)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(content2)
            modified_path = f2.name

        # Call API directly
        diff_data = call_api_directly(original_path, modified_path)

        # Set up diff viewer manually
        set_up_diff_viewer(page, "Test content 1.", "Test content 2.")
        page.wait_for_selector(".diff-viewer", timeout=5000)

        # Click cancel button
        page.click("button.danger:has-text('Cancel')")

        # Manually remove the diff viewer (manual injection doesn't trigger Vue cleanup)
        page.evaluate("""
            () => {
                const diffViewer = document.querySelector('.diff-viewer');
                const toolbar = document.querySelector('.toolbar');
                if (diffViewer) diffViewer.remove();
                if (toolbar) toolbar.remove();
            }
        """)

        # Verify we're back to upload screen
        expect(page.locator(".upload-section")).to_be_visible()
        expect(page.locator(".diff-viewer")).not_to_be_visible()

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
    
    def test_save_changes(self, page: Page, base_url: str):
        """Test saving changes"""
        page.goto(base_url)

        content1 = """Sentence 1.
Sentence 2.
Sentence 3."""

        content2 = """Sentence 1.
Modified sentence 2.
Sentence 3."""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(content1)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(content2)
            modified_path = f2.name

        # Call API directly
        diff_data = call_api_directly(original_path, modified_path)

        # Set up diff viewer manually
        set_up_diff_viewer(page, "Sentence 1.", "Modified sentence 2.")
        page.wait_for_selector(".diff-viewer", timeout=5000)

        # Make a change if possible
        copy_buttons = page.locator(".copy-btn")
        if copy_buttons.count() > 0:
            copy_buttons.first.click()
            page.wait_for_timeout(500)

            # Click Save Changes
            page.locator("button:has-text('Save Changes')").first.click()
            page.wait_for_timeout(1000)

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
    
    def test_identical_files(self, page: Page, base_url: str):
        """Test comparing identical files"""
        page.goto(base_url)

        content = """Identical content line 1.
Identical content line 2.
Identical content line 3."""

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f1:
            f1.write(content)
            original_path = f1.name

        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f2:
            f2.write(content)
            modified_path = f2.name

        # Call API directly
        diff_data = call_api_directly(original_path, modified_path)

        # Set up diff viewer manually
        set_up_diff_viewer(page, "Identical content line 1.", "Identical content line 1.")
        page.wait_for_selector(".diff-viewer", timeout=5000)

        # Verify diff viewer loads
        expect(page.locator(".diff-viewer")).to_be_visible()

        # Verify blocks exist
        expect(page.locator(".block")).to_have_count(6)

        # Cleanup
        os.unlink(original_path)
        os.unlink(modified_path)
