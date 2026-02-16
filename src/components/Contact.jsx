import { useRef, useEffect, useState } from "react";
import { animateStaggeredFadeUp } from "../animations/gsapAnimations";
import { FiMail, FiPhone, FiSend, FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        animateStaggeredFadeUp(sectionRef);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // EmailJS Configuration
        const SERVICE_ID = "service_fcu4fyl";
        const TEMPLATE_ID = "template_3jnwzak";
        const PUBLIC_KEY = "VHfSK5JDvYkaRFx6z";

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            PUBLIC_KEY
        )
            .then((result) => {
                setStatus("success");
                e.target.reset();
                setTimeout(() => setStatus(""), 5000);
            }, (error) => {
                console.error("EmailJS Error:", error);
                setStatus("error");
            });
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-[#030014] relative overflow-hidden text-white">

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left: Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-8 drop-shadow-lg">
                            Let's Start <br className="hidden md:block" />
                            Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Legendary</span>.
                        </h2>

                        <p className="text-lg text-gray-400 max-w-md mb-12">
                            Have a project in mind, a question, or just want to chat?
                            I'm available for freelance work and full-time opportunities.
                        </p>

                        <div className="space-y-6 text-gray-300 font-medium">
                            <a href="mailto:aleemnaqsh07@gmail.com" className="flex items-center gap-4 group p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner border border-white/5">
                                    <FiMail className="text-xl" />
                                </div>
                                <span className="text-lg group-hover:text-white transition-colors">aleemnaqsh07@gmail.com</span>
                            </a>

                            <a href="tel:03365233067" className="flex items-center gap-4 group p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner border border-white/5">
                                    <FiPhone className="text-xl" />
                                </div>
                                <span className="text-lg group-hover:text-white transition-colors">0336 5233067</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Modern Form */}
                    <form ref={formRef} onSubmit={sendEmail} className="p-8 md:p-12 bg-white/[0.02] backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl hover:border-purple-500/30 transition-all relative overflow-hidden group">

                        {/* Decorative Circle */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-bl-[100px] -z-10 blur-xl group-hover:bg-purple-600/20 transition-colors"></div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                                <input type="text" name="name" required className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all placeholder-gray-600" placeholder="John Doe" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all placeholder-gray-600" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                                <textarea name="message" required rows="4" className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-xl focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all resize-none placeholder-gray-600" placeholder="Tell me about your project..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:bg-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                                {!status && <FiSend />}
                            </button>

                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-400 font-bold bg-green-400/10 p-3 rounded-lg border border-green-400/20 text-sm">
                                    <FiCheckCircle /> Message sent successfully!
                                </div>
                            )}

                            {status === "error" && (
                                <div className="text-red-400 font-bold bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-sm">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-transparent">
                    <span className="text-gray-500 font-medium font-display tracking-tight text-lg">© 2026 ALEEM.DEV</span>
                </div>

            </div>
        </section>
    );
};

export default Contact;
