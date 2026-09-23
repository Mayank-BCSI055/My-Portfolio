import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo-text">
                            Mayank Baranwal
                        </a>
                        <p className="footer-tagline">
                            Python Developer & Full-Stack Enthusiast
                        </p>
                    </div>

                    <nav className="footer-navigation" aria-label="Footer navigation">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <div className="footer-socials">
                        <a
                            className="social-link"
                            href="https://github.com/Mayank-6387992885"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            className="social-link"
                            href="https://linkedin.com/in/mayank-baranwal-6b72aa21a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            className="social-link"
                            href="mailto:mayank6387992885@gmail.com"
                            aria-label="Email"
                        >
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} Mayank Baranwal. All rights reserved. 
                        <span style={{ margin: '0 8px', opacity: 0.5 }}>|</span> 
                        Designed & Built with React & FastAPI.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
