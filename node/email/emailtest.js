var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Hbenicloud" <hbenicloud@gmail.com>', // sender address
    to: 'kenu.heo@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ? html</b>' // html body
};

// send mail with defined transport object
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
} else {
    console.error('need EMAIL_USER, EMAIL_PASS environment values');
    console.error('SET EMAIL_USER="email" && SET EMAIL_PASS="password" && node emailtest.js');
}
