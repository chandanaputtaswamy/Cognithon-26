import { motion } from 'framer-motion';
import Section from './Section';

import {
    FaRegClipboard,
    FaRegBell,
    FaRegPlayCircle,
    FaRegCheckCircle
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
        description: "Online registration begins for participants.",
        icon: <FaRegClipboard />,
        x: 12,
        y: 50
    },
    {
        time: "Phase 2",
        title: "Shortlisting Announcement",
        description: "Shortlisted teams are announced & contacted.",
        icon: <FaRegBell />,
        x: 37,
        y: 50
    },
    {
        time: "Phase 3",
        title: "Hackathon Starts",
        description: "Teams begin working on their problem statements.",
        icon: <FaRegPlayCircle />,
        x: 63,
        y: 50
    },
    {
        time: "Phase 4",
        title: "Hackathon Ends",
        description: "Final submissions and closing session.",
        icon: <FaRegCheckCircle />,
        x: 88,
        y: 50
    }
];





const ScheduleRoadmap = () => {
    const generatePulsePath = () => {
        const sortedPoints = [...milestones].sort((a, b) => a.x - b.x);
        const startX = 0;
        const startY = 150; // Midline

        let path = `M ${startX} ${startY}`;

        sortedPoints.forEach((p, i) => {
            const peakY = i % 2 === 0 ? 60 : 240; // Tighter peaks (closer to midline)
            const gap = 10; // width of the pulse base

            // Move to start of pulse
            path += ` L ${(p.x - gap) * 12} ${startY}`;
            // Slant to peak/valley
            path += ` L ${p.x * 12} ${peakY}`;
            // Slant back to midline
            path += ` L ${(p.x + gap) * 12} ${startY}`;
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
                    viewBox="0 0 1200 300"
                    preserveAspectRatio="none"
                >
                    {/* Dim Horizontal Base Line */}
                    <line
                        x1="0" y1="150" x2="1200" y2="150"
                        stroke="var(--color-primary)"
                        strokeWidth="1"
                        opacity="0.2"
                    />

                    {/* Background glow path */}
                    <motion.path
                        d={generatePulsePath()}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        className="path-glow-neon"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: false }}
                    />

                    {/* Main pulse path */}
                    <motion.path
                        d={generatePulsePath()}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                                top: `50%`
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
