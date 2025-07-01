import React, { useState, useEffect } from "react";
import { FiSun } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { IoMoon } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sections = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "techstack", label: "Tech Stack" },
    { id: "projects", label: "Projects" },
    { id: "work_experience", label: "Work Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full fixed z-50 top-0 transition-all duration-300 ${isSticky
        ? "bg-white/60 dark:bg-gray-900/80 backdrop-blur-sm shadow-md border-b"
        : "bg-[#e0ecfa] dark:bg-gray-900 border-b"
        }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-blue-700 dark:text-cyan-400">
          UTPAL BARMAN
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium text-base items-center">
          {sections.map((item) => (
            <li key={item.id} className="relative group">
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="cursor-pointer px-2 py-1 rounded-md transition-all duration-200 relative text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-cyan-400"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-blue-700 dark:bg-cyan-400 transition-all duration-300" />
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:block ml-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-700 dark:text-yellow-300 hover:scale-110 transition-all"
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <FiSun /> : <IoMoon />}
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-800 dark:text-yellow-300 focus:outline-none"
          >
            {darkMode ? <FiSun /> : <IoMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-200 text-2xl"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center gap-4 p-6 
  bg-gradient-to-b from-cyan-400/40 to-blue-500/20 
  backdrop-blur-lg rounded-xl shadow-2xl 
  dark:from-gray-800/50 dark:to-gray-900/30 
  border-t border-white/10 dark:border-gray-700 transition-all duration-300">

          {sections.map((item) => (
            <li key={item.id} className="w-full text-center">
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4 rounded-lg font-medium text-lg
          text-gray-800 dark:text-gray-200
          hover:bg-white/20 dark:hover:bg-white/10 
          hover:text-cyan-800 dark:hover:text-cyan-300 
          hover:shadow-md hover:scale-105 transform transition-all duration-300 ease-in-out"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>



      </div>

      {/* Extra Styling for Active Link */}
      <style>{`
        .active {
          font-weight: 600;
          color: #1e40af !important;
        }
        .dark .active {
          color: #22d3ee !important;
        }
        .active span {
          width: 100% !important;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
