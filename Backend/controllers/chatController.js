// controllers/chatController.js
const { classifier, replies } = require("../models/nlpModel");

const handleChat = (req, res) => {
  const userMsg = (req.body.message || "").toLowerCase().trim();

  if (!userMsg) return res.json({ reply: replies.unknown });

  // --- Keyword fallback for specific cases ---
  if (userMsg.includes("who are you") || userMsg.includes("your name")) {
    return res.json({ reply: replies.name });
  }

  // classify intent
  const intent = classifier.classify(userMsg);

  // Restricted topics
  if (intent === "restricted") {
    return res.json({ reply: replies.restricted });
  }

  // Toxic / rude
  if (intent === "toxic") {
    return res.json({ reply: replies.toxic });
  }

  // Direct match with known replies
  if (replies[intent]) {
    return res.json({ reply: replies[intent] });
  }

  // Multi-intent detection (skills + projects etc.)
  const multi = [];
  if (userMsg.includes("skill")) multi.push(replies.skills);
  if (userMsg.includes("project")) multi.push(replies.projects);
  if (userMsg.includes("github")) multi.push(replies.github);
  if (userMsg.includes("linkedin")) multi.push(replies.linkedin);

  if (multi.length > 0) {
    return res.json({ reply: multi.join(" ") });
  }

  // fallback
  return res.json({ reply: replies.unknown });
};

module.exports = { handleChat };
