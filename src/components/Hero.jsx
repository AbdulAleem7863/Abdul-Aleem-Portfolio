import { useEffect, useRef } from "react";
import { animateHeroContent, animateTextReveal } from "../animations/gsapAnimations";
import HeroBackground from "./HeroBackground";

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        animateHeroContent(heroRef);
        animateTextReveal(heroRef);
    }, []);

    return (
        <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-[#050505] text-white px-6 py-20 lg:py-0 overflow-hidden">
            <HeroBackground />

            {/* Animated Ambient Light */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-bounce" style={{ animationDuration: '8s' }}></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 perspective-1000">

                {/* Left Side: Profile Image */}
                <div className="w-full md:w-1/2 flex justify-center order-1 hero-image-wrap transition-transform duration-500 hover:scale-105">
                    <div className="relative group">
                        {/* 3D Radiant Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>

                        {/* Image Container */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 bg-gray-900 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                            <img
                                src="/profile.jpg"
                                alt="Muhammad Abdul Aleem"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left order-2">
                    <h2 className="text-blue-500 font-mono text-sm md:text-lg  tracking-wider hero-greeting">Hello, I'm</h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent hero-name leading-[1.1] filter drop-shadow-lg">
                        Muhammad Abdul Aleem
                    </h1>
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mb-6 hero-title tracking-tight">
                        Full Stack (MERN) Developer
                    </h3>
                    <p className="text-gray-400 text-base md:text-xl max-w-xl mb-10 leading-relaxed hero-tagline font-inter">
                        Building <span className="text-white font-medium border-b-2 border-blue-500/30">scalable web applications</span> with modern UI & strong backend architecture.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 font-montserrat">
                        <a href="#projects" className="hero-btn w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-bold transition-all duration-300 shadow-xl shadow-blue-900/40 uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-2">
                            View Projects
                        </a>

                        <a href="#contact" className="hero-btn w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center">
                            Contact Me
                        </a>

                        <a
                            href="/Muhammad_Abdul_Aleem_CV.pdf"
                            download
                            className="hero-btn w-full sm:w-auto px-8 md:px-10 py-3 md:py-4 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
