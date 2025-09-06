import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Hireme = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [hiremeFormData, setHiremeFormData] = useState({
        fullName: '',
        email: '',      
        company: '',
        jobDetails: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHiremeFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, email, company, jobDetails } = hiremeFormData;

        if (!fullName.trim() || !email.trim() || !jobDetails.trim()) {
            toast.error('Please fill in all required fields (Name, Email, Job Details).', {
                position: 'top-center',
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/hireme", {
                fullName,
                email,
                company,
                jobDetails
            });

            toast.success(
                <div className="text-center">
                    <h2 className="text-lg font-bold text-green-900 dark:text-green-300">Thank You!</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-600">Your request has been submitted.</p>
                </div>,
                {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                }
            );

            setHiremeFormData({ fullName: '', email: '', company: '', jobDetails: '' });
            setTimeout(() => onClose(), 500);
        } catch (err) {
            toast.error("Something went wrong. Please try again later.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            console.error("POST /api/hireme failed:", err);
        }
    };

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/react-toastify/10.0.5/ReactToastify.min.css"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />

            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black bg-opacity-50 animate-fade-in-overlay">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 w-[90%] max-w-md relative animate-popup-enter transform transition-all duration-300">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 text-3xl font-bold transition-colors duration-200"
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    <h3 className="text-2xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">
                        Hire Me! Let's Work Together
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="hireme-fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="hireme-fullName"
                                value={hiremeFormData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                                placeholder="Full Name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="hireme-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="hireme-email"
                                value={hiremeFormData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="hireme-company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Company (Optional)
                            </label>
                            <input
                                type="text"
                                name="company"
                                id="hireme-company"
                                value={hiremeFormData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                                placeholder="Your Company Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="hireme-jobDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Job Details
                            </label>
                            <textarea
                                name="jobDetails"
                                id="hireme-jobDetails"
                                rows="4"
                                value={hiremeFormData.jobDetails}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500 resize-y transition-all duration-200"
                                placeholder="Briefly describe the job or project details..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-md shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>

                {/* Animations */}
                <style>{`
                    @keyframes fade-in-overlay {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    .animate-fade-in-overlay {
                        animation: fade-in-overlay 0.3s ease-out forwards;
                    }

                    @keyframes popup-enter {
                        0% { transform: scale(0.8) translateY(50px); opacity: 0; }
                        60% { transform: scale(1.05) translateY(-10px); opacity: 1; }
                        100% { transform: scale(1) translateY(0); opacity: 1; }
                    }
                    .animate-popup-enter {
                        animation: popup-enter 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
                    }
                `}</style>
            </div>
        </>
    );
};

export default Hireme;
