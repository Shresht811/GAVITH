import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, width = "100%", offset = 50 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: offset }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }} // Reduced margin to trigger sooner
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
