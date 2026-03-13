import React, { useState, useEffect } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isBooting, setIsBooting] = useState(false);
    const [bootText, setBootText] = useState('');

    useEffect(() => {
        if (isOpen) {
            setIsBooting(true);
            setBootText('INITIALIZING SECURE CHANNEL...');
            
            setTimeout(() => setBootText('DECRYPTING GAVITH PROTOCOLS...'), 600);
            setTimeout(() => setBootText('ESTABLISHING ORBITAL UPLINK...'), 1200);
            setTimeout(() => setBootText('ACCESS GRANTED.'), 1800);
            setTimeout(() => setIsBooting(false), 2000);
        } else {
            setStatus('');
            setIsSuccess(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        setStatus('Sending...');

        try {
            const response = await fetch("https://formspree.io/f/mdalqqna", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("Transmission successful. We will contact you shortly.");
                setIsSuccess(true);
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setStatus(data["errors"].map(error => error["message"]).join(", "));
                    setStatus("Connection error. Please try again.");
                }
                setIsSuccess(false);
            }
        } catch (error) {
            setStatus("Signal lost. Please check your connection.");
            setIsSuccess(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" style={{
            position: 'fixed', inset: 0, background: 'rgba(2, 5, 12, 0.9)',
            backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)',
            zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem', animation: 'fadeIn 0.3s ease-out'
        }}>
            {/* Scanline Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0, 210, 255, 0) 50%, rgba(0, 210, 255, 0.05) 50%)', backgroundSize: '100% 4px', pointerEvents: 'none', zIndex: 1 }}></div>

            <div className="terminal-window" style={{
                width: '100%', maxWidth: '700px', height: 'auto', minHeight: '500px',
                background: 'rgba(5, 10, 20, 0.8)', border: '1px solid rgba(0, 210, 255, 0.3)',
                boxShadow: '0 0 50px rgba(0, 210, 255, 0.1), inset 0 0 30px rgba(0,210,255,0.05)',
                position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column',
                overflow: 'hidden', animation: 'crtExpand 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                {/* Terminal Header */}
                <div style={{ 
                    background: 'rgba(0, 210, 255, 0.1)', borderBottom: '1px solid rgba(0, 210, 255, 0.3)',
                    padding: '0.8rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <div style={{ color: '#00d2ff', fontFamily: 'monospace', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                        &gt; GAVITH_OS // COMMS_LINK // V2.4
                    </div>
                    <button onClick={onClose} style={{
                        background: 'transparent', border: '1px solid rgba(255,0,0,0.5)', color: '#ff4d4d',
                        width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', fontFamily: 'monospace', fontSize: '1.2rem', transition: 'all 0.2s'
                    }} onMouseEnter={(e) => { e.target.style.background = 'rgba(255,0,0,0.2)'; }} onMouseLeave={(e) => { e.target.style.background = 'transparent'; }}>
                        X
                    </button>
                </div>

                {/* Terminal Body */}
                <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                    {/* HUD Corners */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', width: '20px', height: '20px', borderTop: '2px solid #00d2ff', borderLeft: '2px solid #00d2ff' }}></div>
                    <div style={{ position: 'absolute', top: '10px', right: '10px', width: '20px', height: '20px', borderTop: '2px solid #00d2ff', borderRight: '2px solid #00d2ff' }}></div>
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '20px', height: '20px', borderBottom: '2px solid #00d2ff', borderLeft: '2px solid #00d2ff' }}></div>
                    <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', borderBottom: '2px solid #00d2ff', borderRight: '2px solid #00d2ff' }}></div>

                    {isBooting ? (
                        <div style={{ color: '#00d2ff', fontFamily: 'monospace', fontSize: '1.2rem', letterSpacing: '0.1em', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="typing-effect">&gt; {bootText}</div>
                            <div style={{ width: '100%', height: '2px', background: 'rgba(0,210,255,0.2)', marginTop: '2rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '30%', background: '#00d2ff', animation: 'loadingBar 2s ease-in-out infinite' }}></div>
                            </div>
                        </div>
                    ) : !status ? (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animation: 'fadeIn 0.5s ease' }}>
                            <div style={{ color: '#fff', fontFamily: 'monospace', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                &gt; PLEASE ENTER TRANSMISSION DATA:
                            </div>
                            <div className="input-group">
                                <span className="input-prefix">NAME_</span>
                                <input className="sci-fi-input" type="text" name="name" required />
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <div className="input-group" style={{ flex: '1 1 200px' }}>
                                    <span className="input-prefix">EMAIL_</span>
                                    <input className="sci-fi-input" type="email" name="email" required />
                                </div>
                                <div className="input-group" style={{ flex: '1 1 200px' }}>
                                    <span className="input-prefix">PHONE_</span>
                                    <input className="sci-fi-input" type="tel" name="phone" />
                                </div>
                            </div>
                            <div className="input-group">
                                <span className="input-prefix">SUBJECT_</span>
                                <input className="sci-fi-input" type="text" name="subject" required />
                            </div>
                            <div className="input-group" style={{ alignItems: 'flex-start' }}>
                                <span className="input-prefix" style={{ marginTop: '12px' }}>DATA_</span>
                                <textarea className="sci-fi-input" name="message" required rows="4" style={{ resize: 'vertical' }}></textarea>
                            </div>
                            
                            <button className="sci-fi-submit" type="submit">
                                [ INITIATE TRANSMISSION ]
                            </button>
                        </form>
                    ) : (
                        <div style={{ textAlign: 'center', color: isSuccess ? '#00d2ff' : '#ff4d4d', fontFamily: 'monospace', animation: 'fadeIn 0.5s ease' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                                {isSuccess ? '[ OK ]' : '[ ERR ]'}
                            </div>
                            <div style={{ fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                                &gt; {isSuccess ? 'TRANSMISSION RECEIVED OUTPOST ALPHA.' : 'TRANSMISSION FAILED. INTERFERENCE DETECTED.'}
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{status}</p>
                            <button className="sci-fi-submit" onClick={onClose} style={{ marginTop: '3rem', width: 'auto', padding: '1rem 3rem' }}>
                                [ TERMINATE CONNECTION ]
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
