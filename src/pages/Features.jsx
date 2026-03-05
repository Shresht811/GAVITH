import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Features = () => {
    return (
        <div style={{ paddingTop: '150px', paddingBottom: '10rem' }} className="blueprint-grid">

            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <ScrollReveal>
                    <div style={{ marginBottom: '8rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h1 style={{
                                fontSize: 'clamp(3rem, 6vw, 6rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.02em',
                                lineHeight: 0.9,
                                textAlign: window.innerWidth < 768 ? 'center' : 'left'
                            }}>
                                SYSTEM CORE<span style={{ color: '#00d2ff' }}> </span>
                            </h1>
                            <p style={{
                                fontFamily: 'monospace',
                                color: '#00d2ff',
                                marginTop: '1rem',
                                textAlign: window.innerWidth < 768 ? 'center' : 'left'
                            }}>
                                ARCHITECTURE BREAKDOWN
                            </p>
                        </div>
                        <div style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>
                            <div>LAST UPDATE: <span style={{ color: 'white' }}>2026.02</span></div>
                            <div>VERSION: <span style={{ color: 'white' }}>4.2.0 ALPHA</span></div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* GAVITH BUILD - CONSTRUCTION */}
                <div style={{ marginBottom: '10rem' }}>
                    <ScrollReveal>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '3rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div style={{ width: '10px', height: '10px', background: '#00d2ff', boxShadow: '0 0 10px #00d2ff' }}></div>
                            <h2 className="mobile-only" style={{ fontSize: '2rem', letterSpacing: '0.1em', margin: 0, textAlign: 'center' }}>
                                GAVITH BUILD <span style={{ color: 'rgba(255,255,255,0.3)' }}> ONSITE</span>
                            </h2>
                            <h2 className="desktop-only" style={{ fontSize: '2rem', letterSpacing: '0.1em', margin: 0 }}>
                                GAVITH BUILD <span style={{ color: 'rgba(255,255,255,0.3)' }}> ONSITE</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                        gap: '2rem',
                        justifyContent: 'center'
                    }}>
                        {[
                            { title: "Real Time Tracking", desc: "Monitor every aspect of your construction site instantly. From workforce location to material usage, get a live feed of your project's heartbeat." },
                            { title: "Resource Allocation", desc: "Our engine automatically suggests where to move machinery and manpower to prevent bottlenecks before they happen." },
                            { title: "Predictive Maintenance", desc: "AI driven analytics that foresee equipment failures before they happen, reducing downtime and keeping your projects on schedule." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="blueprint-card" style={{
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '3rem',
                                    height: '100%', // Ensures equal height
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'background 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 210, 255, 0.05)';
                                        e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(0, 210, 255, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ fontFamily: 'monospace', color: '#00d2ff', marginBottom: '1rem' }}>0{i + 1} SPEC</div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* GAVITH MARKET - ERP */}
                <div style={{ marginBottom: '5rem' }}>
                    <ScrollReveal>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '3rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div style={{ width: '10px', height: '10px', background: '#005bea', boxShadow: '0 0 10px #005bea' }}></div>
                            <h2 className="mobile-only" style={{ fontSize: '2rem', letterSpacing: '0.1em', margin: 0, textAlign: 'center' }}>
                                GAVITH MARKET <span style={{ color: 'rgba(255,255,255,0.3)' }}> SUPPLY</span>
                            </h2>
                            <h2 className="desktop-only" style={{ fontSize: '2rem', letterSpacing: '0.1em', margin: 0 }}>
                                GAVITH MARKET <span style={{ color: 'rgba(255,255,255,0.3)' }}> SUPPLY</span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                        gap: '2rem',
                        justifyContent: 'center'
                    }}>
                        {[
                            { title: "Unified Ecosystem", desc: "Connect manufacturing, sales, and logistics in one dashboard. See the entire lifecycle of your product from factory floor to customer door." },
                            { title: "Smart Inventory", desc: "Automated logic that learns your sales patterns. It predicts stock shortages and handles reordering without manual input." },
                            { title: "Direct to Consumer", desc: "Integrated sales channels that bypass intermediaries, giving you full control over your customer relationships and data." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="blueprint-card" style={{
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '3rem',
                                    height: '100%', // Ensures equal height
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'background 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 91, 234, 0.1)';
                                        e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(0, 91, 234, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ fontFamily: 'monospace', color: '#005bea', marginBottom: '1rem' }}>0{i + 1} SPEC</div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Features;
