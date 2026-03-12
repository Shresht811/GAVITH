import React, { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [showModal, setShowModal] = useState(false);

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
                setStatus("Thank you! Your message has been sent successfully. We'll get back to you shortly.");
                setShowModal(true);
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    setStatus(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    setStatus("Oops! There was a problem submitting your form. Please try again later.");
                }
                setShowModal(true);
            }
        } catch (error) {
            setStatus("Oops! There was a problem submitting your form. Please check your connection.");
            setShowModal(true);
        }
    };

    return (
        <section id="contact" className="section container">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: '4rem'
            }}>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>
                    Ready to <span className="gradient-text">Innovate?</span>
                </h2>
                <p style={{ maxWidth: '600px', fontSize: 'clamp(1rem, 1.2vw, 1.2rem)' }}>
                    Whether you need a strategic partner or a powerful tool, GAVITH is here to propel your business forward.
                </p>
            </div>

            <div className="glass-card" style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: 'clamp(1.5rem, 5vw, 3rem)'
            }}>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <input type="text" name="name" required placeholder="Name" style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'white',
                        outline: 'none'
                    }} />

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        <input type="email" name="email" required placeholder="Email" style={{
                            flex: '1 1 200px',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: 'white',
                            outline: 'none'
                        }} />
                        <input type="tel" name="phone" placeholder="Phone Number" style={{
                            flex: '1 1 200px',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: 'white',
                            outline: 'none'
                        }} />
                    </div>

                    <input type="text" name="subject" required placeholder="Subject" style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'white',
                        outline: 'none'
                    }} />

                    <textarea name="message" required placeholder="Message" rows="5" style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'white',
                        outline: 'none',
                        resize: 'vertical'
                    }}></textarea>
                    <button type="submit" style={{
                        padding: '1rem',
                        background: 'var(--accent-gradient)',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        boxShadow: 'var(--accent-glow)',
                        transition: 'transform 0.2s'
                    }}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                    >Send Message</button>
                    {status === 'Sending...' && (
                        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#00d2ff' }}>
                            Sending...
                        </p>
                    )}
                </form>
            </div>

            {/* CONFIRMATION / ERROR MODAL */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="holo-card" style={{
                        background: 'linear-gradient(180deg, rgba(10, 15, 25, 0.95) 0%, rgba(5, 5, 10, 0.98) 100%)',
                        border: `1px solid ${status.includes('Oops') ? 'rgba(255, 77, 77, 0.3)' : 'rgba(0, 210, 255, 0.3)'}`,
                        borderRadius: '16px',
                        padding: '3rem',
                        maxWidth: '400px',
                        width: '90%',
                        textAlign: 'center',
                        boxShadow: `0 0 30px ${status.includes('Oops') ? 'rgba(255, 77, 77, 0.1)' : 'rgba(0, 210, 255, 0.1)'}`
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: status.includes('Oops') ? 'rgba(255, 77, 77, 0.1)' : 'rgba(0, 210, 255, 0.1)',
                            border: `2px solid ${status.includes('Oops') ? '#ff4d4d' : '#00d2ff'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem auto',
                            fontSize: '1.5rem'
                        }}>
                            {status.includes('Oops') ? '❌' : '✓'}
                        </div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            color: status.includes('Oops') ? '#ff4d4d' : '#00d2ff'
                        }}>
                            {status.includes('Oops') ? 'Error' : 'Thank You!'}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.5 }}>
                            {status}
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                padding: '0.8rem 2rem',
                                background: 'var(--bg-secondary)',
                                border: `1px solid ${status.includes('Oops') ? '#ff4d4d' : '#00d2ff'}`,
                                color: 'white',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = status.includes('Oops') ? 'rgba(255, 77, 77, 0.1)' : 'rgba(0, 210, 255, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
export default Contact;
