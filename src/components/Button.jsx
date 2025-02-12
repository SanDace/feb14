import React from 'react';

function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-light-primary text-light-text rounded-md hover:bg-light-secondary dark:bg-dark-primary dark:text-dark-text dark:hover:bg-dark-secondary"
        >
            {children}
        </button>
    );
}

export default Button;
