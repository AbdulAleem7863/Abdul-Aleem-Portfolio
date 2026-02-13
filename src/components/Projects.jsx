import { useEffect, useRef } from "react";
import { animateAlternatingSlide, animateTextReveal } from "../animations/gsapAnimations";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import camts from "../assets/projects/camts.png"
import barber from "../assets/projects/barber.png"
import dialer from "../assets/projects/dialer.png"
import kiosk from "../assets/projects/kiosk.png"
import crm from "../assets/projects/crm.png"

const projects = [
    {
        title: "CAMTS Surveyor Management",
        description: "CAMTS Surveyor Management streamlines surveyor tasks with features like field data collection, task assignment, progress tracking, and reporting, making surveying operations organized and efficient.",
        techStack: ["React", "Node.js", "MongoDB", "Vercel", "Mongoose"],
        image: camts,
        live: "https://camts-fe.vercel.app"
    },
    {
        title: "VIP Barber Shop",
        description: "This project is a comprehensive administrative management panel for a barber marketplace designed to handle shop registrations, barber profiles, and appointment bookings. It facilitates core business operations including financial oversight, subscription tier management, commission tracking, and customer support coordination.",
        techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
        image: barber,
        live: "https://vib-barber-fe-two.vercel.app/"
    },
    {
        title: "CallScout - Multi Dialer",
        description: "This project is a Multi-role Lead Management and Automated Dialing Platform built using React.js and Vite. It provides specialized CRM dashboards for Agents, Admins, and Super Admins to manage contacts, track analytics, and configure telecommunication workflows.",
        techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Twilio"],
        image: dialer,
        live: "https://multi-dialer-fe.vercel.app/"
    },
    {
        title: "KIOSK AI",
        description: "This project is an AI-powered kiosk platform for instant apparel design and customization, allowing users to generate unique artwork using voice, text, or photo prompts. It features a touch-optimized interface that integrates AI generation, real-time mockup visualization, and secure payments for a complete Design, Print, and Wear experience.",
        techStack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose"],
        image: kiosk,
        live: "https://kiosk-ai.vercel.app/"
    },
    {
        title: "Flowlio CRM",
        description: "Flowlio is a comprehensive SaaS project management and business operations platform built with React, TypeScript, and Vite. It features task tracking, time management, AI-powered assistance, financial tools like invoicing and subscriptions, and detailed insights for teams and administrators.",
        techStack: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
        image: crm,
        live: "https://flowlio-fe.vercel.app/"
    },
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateAlternatingSlide(sectionRef, ".project-card");
        animateTextReveal(sectionRef);
    }, []);

    return (
        <section id="projects" className="py-20 bg-[#050505] text-white px-6 relative overflow-hidden">

            {/* Dynamic Light Rays */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div ref={sectionRef} className="container mx-auto max-w-7xl">

                {/* Section Title */}
                <div className="text-center mb-16 overflow-hidden">
                    <h2 className="text-blue-500 font-bold text-sm md:text-base mb-3 tracking-[0.3em] uppercase font-outfit">Portfolio</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-space">Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span></h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="project-card group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 shadow-xl hover:shadow-blue-500/10"
                        >
                            {/* Project Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`Preview of ${project.title} project`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>

                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.techStack.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-2 py-0.5 text-[8px] font-bold uppercase bg-blue-500/20 backdrop-blur-md text-blue-300 border border-blue-500/20 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h4 className="text-xl font-bold font-space mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h4>

                                <p className="text-gray-400 font-outfit text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Action Bar */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-white hover:text-blue-400 transition-all uppercase tracking-widest"
                                    >
                                        Live Demo <FiExternalLink className="text-sm" />
                                    </a>

                                    
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

