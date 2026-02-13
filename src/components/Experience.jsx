import { useEffect, useRef } from "react";
import { animateAlternatingSlide } from "../animations/gsapAnimations";

const experiences = [
    {
        year: "NOV 2025 - Present",
        title: "Junior Full Stack (MERN) Developer",
        company: "DotClick LLC",
        description: `Worked as a Junior MERN Stack Developer,
contributing to multiple platforms including a CRM
system, multi-dialer platform, CAMTS platform for
surveyor management, BeatSpace e-commerce &
music website, and kiosk-based web applications.
Focused on developing scalable features, responsive
user interfaces, and efficient backend APIs`,
    },
    {
        year: "NOV 2024 - NOV 2025",
        title: "MERN STACK DEVELOPER",
        company: "Halcyon Solutions",
        description: `Worked as a MERN Stack Developer, contributing to
multiple projects including CRM systems with Finance
& HR modules, e-commerce platforms, real-time chat
applications, and SaaS-based solutions. Focused on
building scalable, responsive, and performance-driven web applications using modern technologies.`,
    },
    {
        year: "DEC 2023 - NOV 2024",
        title: "MERN Stack Intern",
        company: "NUBIT SOFTWARE (PVT) LTD",
        description: `Completed MERN Stack internship and worked on real
world projects including E-commerce platforms, School
Management System, and web-based applications.
Gained hands-on experience in React, Node.js, MongoDB,
and REST APIs while collaborating with the development
team`,
    }
];

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateAlternatingSlide(sectionRef, ".experience-card");
    }, []);

    return (
        <section id="experience" className="py-16 bg-[#050505] text-white px-6">
            <div ref={sectionRef} className="container mx-auto">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-blue-500 font-mono text-lg mb-2 tracking-wider uppercase">My Journey</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-poppins">Work <span className="text-blue-400">Experience</span></h3>
                </div>

                <div className="relative">
                    {/* Vertical Line - Hidden on Mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-transparent hidden md:block opacity-20"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isOdd = (index + 1) % 2 !== 0; // 1st, 3rd = Left
                            return (
                                <div key={index} className={`flex flex-col md:flex-row items-center w-full experience-card overflow-visible`}>

                                    {/* Timeline Side (Cards) */}
                                    <div className={`w-full md:w-1/2 flex ${isOdd ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:order-last"}`}>
                                        <div className={`w-full max-w-lg p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative group hover:border-blue-500/30 transition-all duration-300 ${isOdd ? "text-right" : "text-left"}`}>

                                            <div className={`mb-3 inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20`}>
                                                {exp.year}
                                            </div>

                                            <h4 className="text-2xl font-bold font-poppins mb-1 text-white group-hover:text-blue-400 transition-colors duration-300">
                                                {exp.title}
                                            </h4>

                                            <div className="text-purple-400 font-medium mb-4 text-sm uppercase tracking-wider">{exp.company}</div>

                                            <p className="text-gray-400 font-inter leading-relaxed text-base">
                                                {exp.description}
                                            </p>

                                            {/* Decorative Node on the line */}
                                            <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.6)] hidden md:block z-10 ${isOdd ? "-right-[10px] translate-x-1/2" : "-left-[10px] -translate-x-1/2"}`}>
                                                <div className="absolute inset-1 rounded-full bg-blue-500 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Spacer column */}
                                    <div className="hidden md:block w-1/2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
