import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Team = () => {
    const teamMembers = [
        { name: 'Sarah Jenkins', role: 'CEO & Founder', bio: 'Visionary leader redefining the intersection of AI and human potential.', color: '#00d2ff' },
        { name: 'David Chen', role: 'CTO', bio: 'Architect of the Gavith Neural Engine. Previous lead at QuantumSynergy.', color: '#005bea' },
        { name: 'Elena Rodriguez', role: 'Head of Product', bio: 'Driving the user experience of tomorrow with intuitive design systems.', color: '#00d2ff' },
        { name: 'Marcus Thorpe', role: 'Lead Engineer', bio: 'Building the backbone of the Ecosphere with scalable, future-proof code.', color: '#005bea' }
    ];

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '5rem', maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <ScrollReveal>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }} className="gavith-text">The Visionaries</h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        Meet the minds building the future of connected technology.
                    </p>
                </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                {teamMembers.map((member, index) => (
                    <ScrollReveal key={index}>
                        <div className="holo-card" style={{
                            padding: '2rem',
                            borderRadius: '16px',
                            background: 'rgba(10, 15, 30, 0.6)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                width: '120px', height: '120px',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${member.color}20, ${member.color}80)`,
                                margin: '0 auto 1.5rem',
                                border: `2px solid ${member.color}`
                            }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{member.name}</h3>
                            <p style={{ color: member.color, fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{member.role}</p>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6' }}>{member.bio}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default Team;
