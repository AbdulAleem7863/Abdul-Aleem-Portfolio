import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Lock body scroll when menu is open
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen
                    ? "bg-[#050505]/90 border-b border-white/5 py-4"
                    : "bg-transparent py-6"
                    } backdrop-blur-xl`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home" className="group flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 shadow-lg shadow-blue-500/20">
                            MA
                        </div>
                        <span className="text-xl font-bold font-poppins tracking-tighter text-white">
                            Aleem<span className="text-blue-500">.</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/20"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl text-white focus:outline-none z-[110]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <HiX className="text-blue-400" /> : <HiMenuAlt3 />}
                    </button>
                </div>
            </nav>

            {/* Full-Screen Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 w-full h-screen bg-[#050505] z-[90] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-full"
                    }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-4xl font-black font-poppins text-white hover:text-blue-500 transition-all duration-300 uppercase tracking-tighter ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className={`mt-6 px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-[0.2em] text-sm shadow-2xl transition-all duration-500 ${isMenuOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
                            }`}
                        style={{ transitionDelay: "300ms" }}
                    >
                        Hire Me
                    </a>
                </div>

                {/* Decorative background element for mobile menu */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
            </div>
        </>
    );
};

export default Navbar;
