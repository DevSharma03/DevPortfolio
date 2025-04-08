<<<<<<< HEAD
import React from "react";
import "./about.css";
import myImage from "../../assets/about-img-1.png";

export default function About() {
    return (
        <div id="about">
            <div className="container about-container">
                <div className="row">

                    <div id="skills-title" className="h2---section mb-1">
                        <a href="#projects" className="h2-linkblock">
                            <h2 className="h2---text">Ab</h2>
                            <div className="h2---o work">
                                <div className="title---eye-pupils work">oU</div>
                            </div>
                            <h2 className="h2---text">t M</h2>
                            <div className="h2---o work">
                                <div className="title---eye-pupils work">e</div>
                            </div>
                        </a>
                    </div>

                    {/* Left Section - Profile Image & Floating Icons */}
                    <div className="col-md-5 text-center about-image">
                        <div className="image-wrapper">
                            {/* Circular Profile Image */}
                            <div className="profile-image-wrapper">
                                <img className="profile-image-me" src={myImage} alt="Devashish Sharma" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - About Text */}
                    <div className="col-md-7 about-text">
                        <h2 className="about-title">Who Am I?</h2>
                        <p>
                            Hey there! I’m <strong>Devashish Sharma</strong>, a passionate
                            <span className="highlight"> Full-Stack & Machine Learning Developer</span> with a deep interest in
                            AI 🤖, Machine Learning, and Web Development.
                            <br /><br />
                            I specialize in building sleek, high-performance applications using
                            <span className="highlight"> React.js, Python, and Node.js</span>, along with powerful frameworks like Django and Spring Boot.
                            <br /><br />
                            I thrive on solving complex problems, optimizing workflows, and crafting seamless user experiences.  
                            With a constant drive for innovation 💡, I bring cutting-edge solutions to life.
                            <br /><br />
                            Let’s connect and build something amazing together! 🚀✨
                        </p>
                        <div className="resume-button mt-2">
                            <a href="#contact">Let's Connect!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


=======
import React from "react";
import "./about.css";
import myImage from "../../assets/about-img-1.png";

export default function About() {
    return (
        <div id="about">
            <div className="container about-container">
                <div className="row">

                    <div id="skills-title" className="h2---section mb-1">
                        <a href="#projects" className="h2-linkblock">
                            <h2 className="h2---text">Ab</h2>
                            <div className="h2---o work">
                                <div className="title---eye-pupils work">oU</div>
                            </div>
                            <h2 className="h2---text">t M</h2>
                            <div className="h2---o work">
                                <div className="title---eye-pupils work">e</div>
                            </div>
                        </a>
                    </div>

                    {/* Left Section - Profile Image & Floating Icons */}
                    <div className="col-md-5 text-center about-image">
                        <div className="image-wrapper">
                            {/* Circular Profile Image */}
                            <div className="profile-image-wrapper">
                                <img className="profile-image-me" src={myImage} alt="Devashish Sharma" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - About Text */}
                    <div className="col-md-7 about-text">
                        <h2 className="about-title">Who Am I?</h2>
                        <p>
                            Hey there! I’m <strong>Devashish Sharma</strong>, a passionate
                            <span className="highlight"> Full-Stack & Machine Learning Developer</span> with a deep interest in
                            AI 🤖, Machine Learning, and Web Development.
                            <br /><br />
                            I specialize in building sleek, high-performance applications using
                            <span className="highlight"> React.js, Python, and Node.js</span>, along with powerful frameworks like Django and Spring Boot.
                            <br /><br />
                            I thrive on solving complex problems, optimizing workflows, and crafting seamless user experiences.  
                            With a constant drive for innovation 💡, I bring cutting-edge solutions to life.
                            <br /><br />
                            Let’s connect and build something amazing together! 🚀✨
                        </p>
                        <div className="resume-button mt-2">
                            <a href="#contact">Let's Connect!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


>>>>>>> 19ff24ce4b5858cdb8d4e612d62c839c795eaced
