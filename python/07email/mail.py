# -*- coding: utf-8 -*-
import smtplib
from email.mime.text import MIMEText

smtpHost = "smtp.test.com"
text = "Hello World"
msg = MIMEText(text)
msg['Subject'] = "test email"
msg['From'] = sender = "test@send.com"
msg['To'] = receiver = "test@rec.com"

s = smtplib.SMTP(smtpHost)
s.connect()
s.sendmail(sender, [receiver], msg.as_string())
s.close()
