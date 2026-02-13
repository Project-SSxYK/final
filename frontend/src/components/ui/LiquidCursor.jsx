import React, { useEffect, useState } from 'react';

const LiquidCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = (e) => {
            const target = e.target;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.classList.contains('liquid-glass-hover') ||
                target.classList.contains('liquid-glass-card') ||
                target.classList.contains('interactive-glow')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    return (
        <div
            className={`custom-cursor ${isHovering ? 'hover' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default LiquidCursor;
