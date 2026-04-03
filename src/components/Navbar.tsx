import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo1 from '../assets/logo1.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setIsAuth(localStorage.getItem('isAuthenticated') === 'true');
    }, [location.pathname]);

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
        { title: 'Home', id: 'hero' },
        { title: 'About', id: 'about' },
        { title: 'Problems', id: '__problems__' },
        { title: 'Timeline', id: 'schedule' },
        { title: 'FAQ', id: 'faq' }
    ];

    // Problems nav item: go to dashboard if logged in, else go to login
    const handleProblemsClick = () => {
        if (isOpen) setIsOpen(false);
        navigate(isAuth ? '/dashboard' : '/login');
    };


    const scrollToSection = (id: string) => {
        if (isOpen) setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        // Delay scroll slightly to allow the mobile menu closing animation to start
        // This prevents the scroll action from being cancelled on some mobile browsers
        setTimeout(() => {
            if (id === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const element = document.getElementById(id);
                if (element) {
                    const navHeight = 70;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }, 150);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div onClick={() => scrollToSection('hero')} className="logo" style={{ cursor: 'pointer' }}>
                    <img src={logo1} alt="Cognithon Logo" className="nav-logo-img" />
                    COGNITHON<span>-26</span>
                </div>

                {/* Desktop Links */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <button
                            key={link.title}
                            className="nav-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
                            onClick={() => link.id === '__problems__' ? handleProblemsClick() : scrollToSection(link.id)}
                        >
                            {link.title}
                        </button>
                    ))}
                    {isAuth ? (
                        <button className="register-btn" onClick={() => {
                            sessionStorage.clear();
                            localStorage.removeItem('isAuthenticated');
                            setIsAuth(false);
                            navigate('/');
                        }} style={{ font: 'inherit', cursor: 'pointer', fontWeight: 'bold' }}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="register-btn">
                            Login
                        </Link>
                    )}
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
                        style={{ overflow: 'hidden' }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.title}
                                className="nav-link"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', width: '100%', textAlign: 'left', padding: '1rem 0' }}
                                onClick={() => link.id === '__problems__' ? handleProblemsClick() : scrollToSection(link.id)}
                            >
                                {link.title}
                            </button>
                        ))}
                        {isAuth ? (
                            <button
                                className="register-btn"
                                onClick={() => {
                                    sessionStorage.clear();
                                    localStorage.removeItem('isAuthenticated');
                                    setIsAuth(false);
                                    navigate('/');
                                    setIsOpen(false);
                                }}
                                style={{ width: '100%', textAlign: 'center', display: 'block', font: 'inherit', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="register-btn"
                                onClick={() => setIsOpen(false)}
                                style={{ width: '100%', textAlign: 'center', display: 'block' }}
                            >
                                Login
                            </Link>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
