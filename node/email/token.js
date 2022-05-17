require('dotenv').config();
const { google } = require('googleapis');

// Replace with the code you've got on

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_OAUTH_CLIENT_ID,
  process.env.GMAIL_OAUTH_CLIENT_SECRET,
  process.env.GMAIL_OAUTH_REDIRECT_URL
);

const code =
  '4/0AX4XfWif21hOmH-CT2NZdPP43J6xnoVUcQe_x8TNt7lJYvCWwtuSBmiy8aeDoPUQUfhnGg';
const getToken = async () => {
  const { tokens } = await oauth2Client.getToken(code);
  console.info(tokens);
};

getToken();
