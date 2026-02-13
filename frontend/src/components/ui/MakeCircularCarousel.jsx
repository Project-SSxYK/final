import React, { useRef, useEffect, useState, useCallback } from 'react';

const defaultImages = [
    { src: "/Models/sleeping-pod.jpeg", alt: "Sleeping Pod" },
    { src: "/Models/v009.jpeg", alt: "V009 Cabin" },
    { src: "/Models/v007.jpeg", alt: "V007 Cabin" },
    { src: "/Models/double-c-cabin.jpeg", alt: "Double C Cabin" },
    { src: "/Models/1-dome-house.jpeg", alt: "Dome House" },
];

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}

/**
 * MakeCircularCarousel - A 3D circular carousel with mouse pan, inertia, and auto-rotation
 */
export default function MakeCircularCarousel({
    images = defaultImages,
    radius = 320,
    itemWidth = 260,
    itemHeight = 160,
    perspective = 1200,
    rotationSpeed = 0.18,
    shaderEffect = 'none',
    tiltAngle = -18,
    style = {},
    className = '',
}) {
    // Ensure we have valid images
    const validImages = images && Array.isArray(images) && images.length > 0
        ? images
        : defaultImages;

    const [rotation, setRotation] = useState(0);
    const dragging = useRef(false);
    const lastX = useRef(0);
    const velocity = useRef(0);
    const containerRef = useRef(null);

    // -------- POINTER DRAG SYSTEM --------
    const handlePointerDown = useCallback((e) => {
        dragging.current = true;
        lastX.current = e.clientX;
        if (e.target.setPointerCapture) {
            e.target.setPointerCapture(e.pointerId);
        }
    }, []);

    const handlePointerMove = useCallback((e) => {
        if (!dragging.current) return;
        const dx = e.clientX - lastX.current;
        lastX.current = e.clientX;
        velocity.current = dx * 0.5;
        setRotation(r => r + dx * 0.5);
    }, []);

    const handlePointerUp = useCallback(() => {
        dragging.current = false;
    }, []);

    // -------- INERTIA + AUTO ROTATE LOOP --------
    useEffect(() => {
        let rafId;

        function animate() {
            // Apply inertia when not dragging
            if (!dragging.current) {
                if (Math.abs(velocity.current) > 0.01) {
                    setRotation(r => r + velocity.current);
                    velocity.current *= 0.94;
                } else {
                    // Auto-rotate when inertia is done
                    setRotation(r => r + rotationSpeed);
                }
            }
            rafId = requestAnimationFrame(animate);
        }

        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [rotationSpeed]);

    // Calculate 3D transform for each item
    const N = validImages.length;
    const angleStep = 360 / N;

    // Shader effect styles
    const getShaderStyle = () => {
        switch (shaderEffect) {
            case 'blur':
                return { filter: 'blur(2px) brightness(1.1)' };
            case 'contrast':
                return { filter: 'contrast(1.3) saturate(1.2)' };
            default:
                return {};
        }
    };

    const shaderStyle = getShaderStyle();

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                ...style,
                width: '100%',
                height: '100%',
                perspective: `${perspective}px`,
                overflow: 'visible',
                position: 'relative',
                cursor: dragging.current ? 'grabbing' : 'grab',
                userSelect: 'none',
                touchAction: 'none',
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    transform: `rotateY(${rotation}deg)`,
                }}
            >
                {validImages.map((img, i) => {
                    const src = typeof img.src === 'object' ? img.src.src : img.src;
                    const alt = img.alt || '';

                    return (
                        <div
                            key={i}
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                width: itemWidth,
                                height: itemHeight,
                                marginLeft: -itemWidth / 2,
                                marginTop: -itemHeight / 2,
                                borderRadius: 18,
                                overflow: 'hidden',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transform: `rotateY(${angleStep * i}deg) translateZ(${radius}px) rotateX(${tiltAngle}deg)`,
                                ...shaderStyle,
                            }}
                        >
                            <img
                                src={src}
                                alt={alt}
                                draggable={false}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    pointerEvents: 'none',
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
