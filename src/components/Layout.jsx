import React, { useContext } from 'react';
import Navbar from './Navbar';
function Layout({ children }) {

    return (
        <div className="min-h-screen w-full bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            {/* <Navbar /> */}
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default Layout;
