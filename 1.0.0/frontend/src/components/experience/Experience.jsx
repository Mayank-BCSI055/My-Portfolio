import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Experience.css";

function Experience() {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section
            id="experience"
            className={`experience ${isVisible ? "visible" : ""}`}
            ref={ref}
        >
            <div className="container">

                {/* Section Header */}
                <header className="section-header">

                    <p className="section-label">
                        Experience
                    </p>

                    <h2>
                        My Professional Journey
                    </h2>

                    <p className="section-description">
                        A timeline of my work experience, internships, and professional roles.
                    </p>

                </header>


                {/* Experience Timeline */}
                <div className="timeline">


                    {/* ================================
                        EXPERIENCE 01
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>

                            <h3 className="timeline-title">
                                Intern Python Developer
                            </h3>

                            <p className="timeline-company">
                                Baranwal Consultancy and Services
                            </p>

                            <p className="timeline-type">
                                Internship · On-site
                            </p>

                            <time className="timeline-date">
                                Sep 2025 - Present
                            </time>

                            <p className="timeline-location">
                                Pimpri, Pune, Maharashtra, India
                            </p>

                        </header>


                        <div className="timeline-description">

                            <p>
                                Worked on Python-based projects and
                                gained hands-on experience in backend
                                development and application development.
                            </p>

                            <ul>

                                <li>
                                    Worked on a Python project related
                                    to authorization.
                                </li>

                                <li>
                                    Developed small Python projects
                                    to gain hands-on experience.
                                </li>

                                <li>
                                    Worked on a Doctor Appointment
                                    Booking System website.
                                </li>

                            </ul>

                        </div>

                    </article>


                    {/* ================================
                        EXPERIENCE 02
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>

                            <h3 className="timeline-title">
                                Internship Trainee
                            </h3>

                            <p className="timeline-company">
                                Uncodemy
                            </p>

                            <p className="timeline-type">
                                Apprenticeship
                            </p>

                            <time className="timeline-date">
                                Oct 2024 - Feb 2026
                            </time>

                        </header>


                        <div className="timeline-description">

                            <p>
                                Completed an apprenticeship focused on
                                developing practical technical skills
                                and gaining hands-on experience.
                            </p>

                        </div>

                    </article>


                    {/* ================================
                        EXPERIENCE 03
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>

                            <h3 className="timeline-title">
                                Student
                            </h3>

                            <p className="timeline-company">
                                Besant Technologies
                            </p>

                            <p className="timeline-type">
                                Apprenticeship · Hybrid
                            </p>

                            <time className="timeline-date">
                                Apr 2023 - Jun 2024
                            </time>

                            <p className="timeline-location">
                                Bengaluru East, Karnataka, India
                            </p>

                        </header>


                        <div className="timeline-description">

                            <p>
                                Participated as a student in an
                                apprenticeship program focused on
                                technical learning and skill development.
                            </p>

                        </div>

                    </article>


                    {/* ================================
                        EXPERIENCE 04
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>

                            <h3 className="timeline-title">
                                Student
                            </h3>

                            <p className="timeline-company">
                                Origence - Coaching Institute
                            </p>

                            <p className="timeline-type">
                                Apprenticeship · On-site
                            </p>

                            <time className="timeline-date">
                                Apr 2017 - Apr 2018
                            </time>

                            <p className="timeline-location">
                                Varanasi, Uttar Pradesh, India
                            </p>

                        </header>


                        <div className="timeline-description">

                            <p>
                                Prepared for competitive examinations
                                including:
                            </p>

                            <ul>

                                <li>
                                    IIT JEE - Main &amp; Advanced
                                </li>

                                <li>
                                    UPSEE
                                </li>

                                <li>
                                    BHU B.Sc. Exam
                                </li>

                            </ul>

                        </div>

                    </article>


                </div>

            </div>
        </section>
    );
}

export default Experience;
