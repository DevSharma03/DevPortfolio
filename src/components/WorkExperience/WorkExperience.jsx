<<<<<<< HEAD
import React from "react";
import "./WorkExperience.css";

const experiences = [
    {
        title: "Freelancer",
        techStack: ["Full Stack Development", "Web Development", "Machine Learning", "Python Developer", "Java Developer"],
        description:
            "Freelance Full-Stack Developer with expertise in web development and machine learning. Skilled in building dynamic, responsive websites and AI-driven applications. Completed two projects—one for a company and another for a law client—delivering tailored solutions to meet business needs. Proficient in front-end and back-end development, database management, and deploying scalable applications. Passionate about integrating AI into web technologies to enhance user experience and automation.",
        date: "Sept 2024 - Present",
    },
    {
        title: "Web Developer Intern",
        company: "CariKture Pvt. Ltd.",
        techStack: ["React", "PHP", "Tailwind CSS", "Bootstrap", "MySQL", "JavaScript", "NodeJs", "Express.js"],
        description:
            "Front-End Developer proficient in React.js, JavaScript, and HTML5/CSS3, with expertise in building responsive, cross-browser compatible websites for international clients. Experienced in collaborating with design and development teams to create optimized, user-centered web experiences across global platforms. Skilled in front-end frameworks, version control (Git), and ensuring performance optimization through best coding practices",
        date: "June 2024 - Dec 2024",
    }
];

// Navbar component defined as a functional component
export default function WorkExperience() {
    return (
        <>
            <div id="work" >
                <div id="skills-title" className="h2---section">
                    <a href="#work" className="h2-linkblock">
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>Wo</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>R</div>
                        </div>
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>k Exp</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>eR</div>
                        </div>
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>ien</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>c</div>
                        </div>
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>e</h2>
                    </a>
                </div>

                <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-card">
                        <h3 className="timeline-title">{exp.title}</h3>
                        <p className="timeline-company">{exp.company}</p>
                        <p className="timeline-date">{exp.date}</p>
                        <div className="timeline-techstack">
                        {exp.techStack.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}
                        </div>
                        <p className="timeline-description">{exp.description}</p>
                    </div>
                    </div>
                ))}
                </div>

            </div>
        </>
    );
}
=======
import React from "react";
import "./WorkExperience.css";

const experiences = [
    {
        title: "Freelancer",
        techStack: ["Full Stack Development", "Web Development", "Machine Learning", "Python Developer", "Java Developer"],
        description:
            "Freelance Full-Stack Developer with expertise in web development and machine learning. Skilled in building dynamic, responsive websites and AI-driven applications. Completed two projects—one for a company and another for a law client—delivering tailored solutions to meet business needs. Proficient in front-end and back-end development, database management, and deploying scalable applications. Passionate about integrating AI into web technologies to enhance user experience and automation.",
        date: "Sept 2024 - Present",
    },
    {
        title: "Web Developer Intern",
        company: "CariKture Pvt. Ltd.",
        techStack: ["React", "PHP", "Tailwind CSS", "Bootstrap", "MySQL", "JavaScript", "NodeJs", "Express.js"],
        description:
            "Front-End Developer proficient in React.js, JavaScript, and HTML5/CSS3, with expertise in building responsive, cross-browser compatible websites for international clients. Experienced in collaborating with design and development teams to create optimized, user-centered web experiences across global platforms. Skilled in front-end frameworks, version control (Git), and ensuring performance optimization through best coding practices",
        date: "June 2024 - Dec 2024",
    }
];

// Navbar component defined as a functional component
export default function WorkExperience() {
    return (
        <>
            <div id="work" >
                <div id="skills-title" className="h2---section">
                    <a href="#work" className="h2-linkblock">
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>Wo</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>R</div>
                        </div>
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>k Exp</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>eR</div>
                        </div>
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>ien</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>c</div>
                        </div>
                        <h2 className="h2---text" style={{ fontSize: window.innerWidth <= 768 ? '36px' : '54px' }}>e</h2>
                    </a>
                </div>

                <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-card">
                        <h3 className="timeline-title">{exp.title}</h3>
                        <p className="timeline-company">{exp.company}</p>
                        <p className="timeline-date">{exp.date}</p>
                        <div className="timeline-techstack">
                        {exp.techStack.map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}
                        </div>
                        <p className="timeline-description">{exp.description}</p>
                    </div>
                    </div>
                ))}
                </div>

            </div>
        </>
    );
}
>>>>>>> 19ff24ce4b5858cdb8d4e612d62c839c795eaced
