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

                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default ProblemStatements;
