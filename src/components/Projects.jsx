import { useState } from "react";
import { ArrowRight, GitBranch } from "lucide-react";
import { PROJECTS_DATA } from "../data/projectsData";

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="builds"
      className="pt-24 pb-32 border-b border-zinc-800 relative bg-[#0a0a0a]"
    >
      {/* Heading */}
      <div className="flex justify-between items-end mb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase text-zinc-100 leading-none">
          Selected
          <br />
          Index.
        </h2>

        <p className="hidden md:block font-mono text-xs text-[#ccff00] uppercase tracking-widest">
          ( 2024 — 2026 )
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col border-t border-zinc-800">
        {PROJECTS_DATA.map((proj, idx) => {
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="project-row group border-b border-zinc-800 py-10 md:py-16 flex flex-col justify-center cursor-pointer px-6 md:px-12 transition-all duration-1000 relative overflow-hidden"
            >

              {/* Content */}
              <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row md:items-start justify-between">
                {/* Left */}
                <div className="flex items-baseline gap-6 md:gap-12 mb-6 md:mb-0 w-full md:w-auto">
                  <span
                    className={`font-mono text-sm transition-colors duration-500 ${
                      isHovered ? "text-[#ccff00]" : "text-zinc-600"
                    }`}
                  >
                    0{idx + 1}
                  </span>

                  <div className="flex flex-col flex-1">
                    <h3
                      className={`text-3xl md:text-6xl font-bold tracking-tighter transition-all duration-500 ease-out uppercase ${
                        isHovered ? "text-white translate-x-4" : "text-zinc-300"
                      }`}
                    >
                      {proj.title}
                    </h3>

                    {/* Hover Content */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isHovered
                          ? "grid-rows-[1fr] opacity-100 mt-8 md:ml-4"
                          : "grid-rows-[0fr] opacity-0 mt-0 md:ml-0"
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col xl:flex-row gap-8 items-start pt-2">
                        <div className="flex-1 max-w-6xl">
                          <p className="text-zinc-300 text-lg font-serif italic mb-6 leading-relaxed border-l border-[#ccff00] pl-4">
                            {proj.desc}
                          </p>

                          {/* Tech */}
                          <div className="flex flex-wrap gap-3 mb-8">
                            {proj.tech.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono tracking-widest uppercase border border-zinc-700 px-4 py-2 rounded-full text-[#ccff00] bg-black/50"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-8 relative z-20">
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-[#ccff00] transition-colors"
                            >
                              <GitBranch size={18} />
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-between w-full md:w-auto gap-8 md:gap-16 mt-6 md:mt-0 shrink-0">
                  <div className="flex flex-col text-left md:text-right">
                    <span
                      className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                        isHovered ? "text-[#ccff00]" : "text-zinc-500"
                      }`}
                    >
                      {proj.tag}
                    </span>
                    <span className="font-mono text-sm text-zinc-600 mt-1">
                      {proj.year}
                    </span>
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color,width,height] duration-500 ${
                      isHovered
                        ? "w-16 h-14 bg-[#ccff00] text-black border-[#ccff00] -rotate-45 scale-110"
                        : "size-16 aspect-square border-zinc-700 text-zinc-500"
                    }`}
                  >
                    <ArrowRight size={24} className="shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
