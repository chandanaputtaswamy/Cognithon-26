import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/#about' },
        { title: 'Problems', path: '/#problems' },
        { title: 'Timeline', path: '/#timeline' },
        { title: 'FAQ', path: '/#faq' },
        { title: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <img src="/favicon.png" alt="Cognithon Logo" className="nav-logo-img" />
                    COGNITHON<span>-26</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            className="nav-link"
                            onClick={() => {
                                if (link.path === '/') window.scrollTo(0, 0);
                            }}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <a href="https://forms.gle/3afJzo9aP6hxweyZ8" className="register-btn" target="_blank" rel="noopener noreferrer">
                        Register Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className="nav-link"
                                onClick={() => {
                                    toggleMenu();
                                    if (link.path === '/') window.scrollTo(0, 0);
                                }}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <a href="https://forms.gle/3afJzo9aP6hxweyZ8" className="register-btn" onClick={toggleMenu} style={{ width: '100%', textAlign: 'center', display: 'block' }} target="_blank" rel="noopener noreferrer">
                            Register Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
