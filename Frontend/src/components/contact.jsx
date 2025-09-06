import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa'; // For the decorative star on the main form
import { BsCheckCircleFill } from 'react-icons/bs'; // For the success icon in the popup
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Intersection Observer Hook
const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // Trigger animation once
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, surname, email, phoneNumber, message } = formData;

    // ✅ Basic validation
    if (!name.trim() || !surname.trim() || !email.trim() || !phoneNumber.trim() || !message.trim()) {
      toast.error("Please enter all the fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    console.log(formData);
    setIsLoading(true); // start loader

    try {

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/connect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);

        // ✅ Reset form
        setFormData({
          name: "",
          surname: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Submission failed!");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false); // stop loader
    }
  };





  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 md:px-10 min-h-screen flex items-center justify-center font-inter
                 bg-gray-100 dark:bg-gray-900 // Professional background colors
                 transition-colors duration-500 relative overflow-hidden"
    >
      {/* ToastContainer for react-toastify messages */}
      <ToastContainer />

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm animate-fade-in-overlay">
          <div className="relative w-11/12 max-w-sm md:max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center animate-popup-enter border border-indigo-300 dark:border-indigo-600 overflow-hidden">
            {/* Optional: Subtle background gradient on the popup itself */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-5 dark:from-gray-700 dark:to-gray-700 dark:opacity-10 rounded-3xl -z-10"></div>

            {/* Success Icon with animation */}
            <div className="mb-4 text-green-500 dark:text-green-400 animate-check-icon-draw">
              <BsCheckCircleFill className="text-6xl sm:text-7xl" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-3">Thank you!</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-xs">Your message has been successfully sent. We'll be in touch shortly.</p>

            <button
              onClick={() => setShowPopup(false)}
              className="px-8 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-out font-semibold text-lg"
            >
              Got it!
            </button>

            {/* Enhanced Loading Bar/Progress Indicator (animated) */}
            <div className="w-full h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 mt-8 rounded-full animate-loading-bar-pulse"></div>
          </div>
        </div>
      )}

      {/* Main Contact Form Card */}
      <div
        ref={ref}
        className={`
          max-w-4xl mx-auto w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl relative overflow-hidden
          transform transition-all duration-1000 ease-out
          ${inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
      >
        {/* Decorative Star - Re-added as per your latest code */}
        <FaStar
          className="absolute top-6 right-6 text-yellow-400 text-3xl transform rotate-12 z-20 animate-spin-hover"
          style={{ '--fa-animation-duration': '1s' }} // Custom property for animation
        />

        <form onSubmit={handleSubmit}>
          <div className="p-8 pb-4 relative z-10">
            <h2 className=" text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Connect With  <span className="text-indigo-600 dark:text-indigo-400">Me</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 px-8 py-4 relative z-10">
            {/* Name Field - Required */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full border-b bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 pb-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-200"
                placeholder="Your Name"

              />
            </div>

            {/* Surname Field */}
            <div>
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Surname<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={formData.surname}
                onChange={handleChange}
                className="mt-1 w-full border-b bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 pb-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-200"
                placeholder="Your Surname"
              />
            </div>

            {/* Phone Number Field - Required */}
            <div className="md:col-span-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 w-full border-b bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 pb-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-200"
                placeholder="e.g., +91 98765 43210"

              />
            </div>

            {/* Email Field - Required */}
            <div className="md:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border-b bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 pb-2 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all duration-200"
                placeholder="you@example.com"

              />
            </div>

            {/* Message Text Area */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message<span className="text-red-500">*</span></label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full border bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 rounded-md p-2 outline-none resize-y focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring transition-all duration-200"
                placeholder="Your message here..."
              ></textarea>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative bg-black dark:bg-gray-950 p-8 pt-10 mt-6 md:mt-0">
            <div className="absolute top-0 left-0 right-0 h-10 bg-white dark:bg-gray-800 transform origin-top-left -skew-y-3 z-0 -mt-5"></div>


            <div className="flex justify-center items-center relative z-10">


              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-green-600 dark:bg-gray-700 text-white text-lg font-bold rounded-lg shadow-lg
                           transition-all duration-300 transform hover:scale-105
                           hover:bg-gradient-to-r from-orange-500 to-yellow-500 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800
                           relative overflow-hidden group"
              >
                <span className="relative z-10">{isLoading ? 'Submitting...' : 'GET IN TOUCH'}</span>
                <span className="absolute left-0 bottom-0 h-1 w-full bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>



            </div>




          </div>
        </form>
      </div>

      {/* Inline styles for custom keyframe animations */}
      <style>{`
        /* Star animation (re-added as per your code) */
        @keyframes spin-hover {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-hover:hover {
          animation: spin-hover var(--fa-animation-duration, 1s) linear infinite;
        }

        /* Overlay fade-in animation for popup */
        @keyframes fade-in-overlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-overlay {
          animation: fade-in-overlay 0.3s ease-out forwards;
        }

        /* Popup content entrance animation (pop-up/bounce effect) */
        @keyframes popup-enter {
          0% { transform: scale(0.8) translateY(50px); opacity: 0; }
          60% { transform: scale(1.05) translateY(-10px); opacity: 1; } /* Slight overshoot */
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-popup-enter {
          animation: popup-enter 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; /* Custom spring-like easing */
        }

        /* Checkmark icon drawing/bouncing animation */
        @keyframes check-icon-draw {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(20deg); opacity: 1; } /* Overshoot */
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-check-icon-draw {
          animation: check-icon-draw 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          animation-delay: 0.2s; /* Starts slightly after popup begins to appear */
        }

        /* Loading bar pulsing animation (for popup) */
        @keyframes loading-bar-pulse {
          0% { transform: scaleX(0); opacity: 0.5; transform-origin: left center; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0.5; transform-origin: right center; }
        }
        .animate-loading-bar-pulse {
          animation: loading-bar-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;