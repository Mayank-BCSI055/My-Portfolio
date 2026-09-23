import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Certifications.css";

function Certifications() {
    const [ref, isVisible] = useScrollReveal(0.1);
    return (
        <section
            id="certifications"
            className={`certifications section-alternate-bg ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="container">

                <header className="section-header">

                    <p className="section-label">
                        Certifications
                    </p>

                    <h2>
                        Certifications & Achievements
                    </h2>

                    <p className="section-description">
                        A showcase of my professional certifications, continuous learning, and major milestones.
                    </p>

                </header>

                <div className="certifications-grid">

                    <article className="certification-card">

                        <h3>
                            Complete 2025 Python Bootcamp: Learn Python from Scratch
                        </h3>

                        <p>
                            Udemy
                        </p>

                        <time>
                            Aug 2025
                        </time>

                        <a href="https://ude.my/UC-c39a933a-40e8-43eb-8b4b-e94f37330ee3" target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>

                    </article>

                </div>

            </div>
        </section>
    );
}

export default Certifications;