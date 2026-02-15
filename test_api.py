import requests

# Test the diff API with the test files
url = "http://localhost:8000/api/diff/start"

with open('test_file1.txt', 'rb') as f1, open('test_file2.txt', 'rb') as f2:
    files = {
        'file1': ('test_file1.txt', f1, 'text/plain'),
        'file2': ('test_file2.txt', f2, 'text/plain')
    }
    
    response = requests.post(url, files=files)
    print(f"Status Code: {response.status_code}")
    print(f"Session ID: {response.json()['session_id']}")
    print(f"Number of blocks: {len(response.json()['blocks'])}")
    
    # Print first few blocks
    blocks = response.json()['blocks']
    for i, block in enumerate(blocks[:3]):
        print(f"\nBlock {i+1} - Type: {block['type']}")
        if block['original_sentences']:
            print(f"  Original: {block['original_sentences'][0][:50]}...")
        if block['modified_sentences']:
            print(f"  Modified: {block['modified_sentences'][0][:50]}...")
