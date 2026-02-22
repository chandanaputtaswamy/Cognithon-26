import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Preloader.css';

const terminalSteps = [
    { text: "INITIATING COGNITHON-26 SECURE PROTOCOL...", type: "normal" },
    { text: "ESTABLISHING ENCRYPTED CONNECTION...", type: "normal" },
    { text: "AUTHENTICATING USER CREDENTIALS...", type: "normal" },
    { text: "ACCESS TOKEN VERIFIED ✔", type: "success" },
    { text: "LOADING CORE SYSTEM FILES...", type: "normal" },
    { text: "CALIBRATING DATA PIPELINES...", type: "normal" },
    { text: "CONNECTING TO CLOUD SERVERS...", type: "normal" },
    { text: "SERVER STATUS: ONLINE ✔", type: "success" },
    { text: "COMPILING SOURCE CODE...", type: "normal" },
    { text: "RESOLVING DEPENDENCIES...", type: "normal" },
    { text: "CHECKING SYSTEM INTEGRITY...", type: "normal" },
    { text: "SYSTEM STABLE ✔", type: "success" },
    { text: "DEPARTMENT OF ARTIFICIAL INTELLIGENCE AND DATA SCIENCE", type: "highlight" },
    { text: "PROUDLY PRESENTS", type: "highlight" },
    { text: "LOADING HACKATHON ENVIRONMENT...", type: "normal" },
    { text: "BYPASSING MAINFRAME FIREWALLS...", type: "normal" },
    { text: "DECRYPTING PROBLEM STATEMENTS...", type: "normal" },
    { text: "INITIALIZING CHALLENGE MODULES...", type: "normal" },
    { text: "OPTIMIZING PERFORMANCE CORE...", type: "normal" },
    { text: "FINALIZING USER INTERFACE...", type: "normal" },
    { text: "SYSTEM READY 🚀", type: "success" },
    { text: "WELCOME TO COGNITHON-26", type: "highlight-large" },
    { text: "INNOVATE. DISRUPT. BUILD THE FUTURE.", type: "highlight" }
];

export default function Preloader() {
    const [lines, setLines] = useState<typeof terminalSteps>([]);
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let currentLine = 0;

        const lineInterval = setInterval(() => {
            if (currentLine < terminalSteps.length) {
                const nextStep = terminalSteps[currentLine];
                setLines(prev => [...prev, nextStep]);
                currentLine++;
            } else {
                clearInterval(lineInterval);
            }
        }, 180);

        // Progress to 100 in 4.5 seconds
        // 4500ms total, update every 45ms => 100 steps
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 45);

        // Hide preloader at exactly 5000ms
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => {
            clearInterval(lineInterval);
            clearInterval(progressInterval);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="preloader-container"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="terminal-body full-screen">
                        <div className="terminal-lines-container">
                            {lines.map((item, idx) => (
                                <div key={idx} className={`terminal-line ${item.type}`}>
                                    <span className="prompt">root@cognithon:~#</span> {item.text}
                                </div>
                            ))}
                            {lines.length < terminalSteps.length && (
                                <div className="terminal-line typing">
                                    <span className="prompt">root@cognithon:~#</span> <span className="cursor-blink"></span>
                                </div>
                            )}
                        </div>

                        <div className="progress-container">
                            <div className="progress-bar-wrapper">
                                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                            </div>
                            <span className="progress-text">{progress}%</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
