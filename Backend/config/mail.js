const nodemailer = require("nodemailer");
require("dotenv").config();

// Create transporter with Gmail + App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email Transport Error:", error);
  } else {
    console.log("✅ Email Transporter is ready to send messages");
  }
});

// Sender info
const sender = {
  email: process.env.EMAIL_USER,
  name: "It's Utpal",
};

module.exports = { transporter, sender };
