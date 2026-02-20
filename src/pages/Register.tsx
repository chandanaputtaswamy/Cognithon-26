import Section from '../components/Section';
import '../styles/Section.css';

const Register = () => {
    return (
        <div style={{ paddingTop: '60px', minHeight: '80vh' }}>
            <Section title="Register for Cognithon-26">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '20px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                }}>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.2rem',
                        textAlign: 'center',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        Ready to innovate? Click the button below to register your team via our Google Form.
                    </p>
                    <a
                        href="https://forms.gle/3afJzo9aP6hxweyZ8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-btn"
                        style={{
                            textDecoration: 'none',
                            display: 'inline-block',
                            textAlign: 'center'
                        }}
                    >
                        Register Now
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default Register;
