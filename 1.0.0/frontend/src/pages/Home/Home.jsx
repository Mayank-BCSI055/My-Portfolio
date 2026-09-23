import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Projects from "../../components/projects/Projects";
import Education from "../../components/education/Education";
import Certifications from "../../components/certifications/Certifications";
import Services from "../../components/services/Services";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";


function Home() {

    return (

        <>

            <Hero />

            <About />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Skills />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Experience />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Projects />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Education />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Certifications />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Services />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Resume />
            <hr className="section-divider" style={{ margin: "0 auto" }} />

            <Contact />

        </>

    );

}

export default Home;
