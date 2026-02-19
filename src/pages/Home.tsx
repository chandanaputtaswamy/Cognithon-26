import Hero from '../components/Hero';
import Section from '../components/Section';
import ProblemCard from '../components/ProblemCard';
import Timeline from '../components/Timeline';
// import { Link } from 'react-router-dom';

import eventsData from '../data/events.json';
import problemsData from '../data/problemStatements.json';

import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';

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

                        </div>
                    ))}
                </div>
            </Section>

            <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '4rem' }}>
                <h3 style={{
                    fontSize: '1.8rem',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '1px',
                    background: 'linear-gradient(90deg, #fff, #00f3ff, #fff)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    fontStyle: 'normal',
                    animation: 'shine 3s linear infinite',
                    position: 'relative',
                    display: 'inline-block',
                    paddingBottom: '10px'
                }}>
                    In Association With
                </h3>
                <div style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00f3ff, #ffffff)',
                    borderRadius: '2px',
                    margin: '0 auto'
                }}></div>
            </div>
            <Section id="faq" title="FAQ" subtitle="COMMON QUESTIONS">
                <FAQ />
            </Section>

            <Sponsors />


        </div>
    );
};

export default Home;
