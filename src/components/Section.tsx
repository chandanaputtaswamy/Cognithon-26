import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import '../styles/Section.css';

interface SectionProps {
    id?: string;
    title?: ReactNode;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
    return (
        <section id={id} className={`section-container ${className}`}>
            <div className="section-content">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="section-header"
                    >
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
