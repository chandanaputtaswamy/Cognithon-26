import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import gsssLogo from '../assets/GSSSlogo.png';
import '../styles/Hero.css';

const Hero = () => {
    const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
        const { currentTarget, clientX } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const xPercentage = ((clientX - left) / width) * 100;
        currentTarget.style.setProperty('--x', `${Math.max(0, Math.min(100, xPercentage))}%`);
    };

    return (
        <section className="hero-container">
            <div className="hero-bg-glow"></div>
            <div className="hero-content">
                <div className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-inner"
                    >
                        <div className="hero-top-logos">
                            <div
                                className="hero-top-logo-1"
                                style={{
                                    WebkitMaskImage: `url(${gsssLogo})`,
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center',
                                    maskImage: `url(${gsssLogo})`,
                                    maskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    backgroundColor: 'var(--color-primary)'
                                }}
                            />
                            <div className="hero-top-text-group">
                                <h2 className="hero-top-text-gsss">GSSS</h2>
                                <div className="hero-top-text-ietw">
                                    <span>INSTITUTE OF ENGINEERING</span>
                                    <span>AND TECHNOLOGY FOR WOMEN</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="hero-department-title">DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</h3>
                        <span className="hero-badge">April 10th and 11th - GSSSIETW, Mysuru</span>
                        <div className="hero-main-title-group">
                            <img src="/favicon.png" alt="Cognithon Logo" className="hero-logo-large" />
                            <h1
                                className="hero-title-main"
                                onMouseMove={handleMouseMove}
                            >
                                Cognithon 26
                            </h1>
                        </div>

                        <h2 className="hero-subtitle-main">
                            From Code to <span className="text-gradient">Cognition</span>
                        </h2>

                        <h3 className="hero-tagline-small">BUILD THE UNIMAGINABLE</h3>

                        <p className="hero-description">
                            Empowering Ideas, Powered by Women.<br />
                            Where ideas rise, solutions shine, and women lead the way.
                        </p>

                        {/* Mobile Only Countdown Timer */}
                        <div className="hero-countdown-mobile">
                            <CountdownTimer />
                        </div>

                        <div className="hero-cta">
                            <a
                                href="https://forms.gle/3afJzo9aP6hxweyZ8"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Register Now
                            </a>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('featured-problem');
                                    if (element) {
                                        const navHeight = 70; // Height of the fixed navbar
                                        const elementPosition = element.getBoundingClientRect().top;
                                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className="btn btn-outline"
                            >
                                View Problem Statements
                            </button>
                        </div>
                    </motion.div>

                    {/* Countdown Timer in Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-right-col"
                    >
                        <CountdownTimer />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
