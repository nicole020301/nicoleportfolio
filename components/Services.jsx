export default function Services() {
    const services = [
        {
            name: 'Web Design',
            emoji: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            description: 'Creating immersive, interactive web experiences that push the boundaries of what\'s possible in the digital world.',
            tags: ['Next.js', 'Three.js'],
            gradient: 'from-purple-600/20 to-violet-900/20',
            border: 'hover:border-purple-500/60',
            glow: 'hover:shadow-[0_0_30px_rgba(184,32,230,0.2)]',
        },
        {
            name: 'UI / UX Design',
            emoji: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            description: 'Developing user-centered, intuitive interfaces for XR experiences that provide seamless interaction and engagement.',
            tags: ['Design Systems'],
            gradient: 'from-orange-600/20 to-amber-900/20',
            border: 'hover:border-orange-500/60',
            glow: 'hover:shadow-[0_0_30px_rgba(218,125,32,0.2)]',
        },
        {
            name: 'Graphics Design',
            emoji: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            description: 'Creating stunning visual designs that enhance the immersive nature of XR environments, blending creativity with technical expertise.',
            tags: ['Canva', 'Sketchup'],
            gradient: 'from-pink-600/20 to-rose-900/20',
            border: 'hover:border-pink-500/60',
            glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
        },
    ];

    return (
        <div id="services" className="relative w-full px-[8%] xl:px-[12%] py-20 scroll-mt-20 overflow-hidden">

            {/* Faint ambient orb */}
            <div className="hero-orb w-[350px] h-[350px] bg-purple-600/10 top-10 right-0" style={{ animationDelay: '1s' }} />

            {/* ── Header ── */}
            <div className="text-center mb-16">
                <div className="section-badge justify-center mx-auto w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b820e6] inline-block" />
                    What I Offer
                </div>
                <h2 className="text-4xl sm:text-5xl font-Ovo font-semibold mb-4">
                    My <span className="gradient-text">Services</span>
                </h2>
                <p className="max-w-xl mx-auto font-Ovo text-gray-600 dark:text-gray-400 leading-relaxed">
                    I am a frontend developer specializing in building innovative and immersive digital experiences using XR technology.
                </p>
            </div>

            {/* ── Cards ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className={`beam-card relative rounded-2xl p-8 border border-white/10 dark:border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm ${service.border} ${service.glow} transition-all duration-400 cursor-default group overflow-hidden`}
                    >
                        {/* Top glow line */}
                        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#b820e6]/50 to-transparent" />

                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {service.emoji}
                        </div>

                        <h3 className="text-xl font-semibold font-Ovo mb-3">{service.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-Ovo mb-6">
                            {service.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 text-gray-700 dark:text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
