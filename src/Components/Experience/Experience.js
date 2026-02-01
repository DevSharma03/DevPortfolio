import React from "react";
import "./Experience.css";

const workExperience = [
  {
    id: 1,
    thumbnail: "/Work_Thumbnails/exp1.svg", // Assuming you have an image for data science
    title: "Data Science Intern",
    company: "QuickHeal Technologies Ltd.",
    place: "Pune, India",
    duration: "Jul 2025 - Dec 2025",
    desc: "Architected and deployed enterprise cybersecurity solutions including SIA 2.0 (Seqrite Intelligent Assistant), Stealth Lateral Movement Detection, Spam Mail Detection, and IOC Reputation Model with NLP-based labeling achieving 100% accuracy. Developed end-to-end ML pipelines leveraging LLM and GNN architectures, processing terabytes of data from collection to AWS deployment (Lambda, EC2). Reduced false positives by 40%, automated 80% of manual workflows, and restructured data infrastructure for cost-efficient scalability without additional resource investments.",
  },
  {
    id: 2,
    thumbnail: "/Work_Thumbnails/exp4.svg",
    title: "Web Developer Intern",
    company: "CariKture Pvt. Ltd.",
    place: "Pune, India",
    duration: "Jun 2024 - Jan 2024",
    desc: "Architected and deployed 5+ production-grade full-stack applications using React.js, Node.js, Express.js, and MongoDB. Developed scalable RESTful APIs with clean architecture principles, input validation, and efficient database integrations. Built performance-optimized, reusable React components and responsive interfaces, reducing page load times by 25% and increasing user engagement by 30%. Collaborated in cross-functional Agile/Scrum teams, ensuring seamless front-end and back-end integration with rapid feature delivery and maintainable architecture.",
  },
  {
    id: 3,
    thumbnail: "/Work_Thumbnails/exp2.svg",
    title: "Freelancer",
    company: "None",
    place: "Remote",
    duration: "Dec 2023 - Present",
    desc: "As a dedicated freelance developer, I architect data-driven applications and intelligent AI-powered solutions that deliver measurable business impact. Specializing in high-performance full-stack development with React.js and Node.js, combined with advanced ML/AI implementations on AWS. I transform complex requirements into scalable, production-ready systems—from cybersecurity models achieving 100% accuracy to optimized web applications with 30% engagement improvements. Let's connect to build solutions that align perfectly with your business goals and drive real value.",
  },
];

const Experience = () => {
  return (
    <div id="Work_Experience">
      <div className="experience-container">
        <h1 className="experience-heading">
          My <span>work experience</span>
        </h1>

        <div className="experience-grid">
          {workExperience.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-icon-wrapper"> {/* New wrapper for image spacing */}
                <img
                  src={exp.thumbnail}
                  alt={exp.title}
                  className="experience-icon"
                />
              </div>
              <div className="experience-text">
                <h2>{exp.title}</h2>
                <p className="experience-company">{exp.company} - {exp.place}</p> {/* New: Company & Place */}
                <p className="experience-duration">{exp.duration}</p> {/* New: Duration */}
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;


