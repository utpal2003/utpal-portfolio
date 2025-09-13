// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const { sendHiremeEmail, sendconnectEmail } = require('../utilemails/sendemails');

// Controller functions
const hireme = async (req, res) => {
    const { fullName, email, company, jobDetails } = req.body;
    
    if (!fullName || !email || !jobDetails) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        await sendHiremeEmail({ fullName, email, company, jobDetails });
        res.status(200).json({ success: true, message: 'Hire request sent successfully!' });
    } catch (error) {
        console.error('Hireme email error:', error);
        res.status(500).json({ success: false, message: 'Failed to send hire request' });
    }
};

const connect = async (req, res) => {
    const { name, surname, phoneNumber, email, message } = req.body;
    
    if (!name || !surname || !phoneNumber || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        await sendconnectEmail({ name, surname, phoneNumber, email, message });
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Connect email error:', error);
        res.status(500).json({ success: false, message: 'Email sending failed.' });
    }
};


module.exports = {
    hireme,
    connect
};