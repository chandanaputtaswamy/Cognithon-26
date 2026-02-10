import Hero from '../components/Hero';
import Section from '../components/Section';
import ProblemCard from '../components/ProblemCard';
import Timeline from '../components/Timeline';
// import { Link } from 'react-router-dom';

import eventsData from '../data/events.json';
import problemsData from '../data/problemStatements.json';
import peopleData from '../data/people.json';
import sponsorsData from '../data/sponsors.json';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <Section
                id="about"
                title={
                    <span>
                        About <span style={{
                            background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent'
                        }}>Cognithon 26</span>
                    </span>
                }
                subtitle="THE VISION"
            >
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '1.3rem',
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                        background: 'linear-gradient(90deg, #ffffff, #00f3ff)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        whiteSpace: 'pre-line',
                        lineHeight: 1.6
                    }}>
                        {eventsData.about.description}
                    </p>
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>24</h3>
                            <p>Hours</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>100+</h3>
                            <p>Coders</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>42k</h3>
                            <p>Prize Pool</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="timeline" title="Schedule">
                <Timeline events={eventsData.timeline} />
            </Section>

            <Section id="problems" title="Featured Problem" subtitle="SOLVE REAL WORLD CHALLENGES">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {problemsData.map((problem) => (
                        <div key={problem.id} style={{ maxWidth: '800px', width: '100%' }}>
                            <ProblemCard problem={problem} />
                            <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(0, 243, 255, 0.2)' }}>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Key Expectations:</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <li>Clearly define the problem and its users.</li>
                                    <li>Propose a technical solution using AI, data science, or automation.</li>
                                    <li>Include system architecture, tools/technologies, and feasibility.</li>
                                    <li>Show innovation, practicality, and impact.</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="sponsors" title="Sponsors">
                <div className="sponsors-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
                    {sponsorsData.map((tier) => (
                        <div key={tier.tier} style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: tier.tier === 'Title' ? 'var(--color-primary)' : 'var(--text-muted)' }}>{tier.tier} Sponsors</h3>
                            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {tier.sponsors.map((sponsor) => (
                                    <div key={sponsor.name} style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px' }}>
                                        {/* Placeholder for logo */}
                                        <div style={{ width: '150px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#222', color: '#fff' }}>
                                            {sponsor.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="judges" title="Judges">
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {peopleData.judges.map((judge) => (
                        <div key={judge.id} style={{ textAlign: 'center' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#333', margin: '0 auto 1rem', overflow: 'hidden' }}>
                                <img src={judge.image} alt={judge.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h4 style={{ color: 'var(--text-main)' }}>{judge.name}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{judge.role}</p>
                            <p style={{ color: 'var(--color-primary)', fontSize: '0.8rem' }}>{judge.company}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Home;
