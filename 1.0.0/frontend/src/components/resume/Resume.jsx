import { useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Resume.css";

const resumes = [
    {
        id: 1,
        title: "Resume V1",
        year: "2024",
        description: "My first resume, focused on my early education, skills and internship experience.",
        image: "/resume/resume-v1.png",
        pdf: "/resume/resume-v1.pdf",
    },
    {
        id: 2,
        title: "Resume V2",
        year: "2025",
        description: "An updated version with a cleaner structure and stronger project presentation.",
        image: "/resume/resume-v2.png",
        pdf: "/resume/resume-v2.pdf",
    },
    {
        id: 3,
        title: "Resume V3",
        year: "2025",
        description: "A refined version with improved technical skills, projects and professional experience.",
        image: "/resume/resume-v3.png",
        pdf: "/resume/resume-v3.pdf",
    },
    {
        id: 4,
        title: "Resume V4",
        year: "2026",
        description: "My latest resume, presenting my current development experience and technical profile.",
        image: "/resume/resume-v4.png",
        pdf: "/resume/resume-v4.pdf",
    },
];

function Resume() {
    const [ref, isVisible] = useScrollReveal(0.1);
    const [currentIndex, setCurrentIndex] = useState(resumes.length - 1);
    const [slideDirection, setSlideDirection] = useState("next");
    const [isPaused, setIsPaused] = useState(false);

    const currentResume = resumes[currentIndex];

    const goToPrevious = () => {
        setSlideDirection("previous");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? resumes.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setSlideDirection("next");
        setCurrentIndex((prevIndex) =>
            prevIndex === resumes.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToResume = (index) => {
        setSlideDirection(index > currentIndex ? "next" : "previous");
        setCurrentIndex(index);
    };

    // Auto-play slider
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setSlideDirection("next");
            setCurrentIndex((prevIndex) =>
                prevIndex === resumes.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [currentIndex, isPaused]);

    return (
        <section
            id="resume"
            className={`resume section-alternate-bg ${isVisible ? "visible" : ""}`}
            ref={ref}
        >
            <div className="container">

                <header className="section-header">
                    <p className="section-label">MY JOURNEY</p>

                    <h2>Resume Evolution</h2>

                    <p className="section-description">
                        Explore how my resume has evolved throughout my
                        learning and professional journey.
                    </p>
                </header>

                <div 
                    className="resume-slider"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    <button
                        className="resume-arrow resume-arrow-left"
                        onClick={goToPrevious}
                        aria-label="Previous resume"
                        type="button"
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    <div className="resume-preview-wrapper">
                        {resumes.map((resume, index) => (
                            <div
                                key={resume.id}
                                className={`resume-preview ${index === currentIndex ? "active" : ""}`}
                            >
                                <img
                                    src={resume.image}
                                    alt={`${resume.title} first page preview`}
                                    className="resume-image"
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        className="resume-arrow resume-arrow-right"
                        onClick={goToNext}
                        aria-label="Next resume"
                        type="button"
                    >
                        <span aria-hidden="true">→</span>
                    </button>

                </div>

                <div className="resume-info">

                    <div className="resume-version">
                        <span className="resume-version-number">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>

                        <div>
                            <h3>{currentResume.title}</h3>
                            <span className="resume-year">
                                {currentResume.year}
                            </span>
                        </div>
                    </div>

                    <p>{currentResume.description}</p>

                </div>

                <div className="resume-dots" aria-label="Resume versions">

                    {resumes.map((resume, index) => (
                        <button
                            key={resume.id}
                            type="button"
                            className={`resume-dot ${index === currentIndex ? "active" : ""
                                }`}
                            onClick={() => goToResume(index)}
                            aria-label={`Show ${resume.title}`}
                            aria-current={index === currentIndex ? "true" : undefined}
                        />
                    ))}

                </div>

                <div className="resume-timeline">

                    {resumes.map((resume, index) => (
                        <button
                            key={resume.id}
                            type="button"
                            className={`timeline-item ${index === currentIndex ? "active" : ""
                                }`}
                            onClick={() => goToResume(index)}
                        >
                            <span className="timeline-dot">
                                {index + 1}
                            </span>

                            <span className="timeline-title">
                                {resume.title}
                            </span>

                            <span className="timeline-year">
                                {resume.year}
                            </span>
                        </button>
                    ))}

                </div>

                <div className="resume-download">

                    <a
                        href={currentResume.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-resume-button"
                    >
                        <span className="download-icon" aria-hidden="true">
                            ↓
                        </span>

                        <span>Download Resume</span>

                        <span className="download-version">
                            {currentResume.title}
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Resume;
