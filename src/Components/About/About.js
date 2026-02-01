import './About.css'
import MagicButton from './../Sub_Components/MagicButton/MagicButton';
import { FiCopy } from 'react-icons/fi';

function About() {
  const skillsCol1 = ['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI', 'MERN Stack', 'AWS & GCP'];
  const skillsCol2 = ['LLMs', 'Agentic AI', 'MLOps', 'AI/ML Deployment', 'Web Development','Data Science'];

  const EmailCopy = () => {
    const email = "work.devashishsharma09@gmail.com";
    navigator.clipboard.writeText(email)
    .then(() => alert("Email address copied to clipboard!"))
    .catch(err => console.error("Failed to copy email: ", err));
  };

  return (
    <div id='About'>
      <div className="container">
        <div className="about-container1">
          <div className="about-container1-1">
            <div className="about-container1-1-header">
              <div className="about-container-part-small">
                I constantly try to improve
              </div>  
              <h2 className="about-title">My Tech Stack</h2>
            </div>
            <div className="about-container1-1-skills">
              <div className="about-skill-col">
                {skillsCol1.map(skill => (
                  <span key={skill} className="about-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="about-skill-col staggered" style={{marginTop:'-24px'}}>
                {skillsCol2.map(skill => (
                  <span key={skill} className="about-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-container1-2">
            <div className="about-container-part P1">
              Passionate about model optimization and lifelong learning.
            </div>
            <div className="about-container-part P2">
              I translate complex data patterns into actionable, intelligent insights.
            </div>
          </div>
        </div>
        <div className="about-container2">
          <div className="about-container2-1">
            <div className="about-container-part P3 align-bottom">
              Tech enthusiast with a passion for development.
            </div>
            <div className="about-container-part P4">
              <div className='text-center'>Do you want to start a project together?</div>
              <MagicButton 
                title="Copy my email Address" 
                icon={<FiCopy />} 
                onClick={EmailCopy} 
              />
            </div>
          </div>
          <div className="about-container2-2">
            <spam className="about-container2-2-test">
              The Inside Scoop
            </spam>
            <div className="about-container2-2-title">
              I grow ideas into Intelligent Systems
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
