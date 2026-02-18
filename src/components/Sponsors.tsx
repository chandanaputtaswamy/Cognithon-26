import { motion } from 'framer-motion';
import sponsorsData from '../data/sponsors.json';
import '../styles/Sponsors.css';
import avinyaLogo from '../assets/avinya.png';
import mtdLogo from '../assets/mtd.png';

interface Sponsor {
    id: string;
    name: string;
    url: string;
    description?: string;
    isPlaceholder: boolean;
}

const Sponsors = () => {
    return (
        <div className="sponsors-grid-container">
            {sponsorsData.map((sponsor: Sponsor, index) => (
                <motion.a
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_self"
                    rel="noopener noreferrer"
                    className={`sponsor-card ${sponsor.isPlaceholder ? 'placeholder' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        delay: index * 0.15,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100
                    }}
                >
                    <div className="card-shine"></div>
                    <div className="sponsor-content">
                        {sponsor.id === 'avinya' && (
                            <img src={avinyaLogo} alt={sponsor.name} className="sponsor-logo" style={{ maxWidth: '90%', maxHeight: '120px', marginBottom: '1.5rem', objectFit: 'contain' }} />
                        )}
                        {sponsor.id === 'mtdn' && (
                            <img src={mtdLogo} alt={sponsor.name} className="sponsor-logo" style={{ maxWidth: '90%', maxHeight: '120px', marginBottom: '1.5rem', objectFit: 'contain' }} />
                        )}
                        <h3 className="sponsor-name">{sponsor.name}</h3>
                        {sponsor.description && (
                            <p className="sponsor-description">{sponsor.description}</p>
                        )}
                        {sponsor.isPlaceholder && (
                            <span className="sponsor-status">Join the innovation</span>
                        )}
                    </div>
                </motion.a>
            ))}
        </div>
    );
};

export default Sponsors;
