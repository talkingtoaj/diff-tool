"""Shared Playwright fixtures: local API server and base URL."""

import os
import subprocess
import sys
import time
from pathlib import Path

import pytest


@pytest.fixture(scope="session")
def base_url():
    return "http://localhost:8006"


@pytest.fixture(scope="session", autouse=True)
def _diff_tool_server():
    repo_root = Path(__file__).resolve().parent.parent
    original_dir = os.getcwd()
    os.chdir(repo_root)
    server_process = subprocess.Popen(
        [sys.executable, "backend/main.py"],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    time.sleep(3)
    yield server_process
    server_process.terminate()
    server_process.wait()
    os.chdir(original_dir)
