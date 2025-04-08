import './App.css';
import Navbar from "./components/Navbar/navbar.jsx";
import Home from "./components/Home/home.jsx";
import About from "./components/About/about.jsx";
import Projects from "./components/Projects/projects.jsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx";
import Contact from "./components/contact-form/contact-form.jsx";
import Skills from "./components/Skills/skills.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Contact />
    </>
  );
}

export default App;
