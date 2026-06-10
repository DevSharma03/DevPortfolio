import useScrollReveal from "../../src/hooks/useScrollReveal";

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="manifesto"
      className="!pt-14 py-32 md:py-48 px-6 md:px-12 border-b border-zinc-800 relative overflow-hidden"
    >
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Big Heading */}
        <p className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tight text-zinc-500 leading-tight">
          <span
            className={`inline-block transition-all duration-1000 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            I don't just train
          </span>{" "}
          <span
            className={`inline-block text-zinc-100 transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            heavy machine learning models.
          </span>{" "}
          <span
            className={`inline-block transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            I architect the
          </span>{" "}
          <span
            className={`inline-block text-[#ccff00] font-serif italic pr-2 transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            entire stack
          </span>{" "}
          <span
            className={`inline-block transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            to put them seamlessly into production.
          </span>
        </p>

        {/* Divider */}
        <div
          className={`h-px bg-zinc-800 mt-20 w-full origin-left transition-transform duration-1000 delay-500 ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12 pt-16">
          {/* Card 1 */}
          <div
            className={`group transition-all duration-700 delay-[600ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-2 h-px bg-[#ccff00] group-hover:w-8 transition-all duration-300"></span>
              01. CORE IDENTITY
            </h4>

            <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-200 transition-colors">
              AI Engineer with 1.5 years of hands-on experience as intern
              building production-ready ML systems, LLM pipelines, and agentic
              AI applications with complex architectures.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`group transition-all duration-700 delay-[700ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-2 h-px bg-[#ccff00] group-hover:w-8 transition-all duration-300"></span>
              02. ARSENAL
            </h4>

            <ul className="text-zinc-400 text-lg space-y-2 group-hover:text-zinc-200 transition-colors">
              <li>Python, React.js, FastAPI</li>
              <li>Machine Learning & Deep Learning</li>
              <li>Generative AI, LangChain, LangGraph</li>
              <li>Docker, AWS (Lambda, Bedrock), MLOps</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div
            className={`group transition-all duration-700 delay-[800ms] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h4 className="font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-6 flex items-center gap-4">
              <span className="w-2 h-px bg-[#ccff00] group-hover:w-8 transition-all duration-300"></span>
              03. METRICS
            </h4>

            <p className="text-zinc-400 text-lg leading-relaxed group-hover:text-zinc-200 transition-colors">
              Backed by 1.5+ years of hands-on experience across 3 industry
              internships, 20+ projects, and published research, I transform
              complex ideas into intelligent, production-ready AI solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
