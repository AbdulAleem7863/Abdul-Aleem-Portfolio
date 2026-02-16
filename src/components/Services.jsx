import { useRef, useEffect } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";
import { FiLayout, FiCode, FiCloud, FiShoppingCart, FiDatabase, FiShield, FiActivity, FiLayers } from "react-icons/fi";

const services = [
    { title: "Full Stack Web Apps", desc: "End-to-end applications built with React, Node.js, and MongoDB.", icon: <FiLayers /> },
    { title: "SaaS Platform Dev", desc: "Scalable multi-tenant architectures with subscription management.", icon: <FiActivity /> },
    { title: "Responsive Design", desc: "Pixel-perfect layouts optimized for mobile, tablet, and desktop.", icon: <FiLayout /> },
    { title: "Database Architecture", desc: "Efficient schema design and query optimization for high-scale data.", icon: <FiDatabase /> },
    { title: "API Development", desc: "Secure, documented, and scalable RESTful API integrations.", icon: <FiCloud /> },
    { title: "E-Commerce", desc: "Custom online stores with payment gateways and inventory management.", icon: <FiShoppingCart /> },
    { title: "Security Protocols", desc: "Implementation of JWT auth, data encryption, and role-based access.", icon: <FiShield /> },
    { title: "MERN Stack Solutions", desc: "Specialized development using the MongoDB, Express, React, Node stack.", icon: <FiCode /> },
];

const Services = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-12 bg-[#030014] relative text-white">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/5 pb-8">
                    <div>
                        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-2 drop-shadow-md">Technical Capabilities</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Services</span>
                        </h3>
                    </div>
                </div>

                {/* Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group relative p-6 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 rounded-xl overflow-hidden min-h-[180px] flex flex-col justify-between">

                            {/* Hover Corner Accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-bl-[50px] -translate-y-8 translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500"></div>

                            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-purple-400 text-lg group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 border border-white/5 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] mb-4">
                                {service.icon}
                            </div>

                            <div>
                                <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-tight">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
