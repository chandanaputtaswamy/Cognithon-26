import { useState, useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
    // Target Date: April 11, 2026 11:19:05 AM (24 hours from restart)
    const targetDate = new Date('2026-04-11T11:19:05').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                clearInterval(interval);
                // Timer reached zero
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsFinished(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    // Helper to format numbers with leading zero
    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div className="countdown-container">
            {!isFinished && <h3 className="countdown-title">HACKING BEGINS IN</h3>}
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
            {isFinished && (
                <p className="hacking-begins-text">HACKING BEGINS</p>
            )}
        </div>
    );
};

export default CountdownTimer;
