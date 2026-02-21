import { motion } from 'framer-motion';
import {
    FaAward,
    FaUsers,
    FaUserTie,
    FaCode,
    FaHeadset,
    FaTrophy,
    FaCheckDouble,
    FaLightbulb
} from 'react-icons/fa';
import '../styles/EventHighlights.css';

const highlights = [
    {
        icon: <FaAward />,
        text: "National-level women-only hackathon designed to inspire innovation and collaboration."
    },
    {
        icon: <FaUsers />,
        text: "Opportunity to connect with fellow coders and interact with industry experts."
    },
    {
        icon: <FaUserTie />,
        text: "Expert-led mentoring sessions to guide teams throughout the event."
    },
    {
        icon: <FaCode />,
        text: "Hands-on development with live demos, prototyping, and real-world problem solving."
    },
    {
        icon: <FaHeadset />,
        text: "Online mentoring support from industry professionals during the hackathon."
    },
    {
        icon: <FaTrophy />,
        text: "Top 30 teams will be shortlisted for exclusive mentoring and guidance."
    },
    {
        icon: <FaCheckDouble />,
        text: "Final solutions evaluated by experienced industry experts."
    },
    {
        icon: <FaLightbulb />,
        text: "Detailed feedback provided to help participants improve and grow."
    }
];

const EventHighlights = () => {
    return (
        <div className="highlights-container">
            <div className="highlights-grid">
                {highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        className="highlight-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="highlight-icon-wrapper">
                            {item.icon}
                        </div>
                        <p className="highlight-text">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventHighlights;
