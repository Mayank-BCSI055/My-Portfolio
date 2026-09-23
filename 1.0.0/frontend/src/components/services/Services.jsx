import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Services.css";

function Services() {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section
            id="services"
            className={`services ${isVisible ? "visible" : ""} `}
            ref={ref}
        >
            <div className="container">

                {/* Section Header */}
                <header className="section-header">
                    <p className="section-label">
                        Services
                    </p>

                    <h2>
                        What I Can Do
                    </h2>

                    <p className="section-description">
                        A range of services and technical skills I offer to bring your ideas to life.
                    </p>
                </header>


                {/* Services Grid */}
                <div className="services-grid">
                    {/* Service 01 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">01</span>
                                <h3>Python Development</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Building Python applications, automation scripts, and backend solutions.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 02 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">02</span>
                                <h3>Backend Development</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Developing APIs, business logic, and server-side applications.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 03 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">03</span>
                                <h3>REST API Development</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Designing and developing RESTful APIs for connecting applications and services.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 04 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">04</span>
                                <h3>Database Development</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Designing, managing, and working with relational and NoSQL application databases.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 05 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">05</span>
                                <h3>Web Development</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Creating responsive and functional web applications using modern web technologies.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 06 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">06</span>
                                <h3>Automation &amp; Scripting</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Developing scripts and automation solutions to reduce repetitive tasks and improve productivity.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 07 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">07</span>
                                <h3>API Integration</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Connecting applications with third-party APIs and external services.</p>
                            </div>
                        </div>
                    </article>

                    {/* Service 08 */}
                    <article className="service-card">
                        <div className="service-card-inner">
                            <div className="service-card-front">
                                <span className="service-number">08</span>
                                <h3>Application Maintenance</h3>
                            </div>
                            <div className="service-card-back">
                                <p>Debugging, improving, and maintaining applications for better reliability and performance.</p>
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        </section>
    );
}

export default Services;
