import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import ChatBot from "./ChatBot";

const AnimatedBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const nodeRef = useRef(null);
  const draggedRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    draggedRef.current = false;
  };

  const handleDrag = () => {
    draggedRef.current = true;
  };

  const handleAvatarClick = () => {
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Floating Avatar */}
      <Draggable
        nodeRef={nodeRef}
        onStart={handleStart}
        onDrag={handleDrag}
        bounds="body"
      >
        <div
          ref={nodeRef}
          className="fixed bottom-5 right-5 z-[9999] cursor-grab active:cursor-grabbing select-none"
        >
          {/* Greeting */}
          {showGreeting && !isOpen && (
            <div className="absolute bottom-20 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-xl shadow-xl whitespace-nowrap animate-slideUpAndFade">
              👋 Hello! How can I help you?
            </div>
          )}

          {/* Avatar */}
          <button
            type="button"
            onClick={handleAvatarClick}
            className="relative outline-none"
          >
            <img
              src="/chatbotimage.png"
              alt="Chat Bot"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition duration-300"
            />

            {!isOpen && (
              <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-white animate-pulse"></span>
            )}
          </button>
        </div>
      </Draggable>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
            fixed
            bottom-24
            right-5
            w-[calc(100vw-32px)]
            sm:w-[380px]
            h-[70vh]
            max-h-[600px]
            min-h-[480px]
            bg-white
            dark:bg-gray-900
            rounded-2xl
            shadow-2xl
            border
            border-gray-200
            dark:border-gray-700
            overflow-hidden
            flex
            flex-col
            z-[9998]
            animate-scaleIn
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <h2 className="font-semibold text-lg">
                Utpal's Assistant
              </h2>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl hover:rotate-90 transition-transform duration-300"
            >
              ×
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-gray-800">
            <ChatBot />
          </div>
        </div>
      )}
    </>
  );
};

export default AnimatedBot;