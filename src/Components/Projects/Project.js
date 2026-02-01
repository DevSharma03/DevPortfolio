import "./Project.css";
import MagicButton from "./../Sub_Components/MagicButton/MagicButton";

function Projects() {
  return (
    <div id="Projects">
      <p className="projects-title">
        A small selection of{" "}
        <span className="projects-title-part">recent Projects</span>
      </p>

      <div className="projects-list">
        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/pMain.jpeg" alt="Project 2" />
              <div className="project-details">
                <h3>Life Sync</h3>
                <p style={{ fontSize: 18 }}>
                  Personal Productivity & Life Balance Manager
                </p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">Life Sync</h3>
              <p className="project-description">
                Built a full-stack habit tracking application with AI-driven
                personalization delivering intelligent behavioral insights and
                recommendations. Architected scalable backend using Node.js,
                Express.js, and MongoDB with REST APIs for authentication and
                data persistence. Integrated ML-based personalization as an
                independent microservice, providing real-time user insights
                without impacting core application performance through clean
                service-based architecture.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> Python,
                JavaScript, FastAPI, LightGBM, Gaussian Mixture Models, spaCy,
                LLMs (Groq), RAG, React.js, Express.js, MongoDB
              </p>
              <div className="overlay">
                <MagicButton
                  title="View Code"
                  onClick={() =>
                    window.open(
                      "https://github.com/DevSharma03/LifeSync",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/pMain2.png" alt="Project 2" />
              <div className="project-details">
                <h3>Credit Score Prediction System</h3>
                <p style={{ fontSize: 18 }}>Credit Scoring Model</p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">Credit Score Prediction System</h3>
              <p className="project-description">
                Engineered end-to-end ML pipeline for credit risk prediction
                achieving 92% accuracy with balanced precision-recall across
                risk classes. Optimized model through feature engineering,
                hyperparameter tuning, and class-wise analysis for
                risk-sensitive predictions. Deployed as Dockerized FastAPI
                microservice enabling real-time inference with 77.59% automated
                decision coverage, reducing manual review requirements.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> Python,
                LightGBM (Classification), FastAPI, Docker
              </p>
              <div className="overlay">
                <MagicButton
                  title="View Code"
                  onClick={() =>
                    window.open(
                      "https://github.com/DevSharma03/Credit_Score_Prediction_Model",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/p1.png" alt="Project 2" />
              <div className="project-details">
                <h3>SIA 2.0</h3>
                <p style={{ fontSize: 18 }}>
                  Seqrite Intelligent Assistant 2.0 (In House Major Project at
                  Quick Heal)
                </p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">SIA 2.0</h3>
              <p className="project-description">
                Developed an AI-powered virtual security analyst by creating
                workers, integrating AWSBedrock AI for summarization, and
                deploying microservices (Workers) in AWS Lambda. Modified and
                optimized the core RAG-based LLM routing logic, ensuring
                balanced prompt handling, improved response accuracy by 15%, and
                scalability for enterprise cybersecurity workflows.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> Python, AWS
                Bedrock AI, AWS Lambda, RAG based LLMs, FastAPI, React.js, NLP,
                Prompt Engineering
              </p>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/p2.png" alt="Project 2" />
              <div className="project-details">
                <h3>ATS Resume Analyzer</h3>
                <p style={{ fontSize: 18 }}>
                  Web app that scores resumes against job descriptions.
                </p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">ATS Resume Analyzer</h3>
              <p className="project-description">
                Created an end-to-end NLP-based AI-powered ATS resume analyzer
                with interactive UI to compare resumes against job description.
                Architected a scoring system using NLP pipelines to vectorize,
                compare, and rank resumes with personalized AI-driven feedback.
                Enhanced CV-job alignment through model-based similarity
                analysis and structured insights, enabling more targeted job
                applications.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> Python,
                spaCy, React.js, Node.js, Express.js, MongoDB
              </p>
              <div className="overlay">
                <MagicButton
                  title="View Code"
                  onClick={() =>
                    window.open(
                      "https://github.com/DevSharma03/ApplyXpert",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/p3.png" alt="Project 2" />
              <div className="project-details">
                <h3>Network Analysis Tool</h3>
                <p style={{ fontSize: 18 }}>
                  Web & Machine Learning Based Network Traffic Management And
                  Tracking Tool.
                </p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">Network Analysis Tool</h3>
              <p className="project-description">
                Fortified network security by architecting an end-to-end anomaly
                detection platform, achieving 94% accuracy in identifying
                threats on live traffic. The system leveraged an Isolation
                Forest model deployed via a scalable FastAPI service and
                featured a real-time Leaflet dashboard for immediate incident
                analysis.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> Python, R,
                FastAPI, Isolation Forest, Leaflet
              </p>
              <div className="overlay">
                <MagicButton
                  title="View Code"
                  onClick={() =>
                    window.open(
                      "https://github.com/DevSharma03/Network-Traffic-Detection-Model",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/p4.png" alt="Project 1" />
              <div className="project-details">
                <h3>Portfolio Website</h3>
                <p style={{ fontSize: 18 }}>
                  Personal portfolio built with React & modern UI design.
                </p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">Portfolio Website</h3>
              <p className="project-description">
                This is a modern, responsive portfolio website built using
                React.js. The portfolio showcases personal projects, work
                experience, and skills in an interactive and visually appealing
                way. It is designed with a component-based architecture for
                scalability and maintainability.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> React,
                HTML, CSS, JavaScript, Bootstrap
              </p>
              <div className="overlay">
                <MagicButton
                  title="View Code"
                  onClick={() =>
                    window.open(
                      "https://github.com/DevSharma03/DevPortfolio",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-card-inner">
            <div className="project-card-front">
              <img src="/Project_Images/p5.png" alt="Project 2" />
              <div className="project-details">
                <h3>ERP Platform</h3>
                <p style={{ fontSize: 18 }}>
                  Web application for Student Management with Multi Level
                  Access.
                </p>
              </div>
            </div>

            <div className="project-card-back">
              <h3 className="project-name">ERP Platform</h3>
              <p className="project-description">
                Created a scalable full-stack ERP system for managing student
                and faculty data, including timetables, exams, scores, &
                attendance. Architected and applied RESTful backend APIs using
                Node.js, Express.js, and MongoDB to efficiently handle academic
                records. Implemented JWT and OAuth-based authentication with EJS
                views to ensure secure access and a maintainable user interface.
              </p>
              <p className="teckStack">
                <spam className="teckStack-title">Teck_Stack:</spam> HTML, CSS,
                Javascript, React, Mode.js, Express.js, MongoDB, Git, GitHub,
                RESTful APIs
              </p>
              <div className="overlay">
                <MagicButton
                  title="View Code"
                  onClick={() =>
                    window.open(
                      "https://github.com/DevSharma03/ERP-Website",
                      "_blank",
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
