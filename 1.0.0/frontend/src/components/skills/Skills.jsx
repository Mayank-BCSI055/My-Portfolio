import { useEffect, useRef, useState } from "react";
import "./Skills.css";

import { TbBrandCSharp, TbBrandPowershell, TbBrandVscode, TbBrandOpenai } from "react-icons/tb";
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiHtml5,
    SiJavascript,
    SiDjango,
    SiFlask,
    SiPostman,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiGithub,
    SiAnthropic,
} from "react-icons/si";

import { FaServer, FaTable, FaTools, FaJava, FaCss3Alt, FaCode, FaBrain, FaRobot, FaUsers, FaKeyboard, FaLightbulb, FaPuzzlePiece, FaComments, FaHandshake, FaNetworkWired, FaChartLine, FaTasks, FaUserTie } from "react-icons/fa";

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // By toggling state on both enter and exit, we fix the bug where 
                // the section might briefly intersect during initial page load/layout shift.
                // It also makes the animation replay if they scroll up and back down!
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "C", icon: SiC },
                { name: "C#", icon: TbBrandCSharp },
                { name: "C++", icon: SiCplusplus },
                { name: "Java", icon: FaJava },
                { name: "Python", icon: SiPython },
                { name: "Windows PowerShell", icon: TbBrandPowershell },
                { name: "HTML5", icon: SiHtml5 },
                { name: "CSS3", icon: FaCss3Alt },
                { name: "MATLAB", icon: FaCode },
                { name: "JavaScript", icon: SiJavascript },
            ],
        },
        {
            title: "Backend Development",
            skills: [
                { name: "REST APIs", icon: FaServer },
                { name: "Django", icon: SiDjango },
                { name: "Postman", icon: SiPostman },
                { name: "Flask", icon: SiFlask },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "Spreadsheet", icon: FaTable },
                { name: "MySQL", icon: SiMysql },
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MongoDB", icon: SiMongodb },
            ],
        },
        {
            title: "Development Tools",
            skills: [
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "VS Code", icon: TbBrandVscode },
                { name: "Antigravity", icon: FaTools },
            ],
        },
        {
            title: "Artificial Intelligence",
            skills: [
                { name: "ChatGPT", icon: TbBrandOpenai },
                { name: "ClaudeAI", icon: SiAnthropic },
                { name: "CrewAI", icon: FaUsers },
                { name: "Prompt Engineering", icon: FaKeyboard },
                { name: "GenAI", icon: FaBrain },
                { name: "Agentic AI", icon: FaRobot },
            ],
        },
        {
            title: "Business Development",
            skills: [
                { name: "Strategic Thinking", icon: FaLightbulb },
                { name: "Problem Solving", icon: FaPuzzlePiece },
                { name: "Strong Communication", icon: FaComments },
                { name: "Negotiation", icon: FaHandshake },
                { name: "Networking", icon: FaNetworkWired },
                { name: "Relationship Building", icon: FaUsers },
                { name: "Analytical", icon: FaChartLine },
                { name: "Project Management", icon: FaTasks },
                { name: "Customer Relationship Management", icon: FaUserTie },
            ],
        },
    ];

    return (
        <section id="skills" className={`skills section-alternate-bg ${isVisible ? 'visible' : ''}`} ref={skillsRef}>
            <div className="container">
                <header className="section-header">
                    <p className="section-label">Skills</p>
                    <h2>Technologies I Work With</h2>
                    <p className="section-description">
                        A collection of technologies, frameworks, databases,
                        and development tools I use to build and work on projects.
                    </p>
                </header>

                <div className="skills-grid">
                    {skillCategories.map((category, cardIndex) => (
                        <article
                            className="skill-card"
                            key={category.title}
                            style={{ animationDelay: `${0.3 + cardIndex * 0.2}s` }}
                        >
                            <div className="skill-card-header">
                                <h3>{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, itemIndex) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            className="skill-item"
                                            key={skill.name}
                                            title={skill.name}
                                            style={{ animationDelay: `${0.3 + cardIndex * 0.2 + itemIndex * 0.1 + 0.4}s` }}
                                        >
                                            <span className="skill-icon">
                                                <Icon aria-hidden="true" />
                                            </span>
                                            <span className="skill-name">
                                                {skill.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
