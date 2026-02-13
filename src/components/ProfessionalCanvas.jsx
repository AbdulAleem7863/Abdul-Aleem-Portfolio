import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ProfessionalCanvas = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Disabled antialias for performance (Lightweight)
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: false
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Capped pixel ratio

        const group = new THREE.Group();
        scene.add(group);

        const material = new THREE.MeshBasicMaterial({
            color: 0x4f46e5,
            wireframe: true,
            transparent: true,
            opacity: 0.05, // More subtle
        });

        const shapes = [];
        // Reduced number of shapes for lightweight performance
        for (let i = 0; i < 6; i++) {
            const size = Math.random() * 2 + 1;
            const geom = Math.random() > 0.5
                ? new THREE.IcosahedronGeometry(size, 0) // Low poly
                : new THREE.TorusGeometry(size, size / 4, 8, 16); // Low poly

            const shape = new THREE.Mesh(geom, material);
            shape.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20 - 15
            );
            group.add(shape);

            shapes.push({
                mesh: shape,
                rotX: (Math.random() - 0.5) * 0.003,
                rotY: (Math.random() - 0.5) * 0.003,
            });
        }

        camera.position.z = 10;

        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
        };

        // Only add listener if not mobile (Performance)
        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        let isVisible = true;
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        });
        observer.observe(canvasRef.current);

        const animate = () => {
            if (isVisible) {
                group.rotation.y += (mouseX - group.rotation.y) * 0.02;
                group.rotation.x += (mouseY - group.rotation.x) * 0.02;

                shapes.forEach(s => {
                    s.mesh.rotation.x += s.rotX;
                    s.mesh.rotation.y += s.rotY;
                });

                renderer.render(scene, camera);
            }
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
            renderer.dispose();
            scene.clear();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none opacity-40"
        />
    );
};

export default ProfessionalCanvas;
