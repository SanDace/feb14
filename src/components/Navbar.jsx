import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, } from '../context/ThemContext';
function Navbar() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext)
    return (
        <nav className="flex items-center justify-between p-4 bg-light-primary dark:bg-dark-primary">
            <div>
                <Link to="/" className="mx-2 text-light-text dark:text-dark-text">Home</Link>
                <Link to="/contact" className="mx-2 text-light-text dark:text-dark-text">Contact</Link>
            </div>
            <button
                onClick={toggleDarkMode}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md dark:bg-blue-700"
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
}

export default Navbar;
