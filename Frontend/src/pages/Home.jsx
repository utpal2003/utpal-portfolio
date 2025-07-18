import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { useState } from 'react';
import Hireme from '../components/Hireme';


const Home = () => {
    // State to control the visibility of the Hireme popup
    const [isHiremeOpen, setIsHiremeOpen] = useState(false);

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/utpal-barman-2002/",
            color: "#0A66C2",
        },
        {
            name: "GitHub",
            icon: FaGithub,
            url: "https://github.com/Utpal-Barman",
            color: "#181717",
        },
        {
            name: "LeetCode",
            icon: SiLeetcode,
            url: "https://leetcode.com/u/utpal2003/",
            color: "#FFA116",
        },
        {
            name: "Facebook",
            icon: FaFacebook,
            url: "https://www.facebook.com/utpal.barman.7315/",
            color: "#1877F2",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: "https://www.instagram.com/utpal_barman_2002/",
            color: "#E1306C",
        },
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            url: "https://wa.me/+917002573216",
            color: "#25D366",
        },
    ];

    const handleHiremeSubmit = (hiremeData) => {
        console.log("Hire Me form data received in Home:", hiremeData);

        setIsHiremeOpen(false); // Close the popup after submission
    };

    return (
        <div
            id="home"
            className="mt-10 w-full md:min-h-[80vh] h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10
                       transition-colors duration-500 overflow-hidden relative
                       bg-gradient-to-br from-[#e0f7fa] to-[#e1bee7] dark:from-[#0f172a] dark:to-[#1e293b]"
        >
            {/* GLOBAL ANIMATED BACKGROUND ELEMENTS */}
            {/* Large orbiting ring (mimics the screenshot's main circle) */}
            <div className="absolute w-[800px] h-[800px] rounded-full border border-blue-300 opacity-30 z-0 animate-spin-slow-global origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-400 opacity-40 z-0 animate-spin-faster-global origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-[1000px] h-[1000px] rounded-full border border-blue-200 opacity-20 z-0 animate-spin-slower-global origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            {/* Scattered Animated Dots and Stars for the entire background */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={`dot-${i}`}
                    className="absolute rounded-full bg-blue-400 dark:bg-blue-600 opacity-50 animate-float-background"
                    style={{
                        width: `${Math.random() * 8 + 4}px`, // 4-12px size
                        height: `${Math.random() * 8 + 4}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 5 + 5}s`, // 5-10s duration
                    }}
                ></div>
            ))}
            {[...Array(10)].map((_, i) => (
                <span
                    key={`star-${i}`}
                    className="absolute text-yellow-400 opacity-70 animate-float-background-star"
                    style={{
                        fontSize: `${Math.random() * 1.5 + 0.8}rem`, // 0.8rem-2.3rem size
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${Math.random() * 6 + 6}s`, // 6-12s duration
                        transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                >★</span>
            ))}


            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mt-2 md:mt-0 gap-10 z-10 p-4 relative">
                {/* Text Section */}
                <div className="text-center md:text-left mt-0 md:w-1/2">
                    <h2 className="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-fade-in-down">
                        Hi, I am Utpal Barman
                    </h2>
                    <h1 className="text-cyan-700 dark:text-cyan-400 text-xl sm:text-2xl md:text-4xl mt-3 font-semibold animate-fade-in-up">
                        <Typewriter
                            options={{
                                strings: ['A Web Developer', 'MERN STACK Developer', 'UI Designer', 'Video Editor'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                    {/* Buttons */}
                    <div className="my-6 flex flex-wrap items-center gap-4 justify-center md:justify-start px-8 animate-fade-in-up-delay-1">
                        {/* Hire Me Button - Modified to open the popup */}
                        <button
                            onClick={() => setIsHiremeOpen(true)} // Set state to true to open popup
                            type="button"
                            className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800
                                       focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800
                                       font-semibold rounded-lg text-sm px-6 py-2.5 text-center transition-all duration-300 shadow-md hover:scale-105
                                       flex-grow sm:flex-none sm:w-auto"
                        >
                            Hire Me
                        </button>


                        {/* My Resume Button */}
                        <a href="#" className="w-full sm:w-auto flex-grow sm:flex-none">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:to-purple-800
                                           focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800
                                           font-semibold rounded-lg text-sm px-6 py-2.5 text-center transition-all duration-300 shadow-md hover:scale-105
                                           w-full"
                            >
                                My Resume
                            </button>
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap sm:mb-0 mb-4 animate-fade-in-up-delay-2">
                        {socialLinks.map(({ name, icon: Icon, url, color }) => {
                            const isDarkSensitive = name === 'GitHub'; // GitHub icon needs special dark mode handling

                            return (
                                <a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden
                                               border-2 border-transparent transition-all duration-300 ease-out
                                               hover:scale-110 hover:shadow-lg focus:outline-none"
                                    aria-label={name}
                                >
                                    {/* Pulsing ring animation */}
                                    <span
                                        className="absolute inset-0 rounded-full border-2 border-solid animate-pulse-ring"
                                        style={{ borderColor: color }}
                                    ></span>
                                    {/* Hover fill effect */}
                                    <span
                                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"
                                        style={{ backgroundColor: color }}
                                    />
                                    {/* Icon */}
                                    <Icon
                                        className={`relative z-10 text-xl transition-all duration-300 ease-in-out`}
                                        style={{ color: isDarkSensitive ? 'black' : color }}
                                    />
                                    {/* Dark mode hover override for GitHub specifically */}
                                    <style>{`
                                        .dark .group:hover svg { color: ${name === 'GitHub' ? '#fff' : 'white'} !important; }
                                        .group:hover svg { color: white !important; }
                                    `}</style>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Image Section - Simplified for just the image and its immediate hover effect */}
                <div className="md:w-1/2 flex justify-center items-center relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] animate-scale-in z-10">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-indigo-500 dark:border-indigo-400 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
                            alt="Utpal Barman"
                        />
                    </div>
                </div>
            </div>

            {/* Hireme popup component */}
            <Hireme isOpen={isHiremeOpen} onClose={() => setIsHiremeOpen(false)} onSubmit={handleHiremeSubmit} />

            {/* Keyframes for animations */}
            <style>{`
                @keyframes fade-in-down {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up-delay-1 {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up-delay-2 {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.8); }
                    to { opacity: 1; transform: scale(1); }
                }

                /* Global Orbiting Rings */
                @keyframes spin-slow-global {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes spin-faster-global {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(-360deg); } /* Counter-clockwise */
                }
                @keyframes spin-slower-global {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }

                /* Floating Background Elements */
                @keyframes float-background {
                    0% { transform: translate(0, 0); opacity: 0.5; }
                    25% { transform: translate(10px, -10px); opacity: 0.7; }
                    50% { transform: translate(-10px, 15px); opacity: 0.4; }
                    75% { transform: translate(5px, -5px); opacity: 0.6; }
                    100% { transform: translate(0, 0); opacity: 0.5; }
                }
                @keyframes float-background-star {
                    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
                    25% { transform: translate(15px, -15px) rotate(45deg); opacity: 0.9; }
                    50% { transform: translate(-15px, 20px) rotate(90deg); opacity: 0.6; }
                    75% { transform: translate(10px, -10px) rotate(135deg); opacity: 0.8; }
                    100% { transform: translate(0, 0) rotate(180deg); opacity: 0.7; }
                }

                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s forwards; }
                .animate-fade-in-up-delay-1 { animation: fade-in-up-delay-1 0.8s ease-out 0.4s forwards; }
                .animate-fade-in-up-delay-2 { animation: fade-in-up-delay-2 0.8s ease-out 0.6s forwards; }
                .animate-scale-in { animation: scale-in 0.8s ease-out 0.8s forwards; }

                .animate-spin-slow-global { animation: spin-slow-global 40s linear infinite; }
                .animate-spin-faster-global { animation: spin-faster-global 30s linear infinite; }
                .animate-spin-slower-global { animation: spin-slower-global 50s linear infinite; }

                .animate-float-background { animation: float-background var(--animation-duration, 8s) ease-in-out infinite alternate; }
                .animate-float-background-star { animation: float-background-star var(--animation-duration, 10s) ease-in-out infinite alternate; }


                @keyframes pulse-ring {
                    0% { transform: scale(0.9); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(0.9); opacity: 0.5; }
                }
                .animate-pulse-ring { animation: pulse-ring 2s infinite ease-in-out; }

                /* Specific dark mode override for GitHub if needed */
                .dark .group:hover svg { color: white !important; }
                .group:hover svg { color: white !important; }
            `}</style>
        </div>
    );
};

export default Home;