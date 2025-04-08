import React from 'react';
import './Projects.css';
import EventProImage from './Images/EventPro.png';
import MedTrackImage from './Images/MedTrack.jpg';
import AmazonCloneImage from './Images/Amazon Clone.png';
import AI_BotImage from './Images/AI-bot.jpg';
import ExpenseTrackerImage from './Images/Expence Tracker.png';
import NetworkManagerImage from './Images/Network-manager.png';
import ERPWebAppImage from './Images/ERP-website.png';

const projects = [
    {
        title: 'Event Pro',
        description: 'Event Management System.',
        techStack:"Java(Programming Language), Spring-Boot, Hibernate, React.js, HTML5, CSS3, JavaScript, MySQL, RESTful APIs, Git.",
        detailedDescription: 'Developed a cloud-based event management platform automating event creation, registration, and real-time updates. Designed a dynamic, user-friendly interface, optimized performance for scalability, and streamlined collaboration for efficient event management.',
        link: 'https://github.com/DevSharma03/Event-Management-System',
        image: EventProImage,
    },
    {
        title: 'Med-Track',
        description: 'Medical Based Management App For Patients and Prescription Analyzer with Alarm Scheduler',
        techStack:"Python, React.js, HTML5, CSS3, JavaScript, MySQL, RESTful APIs, Git.",
        detailedDescription: 'Developed a web application that automates medicine intake alarms, tracks prescriptions, and enables online ordering. Integrated OCR to extract medicine schedules from handwritten prescriptions, ensuring accurate reminders and seamless user experience.',
        link: '#',
        image: MedTrackImage,
    },
    {
        title: 'Network Manager',
        description: 'Network Traffic Management And Tracking Machine Learning Model.',
        techStack:"R, Isolation Forest, Leaflet.",
        detailedDescription: 'Developed a system for detecting traffic anomalies by analyzing real-time user data with Isolation Forest. Implemented geospatial validation to filter out unrealistic coordinates and visualized anomalies on an interactive Leaflet map for easy identification.',
        link: '#',
        image: NetworkManagerImage,
    },
    {
        title: 'ERP Web Application',
        description: 'ERP Website For college staff and student management.',
        techStack:"HTML, CSS, JavaScript, Node.js, Express, MongoDB, EJS Templates, Git, RESTful APIs.",
        detailedDescription: 'Developed a secure role-based data management system with dynamic, responsive user interfaces. Ensured seamless interaction across devices and streamlined collaboration with Git for version control.',
        link: 'https://github.com/DevSharma03/ERP-Website',
        image: ERPWebAppImage,
    },
    {
        title: 'Amazon Clone',
        description: 'E-Commerce Platform Clone developed.',
        techStack:"HTML, CSS, JavaScript, Git.",
        detailedDescription: 'Developed an Amazon clone with HTML, CSS, and JavaScript, featuring a responsive UI, product listings, search functionality, and a dynamic cart system. Enhanced user experience with interactive elements and smooth navigation.',
        link: '#',
        image: AmazonCloneImage,
    },
    {
        title: 'Railway Management',
        description: 'An Application for Railway Management.',
        techStack:"Java(Programming Language), Spring-Boot, Hibernate, React.js, HTML5, CSS3, JavaScript, MySQL, RESTful APIs, Git.",
        detailedDescription: 'Developed a railway management system for ticket booking, scheduling, and real-time updates, ensuring seamless user experience, secure transactions, and efficient operations.',
        link: 'https://github.com/DevSharma03/Railway-Management-System',
        image: 'path-to-image-2.jpg',
    },
    {
        title: 'AI Bot',
        description: 'Created An AI Which Interacts With Voice (Voice Assistant).',
        techStack:"Python, Python Libraries",
        detailedDescription: 'Developed a voice assistant chatbot for automated responses, task execution, and real-time interactions. Integrated Python libraries for speech recognition, NLP, and automation, ensuring seamless user experience and efficient performance.',
        link: '#',
        image: AI_BotImage,
    },
    {
        title: 'Expence Tracker',
        description: 'An Expence Management And Tracking System.',
        techStack:"HTML, CSS, JavaScript, Bootstrap.",
        detailedDescription: 'Developed an expense tracker for managing income and expenses with interactive charts and real-time updates. Designed a responsive UI for seamless user experience, enabling efficient financial tracking and budgeting.',
        link: '#',
        image: ExpenseTrackerImage,
    }
];

export default function Projects() {
    return (
        <div id="projects">
            <div className="projects-container">
                <div id="skills-title" className="h2---section">
                    <a href="#projects" className="h2-linkblock">
                        <h2 className="h2---text">M</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work">y </div>
                        </div>
                        <h2 className="h2---text">Pro</h2>
                        <div className="h2---o work">
                            <div className="title---eye-pupils work">Je</div>
                        </div>
                        <h2 className="h2---text">cts</h2>
                    </a>
                </div>
                <div className="projects">
                    {projects.map((project, index) => (
                        <a href={project.link} key={index} className="project-card">
                            <div className="project-card-inner">
                                <div className="project-card-front">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-details">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <div className="project-card-back">
                                    <div className="overlay">
                                        <h3 style={{marginTop:"7px"}}>{project.title}</h3>
                                        <p style={{textAlign:"left"}}>{project.detailedDescription}</p>
                                        <p className="teckStack" style={{textAlign:"left"}}><strong style={{color:"#007bff"}}>Teck Stack:</strong> {project.techStack}</p>
                                        <span>_Click to View Project_</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
