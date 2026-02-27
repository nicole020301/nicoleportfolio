'use client';

import { useState, useRef } from 'react';

export default function Work() {
    const [activePanel, setActivePanel] = useState(null); // 'assets' | 'mixed-reality' | null
    const panelRef = useRef(null);

    const work = [
        {
            id: 'frontend',
            name: 'Frontend Project',
            icon: '/assets/work-1.png',
            description: 'Web Design',
            tag: 'UI / UX',
            year: '2024',
            color: 'from-violet-600 to-purple-900',
        },
        {
            id: 'assets',
            name: 'Digital Assets',
            icon: '/assets/work-2.png',
            description: 'Digital content, media & graphics',
            tag: 'Media',
            year: '2024',
            color: 'from-orange-600 to-pink-900',
        },
        {
            id: 'mixed-reality',
            name: 'Mixed Reality',
            icon: '/assets/work-3.png',
            description: 'Blends real world & digital elements',
            tag: 'XR / AR',
            year: '2024',
            color: 'from-cyan-600 to-indigo-900',
        },
    ];

    const mixedReality = [
        { title: 'CATHETER INSERTION', url: '/assets/mixedreality/Catheter Module.mp4' },
        { title: 'NORMAL DELIVERY', url: '/assets/mixedreality/Normal Delivery.mp4' },
        { title: 'THORAX', url: '/assets/mixedreality/Thorax.mp4' },
    ];

    // ── Asset Panels ──────────────────────────────────────────────────────────
    // Each entry = one carousel panel. Add more objects here to create new panels.
    const assetPanels = [
        {
            title: 'Normal Delivery Collection',
            badge: 'Series 01',
            images: [
                { src: '/assets/Assets/assets1/Descent.jpg' },
                { src: '/assets/Assets/assets1/Engagement.jpg' },
                { src: '/assets/Assets/assets1/InternalRotation.jpg' },
                { src: '/assets/Assets/assets1/Extension.jpg' },
                { src: '/assets/Assets/assets1/ExternalRotation.jpg' },
                { src: '/assets/Assets/assets1/Flexion.jpg' },
                { src: '/assets/Assets/assets1/Expulsion.jpg' },
            ],
        },
        {
            title: 'Anatomy Collection',
            badge: 'Series 02',
            images: [
        { src: '/assets/Assets/assets2/1st_Rib.jpg' },
        { src: '/assets/Assets/assets2/4th_Rib.jpg' },
        { src: '/assets/Assets/assets2/6th_Rib.jpg' },
        { src: '/assets/Assets/assets2/7th_Cartilage.jpg' },
        { src: '/assets/Assets/assets2/10th_Rib.jpg' },
        { src: '/assets/Assets/assets2/Anterior_Cardiac_Vein.jpg' },
        { src: '/assets/Assets/assets2/Anterior_Interventricular_Artery.jpg' },
        { src: '/assets/Assets/assets2/Anus.jpg' },
        { src: '/assets/Assets/assets2/Aorta.jpg' },
        { src: '/assets/Assets/assets2/Aortic_Valve.jpg' },
        { src: '/assets/Assets/assets2/Arm_Left.jpg' },
        { src: '/assets/Assets/assets2/Arm_Right.jpg' },
        { src: '/assets/Assets/assets2/Artery.jpg' },
        { src: '/assets/Assets/assets2/Brachiocephalic_Artery.jpg' },
        { src: '/assets/Assets/assets2/Brain.jpg' },
        { src: '/assets/Assets/assets2/Cartilage.jpg' },
        { src: '/assets/Assets/assets2/Central_Canal.jpg' },
        { src: '/assets/Assets/assets2/Cerebellum.jpg' },
        { src: '/assets/Assets/assets2/Cistern.jpg' },
        { src: '/assets/Assets/assets2/Clavicle.jpg' },
        { src: '/assets/Assets/assets2/Cochlea.jpg' },
        { src: '/assets/Assets/assets2/Coronary_Sinus.jpg' },
        { src: '/assets/Assets/assets2/Diaphragm.jpg' },
        { src: '/assets/Assets/assets2/Disc.jpg' },
        { src: '/assets/Assets/assets2/Esophagus.jpg' },
        { src: '/assets/Assets/assets2/Femur_Left.jpg' },
        { src: '/assets/Assets/assets2/Femur_Right.jpg' },
        { src: '/assets/Assets/assets2/Fornix.jpg' },
        { src: '/assets/Assets/assets2/Gallbladder.jpg' },
        { src: '/assets/Assets/assets2/Great_Cardiac_Vein.jpg' },
        { src: '/assets/Assets/assets2/Gums.jpg' },
        { src: '/assets/Assets/assets2/Heart_Back.jpg' },
        { src: '/assets/Assets/assets2/Heart_Front.jpg' },
        { src: '/assets/Assets/assets2/Humerus_Left.jpg' },
        { src: '/assets/Assets/assets2/Humerus_Right.jpg' },
        { src: '/assets/Assets/assets2/Inferior_Vena_Cava.jpg' },
        { src: '/assets/Assets/assets2/Inner_Ligaments.jpg' },
        { src: '/assets/Assets/assets2/Intestine_Lining.jpg' },
        { src: '/assets/Assets/assets2/Kidney.jpg' },
        { src: '/assets/Assets/assets2/Large_Intestine.jpg' },
        { src: '/assets/Assets/assets2/Left_Atrium.jpg' },
        { src: '/assets/Assets/assets2/Left_Common_Carotid_Artery.jpg' },
        { src: '/assets/Assets/assets2/Left_InferiorLobarBronchus.jpg' },
        { src: '/assets/Assets/assets2/Left_MainBronchus.jpg' },
        { src: '/assets/Assets/assets2/Left_Subclavian_Artery.jpg' },
        { src: '/assets/Assets/assets2/Left_SuperiorLobarBronchus.jpg' },
        { src: '/assets/Assets/assets2/Left_Ventricle.jpg' },
        { src: '/assets/Assets/assets2/Leg_Left.jpg' },
        { src: '/assets/Assets/assets2/Leg_Right.jpg' },
        { src: '/assets/Assets/assets2/Ligaments.jpg' },
        { src: '/assets/Assets/assets2/Liver.jpg' },
        { src: '/assets/Assets/assets2/Lungs_LeftInferiorLobe.jpg' },
        { src: '/assets/Assets/assets2/Lungs_RightInferiorLobe.jpg' },
        { src: '/assets/Assets/assets2/Lungs_RightSuperiorLobe.jpg' },
        { src: '/assets/Assets/assets2/Lungs_RightMiddleLobe.jpg' },
        { src: '/assets/Assets/assets2/Lungs_RightSuperiorLobe.jpg' },
        { src: '/assets/Assets/assets2/Mandible.jpg' },
        { src: '/assets/Assets/assets2/Mitral_Valve.jpg' },
        { src: '/assets/Assets/assets2/Muscle_Insertion.jpg' },
        { src: '/assets/Assets/assets2/Myocardium.jpg' },
        { src: '/assets/Assets/assets2/Nasolacrimal_Duct.jpg' },
        { src: '/assets/Assets/assets2/Nerves.jpg' },
                { src: '/assets/Assets/assets2/Occipital_Horn.jpg' },
                // Add more images to this panel here
            ],
        },
        // ── Add a new panel below ─────────────────────────────────────────────────
        // {
        //     title: 'My New Collection',
        //     badge: 'Series 03',
        //     images: [
        //         { src: '/assets/Assets/yourFolder/image1.jpg' },
        //         { src: '/assets/Assets/yourFolder/image2.jpg' },
        //     ],
        // },
    ];

    const handleCardClick = (id) => {
        if (id === 'assets') {
            setActivePanel(activePanel === 'assets' ? null : 'assets');
        } else if (id === 'mixed-reality') {
            setActivePanel(activePanel === 'mixed-reality' ? null : 'mixed-reality');
        } else {
            setActivePanel(null);
        }
        if (panelRef.current) {
            setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
    };

    return (
        <div id="work" className="relative w-full px-[8%] py-24 scroll-mt-20 overflow-hidden">

            {/* Ambient orbs */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px] -top-32 -right-32 pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[100px] bottom-0 -left-32 pointer-events-none" />

            {/* Section header */}
            <div className="text-center mb-16">
                <span className="section-badge">Portfolio</span>
                <h2 className="text-5xl sm:text-6xl font-Ovo font-semibold mt-2 mb-5">
                    Selected <span className="shimmer-text">Works</span>
                </h2>
                <p className="max-w-xl mx-auto font-Ovo text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                    A curated selection of projects spanning immersive XR experiences,
                    digital asset creation, and full-stack web development.
                </p>
            </div>

            {/* Project cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {work.map((item, i) => {
                    const isActive = activePanel === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleCardClick(item.id)}
                            className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-500 focus:outline-none
                                ${isActive
                                    ? 'ring-2 ring-purple-500 shadow-[0_0_40px_rgba(184,32,230,0.3)]'
                                    : 'hover:shadow-[0_0_30px_rgba(184,32,230,0.2)]'
                                }`}
                            style={{ aspectRatio: '4/5' }}
                        >
                            {/* Background image */}
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />

                            {/* Animated border */}
                            <div className={`absolute inset-0 rounded-2xl border transition-all duration-500
                                ${isActive
                                    ? 'border-purple-400/80'
                                    : 'border-white/10 group-hover:border-white/30'
                                }`} />

                            {/* Top bar */}
                            <div className="absolute inset-x-0 top-0 p-5 flex items-center justify-between">
                                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="text-[10px] font-mono tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80">
                                    {item.tag}
                                </span>
                            </div>

                            {/* Bottom info */}
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-4 flex items-end justify-between gap-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                                    <div>
                                        <p className="text-xs text-white/50 mb-1 font-mono tracking-widest uppercase">
                                            {item.year}
                                        </p>
                                        <h3 className="text-white font-Ovo text-xl font-semibold leading-tight mb-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-white/60 text-sm">{item.description}</p>
                                    </div>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                                        ${isActive
                                            ? 'bg-purple-500 rotate-45'
                                            : 'bg-white/10 border border-white/20 group-hover:bg-white/20'
                                        }`}>
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Expanded panels */}
            <div ref={panelRef}>

                {/* Assets panel */}
                {activePanel === 'assets' && (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 animate-fade-in-up">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="section-badge">Gallery</span>
                                <h3 className="text-3xl font-Ovo font-semibold mt-1">Digital Assets Gallery</h3>
                            </div>
                            <button
                                onClick={() => setActivePanel(null)}
                                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {assetPanels.map((panel, pi) => (
                                <div key={pi} className="carousel-panel relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden p-5">
                                    {/* Panel header */}
                                    <div className="flex items-end justify-between mb-4">
                                        <div>
                                            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-purple-400/80">{panel.badge}</span>
                                            <h4 className="font-Ovo text-lg font-semibold mt-0.5">{panel.title}</h4>
                                        </div>
                                        <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Hover to explore →</span>
                                    </div>

                                    {/* Carousel strip */}
                                    <div className="relative overflow-hidden rounded-xl h-44">
                                        {/* Fade edges */}
                                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
                                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />

                                        {/* Scrolling track — images duplicated for seamless loop */}
                                        <div className="carousel-track h-full">
                                            {[...panel.images, ...panel.images].map((img, ii) => (
                                                <div
                                                    key={ii}
                                                    className="shrink-0 h-full w-44 rounded-xl overflow-hidden border border-white/10"
                                                >
                                                    <img
                                                        src={img.src}
                                                        alt={`${panel.title} ${ii + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mixed Reality panel */}
                {activePanel === 'mixed-reality' && (
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 animate-fade-in-up">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="section-badge">XR</span>
                                <h3 className="text-3xl font-Ovo font-semibold mt-1">Mixed Reality Experiences</h3>
                            </div>
                            <button
                                onClick={() => setActivePanel(null)}
                                className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center transition-all"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {mixedReality.map((video, index) => (
                                <div key={index} className="gradient-border rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(184,32,230,0.2)] transition-all duration-300">
                                    <div className="p-4 pb-0">
                                        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-purple-400/80">
                                            {String(index + 1).padStart(2, '0')} — XR Module
                                        </span>
                                        <h4 className="font-Ovo text-lg font-semibold mt-1 mb-3">{video.title}</h4>
                                    </div>
                                    <div className="mx-4 mb-4 rounded-xl overflow-hidden">
                                        <video
                                            controls
                                            width="100%"
                                            className="w-full rounded-xl"
                                            onContextMenu={(e) => e.preventDefault()}
                                        >
                                            <source src={video.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}