import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am Utpal's girlfriend and personal assistant 💁‍♀️. How can I help you?" }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const restrictedTopics = ['politics', 'religion', 'violence', 'adult'];

  const defaultReplies = {
    hello: "Hello there! 😊",
    hi: "Hi! How can I help you today?",
    hey: "Hey! 👋 What's up?",
    "good morning": "Good morning! 🌅 Hope you're doing great.",
    "good evening": "Good evening! 🌙 How can I assist you?",
    name: "I'm your personal assistant 🤖, here to help you learn more about Utpal!",
    utpal: "Utpal is a passionate MERN stack developer 🚀 skilled in React, Node.js, Express.js, MongoDB & TailwindCSS.",
    skills: "Utpal's main skills include React ⚛️, Node.js, Express.js, MongoDB 🍃, TailwindCSS, and REST APIs.",
    experience: "Utpal has worked on multiple full-stack projects, including job portals, HR management, quiz systems, and more 💼.",
    project: "Utpal has built projects like JobHive, Online Voting System, HR Management, Portfolio Website, and more. 🚀",
    projects: "Check out the projects section to see Utpal's MERN apps, games, and portfolio work! 🎯",
    portfolio: "You can explore Utpal's portfolio website to know more about his work and achievements.",
    contact: "📩 You can contact Utpal via the contact form on this site, or email him directly!",
    email: "You can drop Utpal an email through the contact section below 📧.",
    github: "Here's Utpal's GitHub profile: https://github.com/utpal2003 🐙",
    linkedin: "Utpal is also on LinkedIn! 💼 (Add your link here)",
    resume: "Want to see Utpal's resume? 📄 You can request a copy via the contact form!",
    job: "Utpal is open to opportunities in MERN stack development. 🚀",
    love: "Aww, love is beautiful 💖",
    thanks: "You're welcome! 🙌",
    bye: "Goodbye! Have a great day! 👋",
    by: "Goodbye! Have a great day! 👋",
    goodbye: "See you soon! Take care. ✨"
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    const lowerInput = input.toLowerCase();
    let botReply = null;

    if (restrictedTopics.some(topic => lowerInput.includes(topic))) {
      botReply = "Sorry, I'm not allowed to talk about that topic. 🚫";
    } else {
      for (const key in defaultReplies) {
        if (lowerInput.includes(key)) {
          botReply = defaultReplies[key];
          break;
        }
      }
    }

    if (!botReply) {
      botReply = "I don't have any idea about this. You can get in touch with my boss Utpal 😄.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);
  };

  return (
    <div
      className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                 rounded-lg shadow-lg p-3 sm:p-4 
                 flex flex-col
                 w-[90vw] sm:w-[360px] 
                 h-[70vh] sm:h-[380px] 
                 max-h-[80vh]"
    >
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-2 pr-1 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2">
        <input
          className="flex-grow px-3 py-2 border rounded-full text-sm 
                     bg-white dark:bg-gray-800 text-black dark:text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-full 
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
