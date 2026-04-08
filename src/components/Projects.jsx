import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import barber from "../assets/projects/barber.png";
import camts from "../assets/projects/camts.png";
import dialer from "../assets/projects/dialer.png";
import kiosk from "../assets/projects/kiosk.png";
import hgw from "../assets/projects/hgw.png";
import proactive from "../assets/projects/proactive.png";

const projects = [
    {
        title: "CAMTS Management",
        desc: "Surveyor tasks, field data collection, and assignment tracking.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Ant Design"],
        image: camts,
        link: "https://camts-fe.vercel.app",
        github: "#"
    },
     {
        title: "Proactive-Future",
        desc: "Travel Management Saas Platform",
        tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "shadcn/ui "],
        image: proactive,
        link: "https://proactive-fe.vercel.app",
        github: "#"
    },
    {
        title: "CallScout Dialer",
        desc: "Automated dialing and specialized CRM dashboards.",
        tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "shadcn/ui "],
        image: dialer,
        link: "https://multi-dialer-fe.vercel.app",
        github: "#"
    },
     {
        title: "VIB Barber Admin",
        desc: "Barber marketplace bookings and financial oversight.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "Ant Design"],
        image: barber,
        link: "https://vib-barber-fe-two.vercel.app",
        github: "#"
    },
    {
        title: "How Good Was",
        desc: "Players Skill Competition , Podcast , Articles Saas Platform",
        tech: ["Next.js", "Herou Ui", "Typescript"],
        image: hgw,
        link: "https://hgw-fe.vercel.app",
        github: "#"
    },
    {
        title: "KIOSK AI Fashion",
        desc: "AI-powered apparel design and customization.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
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
        <section id="projects" ref={sectionRef} className="py-16 bg-[#030014] relative overflow-hidden">

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Compact Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Projects</span>
                    </h2>
                    <div className="h-1 w-12 bg-purple-500/50 mt-4 rounded-full"></div>
                </div>

                {/* Triple Column Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-purple-900/10">

                            {/* Smaller Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 to-transparent"></div>

                                <div className="absolute bottom-3 right-3 flex gap-2">
                                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-purple-600/90 text-white rounded-lg hover:bg-purple-500 transition-colors shadow-lg">
                                        <FiExternalLink size={16} />
                                    </a>
                                    {project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors border border-white/10">
                                            <FiGithub size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Tightened Content */}
                            <div className="p-5 flex flex-col grow">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                                    {project.desc}
                                </p>

                                {/* Mini Tech Tags */}
                                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
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
