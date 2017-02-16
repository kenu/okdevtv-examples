# code from: http://creativeworks.tistory.com/178
import requests
from bs4 import BeautifulSoup

def spider(max_pages):
    page = 1
    while page < max_pages:
        url = 'http://okjsp.tistory.com/' + str(page)
        source_code = requests.get(url)
        plain_text = source_code.text
        print(plain_text)
        time.sleep(30) # second
        page += 1

spider(2)
