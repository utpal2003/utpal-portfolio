import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoMdSend } from "react-icons/io";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi, I am Utpal's personal assistant 💁‍♀️. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // show typing indicator
    setTyping(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, { message: input });
      const botReply = res.data.reply || "Sorry, I didn't understand that 😅.";

      // hide typing and show real reply
      setTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chat error:", error);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-4 mt-4 space-y-3 px-1 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-3xl break-words transform transition-all duration-300 ease-in-out text-sm md:text-base ${msg.sender === "user"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm shadow-md"
                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-200 dark:border-gray-700 shadow-sm"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {/* Typing Indicator */}
        {typing && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-3xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-bl-sm border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-1">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse-fast delay-0"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse-fast delay-150"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse-fast delay-300"></span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2 mt-auto p-2 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
        <input
          className="flex-grow px-4 py-2 border border-gray-300 rounded-full text-sm md:text-base bg-gray-50 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 active:scale-95"
          aria-label="Send message"
        >
          <IoMdSend
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;