const emailHelpers = require('./email');

const options = {
  to: 'hbenicloud@gmail.com',
  subject: '테스트 😭',
  html: 'The cutest programming blog is <a href="https://www.okdevtv.com">OKdevTV.com</a>',
};

emailHelpers.sendEmail(options)
