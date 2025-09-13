// Welcome Email Template – Sent to user who submits "Connect with Me"
exports.WELCOME_TEMPLATE = (name) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You</title>
    <style>
        body {
            background-color: #f0f4f8; /* A very light, clean background */
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif, 'Segoe UI';
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1d4ed8, #4f46e5); /* A vibrant, deep blue gradient */
            color: white;
            padding: 40px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .content {
            padding: 40px;
            text-align: center;
            color: #333333;
        }
        .content p {
            font-size: 16px;
            line-height: 1.7;
            color: #555555;
            margin: 0 0 20px;
        }
        .cta a {
            display: inline-block;
            margin-top: 10px;
            padding: 14px 28px;
            background-color: #ff5722; /* A striking, energetic orange */
            color: #ffffff;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .cta a:hover {
            background-color: #e64a19;
        }
        .footer {
            padding: 20px;
            background-color: #e2e8f0;
            font-size: 12px;
            text-align: center;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>It's Great to Connect!</h1>
        </div>
        <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out and showing interest in my work. I truly appreciate you taking the time to connect.</p>
            <p>I've received your message and will get back to you as soon as I can. In the meantime, feel free to explore my portfolio and see what I've been working on.</p>
            <div class="cta">
                <a href="https://utpal-portfolio-frontend.onrender.com/" target="_blank">Explore My Portfolio</a>
            </div>
        </div>
        <div class="footer">
            <p>This is an automated message. No reply is necessary.</p>
        </div>
    </div>
</body>
</html>
`;


// Notify Me (Connect With Me) Template – Sent to You
exports.NOTIFY_CONNECT_TEMPLATE = ({ name, surname,email, phoneNumber, message }) => `
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
