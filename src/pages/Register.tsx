import { useState } from 'react';
import Section from '../components/Section';
import '../styles/Section.css'; // Reusing section styles

const Register = () => {
    const [formData, setFormData] = useState({
        teamName: '',
        email: '',
        members: '',
        track: 'General'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Registration submitted! (This is a demo)');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ paddingTop: '60px' }}>
            <Section title="Register Team">
                <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', background: 'var(--bg-card)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Team Name</label>
                        <input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email (Leader)</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Team Members (comma separated)</label>
                        <input
                            type="text"
                            name="members"
                            value={formData.members}
                            onChange={handleChange}
                            placeholder="Alice, Bob, Charlie"
                            style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Track</label>
                        <select
                            name="track"
                            value={formData.track}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.8rem', background: 'var(--bg-dark)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '4px' }}
                        >
                            <option>General</option>
                            <option>Healthcare</option>
                            <option>Fintech</option>
                            <option>EdTech</option>
                        </select>
                    </div>

                    <button type="submit" className="register-btn" style={{ width: '100%', cursor: 'pointer' }}>Register</button>
                </form>
            </Section>
        </div>
    );
};

export default Register;
