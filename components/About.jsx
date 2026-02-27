export default function About() {
    const tools = [
        { name: 'VS Code',     icon: '/assets/techstack/vscode.png' },
        { name: 'Git',         icon: '/assets/techstack/git.png' },
        { name: 'HTML',        icon: '/assets/techstack/HTML.png' },
        { name: 'JavaScript',  icon: '/assets/techstack/Javascript.png' },
        { name: 'Three.js',    icon: '/assets/techstack/Threejs.png' },
        { name: 'Vite',        icon: '/assets/techstack/vite.png' },
        { name: 'C++',         icon: '/assets/techstack/C++.png' },
        { name: 'MySQL',       icon: '/assets/techstack/Mysql.png' },
        { name: 'React',       icon: '/assets/techstack/react.svg' },
        { name: 'Meta',        icon: '/assets/techstack/Meta.png' },
        { name: 'Canva',       icon: '/assets/techstack/canva.png' },
        { name: 'Sketchup',    icon: '/assets/techstack/Sketchup.png' },
    ];

    const stats = [
        {
            value: 'Projects', sub: 'Built & deployed',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#b820e6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            value: 'BS ECE', sub: 'Electronics & Comms Eng.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#b820e6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 1.5 4-1.5" />
                </svg>
            ),
        },
        {
            value: 'Focus', sub: 'Immersive experiences',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#b820e6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <div id="about" className="relative w-full px-[8%] xl:px-[12%] py-20 scroll-mt-20 overflow-hidden">

            {/* Faint background orbs */}
            <div className="hero-orb w-[400px] h-[400px] bg-purple-600/10 -top-20 -left-20 opacity-50" />
            <div className="hero-orb w-[300px] h-[300px] bg-orange-500/10 bottom-0 right-0 opacity-40" style={{ animationDelay: '3s' }} />

            <div className="relative z-10 flex flex-col lg:flex-row items-start gap-16">

                {/* â”€â”€ Left column â”€â”€ */}
                <div className="w-full lg:w-1/2">
                    {/* Section badge */}
                    <div className="section-badge">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] inline-block" />
                        Who I Am
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold mb-6 leading-tight">
                        About <span className="gradient-text">me</span>
                    </h2>

                    <p className="mb-10 max-w-xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                        Hi, I&apos;m Nicole a Web XR Developer specializing in crafting immersive XR experiences.
                        I combine cutting-edge technology with innovative design to create digital environments that
                        captivate and engage users. Whether developing virtual spaces, designing interactive applications,
                        or enhancing digital experiences, I focus on delivering forward-thinking, reliable solutions.
                        Each project is approached strategically, ensuring seamless user interaction and thoughtful
                        execution from concept to deployment.
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                        {stats.map((item) => (
                            <div key={item.value} className="glow-card gradient-border beam-card rounded-2xl p-5 cursor-default">
                                <span className="mb-2 block">{item.icon}</span>
                                <p className="text-3xl font-bold gradient-text font-Ovo">{item.value}</p>
                                {/* <p className="font-semibold text-sm mt-1">{item.label}</p> */}
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* â”€â”€ Right column â”€â”€ */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">

                    {/* Profile image with decorative ring */}
                    <div className="relative mb-10">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#b820e6] to-[#da7d20] blur-2xl opacity-25 scale-110" />
                        <img
                            src="/assets/nicolepic.jpg"
                            alt="Nicole"
                            className="relative rounded-3xl w-64 sm:w-80 object-cover shadow-xl border border-white/20"
                        />

                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-darkHover border border-gray-100 dark:border-white/10 shadow-lg rounded-2xl px-4 py-2.5 flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">Available for projects</span>
                        </div>

                        {/* Circular text element */}
                        <div className="hidden xl:flex bg-white dark:bg-darkHover w-20 h-20 absolute -top-6 -left-6 rounded-full border border-gray-100 dark:border-white/10 shadow-md items-center justify-center">
                            <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow absolute" />
                            <img src="/assets/dev_icon.png"       alt="" className="w-8 relative z-10" />
                        </div>
                    </div>

                    {/* Tech stack */}
                    <div className="w-full">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px flex-1 bg-gradient-to-r from-[#b820e6]/40 to-transparent" />
                            <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 font-Ovo">
                                Tech Stack
                            </h4>
                            <div className="h-px flex-1 bg-gradient-to-l from-[#da7d20]/40 to-transparent" />
                        </div>
                        <ul className="grid grid-cols-6 gap-3">
                            {tools.map((tool) => (
                                <li
                                    key={tool.name}
                                    title={tool.name}
                                    className="tech-item flex items-center justify-center aspect-square rounded-xl cursor-pointer"
                                >
                                    <img src={tool.icon} alt={tool.name} className="w-7 h-7 object-contain" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
