var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://hbenicloud%40gmail.com:hbpass12@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Hbenicloud" <hbenicloud@gmail.com>', // sender address
    to: 'kenu@okjsp.net, kenu.heo@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ? html</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
