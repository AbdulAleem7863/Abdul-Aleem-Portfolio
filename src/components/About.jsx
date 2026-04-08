import { useEffect, useRef } from "react";
import { animateOnScroll, animateTextReveal } from "../animations/gsapAnimations";

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        animateOnScroll(aboutRef);
        animateTextReveal(aboutRef);
    }, []);

    return (
        <section id="about" className="py-16 bg-[#050505] text-white px-6 overflow-hidden relative">

            {/* Background 3D Light Effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div  >
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Profile Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative group max-w-sm w-full perspective-1000">
                            {/* Animated 3D Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>

                            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-105 shadow-2xl">
                                <img
                                    src="/aleem2.png"
                                    alt="Muhammad Abdul Aleem"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-[50%_20%] hover:object-[50%_50%] transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                            </div>

                            {/* Floating experience card with 3D shadow */}
                            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl shadow-[20px_20px_50px_rgba(0,0,0,0.5)] hidden md:block transform transition-transform group-hover:-translate-y-2">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2.5+</div>
                                <div className="text-sm text-gray-400 font-medium">Years of Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text Block */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-blue-500 font-bold text-xl md:text-3xl mb-4 tracking-[0.2em] uppercase">About Me</h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-poppins text-white leading-tight">
                            Transforming Ideas Into <br className="hidden sm:block" />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Digital Reality
                            </span>
                        </h3>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-inter">
                            <p>
                                I am <span className="text-white font-semibold">Muhammad Abdul Aleem</span>,
                                a dedicated Full Stack Developer specializing in the <span className="text-blue-400 underline decoration-blue-500/30">MERN stack</span>. My journey in tech is driven by a passion for solving complex problems and building high-performance web applications.
                            </p>
                            <p>
                                With a focus on <span className="text-white font-medium">scalability</span> and
                                <span className="text-purple-400"> user-centric design</span>, I bridge the gap between robust backend architecture and seamless frontend experiences.
                            </p>
                        </div>

                        {/* Tech Tags with Individual Hover Effects */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {["React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript", "Next.js"].map((tech) => (
                                <span key={tech} className="px-5 py-2 rounded-lg text-xs font-bold bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-default shadow-sm hover:shadow-blue-500/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
