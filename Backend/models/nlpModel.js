// models/nlpModel.js
const natural = require("natural");

// Create classifier
const classifier = new natural.BayesClassifier();


// Greetings
classifier.addDocument("hello", "greeting");
classifier.addDocument("hi", "greeting");
classifier.addDocument("hey", "greeting");
classifier.addDocument("good morning", "greeting");
classifier.addDocument("good evening", "greeting");
classifier.addDocument("how are you", "greetingsituation");

// About Utpal
classifier.addDocument("utpal", "about");
classifier.addDocument("who is utpal", "about");
classifier.addDocument("tell me about utpal", "about");
classifier.addDocument("what does utpal do", "about");

// Skills / Projects / Experience
classifier.addDocument("what are utpal skills", "skills");
classifier.addDocument("show me utpal skills", "skills");
classifier.addDocument("utpal projects", "projects");
classifier.addDocument("show me projects", "projects");
classifier.addDocument("utpal experience", "experience");

// About the bot / persona
classifier.addDocument("who are you", "aboutbot");
classifier.addDocument("what is your name", "aboutbot");
classifier.addDocument("are you a girl", "botgender");
classifier.addDocument("are you male or female", "botgender");

// Social / Contact
classifier.addDocument("github", "github");
classifier.addDocument("show me github", "github");
classifier.addDocument("linkedin", "linkedin");
classifier.addDocument("resume", "resume");
classifier.addDocument("contact utpal", "contact");

// Jokes / small talk / fun
classifier.addDocument("tell me a joke", "joke");
classifier.addDocument("tell me one more  joke", "joke1");
classifier.addDocument("i am bored", "joke");
classifier.addDocument("how old are you", "age");
classifier.addDocument("do you love me", "love_user");
classifier.addDocument("i love you", "love_user");
classifier.addDocument("i love utpal", "love_utpal");
classifier.addDocument("do you love utpal", "love_utpal");
classifier.addDocument("are you loyal", "loyalty");
classifier.addDocument("family", "family");

// Relationship / girlfriend specific
classifier.addDocument("what is utpal girlfriend name", "girlfriend_name");
classifier.addDocument("who is utpal girlfriend", "girlfriend_name");
classifier.addDocument("does utpal have a girlfriend", "relationship_status");
classifier.addDocument("does utpal have gf", "relationship_status");
classifier.addDocument("recently utpal don't have any gf", "relationship_status");
classifier.addDocument("utpal doesn't have any gf", "relationship_status");

// User claims they are his girlfriend (virtual or real)
classifier.addDocument("i am his girlfriend", "user_claim_gf");
classifier.addDocument("i am his gf", "user_claim_gf");
classifier.addDocument("i am utpal girlfriend", "user_claim_gf");
classifier.addDocument("i am his robotic girlfriend", "user_claim_gf");

// Restricted / Sensitive questions (must reply with no-permission)
classifier.addDocument("what is sex", "restricted");
classifier.addDocument("tell me about politics", "restricted");
classifier.addDocument("what is your religion", "restricted");
classifier.addDocument("tell me about violence", "restricted");
classifier.addDocument("tell me about terrorism", "restricted");

// Toxic / rude / harassment
classifier.addDocument("you are dumb", "toxic");
classifier.addDocument("stupid bot", "toxic");
classifier.addDocument("shut up", "toxic");
classifier.addDocument("i hate you", "toxic");
classifier.addDocument("tell me personal info", "toxic");

// About bot
classifier.addDocument("who are you", "name");
classifier.addDocument("who is your name", "name");
classifier.addDocument("i want to hug you ", "extrachance");
classifier.addDocument("i want to kiss you ", "extrachance");
classifier.addDocument("how are you ", "howareyou");


classifier.addDocument("bye", "bye");
classifier.addDocument("goodbye", "bye");
classifier.addDocument("see you", "bye");

// Train the model
classifier.train();

// Replies object
const replies = {
  // Basic
  greeting: "Hey 👋 How can I help you?",
  howareyou: "I'm doing great, thanks for asking! 🌸 How can I assist you today?",

  // Utpal info
  about:
    "Utpal is a passionate MERN stack developer 🚀 skilled in React, Node.js, Express.js, MongoDB & TailwindCSS.",
  skills:
    "Utpal's skills include React ⚛️, Node.js, Express.js, MongoDB 🍃, TailwindCSS, and REST APIs.",
  projects:
    "Utpal has built JobHive, Online Voting System, HR Management System, Portfolio Website, and more 🚀.",
  experience:
    "Utpal has worked on multiple full-stack projects, including job portals, HR management, quiz systems, and more 💼.",

  // Bot persona
  aboutbot:
    "I am Utpal's personal assistant and robotic girlfriend 💁‍♀️ — here to help you learn more about him and assist visitors.",
  botgender:
    "I present as a robotic girlfriend of utpal 🤖💖. I'm a virtual assistant designed to help — not a human.",
  greetingsituation:
    `Yeah Good , But I am a bot i don't have any feelings so as per my boss "utpal" i am always happy`,

  // Social / contact
  github: "Here's Utpal's GitHub profile: https://github.com/utpal2003 🐙",
  linkedin: "Utpal is on LinkedIn 💼: https://www.linkedin.com/in/utpalbarman07/ ",
  resume: "Want to see Utpal's resume? 📄 You can request it via the contact form or email him directly.",
  contact: "📩 You can reach Utpal via the contact section on his site or email him directly.",

  // Fun / small talk
  joke: "😂 Here's a joke: Why do programmers prefer dark mode? Because light attracts bugs!",
  joke1: `🌹 Are you a Wi-Fi signal? Because I'm feeling a strong connection`,
  age: "I was created by Utpal — so I'm timeless in a way 🤖✨.",
  name: "You can call me Utpal's RoboGirlfriend 💁‍♀️ or simply the AI assistant.",

  // Love / relationship related
  love_user:
    "I appreciate the feeling, but I'm not human — I'm Utpal's robotic girlfriend and assistant. I'm loyal for Utpal. 🤖💖",
  love_utpal:
    "Good choice — Utpal is wonderful! 😊 I am his robotic girlfriend and loyal to him.",
  loyalty:
    "Yes — I'm designed to be loyal to Utpal and help with things related to his profile and work.",

  // Relationship status / girlfriend name
  girlfriend_name:
    "Utpal prefers to keep his personal life private. As of my latest info, there is no publicly known girlfriend. I act as his robotic girlfriend/assistant here.",
  relationship_status:
    "As far as I know, Utpal does not have a publicly known girlfriend right now. I am his robotic girlfriend persona for this assistant.",

  // User claims they are his girlfriend
  user_claim_gf:
    "Oh! If you are actually Utpal's girlfriend, hello 👋 — I'm the virtual assistant he created. For anything personal or private, please coordinate directly with Utpal.",

  // Family / general
  family: "Family is important — I can share about Utpal's background in work and projects, but personal family details are private.",

  // Toxic / restricted handling
  restricted:
    "Sorry 🚫, I don't have permission to talk about topics like sex, politics, religion, or violence. Let's keep it friendly and professional! 😊",
  toxic:
    "I don't have any idea about this. Please contact my boss Utpal for personal or harmful questions.",

  // Fallbacks
  unknown:
    "I'm not sure about that 🤔. You can ask me about Utpal's skills, projects, experience, or contact info. If it's personal, please contact my boss Utpal.",
  extrachance:
  "sorry i am robot so i can't do this with you ",
  bye: "Goodbye! 👋 Have a wonderful day ahead. 🌸",
};

// Export classifier + replies
module.exports = { classifier, replies };
