import React, { useEffect, useRef, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGithub, FaGitAlt, FaNpm, FaJava, FaDocker,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiPython, SiC, SiPostman, SiCplusplus
} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";

// Tech stack categories
const techStack = {
  Languages: [
    { name: 'C', icon: <SiC className="text-blue-600" /> },
    { name: 'C++', icon: <SiCplusplus className="text-gray-700" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  ],
  Frameworks: [
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
  ],
  Databases: [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
    { name: 'VS Code', icon: <BiLogoVisualStudio className="text-blue-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-600" /> },
    { name: 'NPM', icon: <FaNpm className="text-red-600" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
  ],
};

const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, inView];
};

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-16 px-4 sm:px-6 md:px-10 bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-black text-gray-900 dark:text-white min-h-screen flex items-center justify-center font-inter"
    >
      <div className="max-w-7xl mx-auto text-center w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fade-in-down">
          My <span className="text-indigo-600 dark:text-indigo-400">Tech Stack</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          A comprehensive list of languages, frameworks, databases, and tools I use to build projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => {
            const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
            const animationClass = index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right';

            return (
              <div
                key={category}
                ref={ref}
                className={`
                  bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-7
                  transform transition-all duration-700 ease-out
                  hover:scale-[1.02] hover:shadow-indigo-500/30 hover:border-2 border-transparent hover:dark:border-indigo-600 hover:border-indigo-400
                  ${inView ? animationClass : 'opacity-0 translate-y-10'}
                `}
              >
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-5 border-b border-indigo-300 dark:border-indigo-700 pb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">


                  {items.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center text-center w-24 p-3 rounded-lg border border-transparent
      hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="text-5xl mb-2 transition-transform duration-200 hover:scale-110">
                        {icon}
                      </div>
                      <span className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                        {name}
                      </span>
                    </div>
                  ))}



                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.7s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
