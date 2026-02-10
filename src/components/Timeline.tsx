import '../styles/Timeline.css';

interface TimelineEvent {
    time: string;
    event: string;
}

const Timeline = ({ events }: { events: TimelineEvent[] }) => {
    return (
        <div className="timeline">
            {events.map((item, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <span className="timeline-time">{item.time}</span>
                        <h4 className="timeline-event">{item.event}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
