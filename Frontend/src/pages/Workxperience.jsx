import React, { useEffect, useRef, useState } from 'react';

// Custom hook to detect when an element is in view
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

const WorkExperience = () => {
  return (
    <section
      id="work_experience"
      className="py-20 px-6 bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-black text-gray-900 dark:text-white font-inter min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-center relative text-gray-900 dark:text-white after:absolute after:w-24 after:h-1 after:bg-indigo-600 after:dark:bg-indigo-400 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:rounded-full animate-fade-in-down">
          My <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
        </h2>

        <div className="space-y-14">
          <ExperienceCard
            title="Web Development Intern – Indomitech Group"
            period="June 16, 2025 – Present"
            description="Working as a Full Stack Developer on a comprehensive Human Resource Management System using the MERN stack. Handling frontend and backend tasks like authentication, dashboard UI, RESTful APIs, and real-time data handling."
            animation="animate-slide-in-right"
          />

          <ExperienceCard
            title="MERN Stack Development Internship – Euphoria GenX"
            period="Feb 21, 2024 – Apr 24, 2024"
            description="Completed a MERN stack internship focused on building a full-stack Exam Registration System with authentication, form management, backend APIs, and MongoDB data operations."
            animation="animate-slide-in-left"
          />

          <ExperienceCard
            title="Key Tech Skills"
            description="Proficient in JavaScript, React.js, Node.js, Express.js, MongoDB, Git, GitHub, Tailwind CSS, and REST APIs. Passionate about learning new tools and developing scalable, performant web applications."
            animation="animate-fade-in-up"
          />

          <div className="text-center animate-fade-in-up-delayed">
            <p className="italic text-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-indigo-200 dark:border-indigo-700 p-6 rounded-lg shadow-xl">
              As a fresher, I bring enthusiasm, adaptability, and a solid foundation in MERN stack development. I'm eager to contribute to innovative teams and grow as a developer through real-world challenges.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up-delayed {
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
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 0.8s ease-out forwards;
          animation-delay: 0.4s;
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

const ExperienceCard = ({ title, period, description, animation }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`
        bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg transition-all duration-700 transform
        hover:scale-[1.02] hover:shadow-indigo-500/30 hover:border hover:border-indigo-400 dark:hover:border-indigo-600
        ${inView ? animation : 'opacity-0 translate-y-10'}
      `}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h3>
      {period && <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{period}</p>}
      <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">{description}</p>
    </div>
  );
};

export default WorkExperience;