export default function Services() {
    const services = [
        {
            name: 'Web design',
            // icon: '/assets/web-icon.png',
            description: 'Creating immersive, interactive web experiences that push the boundaries of what\'s possible in the digital world.',
            link: '#',
            bgImage: '/servicesbg/graphics_design.png',
        },
        {
            name: 'UI/ UX design',
            // icon: '/assets/ui-icon.png',
            description: 'Developing user-centered, intuitive interfaces for XR experiences that provide seamless interaction and engagement with digital environments.',
            link: '#',
            bgImage: '/servicesbg/ui_ux_design.png',
        },
        {
            name: 'Graphics design',
            // icon: '/assets/graphics-icon.png',
            description: 'Creating stunning visual designs that enhance the immersive nature of XR environments, blending creativity with technical expertise.',
            link: '#',
            bgImage: '/servicesbg/graphics_design.png',
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a frontend developer specializing in building innovative and immersive digital experiences using XR technology.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div 
                        key={service.name} 
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                        style={{
                            backgroundImage: `url(${service.bgImage})`,
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center', 
                            minHeight: '300px',
                        }}
                    >
                        <div className="bg-black bg-opacity-50 p-4 rounded-md">
                            {/* <img src={service.icon} alt={service.name} className="w-10" /> */}
                            <h3 className="text-lg my-4 text-white">{service.name}</h3>
                            <p className="text-sm text-white/80 text-justify">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}