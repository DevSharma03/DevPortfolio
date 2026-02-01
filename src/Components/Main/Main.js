import "./Main.css";
import MagicButton from "./../Sub_Components/MagicButton/MagicButton";
import { FiSend } from "react-icons/fi";

function Main() {
  const DownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Devashish_Sharma_AIML_Resume.pdf";
    link.download = "Devashish_Sharma_AIML_Resume.pdf";
    link.click();
  };

  return (
    <section id="Home" className="main">
      <p className="subtitle">
        AI/ML DEVELOPER | DATA SCIENCE WIZARD | FULL-STACK CODE NINJA & PROBLEM
        SLAYER
      </p>
      <h1 className="title">
        Transforming Concepts into <br />
        <span className="highlight">Seamless User Experiences</span>
      </h1>
      <p className="description">
        Hi! I'm Devashish Sharma, an AI/ML Developer based in India.
      </p>
      <MagicButton
        title="Download Resume"
        icon={<FiSend />}
        onClick={DownloadResume}
      />
    </section>
  );
}

export default Main;
