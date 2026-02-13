import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { animateOnScroll, animateTextReveal } from "../animations/gsapAnimations";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiPhone, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        animateOnScroll(sectionRef);
        animateTextReveal(sectionRef);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // IMPORTANT: Replace these with your own EmailJS IDs from dashboard
        // Service ID, Template ID, and Public Key (User ID)
        const SERVICE_ID = "service_fcu4fyl"; // Placeholder - User needs to replace
        const TEMPLATE_ID = "template_3jnwzak"; // Placeholder - User needs to replace
        const PUBLIC_KEY = "VHfSK5JDvYkaRFx6z"; // Placeholder - User needs to replace

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus("success");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="py-16 bg-[#050505] text-white px-6 relative overflow-hidden">

            {/* 3D Light Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

            <div ref={sectionRef} className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left Side: Info & Socials */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-blue-500 font-mono text-lg mb-4 tracking-wider uppercase">Get In Touch</h2>
                        <h3 className="text-4xl md:text-6xl font-bold font-poppins mb-8 leading-tight">
                            Let's Build Something <br />
                            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Great Together</span>
                        </h3>

                        <p className="text-gray-400 text-xl mb-12 max-w-md leading-relaxed font-inter">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-8">
                            {/* Email Link */}
                            <a href="mailto:aleemnaqsh07@gmail.com" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-500 group-hover:rotate-6">
                                    <FiMail className="text-2xl text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email Me</div>
                                    <div className="text-xl font-semibold group-hover:text-blue-400 transition-colors">aleemnaqsh07@gmail.com</div>
                                </div>
                            </a>

                            {/* Phone Link */}
                            <a href="tel:03365233067" className="flex items-center gap-6 group text-left">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500 transition-all duration-500 group-hover:-rotate-6">
                                    <FiPhone className="text-2xl text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Call Me</div>
                                    <div className="text-xl font-semibold group-hover:text-purple-400 transition-colors">0336 5233067</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Form with EmailJS Integration */}
                    <div className="w-full lg:w-1/2">
                        <form
                            ref={formRef}
                            onSubmit={sendEmail}
                            className="space-y-8 p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
                        >
                            {/* Inner Radiant Light */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-700 text-white font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        required
                                        placeholder="aleem@example.com"
                                        className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-700 text-white font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full p-6 rounded-2xl bg-black/40 border border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-700 text-white font-medium resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 font-black flex items-center justify-center gap-4 transition-all duration-300 shadow-xl shadow-blue-500/20 group active:scale-95 uppercase tracking-[0.2em] text-sm disabled:opacity-50"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                <FiSend className="text-xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </button>

                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 p-4 rounded-xl animate-pulse">
                                    <FiCheckCircle className="text-xl" />
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="text-red-400 font-bold bg-red-400/10 p-4 rounded-xl">
                                    Oops! Something went wrong. Please check your console or EmailJS configuration.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
