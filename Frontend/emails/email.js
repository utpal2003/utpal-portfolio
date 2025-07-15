const { transporter, sender } = require('../config/mail');
const {
  WELCOME_TEMPLATE,
  NOTIFY_CONNECT_TEMPLATE,
  NOTIFY_HIRE_TEMPLATE,
} = require('./templates');

exports.sendconnectEmail = async ({ name, surname, email, phoneNumber, message }) => {
  try {
    await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: sender.email,
      subject: `🔔 New Connect Submission from ${name}`,
      html: NOTIFY_CONNECT_TEMPLATE({ name, surname, email, phoneNumber, message }),
    });

    await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: email,
      subject: '👋 Thanks for Connecting!',
      html: WELCOME_TEMPLATE(name),
    });

    console.log('✅ Connect emails sent successfully');
  } catch (error) {
    console.error('❌ Email Error:', error);
    throw new Error('Failed to send connect email');
  }
};

exports.sendHiremeEmail = async ({ fullName, email, company, jobDetails }) => {
  try {
    await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: sender.email,
      subject: `💼 Hire Request from ${fullName}`,
      html: NOTIFY_HIRE_TEMPLATE({ fullName, email, company, jobDetails }),
    });

    console.log('✅ Hire me email sent');
  } catch (error) {
    console.error('❌ Hire Me Email Error:', error);
    throw new Error('Failed to send hire me email');
  }
};
