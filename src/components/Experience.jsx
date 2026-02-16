import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";

const experiences = [
    {
        year: "Nov 2025 - Present",
        title: "Junior MERN Stack Developer",
        company: "DotClick LLC",
        desc: "Worked as a Junior MERN Stack Developer, contributing to multiple platforms including a CRM system, multi-dialer platform, CAMTS platform for surveyor management, BeatSpace e-commerce & music website, and kiosk-based web applications. Focused on developing scalable features, responsive user interfaces, and efficient backend APIs.",
        color: "from-purple-500 to-indigo-500",
        border: "group-hover:border-purple-500/50"
    },
    {
        year: "Nov 2024 - Oct 2025",
        title: "MERN Stack Developer",
        company: "Halcyon Solutions",
        desc: "Worked as a MERN Stack Developer, contributing to multiple projects including CRM systems with Finance & HR modules, e-commerce platforms, real-time chat applications, and SaaS-based solutions. Focused on building scalable, responsive, and performance driven web applications using modern technologies.",
        color: "from-blue-500 to-cyan-500",
        border: "group-hover:border-blue-500/50"
    },
    {
        year: "Dec 2023 - Nov 2024",
        title: "MERN Stack Intern",
        company: "NUBIT SOFTWARE",
        desc: "Completed MERN Stack internship and worked on real world projects including E-commerce platforms, School Management System, and web-based applications. Gained hands-on experience in React, Node.js, MongoDB, and REST APIs while collaborating with the development team.",
        color: "from-emerald-500 to-teal-500",
        border: "group-hover:border-emerald-500/50"
    }
];

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-20 bg-[#030014] relative text-white overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-2 drop-shadow-md">Professional Journey</h2>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight drop-shadow-2xl">
                            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Timeline</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-sm">

                            {/* Top Gradient Border */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-5xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500">
                                        0{index + 1}
                                    </span>
                                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:bg-white/10 transition-colors ${exp.border}`}>
                                        {exp.year}
                                    </span>
                                </div>

                                {/* Title & Company */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                        {exp.title}
                                    </h3>
                                    <h4 className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${exp.color} bg-clip-text text-transparent w-fit`}>
                                        {exp.company}
                                    </h4>
                                </div>

                                {/* Divider */}
                                <div className="w-12 h-[1px] bg-white/10 mb-6 group-hover:w-full transition-all duration-700"></div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed font-light mb-4 flex-grow">
                                    {exp.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
