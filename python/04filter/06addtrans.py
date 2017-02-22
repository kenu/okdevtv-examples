import requests
from bs4 import BeautifulSoup

file = open("./jumin.html","r+")
fout = open('./workfile2.txt', 'w')

plain_text = file.read()
soup = BeautifulSoup(plain_text, 'lxml')
for line in soup.select('.addrArea'):
    element = line.get_text().strip()
    string = element.replace('\r\n', ',')
    string = string.replace('\t', '')
    string = string.replace('\n,', '\t')
    fout.write(string.encode('utf8') + '\n')

