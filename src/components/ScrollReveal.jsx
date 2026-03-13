import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, width = "100%", offset = 50, direction = "up", scale = 1 }) => {
    const directions = {
        up: { y: offset },
        down: { y: -offset },
        left: { x: offset },
        right: { x: -offset },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction], scale }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
