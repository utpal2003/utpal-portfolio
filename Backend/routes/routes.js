const express = require('express');
const router = express.Router();
const { hireme, connect } = require('../controllers/contactscontrollers');
const {handleChat} = require("../controllers/chatController");

router.post('/hireme', hireme);
router.post('/connect', connect);
router.post("/chat",handleChat)

router.get("/heartbeat", (req, res) => {
  res.json({ status: "alive" });
});

module.exports = router;
