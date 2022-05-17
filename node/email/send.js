const emailHelpers = require('./email');

const options = {
  to: 'hbenicloud@gmail.com',
  subject: '테스트1 ✅',
  html: `The programming tv is <a href="https://okdevtv.com" target="_blank">OKdevTV.com</a>`
};

emailHelpers.sendEmail(options)
