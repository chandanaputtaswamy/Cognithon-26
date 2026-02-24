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
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                    {problem.description}
                </p>

                <div style={{ marginTop: '2rem', paddingLeft: '2rem', paddingBottom: '2rem' }}>
                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Core Requirements:</h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        <li>Clearly define the problem and its users.</li>
                        <li>Propose a technical solution using AI, data science, or automation.</li>
                        <li>Include system architecture, tools/technologies, and feasibility.</li>
                        <li>Show innovation, practicality, and impact.</li>
                    </ul>

                    <div style={{ marginTop: '2.5rem' }}>
                        <a
                            href="https://docs.google.com/presentation/d/1KsPHwEejnfj_f0n6PsUnApB4uwi2NZ1s/export/pptx"
                            className="btn idea-template-btn"
                            download
                        >
                            Idea Template
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProblemCard;
