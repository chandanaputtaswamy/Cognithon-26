import { ReactNode } from 'react';
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="section-header"
                    >
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
