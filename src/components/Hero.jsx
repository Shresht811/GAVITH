import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
        }}>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(30px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{
                    duration: 2.5,
                    ease: "easeOut",
                    delay: 3.2 // Sync with new tunnel exit
                }}
                style={{
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                {/* GAVITH Heading */}
                <motion.h1
                    initial={{ letterSpacing: '0.1em' }}
                    animate={{ letterSpacing: '-0.04em' }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontSize: 'clamp(3rem, 12vw, 9rem)',
                        fontWeight: '900',
                        fontFamily: '"Comfortaa", "Inter", sans-serif',
                        margin: 0,
                        lineHeight: 1,
                        textAlign: 'center',
                        display: 'block'
                    }}>
                    {/* Original desktop margin. Mobile override via CSS below. */}
                    <motion.img
                        src="/logo_transparent.png"
                        alt="G"
                        className="hero-g-logo"
                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 3.8, ease: "easeOut" }}
                        whileHover={{
                            scale: 1.05,
                            filter: 'drop-shadow(0 0 50px rgba(0, 210, 255, 0.6))',
                            transition: { duration: 0.3 }
                        }}
                        style={{
                            height: '1.2em',
                            verticalAlign: 'middle',
                            marginRight: '-0.20em',
                            filter: 'drop-shadow(0 0 40px rgba(0, 91, 234, 0.4))',
                            display: 'inline-block',
                            cursor: 'pointer'
                        }}
                    />
                    <span style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        background: 'linear-gradient(135deg, #00d2ff 0%, #005bea 40%, #ffffff 100%)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 30px rgba(0, 210, 255, 0.5)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))',
                        animation: 'gradientShift 6s ease infinite'
                    }}>
                        AVITH.
                    </span>
                </motion.h1>

                {/* Subheadline — desktop: aligned under the A; mobile: centered */}
                <motion.p
                    className="hero-subheadline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    style={{
                        fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)',
                        fontWeight: '400',
                        fontFamily: '"Comfortaa", "Inter", sans-serif',
                        color: 'rgba(255,255,255,0.7)',
                        marginTop: '1rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}>
                    Technology, Perfected.
                </motion.p>
            </motion.div>

            <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700;900&family=Syncopate:wght@400;700&display=swap');
          @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
          }
          /* Desktop: subheadline starts under the "A" — offset = approx width of the G logo */
          @media (min-width: 769px) {
              .hero-subheadline {
                  text-align: left;
                  padding-left: 11.5vw; /* roughly the width of the G logo at 12vw font */
              }
          }
          /* Mobile: keep centered; pull G logo only slightly so no overlap */
          @media (max-width: 768px) {
              .hero-subheadline {
                  text-align: center;
                  width: 100%;
                  padding-left: 0;
              }
              .hero-g-logo {
                  margin-right: -0.25em !important; /* tighter gap between G and AVITH on mobile */
              }
          }
      `}</style>
        </section>
    );
};

export default Hero;
