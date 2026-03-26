import React, { useState, useEffect } from 'react';

const Contact = () => {
    // We lift the modal state directly to App.jsx now 
    // This allows header/footer to trigger it globally

    const openContactModal = () => {
        // Dispatch a custom event to the window so App.jsx can open the modal globally
        window.dispatchEvent(new Event('open-contact-modal'));
    };

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#contact') {
                const section = document.getElementById('contact');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    // Small delay to let the scroll start before opening the modal
                    setTimeout(() => {
                        openContactModal();
                    }, 500);
                }
                // Clean the URL hash softly without jumping
                window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
            }
        };

        handleHashChange(); // Check on mount
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <section id="contact" className="section container" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            

            {/* Highly Advanced 3D Orbiting Satellite */}
            <div 
                className="satellite-container"
                onClick={openContactModal}
                style={{
                    position: 'relative',
                    cursor: 'pointer',
                    width: 'clamp(200px, 30vw, 280px)', // Slightly larger to appreciate details
                    aspectRatio: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1200px', // Crucial for 3D effect
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
            >
                {/* Main 3D Container */}
                <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    transformStyle: 'preserve-3d',
                    animation: 'spin3D 25s linear infinite'
                }}>
                    
                    {/* Ring 1 - X/Y Axis */}
                    <div style={{ 
                        position: 'absolute', inset: '5%', border: '2px solid rgba(0, 210, 255, 0.1)', 
                        borderRadius: '50%', transformStyle: 'preserve-3d', animation: 'spin3D-x 15s linear infinite',
                        boxShadow: 'inset 0 0 20px rgba(0,210,255,0.05), 0 0 10px rgba(0,210,255,0.1)'
                    }}></div>
                    
                    {/* Ring 2 - X/Z Axis */}
                    <div style={{ 
                        position: 'absolute', inset: '15%', border: '2px dashed rgba(0, 210, 255, 0.3)', 
                        borderRadius: '50%', transformStyle: 'preserve-3d', animation: 'spin3D-y 20s linear infinite reverse'
                    }}>
                        <div style={{ position: 'absolute', top: '0', left: '50%', width: '6px', height: '6px', background: '#00d2ff', borderRadius: '50%', boxShadow: '0 0 15px #00d2ff', transform: 'translate(-50%, -50%)' }}></div>
                    </div>

                    {/* Ring 3 - Y/Z Axis */}
                    <div style={{ 
                        position: 'absolute', inset: '25%', border: '1px solid rgba(0, 210, 255, 0.5)', 
                        borderRadius: '50%', transformStyle: 'preserve-3d', animation: 'spin3D-z 12s linear infinite'
                    }}></div>
                    
                    {/* Futuristic Solar Arrays (3D Wings) */}
                    <div className="solar-panel left-panel" style={{ 
                        position: 'absolute', top: '35%', bottom: '35%', left: '-30%', width: '45%', 
                        backgroundImage: 'linear-gradient(90deg, transparent 90%, rgba(0,210,255,0.8) 100%), linear-gradient(0deg, rgba(0,210,255,0.1) 0%, rgba(0,210,255,0.4) 100%)',
                        backgroundSize: '15px 15px, 100% 100%',
                        border: '2px solid rgba(0,210,255,0.8)', borderRadius: '4px', 
                        transform: 'rotateY(60deg) translateZ(20px)', transformStyle: 'preserve-3d',
                        boxShadow: 'inset 0 0 15px rgba(0,210,255,0.6), 0 0 20px rgba(0,210,255,0.3)'
                    }}></div>
                    <div className="solar-panel right-panel" style={{ 
                        position: 'absolute', top: '35%', bottom: '35%', right: '-30%', width: '45%', 
                        backgroundImage: 'linear-gradient(-90deg, transparent 90%, rgba(0,210,255,0.8) 100%), linear-gradient(0deg, rgba(0,210,255,0.1) 0%, rgba(0,210,255,0.4) 100%)',
                        backgroundSize: '15px 15px, 100% 100%',
                        border: '2px solid rgba(0,210,255,0.8)', borderRadius: '4px', 
                        transform: 'rotateY(-60deg) translateZ(20px)', transformStyle: 'preserve-3d',
                        boxShadow: 'inset 0 0 15px rgba(0,210,255,0.6), 0 0 20px rgba(0,210,255,0.3)'
                    }}></div>

                    {/* Central Energy Core (3D Sphere Illusion) */}
                    <div className="satellite-core" style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: '35%', height: '35%',
                        background: 'radial-gradient(circle at 30% 30%, rgba(0,210,255,0.6) 0%, rgba(5,10,20,0.95) 70%)',
                        border: '2px solid rgba(0, 210, 255, 0.9)', borderRadius: '50%',
                        boxShadow: '0 0 40px rgba(0, 210, 255, 0.6), inset -10px -10px 20px rgba(0, 210, 255, 0.4), inset 10px 10px 20px rgba(255, 255, 255, 0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                        transformStyle: 'preserve-3d'
                    }}>
                        {/* Floating Inner Transmitter */}
                        <div style={{ 
                            width: '30px', height: '30px', background: '#00d2ff', borderRadius: '50%', 
                            boxShadow: '0 0 20px #00d2ff, 0 0 40px #ffffff, inset 0 0 10px #ffffff', 
                            animation: 'pulseCore 1.5s infinite alternate',
                            marginBottom: '10px'
                        }}></div>
                        {/* Text inside the Satellite Core */}
                        <div style={{
                            color: '#ffffff',
                            fontSize: '0.55rem', // Adjusted to perfectly fit inside the 3D core
                            fontWeight: '900',
                            letterSpacing: '0.1em',
                            textShadow: '0 0 10px #00d2ff, 0 0 15px #00d2ff',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            transform: 'translateZ(15px)', // Pop out in 3D
                            lineHeight: 1.2
                        }}>
                            READY TO<br/>INNOVATE
                        </div>
                    </div>
                </div>

                <div className="hover-pulse" style={{ 
                    position: 'absolute', inset: '-30%', borderRadius: '50%', 
                    background: 'radial-gradient(circle, rgba(0, 210, 255, 0.4) 0%, transparent 60%)', 
                    filter: 'blur(30px)', opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none', zIndex: -1 
                }}></div>
            </div>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                
                @keyframes spin3D { 
                    0% { transform: rotateX(15deg) rotateY(0deg) rotateZ(0deg); } 
                    100% { transform: rotateX(15deg) rotateY(360deg) rotateZ(360deg); } 
                }
                @keyframes spin3D-x { 
                    0% { transform: rotateX(0deg) rotateY(45deg); } 
                    100% { transform: rotateX(360deg) rotateY(45deg); } 
                }
                @keyframes spin3D-y { 
                    0% { transform: rotateY(0deg) rotateZ(60deg); } 
                    100% { transform: rotateY(360deg) rotateZ(60deg); } 
                }
                @keyframes spin3D-z { 
                    0% { transform: rotateX(70deg) rotateZ(0deg); } 
                    100% { transform: rotateX(70deg) rotateZ(360deg); } 
                }
                @keyframes pulseCore {
                    0% { transform: scale(0.9); opacity: 0.8; }
                    100% { transform: scale(1.1); opacity: 1; boxShadow: 0 0 30px #00d2ff, 0 0 50px #ffffff, inset 0 0 15px #ffffff; }
                }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes crtExpand { 
                    0% { transform: scaleY(0.01) scaleX(0); opacity: 0; }
                    50% { transform: scaleY(0.01) scaleX(1); opacity: 1; }
                    100% { transform: scaleY(1) scaleX(1); opacity: 1; }
                }
                @keyframes loadingBar { 0% { left: -30%; } 100% { left: 100%; } }
                @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
                
                .satellite-container:hover { transform: scale(1.15) translateY(-10px); }
                .satellite-container:hover .hover-pulse { opacity: 1; }
                .satellite-container:hover .satellite-core { 
                    box-shadow: 0 0 70px rgba(0, 210, 255, 0.9), inset -10px -10px 20px rgba(0, 210, 255, 0.7), inset 10px 10px 20px rgba(255, 255, 255, 0.5); 
                    border-color: rgba(0, 210, 255, 1);
                }
                .satellite-container:hover .solar-panel {
                    border-color: rgba(0, 210, 255, 1);
                    box-shadow: inset 0 0 25px rgba(0, 210, 255, 0.8), 0 0 20px rgba(0,210,255,0.5);
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                }
                .input-prefix {
                    color: rgba(0, 210, 255, 0.6);
                    font-family: monospace;
                    font-size: 0.8rem;
                }
                .sci-fi-input {
                    width: 100%;
                    padding: 0.8rem 1rem;
                    background: rgba(0, 210, 255, 0.05);
                    border: none;
                    border-left: 2px solid rgba(0, 210, 255, 0.3);
                    border-bottom: 1px solid rgba(0, 210, 255, 0.1);
                    color: white;
                    outline: none;
                    transition: all 0.3s ease;
                    font-family: monospace;
                    font-size: 1rem;
                }
                .sci-fi-input:focus {
                    background: rgba(0, 210, 255, 0.1);
                    border-left: 2px solid #00d2ff;
                    border-bottom: 1px solid rgba(0, 210, 255, 0.3);
                    box-shadow: inset 5px 0 15px rgba(0, 210, 255, 0.1);
                }
                
                .sci-fi-submit {
                    margin-top: 1rem;
                    padding: 1.2rem;
                    background: transparent;
                    color: #00d2ff;
                    font-family: monospace;
                    font-size: 1.1rem;
                    letter-spacing: 0.2em;
                    border: 1px solid rgba(0, 210, 255, 0.5);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .sci-fi-submit:hover {
                    background: rgba(0, 210, 255, 0.1);
                    border-color: #00d2ff;
                    box-shadow: 0 0 20px rgba(0, 210, 255, 0.2);
                    text-shadow: 0 0 10px #00d2ff;
                }
            `}</style>
        </section>
    );
};
export default Contact;
