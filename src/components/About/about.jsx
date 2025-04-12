import React from "react";
import "./about.css";

export default function About() {
    return (
        <div id="about">
            <div className="about-container">
                <div className="row" style={{ margin: "0" }}>
                    <div className="skills-title">
                        ABOUT
                    </div>
                    <div className="about-card">
                        <div className="about-text">
                            <h2 className="about-title">Who Am I?</h2>
                            <p>
                                Hi! I'm <strong>Devashish Sharma</strong>, a passionate
                                <span className="highlight"> Full-Stack Developer & Machine Learning Enthusiast</span> driven by curiosity and innovation. 💡
                                <br /><br />
                                I specialize in building intuitive, high-performance web applications using
                                <span className="highlight"> React.js, Node.js, and Python</span>, and love architecting full-stack solutions with frameworks like
                                <span className="highlight"> Django, Spring Boot, and Express</span>. My focus is on crafting seamless user experiences, responsive designs, and scalable web platforms.
                                <br /><br />
                                On the machine learning side, I’ve worked on projects involving
                                <span className="highlight"> predictive modeling, NLP, image recognition, and data visualization</span>. I enjoy applying ML techniques to real-world problems—whether it's automating processes or uncovering insights from complex datasets.
                                <br /><br />
                                I believe in continuous learning and love turning ideas into impactful products. Whether it’s building a fast, modern UI or training a smart ML model, I bring dedication and creativity to the table.
                                <br /><br />
                                Let’s collaborate and build something meaningful together! ✨🤖
                            </p>
                            <div className="resume-button mt-2">
                                <a href="#contact">Let's Connect!</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

