const nodemailer = require('nodemailer');
require('dotenv').config();

// Create transporter with Gmail + App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,     // Your Gmail address
    pass: process.env.EMAIL_PASS,     // Your 16-digit App Password
  },
});

// Verify transporter connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.error("❌ Email Transport Error:", error);
//   } else {
//     console.log("✅ Email Transporter is ready");
//   }
// });

// Sender info
const sender = {
  email: process.env.EMAIL_USER,
  name: "It's Utpal",
};

module.exports = { transporter, sender };
