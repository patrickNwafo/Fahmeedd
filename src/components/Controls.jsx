import Logo from "../assets/images/img1.webp"
import { motion, useInView } from 'framer-motion';
import React from 'react';

export const Controls = () => {
    const ref1 = React.useRef(null);
    const inView1 = useInView(ref1, { once: true });
    return (
        <div>
            <motion.div className="flex justify-end w-screen"

                ref={ref1}
                initial={{ opacity: 0, x: 100 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 2 }}
            >
                <img className="object-contain w-24 h-24 transition cursor-pointer md:w-48 md:h-48 hover:translate-y-2" src={Logo} alt="logo" />
            </motion.div>
        </div>
    )
}
