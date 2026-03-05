import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const whitePapersContent = {
    "GAVITH: THE NEW OPERATING SYSTEM FOR THE BUILT ENVIRONMENT": {
        subtitle: "Technical Insight • Corporate Vision",
        abstract: "The built environment stands at a digital crossroads. For decades, the industry has relied on fragmented data and static documentation. GAVITH introduces a unified digital core, synchronizing physical assets with virtual Digital Twins in real time to redefine the lifecycle of infrastructure.",
        fullArticle: [
            "The infrastructure that sustains modern civilization is reaching its conceptual limits. While the digital revolution has transformed finance, communication, and manufacturing, the built environment has remained largely tethered to siloed data and physical management models. This inertia results in significant material waste and missed opportunities for sustainable urban expansion.",
            "GAVITH emerges as the foundational layer for this transition. We propose a move away from the project centric mentality toward a product oriented lifecycle approach. By treating building data as a continuous stream rather than a series of disconnected files, we enable high fidelity digital synchronization. This is what we define as the Operating System for the Built Environment.",
            "Our architectural framework centralizes disparate telemetry, ranging from structural stress sensors to complex supply chain logistics, into a single, immutable source of truth. This integration allows stakeholders to move beyond reactive management. Instead of repairing failures, future cities will utilize predictive modeling to prevent them entirely, optimizing energy flows and material endurance at a municipal scale.",
            "The long term strategy involves the standardization of infrastructure data protocols. By creating a universal language for the built world, GAVITH facilitates a seamless transition between phase gate milestones, ensuring that the intent of the architect is maintained through decades of facility management. This insight serves as our blueprint for a smarter, more resilient future."
        ],
        keyPoints: [
            "Synchronizing physical infrastructure with living Digital Twins",
            "Universal data protocols for seamless lifecycle management",
            "Predictive modeling as a tool for urban resilience",
            "Continuous data streams replacing fragmented documentation"
        ]
    },
    "AI POWERED CIVIL ENGINEERING: REDEFINING PROJECT LIFECYCLES": {
        subtitle: "Technical Insight • GAVITH BUILD",
        abstract: "Civil engineering is witnessing a paradigm shift from manual oversight to automated, data driven execution. GAVITH BUILD leverages Generative Infrastructure Modeling and real time telemetry to minimize waste and optimize architectural outcomes in high density urban settings.",
        fullArticle: [
            "The complexity of modern major projects has outpaced the capabilities of traditional project management tools. As architectural ambitions grow, the margin for error shrinks. GAVITH BUILD represents the intersection of structural engineering and advanced machine intelligence, designed to bridge the gap between initial design and final commission.",
            "Central to our methodology is the Generative Infrastructure Model. Unlike static BIM models, these are dynamic frameworks that respond to real world variables. By processing thousands of data points, including localized weather, material degradation rates, and labor efficiency, the GAVITH AI can generate optimized construction paths that adjust in real time to on site realities in minutes, not days.",
            "Our focus on precision construction has direct implications for global sustainability efforts. The construction industry has historically been a significant source of carbon emissions and material surplus. By utilizing GAVITH's precision telemetry, engineering firms can reduce structural waste by over 30%. This is achieved through granular tracking of every material unit, from fabrication to installation.",
            "The evolution of the project lifecycle through GAVITH BUILD is not merely about speed; it is about the quality of the result. By automating hazard detection and optimizing load distributions during the build phase, we ensure that every structure is delivered to a standard that far exceeds current regulatory benchmarks. We are redefining the very nature of civil execution."
        ],
        keyPoints: [
            "Generative Infrastructure Modeling for dynamic project paths",
            "Granular IoT integration for precision material tracking",
            "Significant reduction in carbon footprints through waste management",
            "Automated hazard detection and real time on site safety"
        ]
    },
    "LIQUIDITY IN INFRASTRUCTURE: THE FUTURE OF ASSET EXCHANGE": {
        subtitle: "Technical Insight • GAVITH MARKET",
        abstract: "Infrastructure as an asset class has historically been characterized by extreme illiquidity. GAVITH MARKET introduces a high velocity exchange platform, utilizing fractional ownership models and AI powered valuation to democratize infrastructure investment and increase asset liquidity.",
        fullArticle: [
            "Institutional capital has long dominated the infrastructure landscape, leaving individual investors on the sidelines. Barriers to entry, ranging from capital requirements to long term horizons, have rendered high value assets like energy grids and toll roads illiquid. GAVITH MARKET is our solution to unlocking this trapped value and creating a more equitable financial ecosystem.",
            "Our approach utilizes the GAVITH protocol to shard large scale assets into manageable units of ownership. This tokenization doesn't just lower the barrier to entry; it creates a secondary market with unprecedented velocity. Builders can exit positions early to fund new projects, while investors can diversify their portfolios with yield generating physical assets.",
            "To support this marketplace, we have developed a proprietary AI valuation index. Unlike traditional appraisals which are infrequent and often subjective, our index relies on real time operational data. By monitoring the actual performance of an asset, such as traffic volume on a bridge or kilowatts from a solar farm, we provide investors with a transparent, live view of market value.",
            "The implications of a liquid infrastructure market are profound. By accelerating the flow of capital, we enable the rapid redeployment of resources into the world's most critical development areas. This technical analysis explores how GAVITH MARKET is transforming static bricks and mortar into a dynamic, tradeable digital asset class."
        ],
        keyPoints: [
            "Fractional ownership models via the GAVITH protocol",
            "High velocity secondary markets for infrastructure equity",
            "Real time AI valuation based on operational performance",
            "Democratizing access to high yield institutional asset classes"
        ]
    }
};

const WhitePaperModal = ({ isOpen, onClose, paper }) => {
    if (!isOpen || !paper) return null;

    const content = whitePapersContent[paper.title];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }} onClick={onClose}>
            <div style={{
                background: 'linear-gradient(180deg, #0a0f19 0%, #05050a 100%)',
                width: '100%',
                maxWidth: '850px',
                maxHeight: '90vh',
                overflowY: 'auto',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '32px',
                padding: '5rem',
                position: 'relative',
                boxShadow: '0 0 80px rgba(0, 210, 255, 0.1)',
                textAlign: 'left'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '2.5rem',
                        right: '3rem',
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '2.5rem',
                        fontWeight: '200',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        lineHeight: 1
                    }}
                    onMouseEnter={e => {
                        e.target.style.color = '#fff';
                        e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={e => {
                        e.target.style.color = 'rgba(255,255,255,0.3)';
                        e.target.style.transform = 'scale(1)';
                    }}
                >&times;</button>

                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ height: '1px', width: '30px', background: paper.color }}></div>
                        <h4 style={{ color: paper.color, letterSpacing: '0.3em', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' }}>
                            GAVITH INSIGHTS • {paper.date}
                        </h4>
                    </div>
                    <h1 style={{ fontSize: '3rem', fontWeight: '400', lineHeight: 1.1, marginBottom: '2rem', color: '#fff', letterSpacing: '-0.02em' }}>
                        {paper.title}
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.5)', fontWeight: '300', fontStyle: 'italic' }}>
                        {content?.subtitle}
                    </p>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '0.9rem', marginBottom: '2rem', color: paper.color, letterSpacing: '0.2em', fontWeight: '800' }}>ABSTRACT</h3>
                    <p style={{ lineHeight: 1.9, color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', textAlign: 'justify', fontWeight: '400' }}>
                        {content?.abstract}
                    </p>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '0.9rem', marginBottom: '2rem', color: paper.color, letterSpacing: '0.2em', fontWeight: '800' }}>DEEP ANALYSIS</h3>
                    {content?.fullArticle.map((para, idx) => (
                        <p key={idx} style={{
                            lineHeight: 1.9,
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '1.1rem',
                            textAlign: 'justify',
                            marginBottom: '2rem',
                            fontWeight: '300'
                        }}>
                            {para}
                        </p>
                    ))}
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '0.9rem', marginBottom: '2rem', color: paper.color, letterSpacing: '0.2em', fontWeight: '800' }}>KEY FOCUS AREAS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {content?.keyPoints.map((point, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                gap: '1.5rem',
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1.6,
                                fontSize: '1rem',
                                fontWeight: '300'
                            }}>
                                <div style={{
                                    minWidth: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: paper.color,
                                    marginTop: '0.5rem',
                                    boxShadow: `0 0 10px ${paper.color}`
                                }}></div>
                                {point}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    marginTop: '5rem',
                    paddingTop: '3rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em' }}>
                        © 2025 GAVITH TECHNOLOGIES • ALL RIGHTS RESERVED
                    </span>
                </div>
            </div>
        </div>
    );
};

const LogoMarquee = ({ items, speed = 40, direction = 'normal' }) => (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', width: '100%', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div style={{
            display: 'inline-block',
            animation: `scroll-left ${speed}s linear infinite`,
            animationDirection: direction
        }}>
            {items.concat(items).map((item, i) => ( // Duplicate items for seamless loop
                <span key={i} style={{
                    display: 'inline-block',
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'rgba(255,255,255,0.15)',
                    margin: '0 4rem',
                    textTransform: 'uppercase',
                    cursor: 'default',
                    transition: 'color 0.3s'
                }}
                    onMouseEnter={(e) => e.target.style.color = '#00d2ff'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.15)'}
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

const Partners = () => {
    const [selectedPaper, setSelectedPaper] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openPaper = (paper) => {
        setSelectedPaper(paper);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closePaper = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div style={{ paddingTop: '150px', paddingBottom: '10rem' }}>

            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '8rem', padding: '0 2rem' }}>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: '200', letterSpacing: '0.1em' }}>
                        THE <span className="gavith-text">ALLIANCE</span>
                    </h1>
                </div>
            </ScrollReveal>

            {/* SINGLE CONSOLIDATED MARQUEE */}
            <div style={{ marginBottom: '10rem' }}>
                <LogoMarquee items={["Vajraakaaya", "Maradi", "PingWise"]} speed={30} />
            </div>

            {/* CASE STUDY HIGHLIGHT */}
            <ScrollReveal>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{
                        position: 'relative',
                        padding: '4rem',
                        background: 'radial-gradient(circle at top right, rgba(0, 210, 255, 0.1), rgba(0,0,0,0))',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '20px'
                    }}>
                        <div style={{ position: 'absolute', top: '2rem', left: '2rem', width: '10px', height: '10px', background: '#00d2ff', borderRadius: '50%', boxShadow: '0 0 10px #00d2ff' }}></div>

                        <h4 style={{ color: '#00d2ff', letterSpacing: '0.2em', marginBottom: '1rem', paddingLeft: '2rem' }}>IMPACT REPORT</h4>

                        <h2 style={{ fontSize: '2.5rem', maxWidth: '800px', marginBottom: '2rem', lineHeight: 1.3 }}>
                            "Gavith's integration reduced our material waste by <span style={{ color: '#fff' }}>32%</span> in the first quarter alone."
                        </h2>

                        <p style={{ color: 'rgba(255,255,255,0.5)' }}>— Director of Civil Infrastructure, Vajraakaaya Constructions</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* PUBLICATIONS / PRESS SECTION */}
            <div style={{ marginTop: '10rem' }}>
                <ScrollReveal>
                    <h3 style={{ textAlign: 'center', color: '#fff', letterSpacing: '0.2em', marginBottom: '4rem', opacity: 0.7 }}>GAVITH INSIGHTS</h3>
                </ScrollReveal>

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { source: "TECHNICAL ARTICLE", date: "FEB 2026", title: "GAVITH: THE NEW OPERATING SYSTEM FOR THE BUILT ENVIRONMENT", color: "#00d2ff" },
                        { source: "TECHNICAL ARTICLE", date: "FEB 2026", title: "AI POWERED CIVIL ENGINEERING: REDEFINING PROJECT LIFECYCLES", color: "#005bea" },
                        { source: "TECHNICAL ARTICLE", date: "FEB 2026", title: "LIQUIDITY IN INFRASTRUCTURE: THE FUTURE OF ASSET EXCHANGE", color: "#ffffff" }
                    ].map((pub, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div style={{
                                padding: '2.5rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onClick={() => openPaper(pub)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = pub.color;
                                    e.currentTarget.style.background = `linear-gradient(135deg, ${pub.color}10, transparent)`;
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.1em' }}>{pub.source}</h4>
                                        <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>{pub.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', lineHeight: 1.4, fontWeight: '400' }}>"{pub.title}"</h3>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: pub.color, fontSize: '0.9rem', fontWeight: '600', letterSpacing: '0.1em' }}>
                                    READ ARTICLE <span>&rarr;</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {/* GAVITH INSIGHTS MODAL */}
            <WhitePaperModal
                isOpen={isModalOpen}
                onClose={closePaper}
                paper={selectedPaper}
            />

        </div>
    );
};

export default Partners;
