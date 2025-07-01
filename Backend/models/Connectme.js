const mongoose = require("mongoose")

const connectmeschema = new mongoose.Schema({

  Firstname: {
    type: String,
    required: true
  },
  Ladtname: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});


module.exports = mongoose.model('ConnectMe', connectmeschema)