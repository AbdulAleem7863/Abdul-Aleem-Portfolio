import { useEffect, useRef } from "react";
import { animateStaggeredFadeUp, animateTextReveal } from "../animations/gsapAnimations";
import {
    SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma,
    SiMongodb, SiPostgresql, SiJsonwebtokens, SiHtml5, SiCss3,
    SiBootstrap, SiJavascript, SiTypescript, SiReactrouter,
    SiSendgrid, SiDotenv, SiCloudinary, SiMongoose, SiGit,
    SiGithub, SiVercel, SiRailway, SiPostman
} from "react-icons/si";
import { FiMail } from "react-icons/fi";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
            { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
            { name: "React.js", icon: <SiReact className="text-blue-400" /> },
            { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
            { name: "Nodemailer", icon: <FiMail className="text-blue-300" /> },
            { name: "SendGrid", icon: <SiSendgrid className="text-blue-400" /> },
            { name: "REST API", icon: <SiPostman className="text-orange-500" /> },
            { name: "dotenv", icon: <SiDotenv className="text-yellow-500" /> },
            { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500" /> },
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
            { name: "Prisma", icon: <SiPrisma className="text-white" /> },
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", icon: <SiGit className="text-orange-600" /> },
            { name: "GitHub", icon: <SiGithub className="text-white" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
            { name: "Railway", icon: <SiRailway className="text-purple-400" /> },
        ]
    }
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef, ".skill-card");
        animateTextReveal(sectionRef);
    }, []);

    return (
        <section id="skills" className="py-16 bg-[#050505] text-white px-6 relative overflow-hidden">

            {/* Ambient Animated Lights */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div ref={sectionRef} className="container mx-auto relative z-10">

                <div className="text-center mb-20 overflow-hidden">
                    <h2 className="text-blue-500 font-bold text-xl md:text-3xl mb-4 tracking-[0.2em] uppercase">My Skills</h2>
                    <h3 className="text-4xl md:text-6xl font-bold font-poppins">Software <span className="text-blue-400">Expertise</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-6">
                            <h4 className="text-xl font-semibold font-poppins text-gray-300 border-l-4 border-blue-500 pl-4">
                                {category.title}
                            </h4>

                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skill-card group relative p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 cursor-default shadow-lg perspective-1000"
                                    >
                                        <div className="flex flex-col items-center gap-3 transform transition-transform duration-500 group-hover:translate-z-10 group-hover:scale-110">
                                            <div className="text-4xl transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]">
                                                {skill.icon}
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors duration-300 text-center uppercase tracking-widest">
                                                {skill.name}
                                            </span>
                                        </div>

                                        {/* Hover Radiant Glow */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
                                    </div>
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
