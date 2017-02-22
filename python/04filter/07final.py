#-*- coding: utf-8 -*-
import requests
import urllib
import json
import datetime

def getContent(address):
    query = "address=" + urllib.quote(address) + "&key=APIKEY"
    return requests.get("https://maps.googleapis.com/maps/api/geocode/json?" + query).text

def getLocation(address):
    obj = json.loads(getContent(address))
    if (len(obj['results']) > 0):
        location = obj['results'][0]['geometry']['location']
        return (str(location['lat']) + ',' + str(location['lng']))
    else:
        return "n/a"

# address = "경기도 연천군 군남면 삼거3길  8-17"
# print(getLocation(address))

#file = open("./sample.txt","r+")
file = open("./workfile.txt","r+")
fout = open('./jumincenter.csv', 'w')

text=file.readlines()
for address in text:
    ts = str(datetime.datetime.now()).split('.')[0]
    location = getLocation(address)
    fout.write(ts + ',' + location + ',' + address)
