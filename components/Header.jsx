'use client'; // Ensure this is a Client Component

import { useState } from 'react';

export default function Header() {
    const [showPasswordInput, setShowPasswordInput] = useState(false);  // Show password input after click
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [canDownload, setCanDownload] = useState(false); // To control the visibility of the "Download my resume" button

    // Correct password for download
    const correctPassword = 'myresume020301';  // Replace with your desired password

    const handleResumeClick = () => {
        // Show the password input when "My Resume" is clicked
        setShowPasswordInput(true);
    };

    const handleDownloadRequest = (e) => {
        e.preventDefault();

        if (password === correctPassword) {
            // If password is correct, allow the download
            setPasswordError('');
            setCanDownload(true);  // Allow download by showing the button
            setShowPasswordInput(false); // Hide the password input and submit button after correct password
        } else {
            // Show error message if the password is incorrect
            setPasswordError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="\assets\nicolepic.jpg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Nicole 
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">a Web XR and Blockchain Developer</h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                Focused on creating immersive XR experiences and secure blockchain solutions, pushing the boundaries of what's possible in the digital world.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                {/* "My Resume" Button */}
                {!showPasswordInput && !canDownload && (
                    <button
                        onClick={handleResumeClick}
                        className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                        request my resume <img src="/assets/right-arrow-bold.png" alt="" className="w-4 dark:invert" />
                    </button>
                )}

                {/* Conditional rendering of password input */}
                {showPasswordInput && !canDownload && (
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4" style={{ transform: 'translateY(-10px)' }}>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        <button
                            onClick={handleDownloadRequest}
                            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                            Submit
                        </button>
                    </div>
                )}

                {/* Show the "Download my resume" after password is correct */}
                {canDownload && (
                    <div className="mt-4" style={{ transform: 'translateY(-10px)' }}> {/* Move it upward */}
                        <a href="/assets/my resume.pdf"
                            download
                            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2">
                            Download <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}