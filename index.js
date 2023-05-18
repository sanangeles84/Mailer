// import nodemailer (after npm install nodemailer)
const nodemailer = require('nodemailer');

// config for mailserver and mail, input your data
const config = {
  mailserver: {
    host: 'smtp.ethereal.email',
    port: 587,
    //secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  },
  mail: {
    from: 'sender@fake_email.com',
    to: 'recipient@fake_email.com',
    subject: 'this is the subject text of the email',
    text: 'This is the body text of the email'
  }
};

const sendMail = async ({ mailserver, mail }) => {
  // create a nodemailer transporter using smtp
  let transporter = nodemailer.createTransport(mailserver);

  // send mail using transporter
  let info = await transporter.sendMail(mail);

  console.log(`Preview: ${nodemailer.getTestMessageUrl(info)}`);

};

sendMail(config).catch(console.error);