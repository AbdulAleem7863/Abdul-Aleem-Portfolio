import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground = () => {
    const containerRef = useRef();
    const rendererRef = useRef();
    const requestRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // Disabled antialiasing for performance
        rendererRef.current = renderer;

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Particles
        const isMobile = window.innerWidth < 768;
        const particlesCount = isMobile ? 500 : 1500; // Further reduced for performance
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        const color1 = new THREE.Color("#4f46e5"); // Indigo
        const color2 = new THREE.Color("#9333ea"); // Purple

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            const mixedColor = color1.clone().lerp(color2, Math.random());
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: isMobile ? 0.01 : 0.015,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);

        camera.position.z = 3;

        // Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth - 0.5) * 0.3;
            mouseY = (event.clientY / window.innerHeight - 0.5) * 0.3;
        };

        if (!isMobile) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        // Animation Loop control
        let isVisible = true;
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        }, { threshold: 0.1 });

        observer.observe(containerRef.current);

        const animate = () => {
            if (isVisible) {
                particlesMesh.rotation.y += 0.0008;
                particlesMesh.rotation.x += 0.0004;

                if (!isMobile) {
                    particlesMesh.rotation.y += (mouseX - (particlesMesh.rotation.y % (Math.PI * 2))) * 0.02;
                    particlesMesh.rotation.x += (mouseY - (particlesMesh.rotation.x % (Math.PI * 2))) * 0.02;
                }

                renderer.render(scene, camera);
            }
            requestRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Resize Handling
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (!isMobile) window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(requestRef.current);
            observer.disconnect();
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ filter: "blur(1px)" }}
            aria-hidden="true"
        />
    );
};

export default HeroBackground;
