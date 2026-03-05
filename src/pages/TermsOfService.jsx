import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const TermsOfService = () => {
    return (
        <div style={{ position: 'relative', paddingTop: '150px', paddingBottom: '10rem', maxWidth: '800px', margin: '0 auto', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <Link to="/" style={{
                position: 'fixed',
                top: '100px',
                right: 'clamp(1rem, 5vw, 4rem)',
                zIndex: 1000,
                color: 'rgba(255,255,255,0.3)',
                textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                lineHeight: 1,
                fontWeight: '200'
            }}
                onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.5)';
                    e.currentTarget.style.background = 'rgba(0, 210, 255, 0.1)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
            >&times;</Link>
            <ScrollReveal>
                <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                    TERMS OF <span className="gavith-text">SERVICE</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace', marginBottom: '4rem' }}>
                    LAST UPDATED: 2026.02
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, textAlign: 'justify' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>1. Acceptance of Terms</h2>
                        <p>By accessing and using GAVITH's website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>2. Provision of Services</h2>
                        <p>GAVITH is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which GAVITH provides may change from time to time without prior notice to you.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>3. Use of Services</h2>
                        <p>You agree to use the services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>4. Limitation of Liability</h2>
                        <p>In no event shall GAVITH, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from from your access to or use of or inability to access or use the Service.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid rgba(0, 210, 255, 0.3)', paddingBottom: '0.5rem' }}>5. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at: <a href="mailto:it@gavith.com" style={{ color: '#00d2ff', textDecoration: 'none' }}>it@gavith.com</a></p>
                    </section>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default TermsOfService;
