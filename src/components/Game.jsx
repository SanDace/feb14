import React, { useState, useRef, useEffect } from 'react';

const Game = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [showParty, setShowParty] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const containerRef = useRef(null);
    // Fixed typo in const declaration
    const [phoneNumber, setPhoneNumber] = useState('');
    const [numberMessage, setNumberMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSaveNumber = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        if (phoneNumber.length === 10) {
            try {
                const response = await fetch('https://number-vaap.onrender.com/api/numbers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ phoneNumber }),
                });

                const data = await response.json();
                if (response.ok) {
                    setPhoneNumber(''); // Clear the phone number input
                    setErrorMessage('');
                    setNumberMessage("My Señoritarita Arigato ❤️💖💝💕💓💗")
                
                } else {
                    setErrorMessage(data.message || 'Failed to save the number.');
                }
            } catch (error) {
                console.error('Error:', error);
                setErrorMessage('Failed to save the number.');
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrorMessage('dont leave me empty handed 🥺🥺🥺🥺');
            setIsLoading(false);
        }
    };

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
            question: "Where do you live?",
            answer: "In my heart 💝"
        },
        {
            question: "Do i miss you??",
            answer: "Nha , u always in my mind 🧠"
        },
        {
            question: "Which Anime are we Watching Together? ",
            answer: "JJk, 👀"
        },
        {
            question: " What is MY favorite food?",
            answer: "You 👉👈"
        },
        {
            question: "Click to capture your pic 📸",
            answer: 
            <div className="flex flex-col justify-center items-center">
            <img src="/monket.webp" alt="Your Image" className="w-[200px] h-[300px] object-cover rounded-lg mx-auto" />
            <p className="text-center text-sm text-gray-500 pt-4">Your Beauty cant be described in words</p>
            </div>
            
        },
        {
            question: "Can I get A kiss 💋" ,
            answer: 
            <div className="flex flex-col justify-center items-center">
            <img src="/kiss.gif" alt="Your Image" className="w-[400px] h-[300px] object-cover rounded-lg mx-auto" />
            <p className="text-center text-sm text-gray-500 pt-4">Lol</p>
            </div>
        },
        {
            question: "Whats my Fav Song🤗?" ,
            answer: 
            "Your Voice 🎤"
        },
        {
            question: "Here is a song I have written for you 🎶" ,
            answer: 
            <div className="flex flex-col justify-center items-center">
            <img src="/joking2.gif" alt="Your Image" className="w-[350px] h-[300px] object-cover rounded-lg mx-auto" />
            <p className="text-center text-sm text-gray-500 pt-4"></p>
            </div>
        },
        {
            question: "You reading this  📚👨‍📖" ,
            answer: 
            <div className="flex flex-col justify-center items-center">
            <img src="/planned.gif" alt="Your Image" className="w-[260px] h-[150px] object-cover rounded-lg mx-auto" />
            <p className="text-center text-sm text-gray-500 pt-4">Was all part of my Plan</p>
            </div>
        },
        {
            question: "Last but Not Least" ,
            answer: 
            <div className="flex flex-col justify-center items-center">
            <img src="/NUMBER.gif" alt="Your Image" className="w-[390px] h-[250px] object-cover rounded-lg mx-auto" />
            <div className="flex flex-col gap-2">
            <input
                type="tel"
                placeholder="Enter your number..... Maichaa 🥺"
                pattern="[0-9]{10}"
                minLength="10"
                maxLength="10"
                title="dont leave me empty handed 🥺🥺🥺"
                required
                className="mt-2 text-center text-sm text-gray-500 pt-2 border rounded px-4 py-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-pink-300 hover:border-pink-200 transition-all duration-300"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.slice(0, 10).replace(/[^\d]/g, ''))}
            />
            {numberMessage &&(<p className=" text-sm text-500">{numberMessage}</p>)}

            <button
                onClick={handleSaveNumber}
                disabled={isLoading}
                className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                    </div>
                ) : (
                    'Send Number 💝'
                )}
            </button>
            {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            </div>
            </div>
        },{
            question: "And just remember this",
            answer:
            <div className="flex flex-col justify-center items-center">
            <img src="/fall.gif" alt="Your Image" className="w-[390px] h-[250px]  object-cover rounded-lg mx-auto" />
            <p className="text-center text-sm text-gray-500 pt-4">I will keep falling for you</p>
            </div>
        },
        {
            question: "And Am Still Staring at you",
            answer:
            <div className="flex flex-col justify-center items-center">
            <img src="/star.png" alt="Your Image" className="w-[260px] h-[260px]  object-cover rounded-lg mx-auto" />
            
            </div>
        },
        {
            question:  <div className="flex flex-col justify-center items-center">
                <p className="text-lg font-semibold text-pink-500 animate-pulse">Wishing you a Happy Valentine's Day 💝</p>
            <img src="/d.gif" alt="Your Image" className="w-[340px] h-[200px] object-cover object-top rounded-lg mx-auto" />
            </div>,
            answer:
            <p className="text-center text-sm text-gray-500 ">I don't want the most prettiest girl to be left with empty wishes 🌸</p>
            
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
            setCurrentQuestionIndex(0); // Reset to first question
            setShowAnswer(false); // Reset answer visibility
        }, 2500);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setShowAnswer(false);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex === 0) {
            setShowMessage(false); // Go back to home if on first question
        } else {
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
                                Will you be my Carmilla🌸
                            </h1>
                            <div className="flex flex-col items-center gap-8">
                                <button
                                    onClick={handleYesClick}
                                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-xl transition-all shadow-md hover:scale-105"
                                >
                                    Yes 🙇‍♂️ 
                                </button>
                                 
                                <button
                                    onClick={(e) => {
                                        moveNoButton();
                                        const emojis = ['😏', '🤪', '😝','just say yes', '🤭', '😌', "call an ambulance", "sad", "still trying to say no"," am heart broken"];
                                        let randomEmoji;
                                        do {
                                            randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                                        } while (randomEmoji === e.target.lastChild.textContent.trim());
                                        e.target.lastChild.textContent = ` ${randomEmoji}`;
                                    }}
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
                                        onClick={handlePreviousQuestion}
                                    >
                                        ← Back
                                    </button>
                                    
                                    {currentQuestionIndex < questions.length - 1 ? (
                                        <button
                                            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg text-xl transition-all"
                                            onClick={handleNextQuestion}
                                        >
                                            Next →
                                        </button>
                                    ) : (
                                        <button
                                            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg text-xl transition-all"
                                            onClick={() => setShowMessage(false)}
                                        >
                                            Go Home 🏠
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
