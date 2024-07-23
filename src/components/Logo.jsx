import React from 'react';
import img1 from '../assets/images/img1.webp';
import { motion, useInView } from 'framer-motion';

function Logo({ onClick }) {
    const ref1 = React.useRef(null);
    const inView1 = useInView(ref1, { once: true });
    return (
        <motion.div
            className="flex items-center justify-center h-full"
            onClick={onClick}

            ref={ref1}
            initial={{ opacity: 0, x: 100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2 }}
        >
            <img src={img1} alt="Logo" className="object-contain w-48 h-48 transition cursor-pointer hover:translate-y-2" />
        </motion.div>
    );
}

export default Logo;