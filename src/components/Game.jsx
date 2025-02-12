import React, { useState, useRef, useEffect } from 'react';

const Game = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Add Spline script to head
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@splinetool/viewer@1.9.66/build/spline-viewer.js';
        document.head.appendChild(script);

        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const moveNoButton = () => {
        const container = containerRef.current;
        const buttonWidth = 100;
        const buttonHeight = 40;
        const padding = 10; // Added padding to avoid edges

        // Get container boundaries
        const maxX = container.offsetWidth - buttonWidth - padding;
        const maxY = container.offsetHeight - buttonHeight - padding;

        // Calculate new random positions within the container
        let newX, newY;
        do {
            newX = Math.floor(Math.random() * maxX) + padding;
            newY = Math.floor(Math.random() * maxY) + padding;
        } while (newX === noButtonPosition.x && newY === noButtonPosition.y);

        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleYesClick = () => {
        setShowMessage(true);
    };

    return (
        <div className="w-full h-screen overflow-hidden relative">
            {/* Spline 3D Background */}
            <div className="absolute w-full h-full z-0">
                <spline-viewer 
                    url="https://prod.spline.design/MgH525zje7Vuq2Pj/scene.splinecode"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                ></spline-viewer>
            </div>
            
            {/* Game Container */}
            <div className="w-full h-full flex items-center justify-center relative z-10">
                <div 
                    className="w-[90%] md:w-[50%] bg-white/70 p-8 rounded-2xl shadow-xl backdrop-blur-sm text-center relative"
                    ref={containerRef}
                >
                    {!showMessage ? (
                        <>
                            <h1 className="text-3xl md:text-4xl mb-8 font-bold text-pink-600">
                                Will you be my Valentine? 💖
                            </h1>
                            <div className="flex flex-col items-center gap-6">
                                <button
                                    onClick={handleYesClick}
                                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg text-xl transition-all shadow-md"
                                >
                                    Yes 😍
                                </button>
                                
                                <button
                                    onMouseEnter={!isMobile ? moveNoButton : undefined}
                                    onClick={isMobile ? moveNoButton : undefined}
                                    style={{
                                        position: isMobile ? 'static' : 'absolute',
                                        left: !isMobile ? `${noButtonPosition.x}px` : undefined,
                                        top: !isMobile ? `${noButtonPosition.y}px` : undefined,
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-lg text-xl shadow-md"
                                >
                                    No 😜
                                </button>
                            </div>
                            {isMobile && (
                                <p className="text-sm text-gray-600 mt-4">
                                    *Try clicking "No" if you dare! 😉
                                </p>
                            )}
                        </>
                    ) : (
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
                                I knew you'd say Yes! ❤️
                            </h2>
                            <p className="text-lg mt-4 text-gray-700">
                                Happy Valentine's Day! You made my day! 🌹
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Game;
