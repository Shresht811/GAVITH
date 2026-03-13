import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const handleContactClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        window.dispatchEvent(new Event('open-contact-modal'));
    };

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.2, ease: "easeOut" }}
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1rem 0',
            transition: 'all 0.4s ease',
            background: isScrolled || isMobileMenuOpen ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
            backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(15px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
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
                            letterSpacing: '-0.02em'
                        }}>GAVITH</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="desktop-only">
                    <NavLink to="/" label="Home" currentPath={location.pathname} />
                    <NavLink to="/features" label="Features" currentPath={location.pathname} />
                    <NavLink to="/partners" label="Partners" currentPath={location.pathname} />
                    <NavLink to="/about" label="About" currentPath={location.pathname} />

                    <a href="#contact" onClick={handleContactClick} style={{
                        color: 'white',
                        textDecoration: 'none',
                        margin: '0 0 0 1.5rem',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '50px',
                        cursor: 'pointer'
                    }} className="hover-glow">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{
                    cursor: 'pointer',
                    padding: '0.5rem'
                }}>
                    <div style={{
                        width: '25px',
                        height: '2px',
                        background: 'white',
                        marginBottom: '6px',
                        transition: '0.3s',
                        transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '2px',
                        background: 'white',
                        marginBottom: '6px',
                        opacity: isMobileMenuOpen ? 0 : 1
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '2px',
                        background: 'white',
                        transition: '0.3s',
                        transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none'
                    }}></div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    background: 'rgba(5, 5, 10, 0.98)',
                    backdropFilter: 'blur(30px)',
                    padding: '2rem 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    animation: 'slideDown 0.3s ease-out'
                }}>
                    <MobileNavLink to="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileNavLink to="/features" label="Features" onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileNavLink to="/partners" label="Partners" onClick={() => setIsMobileMenuOpen(false)} />
                    <MobileNavLink to="/about" label="About" onClick={() => setIsMobileMenuOpen(false)} />
                    <a href="#contact" onClick={handleContactClick} style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '0.8rem 2.5rem',
                        borderRadius: '50px'
                    }}>Contact</a>
                </div>
            )}

            <style>{`
                @keyframes slideDown {
                    from { transform: translateY(-10px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </motion.nav>
    );
};

const NavLink = ({ to, label, currentPath }) => (
    <Link to={to} style={{
        color: currentPath === to ? '#00d2ff' : 'white',
        textDecoration: 'none',
        margin: '0 1.5rem',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        transition: 'color 0.3s ease',
        opacity: currentPath === to ? 1 : 0.7
    }}>
        {label}
    </Link>
);

const MobileNavLink = ({ to, label, onClick }) => (
    <Link to={to} onClick={onClick} style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
    }}>
        {label}
    </Link>
);

export default Navbar;
