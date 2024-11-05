import React from 'react';

const ToggleButton = ({ label, isActive, onClick }) => {
    return (
        <button
            className={`px-4 py-1 text-sm font-semibold rounded-full ${isActive ? "bg-primary text-white" : "text-gray-500"
                }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ToggleButton;
