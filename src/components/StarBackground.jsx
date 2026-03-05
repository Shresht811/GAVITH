import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Static stars
        const stars = Array.from({ length: 200 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.2 + 0.05,
            opacity: Math.random()
        }));

        // Shooting star properties
        let shootingStar = null;

        const spawnShootingStar = () => {
            if (!shootingStar && Math.random() < 0.01) { // 1% chance per frame to spawn
                shootingStar = {
                    x: Math.random() * width,
                    y: Math.random() * (height / 2),
                    length: Math.random() * 80 + 20,
                    speed: Math.random() * 10 + 10,
                    opacity: 1
                };
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw static stars
            stars.forEach(star => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });

            // Handle shooting star
            spawnShootingStar();
            if (shootingStar) {
                const { x, y, length, speed, opacity } = shootingStar;

                // Draw trail
                const gradient = ctx.createLinearGradient(x, y, x - length, y + length);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - length, y + length); // Diagonal movement down-left
                ctx.stroke();

                shootingStar.x -= speed; // Move Left
                shootingStar.y += speed; // Move Down
                shootingStar.opacity -= 0.02;

                if (shootingStar.opacity <= 0 || shootingStar.x < 0 || shootingStar.y > height) {
                    shootingStar = null;
                }
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
            background: 'radial-gradient(circle at center, #0a101f 0%, #000000 100%)',
            pointerEvents: 'none'
        }}>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            {/* Global Glow Overlay for depth */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle, rgba(0, 91, 234, 0.03) 0%, transparent 60%)',
                pointerEvents: 'none'
            }}></div>
        </div>
    );
};

export default StarBackground;
