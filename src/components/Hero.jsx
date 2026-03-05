import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
    }, []);

    return (
        <section id="hero" style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            // Transparent background so the global stars show through
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
        }}>

            <div style={{
                zIndex: 10,
                textAlign: 'center',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                {/* Updated Typography: Favicon Colors + Fading Effect */}
                <h1 style={{
                    fontSize: 'clamp(3rem, 12vw, 9rem)',
                    fontWeight: '900',
                    fontFamily: '"Comfortaa", "Inter", sans-serif',
                    letterSpacing: '-0.04em',
                    margin: 0,
                    lineHeight: 1,
                    textAlign: 'center',
                    display: 'block'
                }}>
                    <img src="/logo_transparent.png" alt="G" className="mobile-logo-shift" style={{
                        height: '1.2em',
                        verticalAlign: 'middle',
                        marginRight: '-0.20em', // Original Desktop Value
                        filter: 'drop-shadow(0 0 40px rgba(0, 91, 234, 0.4))',
                        display: 'inline-block'
                    }} />
                    <span style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        background: 'linear-gradient(135deg, #00d2ff 0%, #005bea 50%, rgba(255,255,255,0.1) 100%)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 40px rgba(0, 91, 234, 0.3))',
                        animation: 'gradientShift 8s ease infinite'
                    }}>
                        AVITH.
                    </span>
                </h1>

                <p className="hero-subheadline" style={{
                    fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
                    fontWeight: '400',
                    fontFamily: '"Comfortaa", "Inter", sans-serif',
                    color: 'rgba(255,255,255,0.7)',
                    marginTop: '1rem',
                    letterSpacing: '0.2em',
                    textAlign: 'center',
                    width: '100%',
                    textTransform: 'uppercase',
                }}>
                    Technology, Perfected.
                </p>


            </div>

            <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700;900&family=Syncopate:wght@400;700&display=swap');
          @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
          }
          @media (min-width: 769px) {
              .hero-subheadline {
                  /* Removed padding-left to ensure exact centering */
              }
          }
      `}</style>
        </section>
    );
};

export default Hero;
