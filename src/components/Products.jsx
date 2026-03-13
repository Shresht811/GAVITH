import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProductCard = ({ item, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 250, y: -250 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: index * 0.4, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1500px",
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10rem 2.5rem'
            }}
            className="meteor-container"
        >
            {/* Cinematic Bow Shock (Leading Edge) */}
            <div className="meteor-bow-shock" style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%) translate(-120px, 120px) rotate(-45deg)',
                width: '180px', height: '100px',
                background: `radial-gradient(ellipse at center, ${item.color}66 0%, transparent 70%)`,
                borderLeft: `3px solid ${item.color}`,
                borderRadius: '100% 0 0 100%',
                filter: 'blur(15px)',
                zIndex: 0,
                opacity: 0.6,
                pointerEvents: 'none'
            }}></div>

            {/* Plasma Sparks / Debris */}
            {[...Array(8)].map((_, i) => (
                <div key={i} className="meteor-debris" style={{
                    position: 'absolute',
                    width: `${3 + Math.random() * 4}px`,
                    height: `${3 + Math.random() * 4}px`,
                    backgroundColor: i % 2 === 0 ? '#fff' : item.color,
                    borderRadius: '50%',
                    boxShadow: `0 0 15px ${item.color}`,
                    top: '30%', right: '30%',
                    zIndex: 0,
                    animation: `debris-fly-${i} ${3 + Math.random() * 2}s linear infinite`,
                    animationDelay: `${Math.random() * 3}s`
                }}></div>
            ))}

            {/* Hyper-Cinematic Heat Trail */}
            <div className="meteor-trail-ultra" style={{
                position: 'absolute',
                top: '-40%', right: '-30%',
                width: '600px', height: '300px',
                background: `linear-gradient(90deg, transparent 0%, ${item.color}11 20%, ${item.color}44 80%, #fff 100%)`,
                transform: 'rotate(-45deg) skewX(35deg)',
                zIndex: 0,
                filter: 'blur(80px)',
                opacity: 0.5,
                backdropFilter: 'blur(8px)',
                borderRadius: '100% 0 0 100%'
            }}></div>

            <div className="meteor-trail-core" style={{
                position: 'absolute',
                top: '-20%', right: '-10%',
                width: '400px', height: '120px',
                background: `linear-gradient(90deg, transparent 0%, ${item.color}ee 60%, #fff 100%)`,
                transform: 'rotate(-45deg) skewX(25deg)',
                zIndex: 0,
                filter: 'blur(25px)',
                opacity: 0.9,
                borderRadius: '100% 0 0 100%',
                mixBlendMode: 'screen',
                animation: 'trailPulse 2s ease-in-out infinite alternate'
            }}></div>

            {/* Molten Meteor Body */}
            <div className="meteor-body" style={{
                width: 'clamp(320px, 45vw, 500px)',
                minHeight: 'clamp(320px, 45vw, 500px)',
                padding: '4.5rem',
                background: '#0a0a0a',
                borderRadius: index % 2 === 0 
                    ? '30% 70% 35% 65% / 65% 30% 70% 35%' 
                    : '70% 30% 65% 35% / 35% 70% 30% 65%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                boxShadow: `
                    inset -30px -30px 60px #000,
                    inset 20px 20px 40px rgba(255,255,255,0.08),
                    0 0 80px ${item.color}44
                `,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Molten Lava Surface (Texture) */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='l'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0.8 0 0 0 0 0.2 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23l)' opacity='0.3'/%3E%3C/svg%3E")`,
                    opacity: 0.3,
                    mixBlendMode: 'color-dodge',
                    pointerEvents: 'none'
                }}></div>

                {/* Heat Glow Animation */}
                <div className="meteor-heat" style={{
                    position: 'absolute',
                    width: '100%', height: '100%',
                    background: `radial-gradient(circle at center, ${item.color}33 0%, transparent 70%)`,
                    animation: 'heatPulse 4s ease-in-out infinite',
                    pointerEvents: 'none'
                }}></div>

                <div style={{ position: 'relative', zIndex: 10, transform: "translateZ(50px)" }}>
                    <h3 style={{ 
                        fontSize: 'clamp(2.2rem, 4vw, 3rem)', 
                        color: 'white', 
                        marginBottom: '1rem', 
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        lineHeight: 1,
                        textShadow: `0 0 20px ${item.color}88`
                    }}>
                        <span style={{
                            background: `linear-gradient(135deg, #fff 0%, ${item.color} 100%)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>GAVITH</span><br/>{item.title.split(' ')[1]}
                    </h3>
                    
                    <p style={{ 
                        fontFamily: 'Inter', 
                        color: 'rgba(255,255,255,0.95)', 
                        maxWidth: '280px', 
                        lineHeight: 1.4, 
                        fontSize: '1.05rem',
                        fontWeight: '500',
                        margin: '0 auto 2.5rem auto'
                    }}>
                        {item.description}
                    </p>

                    <motion.div 
                        whileHover={{ scale: 1.1, boxShadow: `0 0 50px ${item.color}dd` }}
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1.2rem 3rem',
                            background: `linear-gradient(135deg, ${item.color} 0%, #000 100%)`,
                            borderRadius: '100px',
                            color: 'white',
                            fontWeight: '900',
                            fontSize: '1rem',
                            boxShadow: `0 15px 40px ${item.color}66`,
                            border: '2px solid rgba(255,255,255,0.3)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em'
                        }}
                    >
                        {item.linkText} <span style={{ marginLeft: '12px' }}>→</span>
                    </motion.div>
                </div>
            </div>
            
            <style>{`
                .meteor-container {
                    animation: meteorCinematicEntry 15s ease-in-out infinite;
                }
                @keyframes meteorCinematicEntry {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-30px, 30px) scale(1.02); }
                }
                @keyframes heatPulse {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.1); }
                }
                @keyframes trailPulse {
                    0% { filter: blur(25px); opacity: 0.8; }
                    100% { filter: blur(35px); opacity: 1; }
                }
                .meteor-body:hover {
                    box-shadow: inset -20px -20px 50px #000, 0 0 120px ${item.color}aa;
                    border-color: rgba(255,255,255,0.5);
                    transform: scale(1.05) translateZ(30px);
                }
                ${[...Array(8)].map((_, i) => `
                    @keyframes debris-fly-${i} {
                        0% { transform: translate(0, 0) scale(1); opacity: 1; }
                        100% { transform: translate(${300 + Math.random() * 300}px, ${300 + Math.random() * 300}px) scale(0); opacity: 0; }
                    }
                `).join('\n')}
                
                @media (max-width: 768px) {
                    .meteor-container {
                        padding: 6rem 1rem !important;
                    }
                    .meteor-body {
                        width: 100% !important;
                        min-height: 350px !important;
                        padding: 2.5rem !important;
                    }
                    .meteor-trail-ultra {
                        width: 300px !important;
                        height: 150px !important;
                    }
                }
            `}</style>
        </motion.div>
    );
};

const Products = () => {
    // Define colors for the holographic effect
    const products = [
        {
            id: 'build',
            title: 'Gavith Build',
            subtitle: 'CONSTRUCTION MANAGEMENT',
            description: 'Real time project tracking, resource allocation, and onsite data synchronization for major projects.',
            color: '#00d2ff',
            linkText: 'Coming Soon'
        },
        {
            id: 'market',
            title: 'Gavith Market',
            subtitle: 'ERP & D2C INVENTORY',
            description: 'Unified ecosystem for manufacturing, sales, and supply chain logic.',
            color: '#007aff',
            linkText: 'Coming Soon'
        }
    ];

    return (
        <section id="products" className="section" style={{ background: 'transparent' }}>
            <div className="container">
                <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1 }}>
                            Our <span className="gavith-text">Products</span>
                        </h2>
                        <p style={{ fontFamily: 'Inter', color: 'rgba(255,255,255,0.6)', maxWidth: '400px', marginTop: '1rem' }}>
                            High performance platforms engineered for industry leaders.
                        </p>
                    </div>
                    <div style={{
                        padding: '0.5rem 1.5rem',
                        border: '1px solid rgba(0, 210, 255, 0.3)',
                        borderRadius: '50px',
                        color: '#00d2ff',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        Proprietary Suite
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}>

                    {products.map((item, index) => (
                        <ProductCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Products;
