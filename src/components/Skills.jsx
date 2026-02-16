import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <FiCode className="text-3xl text-purple-400" />,
        skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Redux Toolkit"]
    },
    {
        title: "Backend Engineering",
        icon: <FiServer className="text-3xl text-blue-400" />,
        skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth", "Multer", "Cloudinary", "Twilio"]
    },
    {
        title: "Database Management",
        icon: <FiDatabase className="text-3xl text-emerald-400" />,
        skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Prisma ORM", "Redis"]
    },
    {
        title: "DevOps & Tools",
        icon: <FiTool className="text-3xl text-orange-400" />,
        skills: ["Git & GitHub", "Vercel", "Railway", "Postman", "VS Code", "NPM/Yarn"]
    }
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-10 bg-[#030014] relative border-y border-white/5">

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-2 drop-shadow-md">Technical Arsenal</h2>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Stack</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.1)] hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm">

                            {/* Accent Gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/50 to-transparent group-hover:from-purple-500 transition-all duration-500"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-purple-500/20 transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-4 py-2 rounded-xl text-sm font-medium bg-white/5 text-gray-300 border border-white/5 group-hover:border-purple-500/20 group-hover:text-white group-hover:bg-purple-500/10 transition-all duration-300 cursor-default hover:scale-105">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
