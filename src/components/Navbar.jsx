import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] z-[999] transition-all duration-300 rounded-full px-6 py-3 flex justify-between items-center ${scrolled ? "bg-[#030014]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.15)]" : "bg-transparent border-transparent py-4 text-white"}`}>

            {/* Logo */}
            <a href="#home" className="text-xl font-bold font-display tracking-tight text-white group drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                ALEEM<span className="text-purple-400 group-hover:text-white transition-colors">.DEV</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors font-sans uppercase tracking-widest hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="px-6 py-2.5 bg-purple-600/20 text-purple-300 text-sm font-bold rounded-full border border-purple-500/50 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 backdrop-blur-md"
                >
                    Let's Talk
                </a>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 top-0 left-0 w-full h-screen bg-[#030014] z-[-1] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>
                {navLinks.map((link, idx) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold font-display text-white hover:text-purple-400 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
