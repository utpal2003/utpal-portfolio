const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sender = {
  email: process.env.EMAIL_USER,
  name: "It's Utpal",
};

module.exports = { transporter, sender };
