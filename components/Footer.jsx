export default function Footer() {
    const links = [
        { label: 'Home',     href: '#top' },
        { label: 'About',    href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Works',    href: '#work' },
        { label: 'Contact',  href: '#contact' },
    ];

    return (
        <footer className="relative border-t border-gray-100 dark:border-white/8 overflow-hidden">

            {/* Top gradient line */}
            <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#b820e6]/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-[8%] xl:px-[6%] py-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

                    {/* Logo + tagline */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <a href="#top">
                            <img src="/assets/logolightmode.png" alt="Logo" className="w-32 dark:hidden" />
                            <img src="/assets/logodarkmode.png"  alt="Logo" className="w-32 hidden dark:block" />
                        </a>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-Ovo max-w-xs text-center md:text-left leading-relaxed">
                            Web XR &amp; Blockchain Developer — crafting immersive digital futures.
                        </p>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                        {links.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#b820e6] dark:hover:text-[#d970f5] transition-colors duration-200 font-Ovo"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/nicole020301"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center hover:border-purple-500 hover:shadow-glow-sm transition-all duration-200"
                            title="GitHub"
                        >
                            {/* GitHub icon (inline SVG) */}
                            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a
                            href="mailto:imnicoledellamas@gmail.com"
                            className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center hover:border-purple-500 hover:shadow-glow-sm transition-all duration-200"
                            title="Email"
                        >
                            <img src="/assets/mail_icon.png"      alt="email" className="w-4 dark:hidden" />
                            <img src="/assets/mail_icon_dark.png" alt="email" className="w-4 hidden dark:block" />
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-gray-100 dark:border-white/8">
                    <p className="text-xs text-gray-500 dark:text-gray-500 font-Ovo">
                        © 2026 Nicole A. De Llamas · Web XR Developer · All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-600 font-Ovo">
                        Built with Next.js &amp; Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
