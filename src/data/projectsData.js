export const PROJECTS_DATA = [
  {
    title: "LifeSync AI",
    tag: "AI-Enabled Life Balance Management Platform",
    year: "Oct '25 — Dec '25",
    desc: "Multi-service AI platform spanning health, finance, mental wellness, and productivity — with a real-time life balance score that updates on every interaction. Automated user modeling via LightGBM + GMM clustering across 45 enriched features, and engineered a context-aware RAG pipeline with Groq AI and LangChain for safe, personalized multi-turn conversations.",
    tech: [
      "Python",
      "LLMs",
      "RAG",
      "LangChain",
      "Prompt Engineering",
      "LightGBM",
      "GMM Model",
      "FastAPI",
      "MongoDB",
      "React.js",
    ],
    github: "https://github.com/DevSharma03/LifeSync",
  },
  {
    title: "Credit Score Prediction System",
    tag: "Production ML Microservice for Credit Risk",
    year: "Sep '25",
    desc: "End-to-end credit risk classifier built with LightGBM, covering the full pipeline from preprocessing and feature engineering to training — achieving 92% accuracy with balanced precision-recall across risk classes. Deployed as a Dockerized FastAPI microservice for real-time inference, with 77.59% automated decision coverage reducing manual review load.",
    tech: ["Python", "LightGBM", "scikit-learn", "FastAPI", "Docker"],
    github: "https://github.com/DevSharma03/Credit_Score_Prediction_Model",
  },
  {
    title: "ApplyXpert",
    tag: "NLP-Powered Resume Scoring Against Job Descriptions",
    year: "Apr '25",
    desc: "Full-stack resume analyzer that vectorizes and compares resumes against job descriptions using NLP pipelines, ranking candidates with personalized AI-driven feedback. Features an interactive React UI with model-based similarity scoring to help users close skill gaps and target applications more precisely.",
    tech: ["Python", "spaCy", "React.js", "Node.js", "Express.js", "MongoDB", "FastAPI", "NLTK"],
    github: "https://github.com/DevSharma03/ApplyXpert",
  },
  {
    title: "Network Analysis Tool",
    tag: "Real-Time Anomaly Detection on Live Network Traffic",
    year: "Nov '2024",
    desc:
      "End-to-end network security platform using an Isolation Forest model to detect threats on live traffic with 94% accuracy. Deployed via FastAPI with a real-time Leaflet dashboard for immediate incident visualization and analysis.",
    tech: ["Python", "R", "FastAPI", "Isolation Forest", "Leaflet"],
    github: "https://github.com/DevSharma03/Network-Traffic-Detection-Model",
  },
];

