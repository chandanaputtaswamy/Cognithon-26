import { motion } from 'framer-motion';
import Section from './Section';

import {
    FaRegClipboard,
    FaRegBell,
    FaRegPlayCircle,
    FaRegCheckCircle,
    FaRegCalendarTimes
} from 'react-icons/fa';


import '../styles/ScheduleRoadmap.css';

interface Milestone {
    time: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    x: number; // Percentage from left
    y: number; // Percentage from top
}

const milestones: Milestone[] = [
    {
        time: "Phase 1",
        title: "Registration Opens",
        description: "23-02-2026, Monday",
        icon: <FaRegClipboard />,
        x: 15,
        y: 65 // Valley
    },
    {
        time: "Phase 2",
        title: "Registration Closes",
        description: "06-03-2026, Friday",
        icon: <FaRegCalendarTimes />,
        x: 32.5,
        y: 35 // Peak
    },
    {
        time: "Phase 3",
        title: "Shortlisting Announcement",
        description: "14-03-2026, Saturday",
        icon: <FaRegBell />,
        x: 50,
        y: 65 // Valley
    },
    {
        time: "Phase 4",
        title: "Hackathon Starts",
        description: "10-04-2026, Friday",
        icon: <FaRegPlayCircle />,
        x: 67.5,
        y: 35 // Peak
    },
    {
        time: "Phase 5",
        title: "Hackathon Ends",
        description: "11-04-2026, Saturday",
        icon: <FaRegCheckCircle />,
        x: 85,
        y: 65 // Valley
    }
];





const ScheduleRoadmap = () => {
    const generatePath = () => {
        const sortedPoints = [...milestones].sort((a, b) => a.x - b.x);
        const startX = 0;
        const startY = 300;

        // Use a simple straight zigzag path. 
        // CSS stroke-linejoin: round will make the corners 'lil smooth'.
        let path = `M ${startX} ${startY}`;

        sortedPoints.forEach(p => {
            path += ` L ${p.x * 12} ${p.y * 6}`;
        });

        path += ` L 1200 ${startY}`;

        return path;
    };




    return (
        <Section
            id="schedule"
            title="Schedule"
            subtitle="Follow the journey of Cognithon-26"
            className="schedule-roadmap-section"
        >
            <div className="roadmap-bg-particles"></div>


            <div className="roadmap-wrapper">
                <svg
                    className="roadmap-svg-horizontal"
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="none"
                >

                    {/* Background glow path */}
                    <motion.path
                        d={generatePath()}
                        fill="none"
                        stroke="var(--color-secondary)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        className="path-glow-neon"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: false }}
                    />

                    {/* Main road path */}
                    <motion.path
                        d={generatePath()}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="path-road-neon"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: false }}
                    />
                </svg>

                <div className="milestones-container">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className={`milestone-node ${index % 2 === 0 ? 'milestone-node--top' : 'milestone-node--bottom'}`}
                            style={{
                                left: `${milestone.x}%`,
                                top: `${milestone.y}%`
                            }}

                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: false }}
                        >
                            <div className="milestone-marker">
                                {milestone.icon}
                            </div>
                            <div className="milestone-text">
                                <span className="milestone-time">{milestone.time}</span>
                                <h4 className="milestone-title">{milestone.title}</h4>
                                <p className="milestone-desc">{milestone.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>

    );
};

export default ScheduleRoadmap;
