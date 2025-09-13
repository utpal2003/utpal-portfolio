import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I am Utpal's assistant 💁‍♀️. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, { message: input });
      const botReply = res.data.reply || "Sorry, I didn't understand that 😅.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
    }

    setInput("");
  };

  return (
    <div
      className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800
                 border border-gray-300 dark:border-gray-600 rounded-2xl shadow-xl p-3 sm:p-4 flex flex-col
                 w-[90vw] sm:w-[360px] h-[70vh] sm:h-[380px] max-h-[80vh]"
    >
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-2 pr-1 scroll-smooth">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl break-words transform transition-all duration-300 ease-in-out
    ${msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none shadow-md hover:shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-gray-700 shadow-sm"
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
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
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
