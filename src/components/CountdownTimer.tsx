import '../styles/CountdownTimer.css';

// ⏸ TIMER IS PAUSED — set isPaused = false and update targetDate to resume
const isPaused = true;

const CountdownTimer = () => {
    // Helper to format numbers with leading zero
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    // Paused display: frozen at 24:00:00
    const timeLeft = { days: 0, hours: 24, minutes: 0, seconds: 0 };

    return (
        <div className="countdown-container">
            <p className="hackathon-begun-text">HACKATHON HAS BEGUN</p>
            <div className="countdown-timer">
                <div className="countdown-box">
                    <span className="countdown-number">{formatTime(timeLeft.days)}</span>
                    <span className="countdown-label">Days</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-box">
                    <span className="countdown-number">{formatTime(timeLeft.hours)}</span>
                    <span className="countdown-label">Hours</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-box">
                    <span className="countdown-number">{formatTime(timeLeft.minutes)}</span>
                    <span className="countdown-label">Minutes</span>
                </div>
                <span className="countdown-separator">:</span>
                <div className="countdown-box">
                    <span className="countdown-number">{formatTime(timeLeft.seconds)}</span>
                    <span className="countdown-label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export { isPaused };
export default CountdownTimer;
