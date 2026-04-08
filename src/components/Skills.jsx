import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";

const skillCategories = [
    {
        title: "Frontend",
        icon: <FiCode className="text-2xl text-purple-400" />,
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Redux","Redux Toolkit","Ant Design","Hero UI","shadcn/ui"]
    },
    {
        title: "Backend",
        icon: <FiServer className="text-2xl text-blue-400" />,
        skills: ["Node.js", "Express", "REST APIs", "Socket.io", "JWT", "Multer", "Cloudinary", "Twilio","BetterAuth"]
    },
    {
        title: "Database",
        icon: <FiDatabase className="text-2xl text-emerald-400" />,
        skills: ["MongoDB", "Mongoose", "PostgreSQL", "MySQL", "Prisma", "Redis"]
    },
    {
        title: "DevOps",
        icon: <FiTool className="text-2xl text-orange-400" />,
        skills: ["Git", "GitHub", "Vercel", "Railway", "Postman", "VS Code", "NPM", "Yarn","Cursor AI","Antigravity"]
    }
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-5 bg-[#030014] relative overflow-hidden border-t border-white/5">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                        Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">Stack</span>
                    </h2>
                </div>

                {/* Small Boxes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.1)] transition-all duration-500 hover:-translate-y-1">
                            
                            {/* Category Title & Icon */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-purple-500/10 transition-colors duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white tracking-wide">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Small Skill Tags - Match "About" component style */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1.5 rounded-lg text-[11px] font-bold bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default shadow-sm tracking-tight capitalize">
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
