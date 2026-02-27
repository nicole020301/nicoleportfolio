'use client'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
    const sideMenuRef = useRef();
    const navRef      = useRef();
    const navLinkRef  = useRef();
    const [scrolled, setScrolled] = useState(false);

    const openMenu  = () => { sideMenuRef.current.style.transform = 'translateX(-16rem)'; }
    const closeMenu = () => { sideMenuRef.current.style.transform = 'translateX(16rem)'; }

    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
        localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }

    useEffect(() => {
        // Apply saved theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const onScroll = () => {
            const past = window.scrollY > 50;
            setScrolled(past);
            if (past) {
                navRef.current?.classList.add('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'dark:bg-darkTheme/80', 'dark:shadow-white/10');
                navLinkRef.current?.classList.remove('bg-white/80', 'shadow-sm', 'dark:border', 'dark:border-white/20', 'dark:bg-transparent');
            } else {
                navRef.current?.classList.remove('bg-white/80', 'backdrop-blur-xl', 'shadow-sm', 'dark:bg-darkTheme/80', 'dark:shadow-white/10');
                navLinkRef.current?.classList.add('bg-white/80', 'shadow-sm', 'dark:border', 'dark:border-white/20', 'dark:bg-transparent');
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { href: '#top',     label: 'Home' },
        { href: '#about',   label: 'About' },
        { href: '#services',label: 'Services' },
        { href: '#work',    label: 'Works' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <>
            {/* ── Light-mode colour burst (top right) ── */}
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img src="/assets/header-bg-color.png" alt="" className="w-full" />
            </div>

            <nav
                ref={navRef}
                className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300"
            >
                {/* Logo */}
                <a href="#top" className="flex-shrink-0">
                    <img src="/assets/logolightmode.png" alt="Logo" className="w-28 cursor-pointer dark:hidden" />
                    <img src="/assets/logodarkmode.png"  alt="Logo" className="w-28 cursor-pointer hidden dark:block" />
                </a>

                {/* Desktop nav links pill */}
                <ul
                    ref={navLinkRef}
                    className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 bg-white/80 shadow-sm backdrop-blur-md font-Ovo dark:border dark:border-white/20 dark:bg-transparent transition-all duration-300"
                >
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="relative text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#d970f5] transition-colors duration-200 group"
                            >
                                {label}
                                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#b820e6] to-[#da7d20] rounded-full transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right controls */}
                <div className="flex items-center gap-3">
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:border-purple-400 transition-colors duration-200"
                    >
                        <img src="/assets/moon_icon.png" alt="dark"  className="w-4 dark:hidden" />
                        <img src="/assets/sun_icon.png"  alt="light" className="w-4 hidden dark:block" />
                    </button>

                    {/* Desktop contact button */}
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 dark:border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:border-purple-500 hover:shadow-glow-sm font-Ovo text-sm transition-all duration-300"
                    >
                        Contact
                        <img src="/assets/arrow-icon.png"      alt="" className="w-3 dark:hidden" />
                        <img src="/assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                    </a>

                    {/* Mobile hamburger */}
                    <button className="block md:hidden" onClick={openMenu}>
                        <img src="/assets/menu-black.png" alt="" className="w-6 dark:hidden" />
                        <img src="/assets/menu-white.png" alt="" className="w-6 hidden dark:block" />
                    </button>
                </div>

                {/* ── Mobile side-menu ── */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen
                               bg-white/95 dark:bg-darkHover backdrop-blur-xl border-l border-gray-100 dark:border-white/10
                               transition-transform duration-500 font-Ovo dark:text-white shadow-2xl"
                >
                    <button className="absolute right-5 top-5" onClick={closeMenu}>
                        <img src="/assets/close-black.png" alt="close" className="w-5 cursor-pointer dark:hidden" />
                        <img src="/assets/close-white.png" alt="close" className="w-5 cursor-pointer hidden dark:block" />
                    </button>

                    {/* Gradient accent bar */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#b820e6] to-[#da7d20] rounded-full" />

                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={closeMenu}
                                className="text-gray-700 dark:text-gray-200 hover:text-[#b820e6] dark:hover:text-[#d970f5] transition-colors duration-200 font-medium"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
