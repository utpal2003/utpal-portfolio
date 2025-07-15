// Welcome Email Template – Sent to user who submits "Connect with Me"
exports.WELCOME_TEMPLATE = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You</title>
  <style>
    body {
      background-color: #f2f4f8;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(to right, #4f46e5, #3b82f6);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
      text-align: center;
      color: #333;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
    }
    .cta a {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background-color: #3b82f6;
      color: #fff;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 500;
    }
    .footer {
      padding: 20px;
      background: #f9fafb;
      font-size: 13px;
      text-align: center;
      color: #888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thanks for Reaching Out!</h1>
    </div>
    <div class="content">
      <p>Hi ${name},</p>
      <p>I truly appreciate your interest in my work. It's always exciting to connect with people who value creativity, tech, and collaboration.</p>
      <p>I'll get back to you as soon as possible. Until then, feel free to browse through my projects and explore more of what I do.</p>
      <div class="cta">
        <a href="https://your-portfolio-link.com" target="_blank">Explore My Portfolio</a>
      </div>
    </div>
    <div class="footer">
      <p>This is an automated message sent from my portfolio. No reply is necessary.</p>
    </div>
  </div>
</body>
</html>
`;


// Notify Me (Connect With Me) Template – Sent to You
exports.NOTIFY_CONNECT_TEMPLATE = ({ name, surname, email, phoneNumber, message }) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      padding: 20px;
    }
    .container {
      background-color: #fff;
      padding: 20px;
      border-radius: 10px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    }
    h2 {
      color: #3b82f6;
    }
    p {
      line-height: 1.6;
      margin: 8px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>📩 New Connect Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Surname:</strong> ${surname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Message:</strong><br>${message}</p>
  </div>
</body>
</html>
`;



// Notify Me (Hire Me) Template – Sent to You
exports.NOTIFY_HIRE_TEMPLATE = ({ fullName, email, company, jobDetails }) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
      padding: 20px;
    }
    .container {
      background-color: #fff;
      padding: 24px;
      border-radius: 10px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    h2 {
      color: #16a34a;
    }
    p {
      line-height: 1.6;
      margin: 8px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>🧑‍💼 New Hire Me Request</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "N/A"}</p>
    <p><strong>Project Details:</strong><br>${jobDetails}</p>
  </div>
</body>
</html>
`;
