import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaGithub, FaCogs, FaJava, FaNodeJs, FaChartLine, FaBrain, FaRobot, FaLanguage, FaCode, FaTerminal, FaComment, FaCloud, FaLayerGroup, FaLink, FaNetworkWired , FaSync, FaUsers, FaLaptop } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiMysql, SiJupyter, SiPytorch, SiMongodb, SiOpencv, SiTypescript, SiNextdotjs, SiRedux, SiTensorflow, SiKeras, SiNumpy, SiPandas, SiExpress, SiBootstrap, SiPhp, SiR, SiSpringboot, SiScikitlearn } from "react-icons/si";
import "./skills.css"; 

export default function Skills() {
    return (
        <div id="skills">
            <section className="skills-section">
                <div className="skills-wrapper">
                    <h1 className="skills-title">
                        SKILLS
                    </h1>
                    <p className="skills-subtext">Here are the technologies and tools I work with:</p>
                    <SkillCategory title="Front-End">
                        <SkillItem icon={<FaHtml5 />} name="HTML" />
                        <SkillItem icon={<FaCss3Alt />} name="CSS" />
                        <SkillItem icon={<SiPhp />} name="PHP" />
                        <SkillItem icon={<FaJs />} name="JavaScript" />
                        <SkillItem icon={<FaReact />} name="React" />
                        <SkillItem icon={<SiNextdotjs />} name="Next.js" />
                        <SkillItem icon={<SiRedux />} name="Redux" />
                        <SkillItem icon={<SiTailwindcss />} name="TailwindCSS" />
                        <SkillItem icon={<SiBootstrap />} name="Bootstrap" />
                        <SkillItem icon={<SiTypescript />} name="TypeScript" />
                    </SkillCategory>
                    <br />
                    <SkillCategory title="Back-End">
                        <SkillItem icon={<FaPython />} name="Python" />
                        <SkillItem icon={<FaJava />} name="Java" />
                        <SkillItem icon={<SiR />} name="R" />
                        <SkillItem icon={<FaNodeJs />} name="Node.js" />
                        <SkillItem icon={<SiExpress />} name="Express.js" />
                        <SkillItem icon={<SiDjango />} name="Django" />
                        <SkillItem icon={<SiSpringboot />} name="Spring Boot" />
                        <SkillItem icon={<FaCogs />} name="RESTful API" />     
                    </SkillCategory>
                    <br />
                        <SkillCategory title="Machine Learning">
                        <SkillItem icon={<SiPytorch />} name="PyTorch" />
                        <SkillItem icon={<SiJupyter />} name="Jupyter Notebook" />
                        <SkillItem icon={<FaChartLine />} name="Seaborn" />
                        <SkillItem icon={<SiScikitlearn />} name="Scikit-Learn" />
                        <SkillItem icon={<SiTensorflow />} name="TensorFlow" />
                        <SkillItem icon={<SiKeras />} name="Keras" />
                        <SkillItem icon={<SiOpencv />} name="OpenCV" />
                        <SkillItem icon={<FaBrain />} name="Deep Learning" />
                        <SkillItem icon={<FaLanguage />} name="NLP" />
                        <SkillItem icon={<FaRobot />} name="Gen AI" />
                    </SkillCategory>
                    <br />
                    <SkillCategory title="Data Science & Analytics">
                        <SkillItem icon={<SiNumpy />} name="NumPy" />
                        <SkillItem icon={<SiPandas />} name="Pandas" />
                        <SkillItem icon={<FaChartLine />} name="MatplotLib" />
                        <SkillItem icon={<FaLayerGroup />} name="Data Structure" />
                        <SkillItem icon={<FaNetworkWired />} name="DSA" />
                        <SkillItem icon={<FaCode />} name="OOP's" />
                        <SkillItem icon={<SiMysql />} name="MySQL" />
                        <SkillItem icon={<FaDatabase />} name="SQL" />
                        <SkillItem icon={<SiMongodb />} name="MongoDB" />
                    </SkillCategory>
                    <br />
                    <SkillCategory title="Tools & Platforms">
                        <SkillItem icon={<FaGitAlt />} name="Git" />
                        <SkillItem icon={<FaGithub />} name="GitHub" />
                        <SkillItem icon={<FaCode />} name="VS Code" />
                        <SkillItem icon={<FaTerminal />} name="IntelliJ IDEA" />
                        <SkillItem icon={<FaComment />} name="AI Tools" />
                        <SkillItem icon={<FaCloud />} name="Cloud Computing (GCP)" />
                    </SkillCategory>
                    <br />
                    <SkillCategory title="CS Fundamentals & Soft Skills">
                        <SkillItem icon={<FaLink />} name="Computer Networking" />
                        <SkillItem icon={<FaSync />} name="Adaptability" />
                        <SkillItem icon={<FaUsers />} name="Interpersonal Skills" />
                        <SkillItem icon={<FaLaptop />} name="Operating Systems" />
                    </SkillCategory>
                </div>
            </section>
        </div>
    );
    }

    const SkillCategory = ({ title, children }) => {
    return (
        <div className="skill-category">
        <h3 className="category-title">{title}</h3>
        <div className="skills-grid">{children}</div>
        </div>
    );
    };

    const SkillItem = ({ icon, name }) => {
    return (
        <div className="skill-item">
        <div className="skill-icon">{icon}</div>
        <p className="skill-name">{name}</p>
        </div>
    );
    };