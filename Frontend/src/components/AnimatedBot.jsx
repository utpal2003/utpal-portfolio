import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import ChatBot from "./ChatBot";

const AnimatedBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);
  const nodeRef = useRef(null);

  // Auto-hide greeting after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDrag = () => {
    // This function is called on every drag movement
    setHasMoved(true);
  };

  const handleAvatarClick = () => {
    // Only open/close the chat if the user hasn't dragged the bot
    if (!hasMoved) {
      setIsOpen((prev) => !prev);
    }
    // Reset the `hasMoved` state after the click or drag is done
    setHasMoved(false);
  };

  return (
    <Draggable nodeRef={nodeRef} onDrag={handleDrag} onStop={() => setHasMoved(false)}>
      <div
        ref={nodeRef}
        className="fixed bottom-6 right-6 z-[1000] lg:bottom-10 lg:right-10 cursor-grab"
      >
        {/* Bot Avatar (Draggable and Clickable) */}
        <div
          className="relative z-40"
          onClick={handleAvatarClick}
        >
          <img
            src="./chatbotimage.png"
            alt="Chat Bot"
            className="w-20 h-20 md:w-22 md:h-22 rounded-full shadow-xl border-4 border-blue-500 hover:border-blue-600 hover:scale-105 transition-all duration-300 ease-in-out object-cover"
            style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.4))" }}
          />

          {/* Pulsing indicator */}
          {!isOpen && (
            <span className="absolute top-1 -right-1 block h-4 w-4 rounded-full ring-3 ring-white bg-green-400 animate-pulse"></span>
          )}
        </div>

        {/* Auto-greeting bubble */}
        {showGreeting && !isOpen && (
          <div
            className="absolute bottom-24 right-0 bg-gradient-to-r from-blue-400 to-purple-500 text-white
                       text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-gray-200
                       animate-slideUpAndFadeIn w-max max-w-[250px]"
          >
            👋 Hello! How can I help you?
          </div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div
            className="absolute z-[999] bottom-24 right-0 w-[90vw] sm:w-[380px] max-h-[80vh]
                       transform origin-bottom-right animate-slideUpAndFadeIn"
          >
            <ChatBot />
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default AnimatedBot;