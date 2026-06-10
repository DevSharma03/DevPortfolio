import { MoveRight } from "lucide-react";
import MagneticElement from "./ui/MagneticElement";
import useMousePosition from "../../src/hooks/useMousePosition";

const Hero = () => {
  const mousePos = useMousePosition();
  return (
    <section
      id="index"
      className="min-h-screen flex flex-col justify-end p-6 pb-12 md:p-12 relative border-b border-zinc-800 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#ccff00]/10 rounded-full blur-[130px] pointer-events-none transition-transform duration-1000 ease-out mix-blend-screen"
        style={{
          transform: `translate(${
            (mousePos.x -
              (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) *
            0.08
          }px,
            
            ${
              (mousePos.y -
                (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) *
              0.08
            }px)`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 animate-fade-in-up">
          {/* Left Text */}
          <div className="font-mono text-sm uppercase tracking-widest text-zinc-400 max-w-sm border-l border-[#ccff00] pl-4">
            <p className="text-[#ccff00] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-pulse" />
              System Online
            </p>
            Architecting intelligent models & seamless full-stack interfaces.
            Based in Pune, IN.
          </div>

          {/* Scroll Circle */}
          <MagneticElement
            className="magnetic-wrap cursor-pointer"
            strength={0.4}
          >
            <a
              href="https://drive.google.com/file/d/1igPckjFLiUZDzLDGPZFd0vNOC2byh3T3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-500 group overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-[#ccff00] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0" />
              <span className="relative z-10 font-mono text-xs uppercase tracking-widest group-hover:-rotate-45 transition-transform duration-500 flex flex-col items-center gap-2">
                Resume
                <MoveRight size={16} className="rotate-90" />
              </span>
            </a>
          </MagneticElement>
        </div>

        {/* Main Heading */}
        <h1 className="text-[13vw] leading-[0.85] font-bold tracking-tighter text-zinc-100 uppercase pb-4">
          <div className="overflow-hidden">
            <div className="animate-slide-up-mask inline-block">Devashish</div>
          </div>

          <div className="overflow-hidden">
            <div className="animate-slide-up-mask animation-delay-200 text-transparent custom-stroke inline-block hover:text-white transition-colors duration-700">
              Sharma
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
