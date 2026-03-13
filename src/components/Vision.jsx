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

            <div ref={solarSystemRef} className="solar-system-wrapper" style={{
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
                {/* Sun Core - Living Plasma Effect */}
                <div className="sun-core" style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%) rotateX(-60deg)',
                    width: '120px', height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #fff 0%, #00d2ff 40%, #005bea 100%)',
                    boxShadow: '0 0 100px #00d2ff, 0 0 50px rgba(255,255,255,0.8)',
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    {/* Plasma Swirls */}
                    <div className="plasma-layer" style={{
                        position: 'absolute',
                        inset: '-50%',
                        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)'/%3E%3C/svg%3E")`,
                        opacity: 0.4,
                        mixBlendMode: 'overlay',
                        animation: 'plasmaRotate 30s linear infinite'
                    }}></div>
                    <img src="/logo_transparent.png" alt="Gavith G" style={{
                        width: '65%',
                        height: '65%',
                        objectFit: 'contain',
                        position: 'relative',
                        zIndex: 21,
                        display: 'block',
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none',
                        background: 'transparent',
                        filter: 'drop-shadow(0 0 10px #fff)'
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
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            right: '-15px',
                            width: '30px',
                            height: '30px',
                            background: i === 0 
                                ? 'radial-gradient(circle at 30% 30%, #4facfe, #1e3c72)' 
                                : 'radial-gradient(circle at 30% 30%, #fa709a, #c12b2b)',
                            borderRadius: '50%',
                            boxShadow: `0 0 20px ${i === 0 ? '#00d2ff' : '#fa709a'}`,
                            transform: 'rotateX(-60deg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.3)'
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
                            width: '35%',
                            height: '2px',
                            background: `linear-gradient(90deg, transparent, ${i === 0 ? '#00d2ff' : '#fa709a'}, transparent)`,
                            filter: 'blur(1.5px)',
                            opacity: 0.6
                        }}></div>
                        
                        {/* Interactive Data Dots along the orbit */}
                        {[...Array(6)].map((_, j) => (
                            <div key={j} style={{
                                position: 'absolute',
                                width: '4px',
                                height: '4px',
                                background: i === 0 ? '#00d2ff' : '#fa709a',
                                borderRadius: '50%',
                                opacity: 0.3,
                                transform: `rotate(${j * 60}deg) translateY(-50%)`,
                                top: '50%', left: '50%',
                                transformOrigin: '0 0'
                            }} />
                        ))}
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes orbitSpin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes plasmaRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .tech-orbit:hover {
                    border-color: rgba(0, 210, 255, 0.5);
                    box-shadow: inset 0 0 40px rgba(0, 210, 255, 0.1);
                    transition: all 0.5s ease;
                }
            `}</style>
        </section>
    );
};

export default Vision;
