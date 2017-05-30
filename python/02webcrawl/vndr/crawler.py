import requests
import json

def crawler(url):
    source_code = requests.get(url)
    plain_text = source_code.text
    json.loads(plain_text)
    print(json)
    return json

json = crawler("http://www.startupweekly.net/api/news?filter=%7B%22where%22:%7B%7D,%22order%22:%22datetime+DESC%22,%22limit%22:%2230%22,%22skip%22:null%7D")
