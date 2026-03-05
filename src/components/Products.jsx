import React from 'react';

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
                        <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', lineHeight: 1 }}>
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
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2rem'
                }}>

                    {products.map((item, index) => (
                        <a href="#" key={index} className="holo-card" style={{
                            textDecoration: 'none',
                            padding: '3rem',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: '450px', // Increased height for better proportions
                            // Holographic dark background matching Services
                            background: 'linear-gradient(180deg, rgba(10, 15, 25, 0.8) 0%, rgba(5, 5, 10, 0.9) 100%)'
                        }}>
                            {/* Decorative Corner (Top Right) */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                width: '60px', height: '60px',
                                background: `linear-gradient(135deg, transparent 50%, ${item.color} 50%)`,
                                opacity: 0.6
                            }}></div>

                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    background: 'rgba(0,0,0,0.5)',
                                    display: 'inline-block',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    marginBottom: '1.5rem',
                                    color: item.color,
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.05em'
                                }}>
                                    {item.subtitle}
                                </div>
                                <h3 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>
                                    <span style={{
                                        background: `linear-gradient(135deg, #fff 0%, ${item.color} 100%)`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>Gavith</span> {item.title.split(' ')[1]}
                                </h3>
                                <p style={{ fontFamily: 'Inter', color: 'rgba(255,255,255,0.8)', maxWidth: '500px', lineHeight: 1.6 }}>
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Holographic Accent Line */}
                            <div style={{
                                marginTop: '3rem',
                                width: '100%',
                                height: '1px',
                                background: 'rgba(255,255,255,0.1)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                {/* Glowing bar */}
                                <div style={{
                                    position: 'absolute', top: '-2px', left: 0,
                                    width: '30%', height: '4px',
                                    background: item.color,
                                    boxShadow: `0 0 15px ${item.color}`
                                }}></div>

                                {/* Link/Action area pushed down below or inline */}
                            </div>

                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    border: `1px solid ${item.color}`,
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: `0 0 10px ${item.color}40`
                                }}>
                                    ↗
                                </div>
                                <span style={{ color: 'white', fontWeight: '500' }}>{item.linkText}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Products;
