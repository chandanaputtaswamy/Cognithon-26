import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const navHeight = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-logo">COGNITHON<span>-26</span></h3>
                    <p>Innovate. Disrupt. Build the Future.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><button onClick={() => scrollToSection('about')} className="footer-link-btn">About</button></li>
                        <li><button onClick={() => scrollToSection('featured-problem')} className="footer-link-btn">Problem Statements</button></li>
                        <li><a href="https://forms.gle/3afJzo9aP6hxweyZ8" target="_blank" rel="noopener noreferrer">Register</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Cognithon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
