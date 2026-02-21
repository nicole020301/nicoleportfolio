export default function About() {
    const tools = [
        { name: 'vscode', icon: '/assets/techstack/vscode.png' },
        { name: 'git', icon: '/assets/techstack/git.png' },
        { name: 'HTML', icon: '/assets/techstack/HTML.png' },
        { name: 'JavaScript', icon: '/assets/techstack/Javascript.png' },
        { name: 'Three.js', icon: '/assets/techstack/Threejs.png' },
        { name: 'Vite', icon: '/assets/techstack/vite.png' },
        { name: 'C++', icon: '/assets/techstack/C++.png' },
        { name: 'MySQL', icon: '/assets/techstack/Mysql.png' },
        { name: 'React', icon: '/assets/techstack/react.svg' },
        { name: 'Meta', icon: '/assets/techstack/Meta.png' },
        { name: 'canva', icon: '/assets/techstack/canva.png' },
        { name: 'Sketchup', icon: '/assets/techstack/Sketchup.png' },
    ];

    const data = [
        {
            name: 'Languages',
            description: 'HTML, CSS, JavaScript React Js, Next Js',
            bgImage: '/aboutmebg/languages.png', // Background for Languages
        },
        {
            name: 'Education',
            description: 'BS Electronics and Communication Engineering',
            bgImage: '/aboutmebg/education.png', // Background for Education
        },
        {
            name: 'Projects',
            description: 'Built more than 5 projects',
            bgImage: '/aboutmebg/projects.png', // Background for Projects
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <div className="flex flex-col lg:flex-row items-start gap-10">
                {/* Left side content for Languages, Education, Projects */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-left text-5xl font-Ovo mb-6">About me</h2>

                    <p className="mb-6 max-w-2xl font-Ovo text-justify">
                        "Hi, I’m Nicole — a Web XR Developer specializing in crafting immersive XR experiences. 
                        I combine cutting-edge technology with innovative design to create digital environments that captivate and engage users. 
                        Whether I’m developing virtual spaces, designing interactive applications, or enhancing digital experiences, I focus on delivering forward-thinking, reliable solutions. 
                        Each project is approached strategically, ensuring seamless user interaction and thoughtful execution from concept to deployment. 
                        With a blend of creativity and technical expertise, I strive to bring future-ready digital experiences to life, handling every project with dedication and care to meet the evolving needs of the digital world."
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li 
                                key={item.name} 
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                                style={{
                                    backgroundImage: `url(${item.bgImage})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay for better text visibility
                                    color: 'white', // Ensure text is visible
                                }}
                            >
                                <div className="bg-black bg-opacity-60 p-4 rounded-md"> {/* Added background overlay for text */}
                                    <h3 className="my-1 font-semibold">{item.name}</h3>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side content for the image and Tech Stack */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative">
                    {/* Image at the top */}
                    <img src='/assets/nicolepic.jpg' alt="" className="w-50 sm:w-80 rounded-3xl max-w-none mb-8" />

                    {/* Tech Stack below the image */}
                    <div className="w-full lg:w-[80%]">
                        <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tech Stack:</h4>
                        <ul className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 gap-3 sm:gap-5">
                            {tools.map((tool) => (
                                <li key={tool.name} className="flex items-center justify-center w-full aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                    <img src={tool.icon} alt={tool.name} className="w-7 sm:w-7" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white w-1/4 aspect-square absolute rounded-full translate-x-[95%] translate-y-[10%] shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="/assets/dev_icon.png" alt="" className="w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    
                </div>
            </div>
        </div>
    );
}