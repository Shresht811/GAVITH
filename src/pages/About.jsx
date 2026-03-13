import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import PageSEO from '../components/PageSEO';

const WireframeCube = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
    
    const rotateX = useTransform(springY, [-1, 1], [60, -60]);
    const rotateY = useTransform(springX, [-1, 1], [-60, 60]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div style={{
            width: '200px', height: '200px', position: 'relative',
            transformStyle: 'preserve-3d', 
            rotateX, rotateY
        }}>
            {/* Front */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid rgba(0, 210, 255, 0.4)', background: 'rgba(0, 210, 255, 0.05)', transform: 'translateZ(100px)', boxShadow: 'inset 0 0 20px rgba(0,210,255,0.2)' }}></div>
            {/* Back */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid rgba(0, 210, 255, 0.4)', background: 'rgba(0, 210, 255, 0.05)', transform: 'rotateY(180deg) translateZ(100px)' }}></div>
            {/* Right */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid rgba(0, 210, 255, 0.4)', background: 'rgba(0, 210, 255, 0.05)', transform: 'rotateY(90deg) translateZ(100px)' }}></div>
            {/* Left */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid rgba(0, 210, 255, 0.4)', background: 'rgba(0, 210, 255, 0.05)', transform: 'rotateY(-90deg) translateZ(100px)' }}></div>
            {/* Top */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid rgba(0, 210, 255, 0.4)', background: 'rgba(0, 210, 255, 0.05)', transform: 'rotateX(90deg) translateZ(100px)' }}></div>
            {/* Bottom */}
            <div style={{ position: 'absolute', width: '100%', height: '100%', border: '2px solid rgba(0, 210, 255, 0.4)', background: 'rgba(0, 210, 255, 0.05)', transform: 'rotateX(-90deg) translateZ(100px)' }}></div>

            {/* Inner Power Core */}
            <div style={{ position: 'absolute', top: '35%', left: '35%', width: '30%', height: '30%', background: '#00d2ff', borderRadius: '50%', filter: 'blur(15px)', transform: 'translateZ(0)' }}></div>
        </motion.div>
    );
};

const About = () => {
    return (
        <>
        <PageSEO
            title="About GAVITH"
            description="Learn about GAVITH's vision, leadership team, and our mission to bring intelligent software to the construction and enterprise sectors."
            path="/about"
        />
        <div className="container" style={{ paddingTop: 'clamp(100px, 15vh, 150px)', paddingBottom: 'var(--spacing-xl)' }}>

            {/* HERO: WHO WE ARE */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '3rem' }}>
                <div style={{ flex: 1, minWidth: '280px' }}>
                    <ScrollReveal>
                        <h1 style={{
                            fontSize: 'clamp(2.2rem, 8vw, 6rem)',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            fontWeight: '800',
                            letterSpacing: '-0.02em'
                        }}>
                            WE BUILD THE SOFTWARE THAT <br className="desktop-only" />
                            <span className="gavith-text">SHAPES THE WORLD.</span>
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: 'rgba(255,255,255,0.7)',
                            maxWidth: '600px',
                            lineHeight: 1.6,
                            borderLeft: '2px solid #00d2ff',
                            paddingLeft: '1.5rem'
                        }}>
                            We don't just write code. We engineer the digital nervous systems for the physical world. Gavith is the force behind the skyscrapers, the bridges, and the supply chains of tomorrow.
                        </p>
                    </ScrollReveal>
                </div>

                <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                    <ScrollReveal delay={0.2}>
                        <img src="/holographic_skyscraper.png" alt="Holographic Blueprint" style={{
                            width: '100%',
                            maxWidth: '500px',
                            filter: 'drop-shadow(0 0 30px rgba(0, 210, 255, 0.3))',
                            animation: 'pulse-glow 5s infinite alternate'
                        }} />
                    </ScrollReveal>
                </div>
            </div>

            {/* OUR CORE VALUES */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <ScrollReveal>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '2rem' }}>OUR CORE VALUES</h2>
                </ScrollReveal>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {[
                        { title: "VISION", desc: "Available light is not enough. We build the torches that illuminate the path forward for an entire industry." },
                        { title: "INTEGRITY", desc: "Structure is everything. We build our relationships with the same reinforced concrete strength we expect from our buildings." },
                        { title: "IMPACT", desc: "We don't measure success in lines of code. We measure it in skylines changed and foundations laid." }
                    ].map((val, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="holo-card" style={{
                                padding: '2.5rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '12px',
                                background: 'linear-gradient(180deg, rgba(10, 15, 25, 0.8) 0%, rgba(5, 5, 10, 0.9) 100%)',
                                height: '100%',
                                transition: 'all 0.3s ease'
                            }}>
                                <h3 style={{ color: '#00d2ff', marginBottom: '1rem', fontSize: '1.2rem', letterSpacing: '0.1em' }}>// {val.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontSize: '1.1rem' }}>{val.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* LEADERSHIP / TEAM (Placeholder for Company Structure) */}
            <div style={{ marginBottom: 'var(--spacing-xl)' }}>
                <ScrollReveal>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '2rem' }}>LEADERSHIP</h2>
                </ScrollReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {[
                        {
                            name: "Executive Action",
                            role: "Strategic Trajectory",
                            icon: "🎯",
                            desc: "Steering the global vision and ensuring our innovations redefine the industry standard."
                        },
                        {
                            name: "Core Architecture",
                            role: "Systems Engineering",
                            icon: "🛠️",
                            desc: "The brilliant minds designing the unbreakable foundations of our proprietary ecosystem."
                        },
                        {
                            name: "Tactical Deployment",
                            role: "Field Implementation",
                            icon: "⚡",
                            desc: "Executing complex integrations seamlessly to bridge our software with physical reality."
                        },
                        {
                            name: "Cognitive Intelligence",
                            role: "Data & Analytics",
                            icon: "🔮",
                            desc: "Transforming raw operational data into predictive insights for the future of enterprise."
                        }
                    ].map((team, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="holo-card" style={{
                                textAlign: 'left',
                                padding: '2.5rem 2rem',
                                background: 'linear-gradient(180deg, rgba(10, 15, 25, 0.8) 0%, rgba(5, 5, 10, 0.9) 100%)',
                                border: '1px solid rgba(0, 210, 255, 0.15)',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div className="team-hologram" style={{
                                    width: '100%',
                                    height: 'clamp(150px, 20vw, 180px)',
                                    background: 'linear-gradient(135deg, rgba(10, 15, 25, 0.8) 0%, rgba(5, 5, 10, 0) 100%)',
                                    marginBottom: '1.5rem',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    border: '1px solid rgba(0, 210, 255, 0.2)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div className="hologram-scanline"></div>
                                    <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 20px rgba(0, 210, 255, 0.8))', position: 'relative', zIndex: 2 }}>{team.icon}</span>
                                </div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{team.name}</h3>
                                <p style={{ color: '#00d2ff', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>{team.role}</p>
                                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, flexGrow: 1 }}>{team.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* LOCATION / FOOTPRINT */}
            <ScrollReveal>
                <div id="headquarters" style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '5rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    
                    {/* Interactive Global Vector Map Background */}
                    <svg style={{
                        position: 'absolute', top: '50%', right: '-10%', transform: 'translateY(-50%)',
                        width: '80%', height: 'auto', opacity: 0.05, pointerEvents: 'none', zIndex: 0
                    }} viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                        <path d="M200,100 Q300,-50 400,100 T600,100 T800,100 M200,200 Q300,50 400,200 T600,200 T800,200 M200,300 Q300,150 400,300 T600,300 T800,300 M200,400 Q300,250 400,400 T600,400 T800,400" fill="none" stroke="#00d2ff" strokeWidth="2" strokeDasharray="5,5"/>
                        {/* Abstract Continents */}
                        <circle cx="700" cy="250" r="10" fill="#00d2ff" filter="drop-shadow(0 0 10px #00d2ff)" />
                        <line x1="700" y1="250" x2="650" y2="200" stroke="#00d2ff" strokeWidth="1" />
                        <circle cx="650" cy="200" r="4" fill="#fff" />
                    </svg>

                    <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                GLOBAL HEADQUARTERS
                                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#00d2ff', borderRadius: '50%', boxShadow: '0 0 10px #00d2ff', animation: 'pulse 2s infinite' }}></span>
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.2rem' }}>
                                <span style={{ color: '#fff' }}>BENGALURU,</span><br />
                                INDIA.<br /><br />
                                <a href="mailto:it@gavith.com" style={{ color: '#00d2ff', fontSize: '1rem', fontFamily: 'monospace', textDecoration: 'none', borderBottom: '1px dashed #00d2ff', paddingBottom: '2px' }}>it@gavith.com</a>
                            </p>
                        </div>
                        
                        {/* Interactive Cube rendered here */}
                        <div style={{ perspective: '1000px' }}>
                            <WireframeCube />
                        </div>
                    </div>
                </div>
            </ScrollReveal>

        </div>
        </>
    );
};

export default About;
