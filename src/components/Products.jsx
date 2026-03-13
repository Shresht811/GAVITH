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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
                width: '100%',
                flex: 1,
                '--node-color': item.color
            }}
            className="constellation-node-container"
        >
            {/* Massive Glowing Star Node with Internal Content */}
            <div className="node-core-wrapper" style={{
                position: 'relative',
                width: 'clamp(320px, 45vw, 450px)',
                aspectRatio: '1 / 1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                overflow: 'hidden',
                isolation: 'isolate',
                margin: '0 auto',
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)'
            }}>
                {/* Outer Ambient Glow */}
                <div className="ambient-glow" style={{
                    position: 'absolute',
                    inset: '-20px',
                    background: `radial-gradient(circle, ${item.color}55 0%, transparent 60%)`,
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 0,
                    animation: 'pulseGlow 5s ease-in-out infinite alternate'
                }}></div>

                {/* Rotating Tech Rings */}
                <div className="tech-ring outer-ring" style={{
                    position: 'absolute',
                    inset: 0,
                    border: `2px solid ${item.color}33`,
                    borderRadius: '50%',
                    borderTopColor: `${item.color}`,
                    borderRightColor: `${item.color}`,
                    animation: 'spin 20s linear infinite',
                    boxShadow: `0 0 40px ${item.color}44, inset 0 0 20px ${item.color}22`
                }}></div>
                <div className="tech-ring inner-ring" style={{
                    position: 'absolute',
                    inset: '20px',
                    border: `1px dashed ${item.color}88`,
                    borderRadius: '50%',
                    animation: 'spin 25s linear infinite reverse'
                }}></div>
                
                {/* Core Dark Background with Subtle Gradient */}
                <div className="tech-ring inner-solid" style={{
                    position: 'absolute',
                    inset: '35px',
                    border: `2px solid rgba(255,255,255,0.1)`,
                    borderRadius: '50%',
                    background: `radial-gradient(circle at top right, rgba(15,15,25,0.9) 0%, rgba(5,5,10,0.95) 70%, ${item.color}33 100%)`,
                    zIndex: 1,
                    overflow: 'hidden',
                    maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)'
                }}>
                    {/* Internal Flowing Plasma Effect */}
                    <div style={{
                        position: 'absolute',
                        width: '150%', height: '150%',
                        top: '-25%', left: '-25%',
                        background: `conic-gradient(from 0deg, transparent 0deg, ${item.color}33 90deg, transparent 180deg)`,
                        animation: 'spin 12s linear infinite',
                        mixBlendMode: 'screen',
                        pointerEvents: 'none',
                        zIndex: 2,
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                    }}></div>
                </div>

                {/* Content Container Inside the Core */}
                <div className="node-content" style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'calc(100% - 70px)',
                    height: 'calc(100% - 70px)',
                    borderRadius: '50%',
                }}>
                    <p style={{
                        color: item.color,
                        fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
                        fontWeight: '800',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '0.8rem',
                        fontFamily: 'Inter',
                        textShadow: `0 0 15px ${item.color}`,
                        lineHeight: '1.4',
                        '--subtitle-bottom': '0.8rem'
                    }}>
                        [ {item.subtitle.split('\n').map((line, i, arr) => (
                            <React.Fragment key={i}>
                                {line}
                                {i !== arr.length - 1 && <br />}
                            </React.Fragment>
                        ))} ]
                    </p>
                    
                    <h3 style={{ 
                        fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)', 
                        color: '#fff', 
                        marginBottom: '0.5rem', 
                        fontWeight: '900',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        lineHeight: 1.1,
                        textShadow: `0 0 30px var(--node-color), 0 0 10px #fff`
                    }}>
                        {item.title}
                    </h3>
                    
                    <p style={{ 
                        fontFamily: 'Inter', 
                        color: 'rgba(255,255,255,0.85)', 
                        lineHeight: 1.4, 
                        fontSize: 'clamp(0.75rem, 1vw, 0.95rem)',
                        marginBottom: '1rem',
                        maxWidth: '85%',
                        fontWeight: '400'
                    }}>
                        {item.description}
                    </p>

                    <div 
                        className="explore-btn"
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 'var(--btn-padding, 1rem 2.5rem)',
                            background: `linear-gradient(90deg, ${item.color}33, transparent)`,
                            border: `1px solid ${item.color}`,
                            borderRadius: '100px',
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 0 20px ${item.color}44, inset 0 0 15px ${item.color}44`
                        }}
                    >
                        {item.linkText}
                    </div>
                </div>
            </div>
            
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulseGlow {
                    0% { transform: scale(0.9); opacity: 0.6; filter: blur(30px); }
                    100% { transform: scale(1.1); opacity: 1; filter: blur(50px); }
                }
                .node-core-wrapper:hover {
                    transform: scale(1.05) translateY(-5px) !important;
                }
                .node-core-wrapper:hover .ambient-glow {
                    background: radial-gradient(circle, ${item.color}88 0%, transparent 70%) !important;
                }
                .node-core-wrapper:hover .tech-ring {
                    border-color: var(--node-color) !important;
                    box-shadow: 0 0 30px var(--node-color), inset 0 0 20px var(--node-color) !important;
                }
                .node-core-wrapper:hover .inner-solid {
                    border-color: rgba(255,255,255,0.4) !important;
                }
                .explore-btn:hover {
                    background: var(--node-color) 66 !important;
                    box-shadow: 0 0 30px var(--node-color) 88, inset 0 0 25px var(--node-color) 66 !important;
                    transform: scale(1.05);
                }
                @media (max-width: 600px) {
                    .node-content {
                        padding: 1rem !important;
                        width: calc(100% - 40px) !important;
                        height: calc(100% - 40px) !important;
                    }
                    .explore-btn {
                        --btn-padding: 0.6rem 1.5rem !important;
                        font-size: 0.75rem !important;
                    }
                    .node-content p:first-of-type {
                        margin-bottom: 0.4rem !important;
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
            subtitle: 'CONSTRUCTION\nMANAGEMENT',
            description: 'Real time project tracking, resource allocation, and onsite data synchronization for major projects.',
            color: '#00d2ff',
            linkText: 'Coming Soon'
        },
        {
            id: 'market',
            title: 'Gavith Market',
            subtitle: 'ERP &\nD2C INVENTORY',
            description: 'Unified ecosystem for manufacturing, sales, and supply chain logic.',
            color: '#007aff',
            linkText: 'Coming Soon'
        }
    ];

    return (
        <section id="products" className="section" style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
            {/* Background Grid / Star Map Elements */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
                pointerEvents: 'none',
                zIndex: 0,
                transform: 'perspective(500px) rotateX(40deg) scale(2)',
                transformOrigin: 'top center',
                opacity: 0.3
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1 }}>
                            Our <span className="gavith-text">Products</span>
                        </h2>
                        <p style={{ fontFamily: 'Inter', color: 'rgba(255,255,255,0.6)', width: '100%', whiteSpace: 'nowrap', marginTop: '1rem' }}>
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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    paddingTop: '2rem',
                    position: 'relative'
                }}>
                    
                    {/* Connecting Energy Line for Desktop */}
                    <div className="constellation-connector" style={{
                        position: 'absolute',
                        top: '50%', /* Centered vertically behind massive nodes */
                        left: '15%',
                        right: '15%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #00d2ff, #bb00ff, transparent)',
                        opacity: 0.3,
                        zIndex: 1,
                        boxShadow: '0 0 15px rgba(0, 210, 255, 0.5)'
                    }}>
                        {/* Data packets moving along the line */}
                        <div style={{
                            position: 'absolute',
                            top: '-2px', left: 0,
                            width: '40px', height: '6px',
                            background: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0 0 15px #fff',
                            animation: 'dataTravel 4s ease-in-out infinite'
                        }}></div>
                    </div>

                    <style>{`
                        @keyframes dataTravel {
                            0% { left: 0; opacity: 0; }
                            10% { opacity: 1; }
                            90% { opacity: 1; }
                            100% { left: 100%; opacity: 0; }
                        }
                        @media (max-width: 768px) {
                            .constellation-connector { display: none !important; }
                            .constellation-node-container { margin-bottom: 4rem; }
                        }
                    `}</style>

                    {products.map((item, index) => (
                        <ProductCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Products;
