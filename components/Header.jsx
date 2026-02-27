'use client';

import { useState } from 'react';

export default function Header() {
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [canDownload, setCanDownload] = useState(false);

    const correctPassword = 'myresume020301';

    const handleResumeClick = () => setShowPasswordInput(true);

    const handleDownloadRequest = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setPasswordError('');
            setCanDownload(true);
            setShowPasswordInput(false);
        } else {
            setPasswordError('Incorrect password. Please try again.');
        }
    };

    return (
        <div id="top" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

            {/* ── Grid background ── */}
            <div className="absolute inset-0 grid-bg" />

            {/* ── Gradient fade over grid ── */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-darkTheme/70 dark:via-darkTheme/50 dark:to-darkTheme" />

            {/* ── Floating ambient orbs ── */}
            <div className="hero-orb w-[520px] h-[520px] bg-purple-600/25 -top-24 -left-32"
                 style={{ animationDelay: '0s' }} />
            <div className="hero-orb w-[380px] h-[380px] bg-orange-500/20 bottom-10 -right-16"
                 style={{ animationDelay: '2.5s' }} />
            <div className="hero-orb w-[260px] h-[260px] bg-purple-300/15 top-24 right-1/4"
                 style={{ animationDelay: '1.2s' }} />

            {/* ── Main content ── */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

                {/* Profile picture */}
                <div className="animate-fade-in-up relative inline-block mb-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] blur-xl opacity-60 scale-110" />
                    <img
                        src="/assets/nicolepic.jpg"
                        alt="Nicole"
                        className="relative w-32 h-32 rounded-full object-cover profile-glow border-2 border-white/30"
                    />
                    <span className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-md" />
                </div>

                {/* Greeting row */}
                <div className="animate-fade-in-up-d1 flex items-center justify-center gap-3 mb-5">
                    <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#b820e6]" />
                    <p className="font-Ovo text-lg text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        Hi! I&apos;m Nicole
                        <img src="/assets/hand-icon.png" alt="" className="w-6 animate-float" />
                    </p>
                    <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#da7d20]" />
                </div>

                {/* Main heading */}
                <h1 className="animate-fade-in-up-d1 text-4xl sm:text-6xl lg:text-7xl font-Ovo font-semibold leading-tight mb-6">
                    Web <span className="shimmer-text">XR</span> &amp;{' '}
                    <span className="shimmer-text">Blockchain</span>
                    <br className="hidden sm:block" /> Developer
                </h1>

                {/* Subheading */}
                <p className="animate-fade-in-up-d2 max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10">
                    Focused on creating immersive XR experiences and secure blockchain solutions —
                    pushing the boundaries of what&apos;s possible in the digital world.
                </p>

                {/* ── CTA buttons ── */}
                <div className="animate-fade-in-up-d3 flex flex-col sm:flex-row items-center justify-center gap-4">

                    {/* Contact me
                    <a
                        href="#contact"
                        className="btn-gradient px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/30"
                    >
                        Contact me
                        <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                    </a> */}

                    {/* Resume request
                    {!showPasswordInput && !canDownload && (
                        <button
                            onClick={handleResumeClick}
                            className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-sm hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-glow-sm transition-all duration-300 flex items-center gap-2 font-medium"
                        >
                            Request my resume
                            <img src="/assets/right-arrow-bold.png" alt="" className="w-4 dark:invert" />
                        </button>
                    )} */}

                    {/* Password input
                    {showPasswordInput && !canDownload && (
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="px-6 py-3 rounded-full border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                            />
                            {passwordError && (
                                <p className="text-red-400 text-sm">{passwordError}</p>
                            )}
                            <button
                                onClick={handleDownloadRequest}
                                className="btn-gradient px-6 py-3 rounded-full text-white font-medium shadow-lg shadow-purple-500/30"
                            >
                                Submit
                            </button>
                        </div>
                    )} */}

                    {/* Download resume
                    {canDownload && (
                        <a
                            href="/assets/my resume.pdf"
                            download
                            className="btn-gradient px-8 py-3 rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/30"
                        >
                            Download Resume
                            <img src="/assets/download-icon.png" alt="" className="w-4" />
                        </a>
                    )} */}
                </div>
            </div>
        </div>
    );
}
