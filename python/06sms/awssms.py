#-*- coding: utf-8 -*-
# from: https://bradmontgomery.net/blog/sending-sms-messages-amazon-sns-and-python/
import boto3

# Create an SNS client
client = boto3.client(
    "sns",
    aws_access_key_id="YOUR ACCES KEY",
    aws_secret_access_key="YOUR SECRET KEY",
    region_name="us-east-1"
)

# Send your sms message.
client.publish(
    PhoneNumber="+821094862045",
    Message="Hello World! 안녕하세요"
)
