import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teamCredentials } from '../config/credentials';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');
    const [problemStatement, setProblemStatement] = useState('');
    const [teamEmail, setTeamEmail] = useState('');
    const [panel, setPanel] = useState('');

    useEffect(() => {
        // Auth guard: redirect to login if not authenticated
        const isAuth = sessionStorage.getItem('isAuthenticated');
        if (isAuth !== 'true') {
            navigate('/login', { replace: true });
            return;
        }

        // Load team data from session
        setTeamName(sessionStorage.getItem('teamName') || 'Your Team');
        setProblemStatement(sessionStorage.getItem('problemStatement') || '');
        const email = sessionStorage.getItem('teamEmail') || '';
        setTeamEmail(email);
        
        let storedPanel = sessionStorage.getItem('panel');
        if (!storedPanel && email) {
            const creds = teamCredentials.find(c => c.email === email);
            if (creds && creds.panel) {
                storedPanel = creds.panel;
                sessionStorage.setItem('panel', storedPanel);
            }
        }
        setPanel(storedPanel || '');
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.clear();
        localStorage.removeItem('isAuthenticated');
        navigate('/', { replace: true });
    };

    // Don't render until we have data (prevents flash before redirect)
    if (!problemStatement) return null;

    return (
        <section className="dashboard-container">
            <div className="dashboard-bg-glow"></div>
            <div className="dashboard-bg-glow dashboard-bg-glow-2"></div>

            {/* Header */}
            <motion.div
                className="dashboard-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="dashboard-badge">
                    <span className="dashboard-badge-dot"></span>
                    Authenticated
                </div>
                <h1 className="dashboard-title">{panel ? `${panel} - ` : ''}Participant Portal</h1>
                <p className="dashboard-subtitle">Welcome, {teamName}</p>
                <p className="dashboard-email">{teamEmail}</p>
            </motion.div>

            {/* Problem Statement Card */}
            <motion.div
                className="dashboard-ps-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="dashboard-ps-card">
                    <div className="dashboard-ps-header">
                        <span className="dashboard-ps-icon">📋</span>
                        <h2 className="dashboard-ps-label">Your Assigned Problem Statement</h2>
                    </div>

                    <div className="dashboard-ps-divider"></div>

                    <div className="dashboard-ps-content">
                        <p className="dashboard-ps-text">{problemStatement}</p>
                    </div>

                    <div className="dashboard-ps-footer">
                        <span className="dashboard-ps-note">
                            🔒 This problem statement is exclusively assigned to your team.
                            Do not share it with other participants.
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Logout Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="dashboard-actions"
            >
                <button className="dashboard-logout-btn" onClick={handleLogout}>
                    Sign Out
                </button>
            </motion.div>
        </section>
    );
};

export default Dashboard;
