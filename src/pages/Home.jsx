import React, { useEffect } from 'react';


import Game from '../components/Game';

function Home() {
    useEffect(() => {
        document.title = "🧜🏻‍♀️ 👀"; // Set the page title
    }, []);

    return (
        <div className="text-center dark:bg-slate-950 dark:text-dark-primary">
           <Game/>
        </div>
    );
}

export default Home;
