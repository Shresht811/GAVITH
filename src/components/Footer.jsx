import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            padding: '4rem 0 2rem',
            borderTop: '1px solid #222'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '2rem'
            }}>
                <div style={{ flex: '1 1 200px' }}>
                    <h3 style={{ marginBottom: '1rem' }}>GAVITH</h3>
                    <p style={{ fontSize: '0.9rem', maxWidth: '300px' }}>
                        Empowering businesses with next-generation technology and strategic consulting.
                    </p>
                </div>

                <div style={{ flex: '1 1 150px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Services</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                        <li><Link to="/#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Consulting</Link></li>
                        <li><Link to="/features" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Development</Link></li>
                    </ul>
                </div>

                <div style={{ flex: '1 1 150px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Company</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                        <li><Link to="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About Us</Link></li>
                        <li><Link to="/about#headquarters" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Careers</Link></li>
                        <li><Link to="/#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</Link></li>
                    </ul>
                </div>

                <div style={{ flex: '1 1 200px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                        <li><Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link></li>
                        <li><Link to="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #222',
                textAlign: 'center',
                fontSize: '0.8rem',
                color: '#444'
            }}>
                © {new Date().getFullYear()} GAVITH Technologies. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;
