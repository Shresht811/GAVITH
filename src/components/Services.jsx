import React, { useRef } from 'react';

const solutions = [
    {
        title: "Strategic Consulting",
        description: "Aligning your technology with your business vision. We provide roadmap design and digital transformation strategies.",
        icon: "LOCATION_CROSSHAIRS",
        color: "#4facfe",
        planetType: 'ice-giant'
    },
    {
        title: "Custom Software",
        description: "From concept to code. We build scalable, high performance web and mobile applications using AI powered development.",
        icon: "CODE_NODE",
        color: "#fa709a",
        planetType: 'gas-giant'
    },
    {
        title: "Cloud Infrastructure",
        description: "Secure, scalable, and cost effective cloud solutions. We specialize in AWS, Azure, and Hybrid Cloud.",
        icon: "CLOUD_NETWORK",
        color: "#5ac8fa",
        planetType: 'lush'
    },
    {
        title: "AI & Automation",
        description: "Leverage the power of Machine Learning and RPA to streamline workflows.",
        icon: "BRAIN_CIRCUIT",
        color: "#5856d6",
        planetType: 'exotic'
    }
];

const Services = () => {
    return (
        <section id="services" className="section" style={{
            position: 'relative',
            paddingBottom: '5rem'
        }}>
            <div className="container">
                <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 5vw, 4rem)',
                        marginBottom: '1rem',
                        fontWeight: '700'
                    }}>
                        Our <span className="gavith-text">Solutions</span>
                    </h2>
                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        color: 'rgba(255,255,255,0.6)',
                        fontFamily: 'Inter'
                    }}>
                        Deploying future ready infrastructure for the modern enterprise.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {solutions.map((item, index) => (
                        <div key={index} className="planet-container" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            padding: '1rem',
                            '--planet-color': item.color
                        }}>
                            {/* Planet Sphere + Rings Container */}
                            <div className="planet-wrapper" style={{
                                position: 'relative',
                                width: 'clamp(280px, 35vw, 420px)',
                                height: 'clamp(280px, 35vw, 420px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Optional Saturn Rings (for index 1) */}
                                {index === 1 && (
                                    <div className="planet-rings" style={{
                                        position: 'absolute',
                                        width: '180%',
                                        height: '35%',
                                        border: '12px solid rgba(255,255,255,0.06)',
                                        borderRadius: '50%',
                                        transform: 'rotate(-20deg) rotateX(75deg)',
                                        boxShadow: `0 0 30px ${item.color}22, inset 0 0 30px rgba(255,255,255,0.1)`,
                                        zIndex: 1,
                                        pointerEvents: 'none'
                                    }}></div>
                                )}

                                {/* The Planet Sphere */}
                                <div className="planet-shape" style={{
                                    width: '85%',
                                    height: '85%',
                                    borderRadius: '50%',
                                    background: item.planetType === 'ice-giant' 
                                        ? `radial-gradient(circle at 30% 30%, #4facfe 0%, #00f2fe 30%, #1e3c72 70%, #000 100%)`
                                        : item.planetType === 'gas-giant'
                                            ? `radial-gradient(circle at 30% 30%, #fa709a 0%, #fee140 40%, #c12b2b 80%, #000 100%)`
                                            : item.planetType === 'lush'
                                                ? `radial-gradient(circle at 30% 30%, #43e97b 0%, #38f9d7 40%, #115850 80%, #000 100%)`
                                                : `radial-gradient(circle at 30% 30%, #6a11cb 0%, #2575fc 50%, #1a1a1a 90%, #000 100%)`,
                                    boxShadow: `
                                        inset -30px -30px 60px rgba(0,0,0,0.8),
                                        inset 20px 20px 40px rgba(255,255,255,0.15),
                                        0 0 50px ${item.color}33
                                    `,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '3rem',
                                    textAlign: 'center',
                                    position: 'relative',
                                    zIndex: 2,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)',
                                    isolation: 'isolate', // Prevents layering issues that might cause "boxes"
                                    outline: 'none',
                                    WebkitTapHighlightColor: 'transparent',
                                    maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)'
                                }}>
                                    {/* Physical Geography Layer (Land/Continents) */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, left: 0, width: '100%', height: '100%',
                                        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f-${index}' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='4' seed='${index}'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0.1 0 0 0 0 0.5 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f-${index})' opacity='0.4'/%3E%3C/svg%3E")`,
                                        opacity: 0.5,
                                        mixBlendMode: 'overlay',
                                        pointerEvents: 'none',
                                        backfaceVisibility: 'hidden',
                                        transform: 'translateZ(0)'
                                    }}></div>

                                    {/* Moving Cloud Layer */}
                                    <div className="planet-clouds" style={{
                                        position: 'absolute',
                                        top: '-50%', left: '-50%', width: '200%', height: '200%',
                                        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='c-${index}' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='2' seed='${index + 10}'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 1 0 1 0 0 1 0 0 1 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c-${index})' opacity='0.3'/%3E%3C/svg%3E")`,
                                        opacity: 0.25,
                                        mixBlendMode: 'screen',
                                        pointerEvents: 'none',
                                        animation: 'rotateClouds 120s linear infinite',
                                        backfaceVisibility: 'hidden',
                                        transform: 'translateZ(0)'
                                    }}></div>

                                    {/* High-Resolution Craters/Bumps Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n-${index}' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' seed='${index + 50}'/%3E%3CfeDiffuseLighting lighting-color='white' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n-${index})' opacity='0.15'/%3E%3C/svg%3E")`,
                                        opacity: 0.2,
                                        mixBlendMode: 'overlay',
                                        pointerEvents: 'none',
                                        zIndex: 4,
                                        backfaceVisibility: 'hidden',
                                        transform: 'translateZ(0)'
                                    }}></div>

                                    {/* Dynamic Rim Lighting */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, left: 0, width: '100%', height: '100%',
                                        background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                                        pointerEvents: 'none',
                                        zIndex: 3
                                    }}></div>

                                    <div style={{ position: 'relative', zIndex: 10 }}>
                                        <h3 style={{
                                            fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                                            marginBottom: '1rem',
                                            color: '#fff',
                                            fontWeight: '900',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.15em',
                                            textShadow: `0 0 15px ${item.color}, 0 4px 15px rgba(0,0,0,0.9)`
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontFamily: 'Inter',
                                            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                                            color: 'rgba(255,255,255,0.98)',
                                            lineHeight: '1.5',
                                            margin: 0,
                                            maxWidth: '260px',
                                            fontWeight: '500',
                                            textShadow: '0 2px 5px rgba(0,0,0,0.5)'
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Layered Atmospheric Haze */}
                                <div className="planet-glow" style={{
                                    position: 'absolute',
                                    width: '95%',
                                    height: '95%',
                                    borderRadius: '50%',
                                    background: `radial-gradient(circle, ${item.color}22 0%, transparent 80%)`,
                                    filter: 'blur(40px)',
                                    zIndex: 0,
                                    pointerEvents: 'none',
                                    transition: 'all 0.8s ease'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .planet-wrapper:hover .planet-shape {
                    transform: scale(1.06) translateY(-15px);
                    box-shadow: 
                        inset -30px -30px 60px rgba(0,0,0,0.85),
                        inset 20px 20px 40px rgba(255,255,255,0.25),
                        0 0 100px var(--planet-color);
                }
                .planet-wrapper:hover .planet-glow {
                    transform: scale(1.3);
                    opacity: 1;
                }
                .planet-container {
                    animation: float 12s ease-in-out infinite;
                }
                .planet-container:nth-child(even) {
                    animation-delay: -6s;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-40px); }
                }
                @keyframes rotateClouds {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 768px) {
                    .planet-wrapper {
                        width: 280px !important;
                        height: 280px !important;
                    }
                    .planet-shape h3 {
                        font-size: 1.4rem !important;
                    }
                    .planet-shape p {
                        font-size: 0.8rem !important;
                        max-width: 180px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
