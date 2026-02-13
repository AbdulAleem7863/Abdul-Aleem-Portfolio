import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import ProfessionalCanvas from "../components/ProfessionalCanvas";

const Home = () => {
    return (
        <main className="relative">
            <ProfessionalCanvas />
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <BackToTop />
        </main>
    );
};

export default Home;
