import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContactClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            // Small delay to allow Home component to mount
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s ease',
        background: isScrolled ? 'rgba(5, 5, 10, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    };

    const linkStyle = (path) => ({
        color: location.pathname === path ? '#00d2ff' : 'white',
        textDecoration: 'none',
        margin: '0 1.5rem',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'color 0.3s ease',
        position: 'relative',
        opacity: location.pathname === path ? 1 : 0.7
    });

    return (
        <nav style={navStyle}>
            {/* Left Side: Logo */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <img src="/logo_transparent.png" alt="GAVITH Logo" style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain'
                    }} />
                    <span className="gavith-text" style={{
                        fontSize: '1.5rem',
                        letterSpacing: '-0.02em',
                        display: isScrolled ? 'block' : 'block'
                    }}>GAVITH</span>
                </div>
            </Link>

            {/* Right Side: Links */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={linkStyle('/')}>Home</Link>
                <Link to="/features" style={linkStyle('/features')}>Features</Link>
                <Link to="/partners" style={linkStyle('/partners')}>Partners</Link>
                <Link to="/about" style={linkStyle('/about')}>About</Link>

                <a href="#contact" onClick={handleContactClick} style={{
                    ...linkStyle(''),
                    border: '1px solid rgba(255,255,255,0.3)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    marginRight: 0,
                    cursor: 'pointer'
                }} className="hover-glow">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
