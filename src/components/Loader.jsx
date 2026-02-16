import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
    const counterRef = useRef(null);
    const overlayRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 5) + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return next;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const tl = gsap.timeline();

            tl.to(counterRef.current, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                delay: 0.2
            })
                .to(overlayRef.current, {
                    height: 0,
                    duration: 1.5,
                    ease: "power4.inOut",
                    stagger: 0.1
                }, "-=0.5")
                .call(onComplete); // Ensure onComplete is called at end of timeline
        }
    }, [progress]); // Removed onComplete from dependencies to avoid re-triggering if function reference changes

    return (
        <div ref={overlayRef} className="fixed inset-0 z-[9999] bg-[#050505] flex items-end justify-between px-6 pb-6 md:px-12 md:pb-12 text-white overflow-hidden">
            <div className="flex flex-col">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Loading Experience</span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">© 2026</span>
            </div>

            <div ref={counterRef} className="text-[10vw] md:text-[8vw] font-bold leading-none tracking-tighter font-display">
                {progress}%
            </div>
        </div>
    );
};

export default Loader;
