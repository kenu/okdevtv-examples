# code from: http://creativeworks.tistory.com/178
import requests
from bs4 import BeautifulSoup

def spider(max_pages):
    page = 1
    while page < max_pages:
        url = 'http://okjsp.tistory.com/' + str(page)
        source_code = requests.get(url)
        plain_text = source_code.text
        soup = BeautifulSoup(plain_text, 'lxml')
        for link in soup.select('h2 > a'):
            href = 'http://okjsp.tistory.com' + link.get('href')
            title = link.string
            print(href)
            print(title)

spider(2)
