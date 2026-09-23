import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Education.css";

function Education() {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section
            id="education"
            className={`education ${isVisible ? "visible" : ""} `}
            ref={ref}
        >
            <div className="container">

                {/* Section Header */}
                <header className="section-header">
                    <p className="section-label">
                        Education
                    </p>

                    <h2>
                        My Education
                    </h2>

                    <p className="section-description">
                        My academic background, qualifications, and educational journey.
                    </p>

                </header>


                {/* Education Timeline */}
                <div className="timeline">

                    {/* ================================
                        B.TECH
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>
                            <h3 className="timeline-title">
                                Bachelor of Technology - BTech
                            </h3>

                            <p className="timeline-subtitle">
                                Computer Science &amp; Engineering
                            </p>

                            <p className="timeline-company">
                                KIET Group of Institutions
                            </p>

                            <time className="timeline-date">
                                May 2018 - Aug 2022
                            </time>
                        </header>

                        <div className="timeline-description">

                            <p>
                                Grade: <strong>69%</strong>
                            </p>

                            <p>
                                Activities &amp; Societies:
                                Reading, Singing &amp; Badminton
                            </p>

                        </div>

                    </article>


                    {/* ================================
                        12TH GRADE
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>
                            <h3 className="timeline-title">
                                12th Grade CBSE
                            </h3>

                            <p className="timeline-subtitle">
                                Physics / Mathematics / Chemistry
                            </p>

                            <p className="timeline-company">
                                Glenhill School - Manduadih
                            </p>

                            <time className="timeline-date">
                                Apr 2015 - Mar 2017
                            </time>
                        </header>

                        <div className="timeline-description">

                            <p>
                                Grade: <strong>82%</strong>
                            </p>

                            <p>
                                Activities &amp; Societies:
                                Prefect - Tagore
                            </p>

                            <p>
                                Subject: C++ / C
                            </p>

                        </div>

                    </article>


                    {/* ================================
                        10TH GRADE
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>
                            <h3 className="timeline-title">
                                10th Board
                            </h3>

                            <p className="timeline-subtitle">
                                CBSE
                            </p>

                            <p className="timeline-company">
                                Glenhill School - Manduadih
                            </p>

                            <time className="timeline-date">
                                Apr 2013 - Mar 2015
                            </time>
                        </header>

                        <div className="timeline-description">

                            <p>
                                Grade: <strong>9.0</strong>
                            </p>

                            <p>
                                Activities &amp; Societies:
                                Volleyball
                            </p>

                        </div>

                    </article>


                    {/* ================================
                        PRIMARY & SECONDARY
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>
                            <h3 className="timeline-title">
                                Primary and Secondary Education
                            </h3>

                            <p className="timeline-subtitle">
                                CBSE
                            </p>

                            <p className="timeline-company">
                                Glenhill School - Manduadih
                            </p>

                            <time className="timeline-date">
                                Jul 2005 - Mar 2013
                            </time>
                        </header>

                        <div className="timeline-description">

                            <p>
                                Grade: <strong>A</strong>
                            </p>

                            <p>
                                Activities &amp; Societies:
                                Creative Arts, Badminton,
                                Computer Games
                            </p>

                            <p className="education-quote">
                                "Children always grow up with the time."
                            </p>

                        </div>

                    </article>


                    {/* ================================
                        LKG & UKG
                    ================================= */}

                    <article className="timeline-item">

                        <span
                            className="timeline-dot"
                            aria-hidden="true"
                        ></span>

                        <header>
                            <h3 className="timeline-title">
                                LKG &amp; UKG
                            </h3>

                            <p className="timeline-subtitle">
                                Playschool Courses
                            </p>

                            <p className="timeline-company">
                                Little Green Star School
                            </p>

                            <time className="timeline-date">
                                Apr 2003 - Mar 2005
                            </time>
                        </header>

                        <div className="timeline-description">

                            <p>
                                Grade: <strong>A+</strong>
                            </p>

                            <p>
                                Activities &amp; Societies:
                                Crafting &amp; Playing Games
                            </p>

                        </div>

                    </article>

                </div>

            </div>
        </section>
    );
}

export default Education;
