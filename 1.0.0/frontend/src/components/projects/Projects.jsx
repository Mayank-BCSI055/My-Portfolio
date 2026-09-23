import { useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projectService } from "../../services/projectService";
import "./Projects.css";

function Projects() {
    const [ref, isVisible] = useScrollReveal(0.1);
    
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await projectService.getProjects();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className={`projects section-alternate-bg ${isVisible ? 'visible' : ''}`}
            ref={ref}
        >
            <div className="container">
                <header className="section-header">
                    <p className="section-label">Projects</p>
                    <h2>Things I Have Built</h2>
                    <p className="section-description">
                        A collection of projects demonstrating my development skills.
                    </p>
                </header>

                <div className="projects-grid">
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : projects.length === 0 ? (
                        <p>No projects found.</p>
                    ) : (
                        projects.map((project) => (
                            <article key={project.id} className="project-card">
                                {project.image_url && (
                                    <div className="project-image">
                                        <img
                                            src={project.image_url}
                                            alt={`Screenshot of ${project.title}`}
                                        />
                                    </div>
                                )}

                                <div className="project-content">
                                    <p>Backend / Full Stack</p>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    
                                    {project.tech_stack && (
                                        <ul className="project-technologies">
                                            {project.tech_stack.split(',').map((tech, index) => (
                                                <li key={index}>{tech.trim()}</li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="project-links">
                                        {project.live_link && (
                                            <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                                Live Demo
                                            </a>
                                        )}
                                        {project.github_link && (
                                            <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;
