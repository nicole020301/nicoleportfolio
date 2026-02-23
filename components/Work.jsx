'use client';

import { useState, useEffect } from 'react';

export default function Work() {
    const [showMixedReality, setShowMixedReality] = useState(false); // State for mixed reality videos
    const [isMuted, setIsMuted] = useState(true); // State to control mute/unmute
    const [showVideos, setShowVideos] = useState(false); // State for general videos (currently not used)
    const [showAssets, setShowAssets] = useState(false); // State for displaying assets images

    const work = [
        {
            name: 'Frontend project',
            icon: '/assets/work-1.png',
            description: 'Web Design',
            link: '',
        },
        {
            name: 'Assets',
            icon: '/assets/work-2.png',
            description: 'Digital content, media, graphics',
            link: '',
        },
        {
            name: 'Mixed Reality',
            icon: '/assets/work-3.png',
            description: 'Blends real world, digital elements, interact.',
            link: '',
        },
    ];

    const mixedReality = [
        { title: 'CATHETER INSERTION', url: '/assets/mixedreality/Catheter Module1.mp4' },
        { title: 'NORMAL DELIVERY', url: '/assets/mixedreality/Normal Delivery1.mp4' },
        { title: 'THORAX', url: '/assets/mixedreality/Thorax1.mp4' },
    ];

    const assets1 = [
        { src: '/assets/Assets/assets1/Descent.jpg' },
        { src: '/assets/Assets/assets1/Engagement.jpg' },
        { src: '/assets/Assets/assets1/InternalRotation.jpg' },
        { src: '/assets/Assets/assets1/Extension.jpg' },
        { src: '/assets/Assets/assets1/ExternalRotation.jpg' },
        { src: '/assets/Assets/assets1/Flexion.jpg' },
        { src: '/assets/Assets/assets1/Expulsion.jpg' },
        // Add more asset images here
    ];

    const assets2 = [
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

        // Add more assets as needed
    ];

    const handleClick = (name) => {
        if (name === 'Videos') {
            setShowVideos(!showVideos); // Toggle video section visibility for general videos (currently not used)
        } else if (name === 'Mixed Reality') {
            setShowMixedReality(!showMixedReality); // Toggle video section visibility for Mixed Reality
            setShowVideos(false); // Hide the general videos when Mixed Reality is clicked
            setShowAssets(false); // Hide assets when Mixed Reality is clicked
        } else if (name === 'Assets') {
            setShowAssets(!showAssets); // Toggle assets visibility when clicked
            setShowMixedReality(false); // Hide mixed reality videos when Assets is clicked
        }
    };

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Works</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web development portfolio! Browse through a selection of projects that highlight my skills and experience in front-end development.
            </p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((item) => (
                    <div
                        key={item.name}
                        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                        style={{ backgroundImage: `url(${item.icon})` }}
                        onClick={() => handleClick(item.name)} // Add click handler here
                    >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="/assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Render Assets Images only when clicked */}
            {showAssets && (
                <div className="assets-list mt-10">
                    <h3 className="text-center text-3xl font-Ovo mb-5">Digital Assets Gallery</h3>
                    <div className="assets-container grid grid-cols-5 gap-4 justify-center">
                        {/* Asset 1 Images */}
                        {assets1.map((asset, index) => (
                            <div key={index} className="asset-item p-4">
                                <img
                                    src={asset.src}
                                    alt={`Asset ${index + 1}`}
                                    className="w-60 h-50 rounded-lg transition-opacity duration-500 opacity-100" // Adjusted size for bigger images
                                />
                            </div>
                        ))}

                        {/* Asset 2 Images */}
                        {assets2.map((asset, index) => (
                            <div key={index} className="asset-item p-4">
                                <img
                                    src={asset.src}
                                    alt={`Asset ${index + 1}`}
                                    className="w-60 h-50 rounded-lg transition-opacity duration-500 opacity-100" // Adjusted size for bigger images
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Render Mixed Reality Videos only when clicked */}
            {showMixedReality && (
                <div className="mixed-reality-videos mt-10">
                    <h3 className="text-center text-3xl font-Ovo mb-5">Mixed Reality Experiences</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {mixedReality.map((video, index) => (
                            <div key={index} className="video-item p-4 bg-transparent rounded-lg shadow-lg">
                                <h4 className="text-center text-lg font-Ovo mb-3">{video.title}</h4>
                                <video
                                    controls
                                    width="100%"
                                    height="315"
                                    muted={isMuted}
                                    onContextMenu={(e) => e.preventDefault()} // Disable right-click menu
                                >
                                    <source src={video.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}