import { useEffect, useRef } from "react";
import { animateStaggeredFadeUp, animateTextReveal } from "../animations/gsapAnimations";
import {
    FiLayout, FiCode, FiCloud, FiShoppingCart,
    FiDatabase, FiShield, FiBarChart, FiTool
} from "react-icons/fi";

const services = [
    {
        title: "Responsive Web Development",
        description: "Building ultra-fast, mobile-first websites that look stunning on all devices from 4K monitors to smartphones.",
        icon: <FiLayout className="text-blue-400" />
    },
    {
        title: "Full Stack Web Applications",
        description: "End-to-end development of dynamic web apps using the MERN stack with scalable architecture.",
        icon: <FiCode className="text-purple-400" />
    },
    {
        title: "SaaS Application Development",
        description: "Designing and engineering complex Software-as-a-Service platforms with multi-tenancy and subscription models.",
        icon: <FiCloud className="text-cyan-400" />
    },
    {
        title: "E-commerce Solutions",
        description: "Creating high-converting online stores with secure payment gateways (Stripe/PayPal) and inventory management.",
        icon: <FiShoppingCart className="text-pink-400" />
    },
    {
        title: "API Development & Integration",
        description: "Developing robust RESTful APIs and integrating third-party services like Google Maps, Twilio, and Stripe.",
        icon: <FiDatabase className="text-orange-400" />
    },
    {
        title: "Authentication & Security Systems",
        description: "Implementing high-level security protocols, JWT authentication, and role-based access control (RBAC).",
        icon: <FiShield className="text-green-400" />
    },
    {
        title: "Custom Dashboard & Admin Panels",
        description: "Advanced data visualization and management systems tailored to your business needs.",
        icon: <FiBarChart className="text-indigo-400" />
    },
    {
        title: "Bug Fixing & Maintenance",
        description: "Optimizing existing codebases, resolving pesky bugs, and providing long-term maintenance support.",
        icon: <FiTool className="text-yellow-400" />
    }
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef, ".service-card");
        animateTextReveal(sectionRef);
    }, []);

    return (
        <section id="services" className="py-16 bg-[#050505] text-white px-6 relative overflow-hidden">

            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div ref={sectionRef} className="container mx-auto relative z-10">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-blue-500 font-bold text-xl md:text-3xl mb-4 tracking-[0.2em] uppercase">What I Offer</h2>
                    <h3 className="text-4xl md:text-6xl font-bold font-poppins">Premium <span className="text-blue-400">Services</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 cursor-default shadow-xl overflow-hidden"
                        >
                            {/* Decorative Icon Glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="text-5xl mb-6 p-4 rounded-2xl bg-black/40 border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    {service.icon}
                                </div>

                                <h4 className="text-xl font-bold font-poppins mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {service.title}
                                </h4>

                                <p className="text-gray-400 text-sm leading-relaxed font-inter">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Bottom Border Gradient */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
