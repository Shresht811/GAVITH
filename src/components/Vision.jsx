import React, { useEffect, useRef } from 'react';

const Vision = () => {
    const sectionRef = useRef(null);
    const solarSystemRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const handleMove = (e) => {
            if (!solarSystemRef.current) return;

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const { left, top, width, height } = section.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            solarSystemRef.current.style.transform =
                `perspective(1000px) rotateX(${60 - y * 20}deg) rotateY(${x * 20}deg) scale(1.0)`;
        };

        const handleReset = () => {
            if (!solarSystemRef.current) return;
            solarSystemRef.current.style.transform =
                `perspective(1000px) rotateX(60deg) rotateY(0deg) scale(1.0)`;
        };

        if (section) {
            section.addEventListener('mousemove', handleMove);
            section.addEventListener('mouseleave', handleReset);
            section.addEventListener('touchmove', handleMove, { passive: true });
            section.addEventListener('touchend', handleReset);
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMove);
                section.removeEventListener('mouseleave', handleReset);
                section.removeEventListener('touchmove', handleMove);
                section.removeEventListener('touchend', handleReset);
            }
        };
    }, []);

    return (
        <section id="vision" ref={sectionRef} style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            background: 'transparent',
            overflow: 'hidden',
            paddingTop: '0',
            paddingBottom: '2rem',
            perspective: '1000px' // Ensure perspective is on container too
        }}>

            {/* Title Block - "What's coming next..." */}
            <div style={{ zIndex: 10, position: 'relative', width: '100%', maxWidth: '1000px', padding: '0 2rem' }}>
                <h2 style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                    fontWeight: '300',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '0',
                    letterSpacing: '0.05em'
                }}>
                    The future of enterprise is
                </h2>

                <h1 className="glitch-text" data-text="redefine everything" style={{
                    fontSize: 'clamp(2rem, 10vw, 5rem)',
                    fontWeight: '800',
                    lineHeight: '1.2',
                    marginBottom: '1rem',
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #00d2ff 0%, #005bea 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(0, 210, 255, 0.4))',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    margin: '0 auto'
                }}>
                    here, today.
                </h1>
            </div>

            {/* THE ECOSPHERE (Solar System) - Advanced Graphics */}
            <div style={{ marginBottom: '1rem' }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'white',
                    marginBottom: '0',
                    borderBottom: '1px solid #00d2ff',
                    display: 'inline-block',
                    paddingBottom: '0.5rem'
                }}>
                    The <span className="gavith-text">Gavith</span> Ecosphere
                </h3>
            </div>

            <div ref={solarSystemRef} style={{
                position: 'relative',
                width: 'clamp(300px, 80vw, 750px)',
                height: 'clamp(300px, 80vw, 750px)',
                // Initial Transform
                transform: 'perspective(1000px) rotateX(60deg) scale(1.0)',
                transformStyle: 'preserve-3d',
                marginTop: 'clamp(-50px, -10vh, -150px)',
                marginBottom: 'clamp(-50px, -10vh, -150px)',
                transition: 'transform 0.1s ease-out' // Smooth movement
            }}>
                {/* Sun Core */}
                <div style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%) rotateX(-60deg)',
                    width: '100px', height: '100px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #fff, #00d2ff)',
                    boxShadow: '0 0 80px #00d2ff, 0 0 40px #fff',
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src="/logo_transparent.png" alt="Gavith G" style={{
                        width: '70%',
                        height: '70%',
                        objectFit: 'contain'
                    }} />
                </div>

                {/* Orbit Rings - Tech Style */}
                {[...[300, 500].map((size, i) => ({
                    size: `calc(${size / 750 * 100}%)`,
                    label: i === 0 ? 'Gavith Build' : 'Gavith Market'
                }))].map(({ size, label }, i) => (
                    <div key={i} className="tech-orbit" style={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: size, height: size,
                        border: '1px solid rgba(0, 210, 255, 0.2)',
                        borderRadius: '50%',
                        boxShadow: `inset 0 0 20px rgba(0, 210, 255, 0.05)`,
                        animation: `orbitSpin ${20 + i * 10}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`
                    }}>
                        {/* Planet */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-15px',
                            width: '30px',
                            height: '30px',
                            background: 'white',
                            borderRadius: '50%',
                            boxShadow: '0 0 15px #00d2ff',
                            transform: 'rotateX(-60deg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{
                                position: 'absolute',
                                left: '40px',
                                color: '#00d2ff',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                fontFamily: '"Inter", sans-serif',
                                whiteSpace: 'nowrap',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                filter: 'drop-shadow(0 0 10px rgba(0, 210, 255, 0.8))',
                                background: 'rgba(0,0,0,0.5)',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                border: '1px solid rgba(0, 210, 255, 0.3)'
                            }}>{label}</span>
                        </div>

                        {/* Orbital Marker Trail segment */}
                        <div style={{
                            position: 'absolute',
                            top: '-1px',
                            left: '50%',
                            width: '25%',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, #00d2ff, transparent)',
                            filter: 'blur(1px)'
                        }}></div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes orbitSpin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Vision;
