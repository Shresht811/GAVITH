import React, { useRef } from 'react';

const solutions = [
    {
        title: "Strategic Consulting",
        description: "Aligning your technology with your business vision. We provide roadmap design and digital transformation strategies.",
        icon: "LOCATION_CROSSHAIRS", // Abstract placeholder for custom UI
        color: "#00d2ff"
    },
    {
        title: "Custom Software",
        description: "From concept to code. We build scalable, high performance web and mobile applications using AI powered development to significantly reduce turnaround time and costs.",
        icon: "CODE_NODE",
        color: "#007aff"
    },
    {
        title: "Cloud Infrastructure",
        description: "Secure, scalable, and cost effective cloud solutions. We specialize in AWS, Azure, and Hybrid Cloud.",
        icon: "CLOUD_NETWORK",
        color: "#5ac8fa"
    },
    {
        title: "AI & Automation",
        description: "Leverage the power of Machine Learning and RPA to streamline workflows.",
        icon: "BRAIN_CIRCUIT",
        color: "#5856d6"
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
                        <div key={index} className="holo-card" style={{
                            padding: 'clamp(1.5rem, 5vw, 3rem) 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            minHeight: 'clamp(300px, 40vh, 350px)',
                            background: 'linear-gradient(180deg, rgba(10, 15, 25, 0.8) 0%, rgba(5, 5, 10, 0.9) 100%)'
                        }}>
                            {/* decorative corner */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                width: '40px', height: '40px',
                                background: `linear-gradient(135deg, transparent 50%, ${item.color} 50%)`,
                                opacity: 0.5
                            }}></div>

                            <div>
                                <div style={{
                                    width: '60px', height: '60px',
                                    border: `1px solid ${item.color}`,
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `0 0 20px ${item.color}40`,
                                    marginBottom: '2rem',
                                    color: item.color
                                }}>
                                    {/* Abstract Icon Shapes */}
                                    <div style={{ width: '20px', height: '20px', background: 'currentColor', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
                                </div>

                                <h3 style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontFamily: 'Inter',
                                    fontSize: '0.95rem',
                                    color: 'rgba(255,255,255,0.7)',
                                    lineHeight: '1.6'
                                }}>
                                    {item.description}
                                </p>
                            </div>

                            <div style={{
                                marginTop: '2rem',
                                width: '100%',
                                height: '1px',
                                background: 'rgba(255,255,255,0.1)',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute', top: '-1px', left: 0,
                                    width: '20%', height: '3px',
                                    background: item.color,
                                    boxShadow: `0 0 10px ${item.color}`
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
