require('dotenv').config();
// import express and create a router object
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// configue route, GET to /contact
router.get('/', (req, res, next) => {
    res.render('contact', {title: 'Contact me'});
});

// POST hadler, to /contact/sent
router.post('/sent', (req, res, next) => {
    const output = `
        <p>You have a new contact message</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // nodemailer
    //  create transporter object
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.PASSWORD
        }
    });

    //  set up email data
    let mailOptions = {
        form: `"Nodemailer Contact" <${process.env.MAIL_USER}>`, // sender
        to: `${process.env.MAIL_STUDENT}`, // receivers
        subject: 'Portfolio Contact Request', // Subject line
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.log(err);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    var form = req.body;
    res.render('contact', {title: 'Contact me', form: form});
});

// export the router object
module.exports = router;