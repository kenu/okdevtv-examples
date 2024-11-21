import os
import json
from pyhwpx import Hwp
from pyhwp.hwp5 import hwp5txt

def hwp_to_markdown(hwp_file_path):
    # create output folder if not exist
    if not os.path.exists('./output'):
        os.makedirs('./output')

    txt_file_path = './output' + hwp_file_path[:-4] + ".md"
    hwp5txt.main(['--output', txt_file_path, hwp_file_path])
    
    with open(txt_file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    os.remove(txt_file_path)
    return content

def hwp_to_json(hwp_file_path):
    markdown_content = hwp_to_markdown(hwp_file_path)
    return json.dumps({"content": markdown_content}, ensure_ascii=False)

hwp_file = "./source/010201.hwp"
markdown_result = hwp_to_markdown(hwp_file)
json_result = hwp_to_json(hwp_file)
