import React, { useState, useRef, useEffect } from 'react';

const Game = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [showParty, setShowParty] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const containerRef = useRef(null);

    const questions = [
        {
            question: "What's your favorite thing about me? 💭",
            answer: "Everything about you is perfect! 💝"
        },
        {
            question: "Where should we go for our Valentine's date? 🌟",
            answer: "Anywhere with you would be magical! ✨"
        },
        {
            question: "Can I have a hug? 🤗",
            answer: "Here's the biggest virtual hug! 🫂"
        }
    ];

    const moveNoButton = () => {
        const container = containerRef.current;
        const buttonWidth = 100;
        const buttonHeight = 40;
        const padding = 10;

        const maxX = container.offsetWidth - buttonWidth - padding;
        const maxY = container.offsetHeight - buttonHeight - padding;

        let newX, newY;
        do {
            newX = Math.floor(Math.random() * maxX) + padding;
            newY = Math.floor(Math.random() * maxY) + padding;
        } while (newX === noButtonPosition.x && newY === noButtonPosition.y);

        setNoButtonPosition({ x: newX, y: newY });
    };

    const handleYesClick = () => {
        setShowParty(true);
        setTimeout(() => {
            setShowParty(false);
            setShowMessage(true);
        }, 2500);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setShowAnswer(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setShowAnswer(false);
        }
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom right, #fce7f3, #e9d5ff, #e0e7ff)' }} className="w-full h-screen overflow-hidden relative">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Hearts */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={`heart-${i}`}
                        className="absolute text-4xl heart-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            opacity: 0.3
                        }}
                    >
                        ❤️
                    </div>
                ))}
                {/* Butterflies */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`butterfly-${i}`}
                        className="absolute text-4xl butterfly-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            opacity: 0.4
                        }}
                    >
                        🦋
                    </div>
                ))}
            </div>

            {/* Party Animation Overlay */}
            {showParty && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="fixed inset-0 bg-black/30" /> {/* Overlay */}
                    <div className="fixed inset-0" style={{
                        backgroundImage: 'url("/yes.gif")',
                        backgroundRepeat: 'repeat',
                        transform: 'rotate(45deg) scale(1.5)', // Scale up to ensure coverage during rotation
                        backgroundSize: '200px 200px',
                        opacity: 0.8,
                        width: '150vw', // Increase width to ensure coverage
                        height: '150vh', // Increase height to ensure coverage
                        left: '-25%', // Offset to center the rotated element
                        top: '-25%', // Offset to center the rotated element
                        position: 'fixed'
                    }} />
                    
                    
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("/yes.gif")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '500px 500px',
                        backgroundPosition: 'center',
                        marginBottom: '50px',
                        opacity: 1,
                        
                    }} />
                    <div className="fixed inset-0 flex items-center justify-center z-50 mt-24 ">
                        <div className="text-4xl md:text-6xl font-bold text-white text-center mt-32 animate-bounce">
                            <audio autoPlay>
                                <source src="/wow.mp3" type="audio/mpeg" />
                            </audio>
                            <p className="animate-pulse text-yellow-300 ">
                                Whaauu 😱
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full h-full flex items-center justify-center relative z-10">
                <div 
                    className="w-[90%] md:w-[60%] lg:w-[50%] bg-white/70 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm text-center relative min-h-[300px]"
                    ref={containerRef}
                >
                    {!showMessage ? (
                        <>
                            <h1 className="text-3xl md:text-4xl mb-12 font-bold text-pink-600">
                                Will you be my Valentine? 💖
                            </h1>
                            <div className="flex flex-col items-center gap-8">
                                <button
                                    onClick={handleYesClick}
                                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-xl transition-all shadow-md hover:scale-105"
                                >
                                    Yes 😍
                                </button>
                                 
                                <button
                                    onClick={moveNoButton}
                                    style={{
                                        position: 'absolute',
                                        left: `${noButtonPosition.x}px`,
                                        top: `${noButtonPosition.y}px`,
                                        transition: 'all 0.15s ease'
                                    }}
                                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-xl shadow-md"
                                >
                                    No 😜
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="py-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                                Straight to my trap 🧜🏻‍♀️ 👀
                            </h2>
                            <div className="text-2xl mb-8">
                                {questions[currentQuestionIndex].question}
                            </div>
                            
                            {/* Simplified Question Navigation */}
                            <div className="space-y-4">
                                {showAnswer ? (
                                    <div className="text-xl mb-6">
                                        {questions[currentQuestionIndex].answer}
                                    </div>
                                ) : (
                                    <button
                                        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg text-xl transition-all"
                                        onClick={() => setShowAnswer(true)}
                                    >
                                        Reveal Answer ✨
                                    </button>
                                )}
                                <div className="flex justify-between gap-4">
                                    <button 
                                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg text-xl transition-all"
                                        onClick={() => setShowMessage(false)}
                                    >
                                        ← Back
                                    </button>
                                    
                                    {currentQuestionIndex < questions.length - 1 && (
                                        <button
                                            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg text-xl transition-all"
                                            onClick={handleNextQuestion}
                                        >
                                            Next →
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes heart-float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-100px) rotate(10deg); }
                }

                @keyframes butterfly-float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(50px, -50px) rotate(10deg); }
                    50% { transform: translate(100px, 0) rotate(-10deg); }
                    75% { transform: translate(50px, 50px) rotate(10deg); }
                }

                .heart-float {
                    animation: heart-float 15s ease-in-out infinite;
                }

                .butterfly-float {
                    animation: butterfly-float 20s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Game;
