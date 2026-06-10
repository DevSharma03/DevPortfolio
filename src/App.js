import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactFooter from "./components/Contact";
import CustomCursor from "./components/ui/CustomCursor";
import NoiseOverlay from "./components/ui/NoiseOverlay";
import GridLines from "./components/ui/GridLines";
import "./styles/global.css";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-zinc-200 font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden relative cursor-none">
      <CustomCursor />
      <NoiseOverlay />
      <GridLines />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>

      <ContactFooter />
    </div>
  );
}
