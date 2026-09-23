import { useState, useEffect, useRef } from "react";
import { SiPython, SiReact, SiDjango, SiPostgresql } from "react-icons/si";
import { FaChartBar, FaBrain } from "react-icons/fa";
import "./Hero.css";

function Hero() {
    const roles = ["Python Developer", "Backend Developer", "Full Stack Developer", "AI Enthusiast"];
    const [currentRole, setCurrentRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const scrollY = window.scrollY;
                const maxScroll = 400; // Pixel scroll amount where it becomes completely transparent
                const opacity = Math.max(0, 1 - scrollY / maxScroll);
                // Also add a slight parallax effect moving the text up
                const translateY = scrollY * 0.4;

                contentRef.current.style.opacity = opacity;
                contentRef.current.style.transform = `translateY(${translateY}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            handleType();
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentRole, isDeleting]);

    const handleType = () => {
        const i = loopNum % roles.length;
        const fullText = roles[i];

        if (isDeleting) {
            setCurrentRole(fullText.substring(0, currentRole.length - 1));
            setTypingSpeed(50);
        } else {
            setCurrentRole(fullText.substring(0, currentRole.length + 1));
            setTypingSpeed(150);
        }

        if (!isDeleting && currentRole === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentRole === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(500);
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content" ref={contentRef}>
                    <p className="hero-subtitle">
                        Hi, I'm
                    </p>

                    <h1 className="hero-title">
                        Mayank Baranwal
                    </h1>

                    <h2 className="hero-role">
                        {currentRole}<span className="cursor">|</span>
                    </h2>

                    <p className="hero-description">
                        Building scalable web applications,
                        exploring AI, and turning ideas
                        into real-world solutions.
                    </p>

                    <div className="hero-tech-stack">
                        <div className="tech-item">
                            <SiPython className="tech-icon python" />
                            <span>Python</span>
                        </div>
                        <div className="tech-item">
                            <SiReact className="tech-icon react" />
                            <span>ReactJS</span>
                        </div>
                        <div className="tech-item">
                            <SiDjango className="tech-icon django" />
                            <span>Django</span>
                        </div>
                        <div className="tech-item">
                            <SiPostgresql className="tech-icon postgres" />
                            <span>PostgreSQL</span>
                        </div>
                        <div className="tech-item">
                            <FaChartBar className="tech-icon data" />
                            <span>Data Analytics</span>
                        </div>
                        <div className="tech-item">
                            <FaBrain className="tech-icon ai" />
                            <span>AI & Automation</span>
                        </div>
                    </div>

                    <p className="hero-quote">
                        “Consistent Learning, Meaningful Building.”
                    </p>
                </div>

                <div className="hero-image">
                    <img
                        src="/src/assets/images/profile/profile.jpg"
                        alt="Portrait of Mayank Baranwal"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
