import { useEffect, useState, useRef } from 'react';
import cursor1 from '../assets/cursor1.png';
import cursor2 from '../assets/cursor2.png';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if device is a touch device (like phones/tablets)
        const isTouch =
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(pointer: coarse)').matches;

        if (isTouch) {
            setIsTouchDevice(true);
            return;
        }

        const moveMouse = (e: MouseEvent) => {
            if (cursorRef.current) {
                // Use hardware accelerated transform instead of state updates to avoid React re-renders
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-10%, -10%)`;
            }
            setHidden(false);
        };

        const handleMouseLeave = () => {
            setHidden(true);
        };

        const handleMouseEnter = () => {
            setHidden(false);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;
            const style = window.getComputedStyle(target);
            // Check if it's an interactive element
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                style.cursor === 'pointer'
            ) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        // Use { passive: true } for performance gains
        window.addEventListener('mousemove', moveMouse, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        document.body.classList.add('custom-cursor-active');

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            document.body.classList.remove('custom-cursor-active');
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: '24px',
                height: '24px',
                pointerEvents: 'none',
                zIndex: 999999,
                backgroundImage: `url(${isPointer ? cursor2 : cursor1})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                transform: 'translate3d(-100px, -100px, 0) translate(-10%, -10%)',
                opacity: hidden ? 0 : 1,
                transition: 'background-image 0.1s ease, opacity 0.2s ease', // Target specific transitions instead of all
                willChange: 'transform', // Hint browser to optimize this layer for transform
            }}
        />
    );
}
