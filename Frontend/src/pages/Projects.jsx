import React from 'react';
import { motion } from 'framer-motion'; // For more advanced animations
import { useInView } from 'react-intersection-observer'; // For scroll-triggered animations

const projects = [
    {
        id: 1,
        title: "JOB HIVE",
        image: "../../public/jobhive.png", // Ensure these paths are correct in your project structure
        languages: ["React", "Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/utpal2003/online-exam-system"
    },
    {
        id: 2,
        title: "Online Voting System",
        image: "../../public/Backend.png",
        languages: ["Node.js", "Express.js", "MongoDB"],
        link: "https://github.com/utpal2003/library-management-c"
    },
    {
        id: 3,
        title: "Portfolio Website",
        image: "/projects/portfolio.png",
        languages: ["React", "TailwindCSS"],
        link: "https://utpal-portfolio.vercel.app/"
    },
    {
        id: 4,
        title: "ONLINE QUIZ SYSTEM",
        image: "../../public/quiz.png",
        languages: ["React", "TailwindCSS"],
        link: "https://utpal-portfolio.vercel.app/"
    },
    {
        id: 5,
        title: "HR MANAGEMENT SYSTEM",
        image: "../../public/hrmanage.png",
        languages: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
        link: "https://glistening-taiyaki-43eaf0.netlify.app/admin-dashboard"
    },
    {
        id: 6,
        title: "TIC TAC TOE GAME",
        image: "",
        languages: ["HTML", "CSS", "JavaScript"],
        link: "https://tic-tac-toe-game-one-bice.vercel.app/"
    }


];

const Projects = () => {
    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delays the animation of each child
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    // For scroll-triggered animation for the main title
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true, // Animation triggers only once when it comes into view
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // For scroll-triggered animation for project cards
    const { ref: projectsRef, inView: projectsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 md:px-10  bg-gray-50 dark:bg-gray-900 min-h-screen"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    ref={titleRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16 relative"
                >
                    <span className="relative z-10 mb-4 text-2xl md:text-5xl">My Projects</span>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[40%] h-2 bg-indigo-600 rounded-full dark:bg-teal-500 animate-pulse  "></span>
                </motion.h2>

                <motion.div
                    ref={projectsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={projectsInView ? "show" : "hidden"}
                    className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map(({ id, title, image, languages, link }) => (
                        <motion.div
                            key={id}
                            variants={itemVariants}
                            className="relative group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-700 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-gray-200 dark:border-gray-700 cursor-pointer" // Card background adjusted for solid colors
                            onClick={() => window.open(link, "_blank")} // Makes the whole card clickable
                        >
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-56 object-fit  transform group-hover:scale-110 transition duration-700 ease-in-out"
                            />
                            <div className="p-6 text-gray-800 dark:text-white">
                                <h3 className="text-2xl font-bold mb-3 text-indigo-700 dark:text-teal-400">{title}</h3>
                                <p className="text-base text-gray-700 dark:text-gray-300">
                                    <strong className="font-semibold">Technologies:</strong> {languages.join(", ")}
                                </p>
                            </div>

                            {/* View Button Overlay - Simplified, as card is clickable */}
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center rounded-3xl">
                                <span className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-full text-md font-medium hover:from-white hover:to-white hover:text-indigo-800 hover:border-2 hover:border-indigo-800 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110">
                                    View Project
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;