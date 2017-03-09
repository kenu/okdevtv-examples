# -*- coding: utf-8 -*-
import smtplib
from email.mime.text import MIMEText

smtpHost = "smtp.gmail.com"
text = "Hello World"
msg = MIMEText(text)
msg['Subject'] = "test email"
msg['From'] = sender = "hbenicloud@gmail.com"
msg['To'] = receiver = "kenu.heo@gmail.com"

s = smtplib.SMTP(smtpHost, 587)
s.ehlo()
s.starttls()
s.ehlo()
s.login("hbenicloud@gmail.com", "****")
s.sendmail(sender, [receiver], msg.as_string())
s.close()
