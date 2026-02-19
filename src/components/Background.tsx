import React, { useEffect, useRef } from 'react';
import './Background.css';

const Background: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Initialize light at center of screen
    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const currentMouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const stars: Star[] = [];
        const numStars = (width * height) / 15000;

        class Star {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 1.5 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
                ctx.closePath();
            }
        }

        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Smooth mouse movement
            currentMouseRef.current.x += (mouseRef.current.x - currentMouseRef.current.x) * 0.1;
            currentMouseRef.current.y += (mouseRef.current.y - currentMouseRef.current.y) * 0.1;

            // Draw cursor glow
            const gradient = ctx.createRadialGradient(
                currentMouseRef.current.x,
                currentMouseRef.current.y,
                0,
                currentMouseRef.current.x,
                currentMouseRef.current.y,
                1200
            );
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw stars and connections
            stars.forEach((star, index) => {
                star.update();
                star.draw();

                for (let j = index + 1; j < stars.length; j++) {
                    const otherStar = stars[j];
                    const dist = Math.hypot(star.x - otherStar.x, star.y - otherStar.y);
                    const maxDist = 150;

                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(star.x, star.y);
                        ctx.lineTo(otherStar.x, otherStar.y);
                        const opacity = 1 - dist / maxDist;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="background-canvas" />;
};

export default Background;
