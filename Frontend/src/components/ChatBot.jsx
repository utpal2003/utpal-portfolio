import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoMdSend } from "react-icons/io";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I am Utpal's personal assistant 💁‍♀️. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const message = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInput("");
    setTyping(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        {
          message,
        }
      );

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            res.data.reply ||
            "Sorry, I didn't understand that 😅.",
        },
      ]);
    } catch (err) {
      console.error(err);

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Error connecting to server.",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">

      {/* Notice */}
      <div className="bg-indigo-100 dark:bg-indigo-900/30 border-b border-indigo-300 dark:border-indigo-700 px-4 py-3">
        <h2 className="text-center text-sm font-semibold text-indigo-800 dark:text-indigo-300">
          🤖 Utpal is currently upgrading the AI Assistant with smarter
          features. Coming Soon!
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user"
                ? "justify-end"
                : "justify-start"
              }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm md:text-base break-words ${msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-200 dark:border-gray-700 shadow-sm"
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-sm px-4 py-3">

              <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150"></span>
              <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-300"></span>

            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      {/* <div className="border-t dark:border-gray-700 bg-white dark:bg-gray-900 p-3">
        <div className="flex items-center gap-2">

          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && sendMessage()
            }
            className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-sm md:text-base text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendMessage}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <IoMdSend className="text-xl" />
          </button>

        </div>
      </div> */}
    </div>
  );
};

export default ChatBot;
