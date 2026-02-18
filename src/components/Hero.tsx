import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-inner"
                >
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
                        From Code to <span className="text-gradient">cognithon</span>
                    </h2>

                    <h3 className="hero-tagline-small">BUILD THE UNIMAGINABLE</h3>

                    <p className="hero-description">
                        Empowering Ideas, Powered by Women.<br />
                        Where ideas rise, solutions shine, and women lead the way.
                    </p>

                    <div className="hero-cta">
                        <a
                            href="https://forms.gle/3afJzo9aP6hxweyZ8"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Register Now
                        </a>
                        <Link to="/#problems" className="btn btn-outline">View Problem Statements</Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
