import { useEffect, useRef } from 'react';

export const useMousePosition = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            element.style.setProperty('--mouse-x', `${x}%`);
            element.style.setProperty('--mouse-y', `${y}%`);
        };

        element.addEventListener('mousemove', handleMouseMove);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return elementRef;
};

export const useRippleEffect = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleClick = (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            element.style.setProperty('--ripple-x', `${x}%`);
            element.style.setProperty('--ripple-y', `${y}%`);

            // Trigger animation by removing and re-adding class
            element.classList.remove('liquid-ripple');
            void element.offsetWidth; // Force reflow
            element.classList.add('liquid-ripple');
        };

        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
        };
    }, []);

    return elementRef;
};
