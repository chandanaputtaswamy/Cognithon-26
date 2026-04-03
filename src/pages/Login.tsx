import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamCredentials } from '../config/credentials';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate a brief loading state for UX polish
        setTimeout(() => {
            const validUser = teamCredentials.find(
                (c) => c.email === email && c.password === password
            );

            if (validUser) {
                // Store authentication status and team data in sessionStorage
                // sessionStorage persists only for the browser tab session
                sessionStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('teamEmail', validUser.email);
                sessionStorage.setItem('teamName', validUser.teamName);
                sessionStorage.setItem('problemStatement', validUser.problemStatement);
                sessionStorage.setItem('panel', validUser.panel);

                // Also keep localStorage flag for Navbar compatibility
                localStorage.setItem('isAuthenticated', 'true');

                navigate('/dashboard');
            } else {
                setError('Invalid email or password. Please try again.');
                setIsLoading(false);
            }
        }, 600);
    };

    return (
        <section className="login-container">
            <div className="login-bg-glow"></div>
            <div className="login-bg-glow login-bg-glow-2"></div>
            <motion.div
                className="login-card"
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="login-logo-badge">
                    <span className="login-lock-icon">🔐</span>
                </div>
                <h2 className="login-title">Team Portal</h2>
                <p className="login-subtitle">Sign in to access your problem statement</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-input-group">
                        <label className="login-label" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your registered email"
                            required
                            autoComplete="email"
                        />
                    </div>

                    <div className="login-input-group">
                        <label className="login-label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {error && (
                        <motion.div
                            className="login-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            ⚠ {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        className={`login-btn ${isLoading ? 'login-btn--loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="login-spinner">
                                <span className="login-spinner-dot"></span>
                                <span className="login-spinner-dot"></span>
                                <span className="login-spinner-dot"></span>
                            </span>
                        ) : (
                            'Access Portal'
                        )}
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default Login;
