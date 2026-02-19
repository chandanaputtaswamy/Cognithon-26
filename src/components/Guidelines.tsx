import { motion } from 'framer-motion';
import '../styles/Guidelines.css';

const guidelines = [
    "Ordering food from outside to the college premises is strictly not allowed.",
    "Participants must not leave the campus during the event.",
    "Entry into non-assigned areas is prohibited.",
    "Plagiarism, cheating, or unfair practices will lead to immediate disqualification.",
    "Calling or bringing outsiders to the college is not permitted.",
    "Participants must stay on campus from the start until the event ends.",
    "Formal and decent dress code is mandatory."
];

const Guidelines = () => {
    return (
        <div className="guidelines-container">
            <ul className="guidelines-list">
                {guidelines.map((rule, index) => (
                    <motion.li
                        key={index}
                        className="guideline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="guideline-icon">⚡</span>
                        <span className="guideline-text">{rule}</span>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default Guidelines;
