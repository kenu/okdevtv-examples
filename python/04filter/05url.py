#-*- coding: utf-8 -*-
import requests
import urllib

def getContent(address):
    query = "address=" + urllib.quote(address) + "&key=API-KEYAQZD57lEciNqHdmW820QcA2mz4wrlkkyU"
    return requests.get("https://maps.googleapis.com/maps/api/geocode/json?" + query).text

t = getContent("경기도 연천군 군남면 삼거3길  8-17")
print(t)
