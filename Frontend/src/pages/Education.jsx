import React, { useEffect, useRef, useState } from "react";

// Images
import lightAdamas from '../../public/ADAMAS UNIVERSITY.avif';
import darkAdamas from '../../public/ADMAS DARK MODE.jpg';
import lightPbc from '../../public/pbc1light.jpg';
import darkPbc from '../../public/pbc2.webp';
import schoolPhoto from '../../public/school.jpg';

// Hook to detect dark mode
const useDarkMode = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkDark = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkDark(); // Initial check

        const observer = new MutationObserver(checkDark);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return isDark;
};

const Education = () => {
    const isDark = useDarkMode();

    const [mcaVisible, setMcaVisible] = useState(false);
    const [collegeVisible, setCollegeVisible] = useState(false);
    const [schoolVisible, setSchoolVisible] = useState(false);

    const mcaRef = useRef(null);
    const collegeRef = useRef(null);
    const schoolRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.3,
        };

        const createObserver = (ref, setVisible) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            if (ref.current) observer.observe(ref.current);
        };

        createObserver(mcaRef, setMcaVisible);
        createObserver(collegeRef, setCollegeVisible);
        createObserver(schoolRef, setSchoolVisible);
    }, []);

    const cardClasses = `relative bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden 
                       transform transition-all duration-700 ease-out hover:scale-[1.03] hover:shadow-2xl`;

    const textBase = "text-gray-700 dark:text-gray-300";
    const subText = "text-sm text-gray-600 dark:text-gray-400";

    return (
        <div className="py-12 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-slate-950 w-full" id="education">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">Education Details</h2>
                <hr className="border-t-2 border-gray-300 dark:border-gray-700 mb-8 w-1/4 md:w-2/6 mx-auto" />

                <div className="space-y-12 mt-10">
                    {/* MCA - Adamas */}
                    <div
                        ref={mcaRef}
                        className={`${cardClasses} ${mcaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} md:flex md:items-center bg-gray-50 dark:bg-gray-800`}
                    >
                        <div className="relative w-full md:w-1/3 h-64 md:h-60 overflow-hidden">
                            <img
                                src={isDark ? darkAdamas : lightAdamas}
                                alt="Adamas University"
                                className="w-full h-full object-cover object-center transition-transform duration-300"
                            />
                        </div>
                        <div className="relative p-6 md:p-8 md:w-2/3">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-cyan-400 mb-2">
                                Master of Computer Applications (MCA)
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-1">Adamas University, Kolkata</p>
                            <p className="text-sm text-gray-700 dark:text-gray-400">Department : Computer Science and Engineering ( CSE)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">August 2024 - Present</p>

                            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 dark:text-gray-300">
                                <li>Specialized in Full-Stack Development</li>
                            </ul>
                        </div>
                    </div>


                    {/* BCA - College */}
                    <div
                        ref={collegeRef}
                        className={`${cardClasses} ${collegeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} md:flex md:flex-row-reverse md:items-center`}
                    >
                        <div className="relative w-full md:w-1/3 h-64 md:h-60 overflow-hidden">
                            <img
                                src={isDark ? darkPbc : lightPbc}
                                alt="Panskura Banamali College"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>



                        <div className="relative p-6 md:p-8 md:w-2/3">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-cyan-400 mb-2">Bachelor of Computer Applications (BCA)</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-1">Panskura Banamali College, West Bengal</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">June 2021 - July 2024</p>
                            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700 dark:text-gray-300">
                                {/* <li>Graduated with Distinction</li> */}
                                <li>Focused on Web Development & Java</li>
                            </ul>
                        </div>
                    </div>


                    {/* School Section */}
                    <div
                        ref={schoolRef}
                        className={`${cardClasses} ${schoolVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} md:flex md:items-center`}
                    >
                        <div className="relative w-full md:w-1/3 h-64 md:h-60 overflow-hidden">
                            <img
                                src={schoolPhoto}
                                alt="High School"
                                className="w-full h-full object-cover object-center brightness-150 md:brightness-100 transition-transform duration-300 "
                            />
                            <div className="absolute inset-0 bg-black opacity-30 md:hidden" />
                        </div>

                        <div className="relative p-6 md:p-8 md:w-2/3">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-cyan-400 mb-2">
                                Secondary & Higher Secondary Education
                            </h3>
                            <p className={`${textBase} mb-1`}>
                                Bishnupur Union High School (H.S)
                            </p>
                            <p className={subText}>
                                Madhyamik: 67% (2019) | Higher Secondary: 82% (2021)
                            </p>
                            <p className={subText}>
                                Stream: Science with Computer Applications
                            </p>
                            <ul className={`list-disc list-inside mt-3 space-y-1 ${textBase}`}>

                                <li>Completed practical labs in Biology, Chemistry, Physics</li>
                                <li>Scored 82% in WBCHSE Higher Secondary Examination</li>
                            </ul>
                        </div>




                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;
