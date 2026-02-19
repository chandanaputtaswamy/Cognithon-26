import Hero from '../components/Hero';
import Section from '../components/Section';
import ProblemCard from '../components/ProblemCard';
import Timeline from '../components/Timeline';
// import { Link } from 'react-router-dom';

import eventsData from '../data/events.json';
import problemsData from '../data/problemStatements.json';

import Sponsors from '../components/Sponsors';
import Coordinators from '../components/Coordinators';
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

            <Section id="problems" title="Featured Problem" subtitle="SOLVE REAL WORLD CHALLENGES">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {problemsData.map((problem) => (
                        <div key={problem.id} style={{ maxWidth: '800px', width: '100%' }}>
                            <ProblemCard problem={problem} />

                        </div>
                    ))}
                </div>
            </Section>

            <Section id="timeline" title="Schedule">
                <Timeline events={eventsData.timeline} />
            </Section>


            <Section id="faq" title="Frequently Asked Questions" subtitle="COMMON QUESTIONS">
                <FAQ />
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


            <Sponsors />

            <Section id="venue" title="The Venue" subtitle="JOIN US AT">
                <div className="venue-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '4rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'left'
                }}>
                    {/* Left Side: Map Visual */}
                    <a href="https://www.google.com/maps/place/GSSS+Institute+of+Engineering+and+Technology+for+Women+-+Mysuru,+KRS+Road,+Metagalli,+Hebbal+Industrial+Area,+Mysuru,+Karnataka+570016/data=!4m2!3m1!1s0x3baf7a4400000021:0x93637e6857ed9677!17m2!4m1!1e3!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBjI2LjYuMRgAIJ6dCiqUASw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk3NzYxLDEwMDc5NjUzMSw5NDI4NDQ5Niw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI7OTYxOSwxMDA3OTE0ODNCAklO&skid=532baa6c-608c-4d33-b652-39e2d007554a&g_st=aw" target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none", flex: "0 0 500px", maxWidth: "100%" }}>
                        <div style={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 0 30px rgba(0, 243, 255, 0.2)',
                            border: '1px solid rgba(0, 243, 255, 0.3)',
                            height: '300px',
                            background: '#0a0a0a'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.87565989163!2d76.61868431481958!3d12.327539991280965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7a4400000021%3A0x93637e6857ed9677!2sGSSS%20Institute%20of%20Engineering%20and%20Technology%20for%20Women!5e0!3m2!1sen!2sin!4v1677654321098!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Venue Map"
                            ></iframe>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, rgba(0, 243, 255, 0.1), transparent)',
                                cursor: 'pointer'
                            }}></div>
                        </div>

                    </a>
                    {/* Right Side: Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', flex: '1', minWidth: '300px' }}>
                        <h3 style={{
                            fontSize: '2.5rem',
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 700,
                            color: '#fff',
                            lineHeight: 1.2,
                            background: 'linear-gradient(90deg, #fff, #00f3ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            GSSS Institute of Engineering and Technology for Women
                        </h3>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.8,
                            maxWidth: '90%'
                        }}>
                            Mysuru, KRS Road, Metagalli, Hebbal Industrial Area,<br />
                            Mysuru, Karnataka 570016
                        </p>

                        <div style={{ marginTop: '1rem' }}>
                            <a
                                href="https://www.google.com/maps/place/GSSS+Institute+of+Engineering+and+Technology+for+Women+-+Mysuru,+KRS+Road,+Metagalli,+Hebbal+Industrial+Area,+Mysuru,+Karnataka+570016/data=!4m2!3m1!1s0x3baf7a4400000021:0x93637e6857ed9677!17m2!4m1!1e3!18m1!1e1?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBjI2LjYuMRgAIJ6dCiqUASw5NDI2NzcyNyw5NDI5MjE5NSw5NDI5OTUzMiwxMDA3OTY0OTgsMTAwNzk3NzYxLDEwMDc5NjUzMSw5NDI4NDQ5Niw5NDI4MDU3Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxODY1Myw5NDIyOTgzOSw5NDI7OTYxOSwxMDA3OTE0ODNCAklO&skid=532baa6c-608c-4d33-b652-39e2d007554a&g_st=aw"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '12px 30px',
                                    background: 'transparent',
                                    border: '2px solid var(--color-primary)',
                                    color: 'var(--color-primary)',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    zIndex: 1,
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'var(--color-primary)';
                                    e.currentTarget.style.color = '#000';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 243, 255, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--color-primary)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="team" title="Meet the Team" subtitle="THE MINDS BEHIND COGNITHON">
                <Coordinators />
            </Section>


        </div>
    );
};

export default Home;
