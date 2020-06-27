const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jmgiteru@gmail.com',
        pass: 'Rosa$2020'
    }
});

const mailOptions = {
    from: 'jmgiteru@gmail.com',
    to: 'mwangimuturi18@students.ku.ac.ke',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

console.log('baby');
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log('there is an error',error);
        
    } else {
        console.log('Email sent: ' + info.response);
    }
});