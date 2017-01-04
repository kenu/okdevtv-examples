# code from: http://creativeworks.tistory.com/178
import requests
import time

def spider(max_pages):
    page = 1
    while page < max_pages:
        url = 'http://okjsp.tistory.com/' + str(page)
        source_code = requests.get(url)
        plain_text = source_code.text
        print(plain_text)
        page += 1
#        time.sleep(30) # second

spider(2)
