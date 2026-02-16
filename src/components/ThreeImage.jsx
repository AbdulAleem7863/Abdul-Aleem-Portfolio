import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeImage = ({ src }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let frameId;
        let renderer, scene, camera, mesh, geometry;
        const container = containerRef.current;

        try {
            // Scene Setup
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

            try {
                renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            } catch (e) {
                console.error("WebGL not supported", e);
                return; // Graceful exit if WebGL fails
            }

            const width = container.offsetWidth || 300; // Fallback width
            const height = container.offsetHeight || 400; // Fallback height

            renderer.setSize(width, height);
            container.appendChild(renderer.domElement);

            // Geometry & Texture
            geometry = new THREE.PlaneGeometry(3, 3, 32, 32);
            const textureLoader = new THREE.TextureLoader();

            textureLoader.load(src, (texture) => {
                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        uTime: { value: 0 },
                        uTexture: { value: texture },
                        uHover: { value: new THREE.Vector2(0.5, 0.5) },
                        uHoverState: { value: 0.0 }
                    },
                    vertexShader: `
                        varying vec2 vUv;
                        uniform float uTime;
                        uniform float uHoverState;
                        
                        void main() {
                            vUv = uv;
                            vec3 pos = position;
                            float noise = sin(pos.x * 10.0 + uTime) * cos(pos.y * 10.0 + uTime) * 0.02;
                            pos.z += noise * uHoverState;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                        }
                    `,
                    fragmentShader: `
                        varying vec2 vUv;
                        uniform sampler2D uTexture;
                        uniform float uHoverState;

                        void main() {
                            vec2 uv = vUv;
                            vec4 textureColor = texture2D(uTexture, uv);
                            float gray = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));
                            vec3 finalColor = mix(vec3(gray), textureColor.rgb, uHoverState);
                            gl_FragColor = vec4(finalColor, 1.0);
                        }
                    `,
                    side: THREE.DoubleSide
                });

                mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);
            }, undefined, (err) => {
                console.error("Texture loading failed", err);
            });

            camera.position.z = 2;

            // Animation Loop
            const clock = new THREE.Clock();
            let targetHover = 0;

            const animate = () => {
                if (mesh) {
                    mesh.material.uniforms.uTime.value = clock.getElapsedTime();
                    mesh.material.uniforms.uHoverState.value += (targetHover - mesh.material.uniforms.uHoverState.value) * 0.05;
                }
                renderer.render(scene, camera);
                frameId = requestAnimationFrame(animate);
            };
            animate();

            // Hover Logic
            const handleMouseEnter = () => { targetHover = 1; };
            const handleMouseLeave = () => { targetHover = 0; };

            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);

            // Cleanup inside effect scope
            return () => {
                cancelAnimationFrame(frameId);
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                if (renderer && container.contains(renderer.domElement)) {
                    container.removeChild(renderer.domElement);
                    renderer.dispose();
                }
                if (geometry) geometry.dispose();
            };

        } catch (err) {
            console.error("ThreeImage initialization error", err);
        }

    }, [src]);

    return <div ref={containerRef} className="w-full h-full cursor-pointer" />;
};

export default ThreeImage;
