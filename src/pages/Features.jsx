import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import PageSEO from '../components/PageSEO';

const ScrambleText = ({ text }) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const [display, setDisplay] = useState(text.replace(/./g, '-'));
    
    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(text.split('').map((char, index) => {
                if (index < iterations) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(''));
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 2; // Speed of decryption
        }, 30);
        return () => clearInterval(interval);
    }, [text]);
    
    return <span>{display}</span>;
};

const Features = () => {
    const [expandedBuild, setExpandedBuild] = useState(null);
    const [expandedMarket, setExpandedMarket] = useState(null);

    return (
        <>
        <PageSEO
            title="Platform Capabilities"
            description="Explore Gavith Build and Gavith Market — intelligent software tools for construction project management, ERP, and D2C inventory."
            path="/features"
        />
        <div style={{ paddingTop: '150px', paddingBottom: '10rem' }} className="blueprint-grid">

            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
                <ScrollReveal>
                    <div style={{ marginBottom: '8rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h1 className="mobile-text-center" style={{
                                fontSize: 'clamp(3rem, 6vw, 6rem)',
                                fontWeight: '800',
                                letterSpacing: '-0.02em',
                                lineHeight: 0.9
                            }}>
                                SYSTEM CORE<span style={{ color: '#00d2ff' }}> </span>
                            </h1>
                            <p className="mobile-text-center" style={{
                                fontFamily: 'monospace',
                                color: '#00d2ff',
                                marginTop: '1rem'
                            }}>
                                <ScrambleText text="ARCHITECTURE BREAKDOWN" />
                            </p>
                        </div>
                        <div style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>
                            <div>LAST UPDATE: <span style={{ color: 'white' }}><ScrambleText text="2026.02" /></span></div>
                            <div>VERSION: <span style={{ color: 'white' }}><ScrambleText text="4.2.0 ALPHA" /></span></div>
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
                            <h2 className="mobile-text-center" style={{ fontSize: '2rem', letterSpacing: '0.1em', margin: 0, width: '100%' }}>
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
                            { id: 1, title: "Real Time Tracking", desc: "Monitor every aspect of your construction site instantly. From workforce location to material usage, get a live feed of your project's heartbeat.", detail: "A centralized digital dashboard aggregates daily logs, worker mobile check-ins, and material delivery manifests, providing total project visibility." },
                            { id: 2, title: "Resource Allocation", desc: "Our engine automatically suggests where to move machinery and manpower to prevent bottlenecks before they happen.", detail: "Smart scheduling algorithms analyze project dependencies and available personnel to automatically resolve scheduling conflicts and assign optimal teams to delayed tasks." },
                            { id: 3, title: "Predictive Maintenance", desc: "AI driven analytics that foresee equipment failures before they happen, reducing downtime and keeping your projects on schedule.", detail: "By logging usage hours and maintenance histories into a unified database, our platform automatically generates service alerts before heavy machinery reaches critical fatigue thresholds." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <motion.div 
                                    layout
                                    className="blueprint-card" 
                                    onClick={() => setExpandedBuild(expandedBuild === i ? null : i)}
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '3rem',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        cursor: 'pointer',
                                        background: expandedBuild === i ? 'rgba(0, 210, 255, 0.05)' : 'transparent',
                                        boxShadow: expandedBuild === i ? 'inset 0 0 30px rgba(0, 210, 255, 0.1)' : 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    whileHover={{ border: '1px solid rgba(0, 210, 255, 0.5)' }}
                                >
                                    <motion.div layout style={{ fontFamily: 'monospace', color: '#00d2ff', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <span><ScrambleText text={`0${i + 1} SPEC`} /></span>
                                        <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.3)' }}>{expandedBuild === i ? '[-]' : '[+]'}</span>
                                    </motion.div>
                                    <motion.h3 layout style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</motion.h3>
                                    <motion.p layout style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1 }}>{item.desc}</motion.p>
                                    
                                    <AnimatePresence>
                                        {expandedBuild === i && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{ overflow: 'hidden', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px dashed rgba(0,210,255,0.3)' }}
                                            >
                                                <h4 style={{ color: '#00d2ff', marginBottom: '1rem', fontFamily: 'monospace' }}>&gt; TECHNICAL DETAILS</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.detail}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
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
                            <h2 className="mobile-text-center" style={{ fontSize: '2rem', letterSpacing: '0.1em', margin: 0, width: '100%' }}>
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
                            { id: 1, title: "Unified Ecosystem", desc: "Connect manufacturing, sales, and logistics in one dashboard. See the entire lifecycle of your product from factory floor to customer door.", detail: "Built on Gavith Nexus architecture, breaking through traditional API limitations by streaming state updates globally under 50 milliseconds via WebSockets." },
                            { id: 2, title: "Smart Inventory", desc: "Automated logic that learns your sales patterns. It predicts stock shortages and handles reordering without manual input.", detail: "Our predictive engine runs an ensemble of LightGBM models mapped against historical telemetry, adjusting confidence intervals daily." },
                            { id: 3, title: "Direct to Consumer", desc: "Integrated sales channels that bypass intermediaries, giving you full control over your customer relationships and data.", detail: "High-throughput edge-cached microservices allow direct B2C commerce scaling instantly and mitigating DDoS attack vectors actively." }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <motion.div 
                                    layout
                                    className="blueprint-card" 
                                    onClick={() => setExpandedMarket(expandedMarket === i ? null : i)}
                                    style={{
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '3rem',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        cursor: 'pointer',
                                        background: expandedMarket === i ? 'rgba(0, 91, 234, 0.1)' : 'transparent',
                                        boxShadow: expandedMarket === i ? 'inset 0 0 30px rgba(0, 91, 234, 0.1)' : 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                    whileHover={{ border: '1px solid rgba(0, 91, 234, 0.5)' }}
                                >
                                    <motion.div layout style={{ fontFamily: 'monospace', color: '#005bea', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                        <span><ScrambleText text={`0${i + 1} SPEC`} /></span>
                                        <span style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.3)' }}>{expandedMarket === i ? '[-]' : '[+]'}</span>
                                    </motion.div>
                                    <motion.h3 layout style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</motion.h3>
                                    <motion.p layout style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flex: 1 }}>{item.desc}</motion.p>
                                    
                                    <AnimatePresence>
                                        {expandedMarket === i && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{ overflow: 'hidden', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px dashed rgba(0,91,234,0.3)' }}
                                            >
                                                <h4 style={{ color: '#005bea', marginBottom: '1rem', fontFamily: 'monospace' }}>&gt; TECHNICAL DETAILS</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.detail}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Features;
