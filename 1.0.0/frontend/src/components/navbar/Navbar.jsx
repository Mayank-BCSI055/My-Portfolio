import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/mayank-baranwal-logo.png";

function Navbar() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("mobile-menu-open");
        } else {
            document.body.classList.remove("mobile-menu-open");
        }
        
        return () => document.body.classList.remove("mobile-menu-open");
    }, [isMenuOpen]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };
    return (
        <header className="navbar">
            <nav
                className="container navbar-container"
                aria-label="Main navigation"
            >
                <div className="navbar-logo">
                    <a href="#home" aria-label="Mayank Baranwal - Home">
                        <img
                            src={logo}
                            alt="Mayank Baranwal - Build • Learn • Grow"
                        />
                    </a>
                </div>

                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a className="navbar-link" href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                    </li>

                    <li>
                        <a className="navbar-link" href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    </li>

                    <li>
                        <a className="navbar-link" href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    </li>

                    <li>
                        <a className="navbar-link" href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    </li>

                    <li>
                        <a className="navbar-link" href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    </li>

                    <li>
                        <a className="navbar-link" href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
                    </li>

                    <li>
                        <a className="navbar-link" href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </li>
                </ul>

                <div className="navbar-actions">
                    <a
                        className="navbar-link"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>

                    <button
                        className="navbar-theme-toggle"
                        type="button"
                        aria-label="Toggle theme"
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    <button
                        className="navbar-toggle"
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;