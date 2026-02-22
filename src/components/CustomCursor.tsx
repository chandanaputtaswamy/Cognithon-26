import { useEffect, useState } from 'react';
import cursor1 from '../assets/cursor1.png';
import cursor2 from '../assets/cursor2.png';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [hidden, setHidden] = useState(false);
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
            setPosition({ x: e.clientX, y: e.clientY });
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

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);
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

    if (hidden || isTouchDevice) return null;

    return (
        <div
            style={{
                position: 'fixed',
                left: position.x,
                top: position.y,
                width: '24px',
                height: '24px',
                pointerEvents: 'none',
                zIndex: 999999,
                backgroundImage: `url(${isPointer ? cursor2 : cursor1})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                transform: 'translate(-10%, -10%)',
                transition: 'background-image 0.1s ease',
            }}
        />
    );
}
