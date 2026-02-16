import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import barber from "../assets/projects/barber.png";
import camts from "../assets/projects/camts.png";
import dialer from "../assets/projects/dialer.png";
import kiosk from "../assets/projects/kiosk.png";

const projects = [
    {
        title: "CAMTS Surveyor Management",
        desc: "Streamlines surveyor tasks with field data collection, assignment tracking, and reporting.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Cloudinary"],
        image: camts,
        link: "https://camts-fe.vercel.app",
        github: "#"
    },
    {
        title: "VIP Barber Shop Admin",
        desc: "Administrative panel for barber marketplace handling bookings, profiles, and financial oversight.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth"],
        image: barber,
        link: "https://vib-barber-fe-two.vercel.app",
        github: "#"
    },
    {
        title: "CallScout Multi-Dialer",
        desc: "Lead management and automated dialing platform with specialized CRM dashboards.",
        tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Twilio", "JWT Auth", "Cloudinary"],
        image: dialer,
        link: "https://multi-dialer-fe.vercel.app",
        github: "#"
    },
    {
        title: "KIOSK AI Fashion",
        desc: "AI-powered apparel design platform for instant artwork generation and customization.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Cloudinary"],
        image: kiosk,
        link: "https://kiosk-ai.vercel.app",
        github: "#"
    }
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-10 bg-[#030014] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div className="mb-12 border-b border-white/5 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <h4 className="text-purple-400 font-bold uppercase tracking-[0.2em] text-sm mb-2 drop-shadow-md">Selected Work</h4>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            Feature <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Projects</span>
                        </h2>
                    </div>
                </div>

                {/* Vertical Showcase Layout */}
                <div className="space-y-32">
                    {projects.map((project, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 group ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image - 60% Width */}
                            <div className="w-full lg:w-7/12 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(147,51,234,0.15)] transition-all duration-500 bg-[#0a0a0a]">
                                {/* No fixed aspect ratio to allow full height image */}
                                <div className="relative w-full h-auto">
                                    <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain transform scale-100 group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Floating Link Buttons */}
                                    <div className="absolute bottom-6 left-6 z-20 flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <a href={project.link} target="_blank" className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-400 hover:text-white transition-colors">
                                            <FiExternalLink /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content - 40% Width */}
                            <div className="w-full lg:w-5/12 space-y-6">
                                <span className="text-6xl font-display font-bold text-white/5 opacity-50 block -mb-4">0{idx + 1}</span>

                                <div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-white/5 text-gray-300 text-sm font-mono rounded-full border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
