import { motion } from 'framer-motion';
import '../styles/Timeline.css';

interface TimelineEvent {
    title: string;
    description: string;
    icon: string;
}

interface EventData {
    time: string;
    event: string;
}

interface TimelineProps {
    events?: EventData[];
}

const defaultRoadmap: TimelineEvent[] = [
    { title: "Registrations Open", description: "Register your team and start your journey.", icon: "📝" },
    { title: "Idea Submission", description: "Submit your innovative solutions.", icon: "💡" },
    { title: "Shortlisting", description: "Top teams selected for the finale.", icon: "✅" },
    { title: "Mentorship Round", description: "Expert guidance to refine your ideas.", icon: "👨‍🏫" },
    { title: "Final Hack Day", description: "24-hour coding marathon begins.", icon: "🚀" },
    { title: "Judging & Results", description: "Pitch to judges and win big.", icon: "🏆" }
];

const Timeline = ({ events }: TimelineProps) => {
    const roadmapData: TimelineEvent[] = events
        ? events.map(e => ({
            title: e.event,
            description: e.time,
            icon: "🗓️" // Default icon for schedule events
        }))
        : defaultRoadmap;

    const itemHeight = 300; // Increased height for better spacing
    const totalHeight = (roadmapData.length * itemHeight) + 100;

    const generatePath = () => {
        let d = `M 500 0`;
        roadmapData.forEach((_, index) => {
            const yStart = index * itemHeight;
            const yEnd = (index + 1) * itemHeight;
            const peakX = index % 2 === 0 ? 800 : 200;
            d += ` C ${peakX} ${yStart + 50}, ${peakX} ${yEnd - 50}, 500 ${yEnd}`;
        });
        return d;
    };

    return (
        <div className="timeline-roadmap">
            <svg
                className="roadmap-svg"
                width="1000"
                height={totalHeight}
                viewBox={`0 0 1000 ${totalHeight}`}
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="roadShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.8" />
                    </filter>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#facc15" />
                        <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                </defs>

                {/* The Road (Thick Dark Path) */}
                <path
                    d={generatePath()}
                    stroke="#1e293b"
                    strokeWidth="50"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#roadShadow)"
                    className="path-road"
                />

                {/* Center Line (Subtle) */}
                <path
                    d={generatePath()}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="15 15"
                    strokeLinecap="round"
                    className="path-line-center"
                />
            </svg>

            {roadmapData.map((item, index) => (
                <motion.div
                    key={index}
                    className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <div className="roadmap-content">
                        <div className="content-inner">
                            <h4 className="roadmap-title">{item.title}</h4>
                            <p className="roadmap-desc">{item.description}</p>
                        </div>
                    </div>

                    <div className="roadmap-marker-wrapper">
                        <div className="roadmap-marker">
                            <span className="marker-icon">{item.icon}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Timeline;
