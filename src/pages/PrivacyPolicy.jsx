import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicy = () => {
    return (
        <div style={{ paddingTop: '150px', paddingBottom: '10rem', maxWidth: '800px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <ScrollReveal>
                <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                    PRIVACY <span className="gavith-text">POLICY</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace', marginBottom: '4rem' }}>
                    LAST UPDATED: 2026.02
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, textAlign: 'justify' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create or modify your account, request on demand services, contact customer support, or otherwise communicate with us. This info may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), delivery notes, and other info you choose to provide.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>2. How We Use Information</h2>
                        <p>We use the information we collect about you to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Perform internal operations, including troubleshooting software bugs and operational problems.</li>
                            <li>Send communications you have requested.</li>
                            <li>Investigate and prevent fraud or other illegal activities.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>3. Sharing Information</h2>
                        <p>We may share your information with our affiliates, subsidiaries, and business partners, or at your direction for purposes such as integrating with third party software. We do not sell your personal information to third parties.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>4. Security</h2>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>5. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:it@gavith.com" style={{ color: '#00d2ff', textDecoration: 'none' }}>it@gavith.com</a></p>
                    </section>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default PrivacyPolicy;
