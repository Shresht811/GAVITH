import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);
    const [isLanding, setIsLanding] = React.useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        // Perspective properties
        const fov = 400; // Field of view
        const numStars = 350; // Reduced for comfort
        
        // Perspective Stars setup
        const starColors = ['#ffffff', '#ffe9c4', '#d4fbff', '#ffcfcf', '#e3dcff'];
        const stars = Array.from({ length: numStars }).map(() => ({
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 2000,
            z: Math.random() * 2000,
            prevZ: 0,
            size: Math.random() * 1.8 + 0.5,
            opacity: Math.random() * 0.7 + 0.3,
            color: starColors[Math.floor(Math.random() * starColors.length)]
        }));

        let startTime = Date.now();
        const duration = 3000; // 3 seconds total sequence

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Speed curve: Accelerate then slow down for landing
            let speed = 0;
            if (progress < 0.8) {
                // Warp speed (Accelerating)
                speed = 25 * (1 + Math.sin(progress * Math.PI * 1.2));
            } else {
                // Landing (Decelerating)
                speed = 25 * (1 - (progress - 0.8) * 5);
                if (!isLanding && progress > 0.85) setIsLanding(true);
            }
            if (speed < 0.5) speed = 0.5; // Minimum drift speed

            // Drawing
            ctx.fillStyle = '#02040a'; // Deep space blue-black
            ctx.fillRect(0, 0, width, height);

            // Draw Nebula effects (static soft glows)
            if (isLanding) {
                const drawNebula = (x, y, radius, color) => {
                    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                    gradient.addColorStop(0, color);
                    gradient.addColorStop(1, 'transparent');
                    ctx.fillStyle = gradient;
                    ctx.globalAlpha = 0.15;
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                };

                drawNebula(width * 0.2, height * 0.3, width * 0.4, '#005bea');
                drawNebula(width * 0.8, height * 0.7, width * 0.5, '#00d2ff');
                drawNebula(width * 0.5, height * 0.5, width * 0.6, '#5856d6');
            }

            const centerX = width / 2;
            const centerY = height / 2;

            stars.forEach(star => {
                star.prevZ = star.z;
                star.z -= speed;

                // Reset star to back of tunnel
                if (star.z <= 0) {
                    star.z = 2000;
                    star.prevZ = star.z;
                }

                // Project 3D to 2D
                const scale = fov / (fov + star.z);
                const x2d = centerX + star.x * scale;
                const y2d = centerY + star.y * scale;

                const prevScale = fov / (fov + star.prevZ);
                const prevX2d = centerX + star.x * prevScale;
                const prevY2d = centerY + star.y * prevScale;

                // Draw trail/star
                ctx.lineWidth = star.size * scale;
                if (progress < 0.9) {
                    // Warp lines
                    ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * (1 - star.z / 2000)})`;
                    ctx.beginPath();
                    ctx.moveTo(x2d, y2d);
                    ctx.lineTo(prevX2d, prevY2d);
                    ctx.stroke();
                } else {
                    // Soft glowing dots for landing
                    ctx.fillStyle = star.color;
                    ctx.globalAlpha = star.opacity;
                    ctx.beginPath();
                    ctx.arc(x2d, y2d, star.size * scale, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1.0;
                }
            });

            // Ambient background glow during warp
            if (progress < 0.8) {
                const glowOpacity = Math.sin(progress * Math.PI) * 0.1;
                ctx.fillStyle = `rgba(0, 100, 255, ${glowOpacity})`;
                ctx.fillRect(0, 0, width, height);
            }

            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -10,
            background: 'black',
            pointerEvents: 'none'
        }}>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            
            {/* Soft Blue 'Jump' Transition Glow */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, #00d2ff 0%, transparent 70%)',
                opacity: isLanding ? 0.3 : 0,
                transition: 'opacity 0.5s ease-out',
                mixBlendMode: 'screen',
                zIndex: 1000,
                pointerEvents: 'none'
            }} />

            {/* Depth Vignette */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle, transparent 40%, black 100%)',
                pointerEvents: 'none',
                opacity: 0.6
            }}></div>
        </div>
    );
};

export default StarBackground;
