import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    x: mousePosition.x - 16, // Center the cursor
                    y: mousePosition.y - 16,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid #00d2ff',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    borderColor: isHovering ? '#fff' : '#00d2ff',
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
                width: '8px',
                height: '8px',
                backgroundColor: '#00d2ff',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }} />
        </>
    );
};

export default CustomCursor;
