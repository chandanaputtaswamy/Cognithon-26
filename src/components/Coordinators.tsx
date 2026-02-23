import { motion } from 'framer-motion';
import '../styles/Coordinators.css';

import ashaImg from '../assets/asha-nobg.png';
import bharthiImg from '../assets/bharthi-nobg.png';
import abhignaImg from '../assets/Abhigna Shankar.png';
import rachanaImg from '../assets/Rachana S Jadhav.png';
import shivaniImg from '../assets/Shivani K S.png';
import chandanaImg from '../assets/Chandana P.png';
import chinmayaImg from '../assets/Chinmaya.png';

import { FaLinkedin } from 'react-icons/fa';

interface Coordinator {
    id: number;
    name: string;
    role: string;
    image: string;
    phone: string;
    linkedin?: string;
    imagePosition?: string;
}

const facultyCoordinators: Coordinator[] = [
    {
        id: 1,
        name: "Dr. Asha M",
        role: "Associate Professor, Dept. of AI&DS, GSSSIETW, Mysuru.",
        image: ashaImg,
        phone: "+91 9886135756",
        imagePosition: "center 20%"
    },
    {
        id: 2,
        name: "Dr. Bharathi R",
        role: "Assistant Professor,  Dept. of AI&DS, GSSSIETW, Mysuru.",
        image: bharthiImg,
        phone: "+91 9986955155",
        imagePosition: "center 20%"
    }
];

const technicalCrew: Coordinator[] = [
    {
        id: 2,
        name: "Ananya S",
        role: "Technical Crew",
        image: "https://via.placeholder.com/150",
        phone: "+91 76767 79427",
        linkedin: "https://www.linkedin.com/in/ananya-s-bb87482a2/"
    },
    {
        id: 3,
        name: "Chandana P",
        role: "Technical Crew",
        image: chandanaImg,
        phone: "9535580546",
        linkedin: "https://www.linkedin.com/in/chandana-puttaswamy/",
        imagePosition: "center 20%"
    },
    {
        id: 4,
        name: "Chinmaya",
        role: "Technical Crew",
        image: chinmayaImg,
        phone: "+91 84310 27914",
        linkedin: "https://www.linkedin.com/in/chinmaya-bhagya-2a42392a3/",
        imagePosition: "center 20%"
    }
];

const marketingDesignCrew: Coordinator[] = [
    {
        id: 1,
        name: "Abhigna Shankar",
        role: "Marketing and Design Crew",
        image: abhignaImg,
        phone: "+91 93539 04413",
        linkedin: "https://www.linkedin.com/in/abhigna-shankar-6610812a3/",
        imagePosition: "center 20%"
    },
    {
        id: 5,
        name: "Rachana S Jadhav",
        role: "Marketing and Design Crew",
        image: rachanaImg,
        phone: "+91 93538 31153",
        linkedin: "https://www.linkedin.com/in/rachana-s-jadhav-819a55291/",
        imagePosition: "center 10%"
    },
    {
        id: 6,
        name: "Shivani K S",
        role: "Marketing and Design Crew",
        image: shivaniImg,
        phone: "+91 831 058 8558",
        linkedin: "https://www.linkedin.com/in/shivani-k-s-2832392a3/",
        imagePosition: "center 20%"
    }
];

const CoordinatorCard = ({ coordinator }: { coordinator: Coordinator }) => (
    <motion.div
        className="coordinator-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
    >
        <div className="coordinator-image-container">
            <img
                src={coordinator.image}
                alt={coordinator.name}
                className="coordinator-image"
                style={{ objectPosition: coordinator.imagePosition || 'center' }}
            />
        </div>
        {coordinator.linkedin && (
            <a
                href={coordinator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="coordinator-linkedin-link"
            >
                <FaLinkedin />
            </a>
        )}
        <div className="coordinator-info">
            <h3 className="coordinator-name">{coordinator.name}</h3>
            <p className="coordinator-role">{coordinator.role}</p>
            <a href={`tel:${coordinator.phone}`} className="coordinator-phone">{coordinator.phone}</a>
        </div>
    </motion.div>
);

const Coordinators = () => {
    return (
        <div className="coordinators-container">
            <div className="coordinators-section">
                <motion.h3
                    className="coordinators-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    Faculty Coordinators
                </motion.h3>
                <div className="coordinators-grid faculty-grid">
                    {facultyCoordinators.map(coordinator => (
                        <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
                    ))}
                </div>
            </div>

            <div className="coordinators-section">
                <motion.div
                    className="section-header team-header"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Meet the Team</h2>
                    <p className="section-subtitle">THE MINDS BEHIND COGNITHON</p>
                </motion.div>

                <motion.h3
                    className="coordinators-subtitle crew-title"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Crew
                </motion.h3>
                <div className="coordinators-grid student-grid tech-grid">
                    {technicalCrew.map(coordinator => (
                        <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
                    ))}
                </div>

                <motion.h3
                    className="coordinators-subtitle crew-title marketing-crew-title"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                >
                    Marketing and Design Crew
                </motion.h3>
                <div className="coordinators-grid student-grid marketing-grid">
                    {marketingDesignCrew.map(coordinator => (
                        <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coordinators;
