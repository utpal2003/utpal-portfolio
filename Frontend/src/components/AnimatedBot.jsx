import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import ChatBot from "./ChatBot";

const AnimatedBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const nodeRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleStart = () => setDraggedDistance(0);

  const handleDrag = (e, data) => {
    setDraggedDistance(
      (prev) => prev + Math.abs(data.deltaX) + Math.abs(data.deltaY)
    );
  };

  const handleStop = (e) => {
    if (draggedDistance < 5) {
      if (avatarRef.current && avatarRef.current.contains(e.target)) {
        setIsOpen((prev) => !prev);
      }
    }
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
      bounds="body"
      cancel=".chat-window, input, textarea, button"
    >
      <div
        ref={nodeRef}
        className="fixed bottom-4 right-4 z-[1000] lg:bottom-8 lg:right-8 cursor-grab select-none"
      >
        {/* Bot Avatar (FAB style) */}
        <div
          ref={avatarRef}
          role="button"
          aria-label="Chatbot toggle"
          className="relative z-40 transition-transform duration-300 active:scale-95"
        >
          <img
            src="./chatbotimage.png"
            alt="Chat Bot"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg border-4 border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out object-cover"
            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
          />
          {!isOpen && (
            <span className="absolute top-0 -right-1 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400 animate-pulse"></span>
          )}
        </div>

        {/* Greeting bubble */}
        {showGreeting && !isOpen && (
          <div
            className="absolute bottom-20 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-xl animate-slideUpAndFade w-max max-w-[250px] transform origin-bottom-right"
          >
            👋 Hello! How can I help you?
            <div className="absolute -bottom-2 right-4 w-3 h-3 bg-purple-600 transform rotate-45"></div>
          </div>
        )}

        {/* Chat window */}
        {isOpen && (
          <div
            className="chat-window fixed bottom-12 right-4 w-[calc(100vw-32px)] sm:w-[380px] max-h-[80vh] 
               bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 z-[999] animate-scaleIn"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-white shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <h3 className="font-semibold text-lg">Utpal's Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 text-xl font-bold transition-transform hover:rotate-90 duration-300"
              >
                X
              </button>
            </div>
            {/* Chat body */}
            <div className="h-[55vh] overflow-y-auto overflow-x-hidden p-4 bg-gray-50">
              <ChatBot />
            </div>
          </div>
        )}

      </div>
    </Draggable>
  );
};

export default AnimatedBot;