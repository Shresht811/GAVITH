import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'rgba(5, 5, 10, 0.8)',
            backdropFilter: 'blur(30px)',
            padding: '6rem 0 2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Cosmic Horizon Glow */}
            <div style={{
                position: 'absolute',
                top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '80%', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0, 242, 254, 0.3), transparent)',
                boxShadow: '0 0 30px rgba(0, 242, 254, 0.2)'
            }}></div>

            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '4rem',
                position: 'relative',
                zIndex: 1
            }}>
                <div style={{ flex: '1 1 250px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                        <img src="/logo_transparent.png" alt="GAVITH Logo" style={{ width: '35px', opacity: 0.9 }} />
                        <h3 className="gavith-text" style={{ fontSize: '1.8rem', letterSpacing: '0.05em' }}>GAVITH</h3>
                    </div>
                    <p style={{ 
                        fontSize: '0.95rem', 
                        color: 'rgba(255,255,255,0.7)', 
                        lineHeight: '1.6',
                        maxWidth: '320px'
                    }}>
                        Empowering global enterprises with mission-critical technology solutions and strategic consulting perfected for the modern age.
                    </p>
                </div>

                <div>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Solutions</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                        <li><FooterLink to="/#services">AI Consulting</FooterLink></li>
                        <li><FooterLink to="/features">Cloud Infrastructure</FooterLink></li>
                        <li><FooterLink to="/features">Cyber Security</FooterLink></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                        <li><FooterLink to="/about">Our Vision</FooterLink></li>
                        <li><FooterLink to="/partners">Partners</FooterLink></li>
                        <li><FooterLink to="/#contact">Contact Sales</FooterLink></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                        <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
                        <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{
                marginTop: '6rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.4)',
                position: 'relative',
                zIndex: 1
            }}>
                <p>© {new Date().getFullYear()} GAVITH Technologies. All Rights Reserved.</p>
                <p style={{ letterSpacing: '0.1em' }}>PRECISION. INNOVATION. SCALE.</p>
            </div>
        </footer>
    );
};

const FooterLink = ({ to, children }) => (
    <Link to={to} style={{ 
        color: 'rgba(255,255,255,0.6)', 
        textDecoration: 'none',
        fontSize: '0.95rem',
        transition: 'all 0.3s ease',
        display: 'inline-block'
    }} className="footer-link-hover">
        {children}
    </Link>
);
export default Footer;
