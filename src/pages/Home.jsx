import React from 'react';


import Threed from '../components/Threed';
import Game from '../components/Game';

function Home() {
    return (
        <div className="text-center dark:bg-slate-950 dark:text-dark-primary">
           <Game/>
            {/* <Threed/> */}
        </div>
    );
}

export default Home;

