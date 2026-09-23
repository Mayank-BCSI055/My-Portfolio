import { useEffect, useRef } from "react";
import "./About.css";

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add class when scrolling into view
                    entry.target.classList.add("reveal-visible");
                } else {
                    // Remove class when scrolling out of view to trigger animation again next time
                    entry.target.classList.remove("reveal-visible");
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.15, // Trigger when 15% is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="about"
            className="about"
            ref={sectionRef}
        >
            <div className="container">

                <header className="section-header">
                    <p className="section-label">
                        About Me
                    </p>

                    <h2>
                        Who I Am
                    </h2>

                    <p className="section-description">
                        A little about my journey, interests, and
                        what I am working towards as a developer.
                    </p>
                </header>


                <div className="about-content">

                    <div className="about-image">
                        <img
                            src="/src/assets/images/profile/about-profile.jpg"
                            alt="Mayank Baranwal"
                        />
                    </div>


                    <div className="about-text">

                        <h3>
                            Hello, I'm Mayank 👋
                        </h3>

                        <p>
                            I am a Python Developer with an interest
                            in backend development, APIs, databases,
                            and software engineering.
                        </p>

                        <p>
                            I enjoy creating practical applications
                            and exploring how different parts of a
                            software system work together. I like
                            understanding the logic behind a system
                            rather than simply making it work.
                        </p>

                        <p>
                            Currently, I am focused on improving my
                            Python and full-stack development skills
                            by building projects, learning modern
                            development practices, and working with
                            real-world technologies.
                        </p>

                        <p>
                            My goal is to become a skilled software
                            developer who can build reliable,
                            maintainable, and useful applications.
                        </p>

                        <div className="about-highlights">

                            <div className="about-highlight-wrapper">
                                <div className="about-highlight">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                    <div>
                                        <h4>Development</h4>
                                        <p>
                                            Python, Backend & APIs
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-highlight-wrapper">
                                <div className="about-highlight">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                    <div>
                                        <h4>Interests</h4>
                                        <p>
                                            Databases & Software Engineering
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-highlight-wrapper">
                                <div className="about-highlight">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                                    <div>
                                        <h4>Focus</h4>
                                        <p>
                                            Learning & Building Projects
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;