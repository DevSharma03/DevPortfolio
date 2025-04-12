import { useState, useEffect, React } from 'react';
import './home.css';
import myImage from '../../assets/IMG_E5177.png';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";


const texts = ["Devashish Sharma.", "Skilled Web Developer.", "Skilled Machine Learning Developer.", "Persuing B.Tech In AI&DS."];

export default function Home() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const speed = isDeleting ? 50 : 100;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < texts[index].length) {
                setText((prev) => prev + texts[index][charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else if (!isDeleting && charIndex === texts[index].length) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index , speed]);

    return (
        <>
            <div id="Home">
                <div className="home-main">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left Section */}
                            <div className="col-6">
                                <h5 className="text-blue-700 mb-0">Hello! I AM</h5>
                                <h3>
                                    <strong>{text}</strong>
                                    <span className="blink">_</span>
                                </h3>
                                <p className="text-secondary fs-6">I am a skilled Full-Stack Developer  with expertise in AI 🤖, Machine Learning, and modern web technologies . Proficient in React.js, Python, and Node.js, I build dynamic, user-friendly applications. With experience in Django and Spring Boot, I create scalable solutions 🔧. Passionate about innovation 💡, I leverage technology to enhance user experiences and streamline processes.
                                </p>
                                <div className="social-icons mb-2 mt-2">
                                    <a className="icon-link icon-link-1" href="https://www.linkedin.com/in/devsharma09" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="icon linkedin"/>
                                    </a>
                                    <a className="icon-link icon-link-2" href="https://github.com/DevSharma03" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="icon github" />
                                    </a>
                                    <a className="icon-link icon-link-5" href="mailto:work.devashishsharma09@gmail.com">
                                        <FaEnvelope className="icon email" />
                                    </a>
                                    <a className="icon-link icon-link-4" href="https://www.instagram.com/devsharma_1293" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="icon instagram" />
                                    </a>
                                </div>
                                <div className="resume-button mt-2">
                                    <a href={`${process.env.PUBLIC_URL}/resume.html`} target="_blank" rel="noopener noreferrer">
                                        See My Resume
                                    </a>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col-6">
                                <div className="home-image">
                                    <img className="home-image-me" src={myImage} alt="me" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blink Cursor CSS */}
            <style>
                {`
                    .blink {
                        animation: blink 0.8s infinite;
                    }
                    @keyframes blink {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
        </>
    );
}
