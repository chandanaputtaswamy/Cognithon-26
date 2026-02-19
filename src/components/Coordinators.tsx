import { motion } from 'framer-motion';
import '../styles/Coordinators.css';

import ashaImg from '../assets/asha.jpeg';
import bharthiImg from '../assets/bharthi.jpeg';

interface Coordinator {
    id: number;
    name: string;
    role: string;
    image: string;
    phone: string;
}

const facultyCoordinators: Coordinator[] = [
    {
        id: 1,
        name: "Dr. Asha M",
        role: "Associate Professor, Dept. of AI&DS, GSSSIETW, Mysuru.",
        image: ashaImg,
        phone: "+91 9886135756"
    },
    {
        id: 2,
        name: "Dr. Bharathi R",
        role: "Assistant Professor,  Dept. of AI&DS, GSSSIETW, Mysuru.",
        image: bharthiImg,
        phone: "+91 9986955155"
    }
];

const studentCoordinators: Coordinator[] = [
    {
        id: 1,
        name: "Student Name 1",
        role: "Student Coordinator",
        image: "https://via.placeholder.com/150",
        phone: "+91 77777 77777"
    },
    {
        id: 2,
        name: "Student Name 2",
        role: "Student Coordinator",
        image: "https://via.placeholder.com/150",
        phone: "+91 66666 66666"
    },
    {
        id: 3,
        name: "Student Name 3",
        role: "Student Coordinator",
        image: "https://via.placeholder.com/150",
        phone: "+91 55555 55555"
    },
    {
        id: 4,
        name: "Student Name 4",
        role: "Student Coordinator",
        image: "https://via.placeholder.com/150",
        phone: "+91 44444 44444"
    },
    {
        id: 5,
        name: "Student Name 5",
        role: "Student Coordinator",
        image: "https://via.placeholder.com/150",
        phone: "+91 33333 33333"
    },
    {
        id: 6,
        name: "Student Name 6",
        role: "Student Coordinator",
        image: "https://via.placeholder.com/150",
        phone: "+91 22222 22222"
    }
];

const CoordinatorCard = ({ coordinator }: { coordinator: Coordinator }) => (
    <motion.div
        className="coordinator-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
    >
        <div className="coordinator-image-container">
            <img src={coordinator.image} alt={coordinator.name} className="coordinator-image" />
        </div>
        <div className="coordinator-info">
            <h3 className="coordinator-name">{coordinator.name}</h3>
            <p className="coordinator-role">{coordinator.role}</p>
            <p className="coordinator-phone">{coordinator.phone}</p>
        </div>
    </motion.div>
);

const Coordinators = () => {
    return (
        <div className="coordinators-container">
            <div className="coordinators-section">
                <h3 className="coordinators-subtitle">Faculty Coordinators</h3>
                <div className="coordinators-grid faculty-grid">
                    {facultyCoordinators.map(coordinator => (
                        <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
                    ))}
                </div>
            </div>

            <div className="coordinators-section">
                <h3 className="coordinators-subtitle">Student Coordinators</h3>
                <div className="coordinators-grid student-grid">
                    {studentCoordinators.map(coordinator => (
                        <CoordinatorCard key={coordinator.id} coordinator={coordinator} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Coordinators;
