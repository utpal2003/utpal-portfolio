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
    hi: "Hi! How can I help you?",
    name: "I'm a personal assistant 💁‍♀️",
    help: "Sure! Tell me what you need help with.",
    project: "I can help you with your portfolio or project ideas.",
    love: "Aww, love is beautiful 💖",
    utpal: "Utpal is a MERN stack developer and a wonderful person!",
    contact: "You can contact Utpal through the contact form below or email!",
    bye: "Goodbye! Have a great day! 👋"
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
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 h-96 flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-2 pr-1 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[70%] px-3 py-2 rounded-2xl ${
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
          className="flex-grow px-3 py-2 border rounded-full text-sm bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
