import { motion, type Variants } from 'framer-motion';
import { FaUserAstronaut } from 'react-icons/fa';
import teamsData from '../data/selectedTeams.json';
import '../styles/SelectedTeams.css';

const SelectedTeams = () => {
    // Animation variants for stagger effects
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    return (
        <motion.div 
            className="selected-teams-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
        >
            {teamsData.map((team) => (
                <motion.div 
                    key={team.id} 
                    className="team-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="team-card-inner">
                        <div className="team-card-glow"></div>
                        <div className="team-name">
                            {team.teamName}
                        </div>
                        <div className="team-leader">
                            <FaUserAstronaut className="leader-icon" />
                            {team.leaderName}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SelectedTeams;
