import Section from '../components/Section';
import ProblemCard from '../components/ProblemCard';
import problemsData from '../data/problemStatements.json';

const ProblemStatements = () => {

    return (
        <div style={{ paddingTop: '60px' }}>
            <Section title="Problem Statement">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {problemsData.map((problem) => (
                        <div key={problem.id} style={{ maxWidth: '800px', width: '100%' }}>
                            <ProblemCard problem={problem} />
                            <div style={{ marginTop: '2rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(0, 243, 255, 0.2)' }}>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Key Expectations:</h4>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                                    <li>Clearly define the problem and its users.</li>
                                    <li>Propose a technical solution using AI, data science, or automation.</li>
                                    <li>Include system architecture, tools/technologies, and feasibility.</li>
                                    <li>Show innovation, practicality, and impact.</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default ProblemStatements;
