# Gmail API with Node.js

## Quickstart

- https://developers.google.com/gmail/api/quickstart/nodejs
- Just for only local test
- Create project and get credentials.json
- It shows Labels of your Gmail account

### Gmail API

1. https://console.cloud.google.com/
2. Menu > IAM & Admin > Create a Project
3. enable the Gmail API
4. Menu menu > APIs & Services > Credentials. 사용자 인증 정보
5. Create Credentials > OAuth client ID.
6. Application type > Desktop app.
7. Name, Create OAuth client with Client ID & Secret.
8. Download `credentials.json` and move to working folder.
9. `npm install googleapis @google-cloud/local-auth`
10. node index.js

## nodemailer with gmail for OAuth2

- https://www.woolha.com/tutorials/node-js-send-email-using-gmail-with-nodemailer-oauth-2

###

1. Menu menu > APIs & Services > Credentials. 사용자 인증 정보
2. Create Credentials > API key.
3. Application type > Desktop app.
4. Name, Create OAuth client with Client ID & Secret.
5. Download `credentials.json` and move to working folder.
6. `npm install googleapis @google-cloud/local-auth`
7. node index.js

## Run Process

- .env
- node generate.js
- node token.js
- node send.js