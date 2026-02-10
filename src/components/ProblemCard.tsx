import { motion } from 'framer-motion';
import '../styles/ProblemCard.css';

interface Problem {
    id: number;
    title: string;
    category: string;
    description: string;
    difficulty: string;
}

const ProblemCard = ({ problem }: { problem: Problem }) => {
    return (
        <motion.div
            layout
            className="problem-card expanded"
        >
            <div className="problem-header" style={{ cursor: 'default' }}>
                <div>
                    <div className="problem-meta">
                        <span className="problem-category">{problem.category}</span>
                        <span className={`problem-difficulty difficulty-${problem.difficulty}`}>
                            {problem.difficulty}
                        </span>
                    </div>
                    <h3 className="problem-title">{problem.title}</h3>
                </div>
            </div>

            <div style={{ overflow: 'hidden' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {problem.description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProblemCard;
