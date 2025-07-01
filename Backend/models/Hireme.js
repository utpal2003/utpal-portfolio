const mongoose = require('mongoose')

const hiremeschema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    jobDetails: {
        type: String,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('HireMe',hiremeschema);