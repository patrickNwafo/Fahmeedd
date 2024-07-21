import React from 'react';
import img1 from '../assets/images/img1.webp';
import { motion } from 'framer-motion';

function Logo({ onClick }) {
    return (
        <motion.div
            className="flex items-center justify-center h-full"
            onClick={onClick}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <img src={img1} alt="Logo" className="object-contain w-48 h-48 transition cursor-pointer hover:translate-y-2" />
        </motion.div>
    );
}

export default Logo;