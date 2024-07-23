import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingPercentage((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 30); // Adjust the interval speed as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-center text-white"
            >
                <div className="mb-4 text-4xl font-bold">{loadingPercentage}%</div>
                <div className="w-64 h-2 overflow-hidden bg-white rounded-full">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${loadingPercentage}%` }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoadingScreen;