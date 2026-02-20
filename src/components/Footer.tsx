import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
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
                        <li><a href="/#about">About</a></li>
                        <li><a href="/problems">Problem Statements</a></li>
                        <li><a href="https://forms.gle/3afJzo9aP6hxweyZ8" target="_blank" rel="noopener noreferrer">Register</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Github"><FaGithub /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
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
