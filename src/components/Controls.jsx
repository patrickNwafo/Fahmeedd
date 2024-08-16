import Logo from "../assets/images/img1.webp";
import { motion, useInView } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export const Controls = () => {
    const ref1 = React.useRef(null);
    const inView1 = useInView(ref1, { once: true });
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };

    useEffect(() => {
        if (menuVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuVisible]);

    return (
        <div>
            <motion.div
                className="flex justify-end w-screen"
                ref={ref1}
                initial={{ opacity: 0, x: 100 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 2 }}
            >
                <img
                    className="object-contain w-24 h-24 transition cursor-pointer md:w-48 md:h-48 hover:translate-y-2"
                    src={Logo}
                    alt="logo"
                    onClick={toggleMenu}
                />
            </motion.div>

            {menuVisible && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-white bg-opacity-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div ref={menuRef} className="w-full max-w-3xl p-4 mx-auto rounded-lg md:p-8">
                        <div className="flex flex-col items-center space-y-4">
                            <a href="#" className="text-lg md:text-2xl font-semibold transition hover:translate-x-1 hover:text-gray-700">TikTok</a>
                            <a href="#" className="text-lg font-semibold hover:translate-x-1 hover:text-gray-700 md:text-2xl">Instagram</a>
                            <a href="#" className="text-lg font-semibold hover:translate-x-1 hover:text-gray-700 md:text-2xl">Twitter</a>
                            <a href="#" className="text-lg font-semibold hover:translate-x-1 hover:text-gray-700 md:text-2xl">YouTube</a>
                            <a href="#" className="text-lg font-semibold hover:translate-x-1 hover:text-gray-700 md:text-2xl">Interview</a>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
