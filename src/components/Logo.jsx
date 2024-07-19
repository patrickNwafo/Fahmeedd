import React from 'react';
import img1 from '../assets/images/img1.webp';

function Logo({ onClick }) {
    return (
        <div className="flex items-center justify-center h-full" onClick={onClick}>
            <img src={img1} alt="Logo" className="object-contain w-48 h-48 transition cursor-pointer hover:translate-y-2" />
        </div>
    );
}

export default Logo;