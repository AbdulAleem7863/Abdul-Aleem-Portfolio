import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";

const Home = () => {
    return (
        <main className="relative bg-[#050505] min-h-screen font-sans selection:bg-[#3B82F6] selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Services />
            <Skills />
            <Projects />
            <Contact />
            <BackToTop />
        </main>
    );
};

export default Home;
