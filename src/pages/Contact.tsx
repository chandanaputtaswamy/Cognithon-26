import { useState } from 'react';
import Section from '../components/Section';
import { FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! (Demo)');
    };

    return (
        <div style={{ paddingTop: '60px', minHeight: '80vh' }}>
            <Section title="Contact Us" subtitle="GET IN TOUCH">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>

                    {/* Contact Info */}
                    <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }} />
                            <div>
                                <h4 style={{ margin: 0 }}>Venue</h4>
                                <p style={{ color: 'var(--text-muted)' }}>Tech Park, Silicon Valley</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <FaEnvelope style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }} />
                            <div>
                                <h4 style={{ margin: 0 }}>Email</h4>
                                <p style={{ color: 'var(--text-muted)' }}>contact@cognithon.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaGlobe style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }} />
                            <div>
                                <h4 style={{ margin: 0 }}>Website</h4>
                                <p style={{ color: 'var(--text-muted)' }}>www.cognithon.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
                            <input
                                type="text"
                                required
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                            <input
                                type="email"
                                required
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                            <textarea
                                rows={4}
                                required
                                style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>Send Message</button>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
