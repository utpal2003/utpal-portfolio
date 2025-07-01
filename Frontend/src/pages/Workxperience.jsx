import React, { useEffect, useRef, useState } from 'react';

// Custom hook for Intersection Observer
const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Disconnect after the element is in view to trigger animation once
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, inView];
};

const WorkExperience = () => {
  return (
    <section
      id="work_experience"
      className="py-16 px-4 sm:px-6 md:px-10 bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-black text-gray-900 dark:text-white font-inter min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center relative after:absolute after:w-20 after:h-1 after:bg-indigo-600 after:dark:bg-indigo-400 after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:rounded-full animate-fade-in-down">
          My <span className="text-indigo-600 dark:text-indigo-400">Journey</span>
        </h2>

        <div className="space-y-10">
          {/* MERN Course Card */}

          {/* Internship Card */}
          <ExperienceCard
            title="Web Development Intern – Indomitech Group"
            period="June 16, 2025 – Present"
            description="Working as a Full Stack Developer on a comprehensive Human Resource Management System using the MERN stack. I'm handling both frontend and backend tasks, including user authentication, dashboard design, API development, and real-time data management."
            animation="animate-slide-in-right"
          />


          <ExperienceCard
            title="MERN Stack Development Internship – Euphoria GenX"
            period="Feb 21, 2024 – Apr 24, 2024"
            description="Completed a MERN Stack internship program at Euphoria GenX. Gained hands-on experience by building a full-stack Exam Registration System project, focusing on authentication, form handling, API integration, and MongoDB database operations."
            animation="animate-slide-in-left"
          />





          {/* Tech Skills Card */}
          <ExperienceCard
            title="Key Tech Skills"
            description="Proficient in **JavaScript**, **React.js**, **Node.js**, **Express.js**, **MongoDB**, **Git**, **GitHub**, **Tailwind CSS**, and **REST APIs**. I'm passionate about learning new technologies and building robust, scalable, and responsive web applications."
            animation="animate-fade-in-up"
          />

          {/* Fresher Note */}
          <div className="mt-10 text-center animate-fade-in-up-delayed">
            <p className="italic text-lg text-gray-700 dark:text-gray-300 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl border border-indigo-200 dark:border-indigo-700">
              As a **fresher**, I bring enthusiasm, adaptability, and a strong foundation in the MERN stack. I'm eager to contribute to dynamic teams and grow as a full-stack developer. My dedication to continuous learning drives me to tackle new challenges head-on.
            </p>
          </div>
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
          animation-delay: 0.2s; /* Slightly delayed for sequential effect */
        }
         .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 0.8s ease-out forwards;
          animation-delay: 0.4s; /* Even more delayed for the final card */
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

// Reusable Experience Card component
const ExperienceCard = ({ title, period, description, animation }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`
        bg-gray-100 dark:bg-gray-800 p-7 rounded-xl shadow-xl
        transform transition-all duration-700 ease-out
        hover:scale-[1.02] hover:shadow-indigo-500/30 hover:border-2 border-transparent hover:dark:border-indigo-600 hover:border-indigo-400
        ${inView ? animation : 'opacity-0 translate-y-10'}
      `}
    >
      <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{title}</h3>
      {period && <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{period}</p>}
      <p className="mt-2 text-gray-800 dark:text-gray-200 leading-relaxed">{description}</p>
    </div>
  );
};

export default WorkExperience;