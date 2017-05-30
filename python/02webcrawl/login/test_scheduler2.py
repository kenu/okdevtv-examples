from datetime import datetime, timedelta
from apscheduler.schedulers.blocking import BlockingScheduler
import urllib
import httplib2
import json

http = httplib2.Http()

domain = 'https://okdevtest.com'
url = domain + '/doLogin.do'
body = {'loginId':'user','loginPw':'okpass'}
headers = {'Content-type': 'application/x-www-form-urlencoded'}
response, content = http.request(url, 'POST', headers = headers, body = urllib.parse.urlencode(body))

headers = {'Cookie': response['set-cookie']}

def getRequestForCrawling():
    date = datetime.today() - timedelta(seconds = 90)
    strToday = date.strftime('%Y%m%d%H%M%S')

    url = domain + '/chart/range.do?lastTime=' + date.strftime("%s")

    response, content = http.request(url, 'GET', headers=headers)

    print(content.decode('utf-8'))


scheduler = BlockingScheduler()

# Schedule job_function to be called every two hours
scheduler.add_job(getRequestForCrawling, 'cron', hours='*/2')

# Schedules job_function to be run on the third Friday
# of June, July, August, November and December at 00:00, 01:00, 02:00 and 03:00
# sched.add_job(job_function, 'cron', month='6-8,11-12', day='3rd fri', hour='0-3')

scheduler.start()
