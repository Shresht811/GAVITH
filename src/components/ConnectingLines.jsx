import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ConnectingLines = () => {
    const { scrollYProgress } = useScroll();
    
    // Scale the glowing line's height from 0% to 100% based on scroll progress
    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    
    return (
        <div className="connecting-line-container" style={{
            position: 'absolute',
            top: '0', // Full height track
            left: '50%',
            width: '2px',
            height: '100%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: -1, // Behind cards, above deepest background
            background: 'rgba(0, 210, 255, 0.05)',
        }}>
            {/* The active glowing trace */}
            <motion.div style={{
                width: '100%',
                height: height,
                background: 'linear-gradient(to bottom, rgba(0,210,255,0), #00d2ff, #005bea)',
                boxShadow: '0 0 20px #00d2ff, 0 0 40px #005bea',
                borderRadius: '2px'
            }} />
        </div>
    );
};

export default ConnectingLines;
