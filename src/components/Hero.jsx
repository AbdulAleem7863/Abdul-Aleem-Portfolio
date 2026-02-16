import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";

const Hero = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    return (
        <section ref={sectionRef} id="home" className="min-h-screen relative flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[#030014]">

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-32">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                        Available for Freelance
                    </span>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight mb-8 drop-shadow-xl">
                        Building <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Digital</span> <br />
                        Reality.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-xl mb-12">
                        I engineer high-performance web applications with a focus on MERN stack architecture and dark-mode minimalist interfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-4 bg-purple-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300 flex items-center justify-center gap-3">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative w-full aspect-square max-w-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-indigo-600/40 rounded-[40px] rotate-6 blur-2xl"></div>
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden border-2 border-white/10 bg-[#0a0a0a] rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group shadow-2xl shadow-purple-900/40">
                        <img
                            src="/profile.jpg"
                            alt="Aleem Profile"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
