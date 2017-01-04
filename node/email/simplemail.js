const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'kenu.heo@xmail.com',
    pass: 'xxxx cpxp xxxx sqha', // https://myaccount.google.com/apppasswords
  },
  tls: {
    rejectUnauthorized: false, // Disables certificate validation
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Kenu Heo 🎉" <kenu.hex@xmail.com>', // sender address
    to: 'kenux@okdevtv.com, heogn@xaver.com', // list of receivers
    subject: 'Hello ✔ 메일 테스트', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
}

main().catch(console.error);
