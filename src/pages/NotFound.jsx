import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const NotFound = () => {
    return (
        <>
            <PageSEO
                title="404 — Page Not Found"
                description="The page you're looking for doesn't exist. Return to GAVITH."
                path="/404"
            />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Ambient glow backgrounds */}
                <div style={{
                    position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                {/* Glitching 404 */}
                <div style={{
                    fontSize: 'clamp(6rem, 20vw, 14rem)',
                    fontWeight: '900',
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    background: 'linear-gradient(135deg, rgba(0,210,255,0.6), rgba(255,255,255,0.15))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '1rem',
                    position: 'relative',
                    animation: 'glitch404 5s infinite',
                }}>
                    404
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    fontWeight: '400',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '1rem',
                    letterSpacing: '0.02em'
                }}>
                    Signal Lost. Page Not Found.
                </h1>

                <p style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontFamily: 'monospace',
                    fontSize: '0.95rem',
                    marginBottom: '3rem',
                    maxWidth: '500px',
                    lineHeight: 1.6
                }}>
                    &gt; ERROR_404: The coordinates you entered do not exist in the GAVITH network. Rerouting to base station...
                </p>

                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2.5rem',
                    border: '1px solid rgba(0, 210, 255, 0.5)',
                    color: '#00d2ff',
                    textDecoration: 'none',
                    fontFamily: 'monospace',
                    fontSize: '0.95rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(0,210,255,0.1)';
                        e.currentTarget.style.boxShadow = '0 0 25px rgba(0,210,255,0.3)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    [ RETURN TO BASE ]
                </Link>

                <style>{`
                    @keyframes glitch404 {
                        0%, 90%, 100% { transform: translate(0); filter: none; }
                        92% { transform: translate(-4px, 2px); filter: hue-rotate(45deg); }
                        94% { transform: translate(4px, -2px); filter: hue-rotate(-45deg); }
                        96% { transform: translate(-2px, 1px); filter: hue-rotate(90deg); }
                        98% { transform: translate(2px, -1px); filter: none; }
                    }
                `}</style>
            </div>
        </>
    );
};

export default NotFound;
