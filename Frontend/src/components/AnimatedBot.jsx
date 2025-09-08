import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import ChatBot from "./ChatBot"; 

const AnimatedBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null); // Create ref for Draggable

  return (
    // Draggable wrapper for the entire bot component (the anime girl image)
    <Draggable nodeRef={nodeRef} handle=".drag-handle">
      <div
        ref={nodeRef}
        className="fixed bottom-6 right-6 z-[1000] lg:bottom-10 lg:right-10"
      >
        {/* Anime Girl Image - This is now the clickable element */}
        <img
          src="../../public/pngwing.com (24).png" // Replace with your actual image path
          alt="Chat Bot"
          className="drag-handle cursor-grab active:cursor-grabbing
                     w-20 h-20  md:w-22 md:h-22 
                     rounded-full shadow-xl border-4 border-blue-500 
                     hover:border-blue-600 hover:scale-105
                     transition-all duration-300 ease-in-out
                     object-cover
                     relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.4))' }} 
        />
        {/* Pulsing indicator when closed */}
        {!isOpen && (
          <span className="absolute top-1 -right-1 block h-4 w-4 rounded-full ring-3 ring-white bg-green-400 animate-pulse z-20"></span>
        )}


        {/* Chat window - conditionally rendered with transition */}
        <div
          className={`
            absolute z-[999]
            ${isOpen ? 'block' : 'hidden'}
            ${isOpen ? 'animate-slideUpAndFadeIn' : 'animate-slideDownAndFadeOut'}
            bottom-24 right-0
            w-[320px] sm:w-[380px]
            transform origin-bottom-right
          `}
        >
          <ChatBot />
        </div>
      </div>
    </Draggable>
  );
};

export default AnimatedBot;