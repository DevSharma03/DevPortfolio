import { EXPERIENCE_DATA } from "../../src/data/experienceData";

const Experience = () => {
  return (
    <section
      id="journey"
      className="py-32 px-6 md:px-12 border-b border-zinc-800 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        {/* Left */}
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-zinc-100 sticky top-32 leading-[0.9]">
            Operational
            <br />
            <span className="text-zinc-600">History.</span>
          </h2>
        </div>

        {/* Right */}
        <div className="md:col-span-8 space-y-20">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-16 border-l border-zinc-800"
            >
              <div className="absolute top-2 left-[-6px] w-[11px] h-[11px] bg-[#0a0a0a] border-2 border-[#ccff00] rounded-full shadow-[0_0_15px_rgba(204,255,0,0.3)]" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-200 uppercase">
                  {exp.role}
                </h3>

                <span className="font-mono text-xs text-[#ccff00] mt-3 md:mt-0 tracking-widest">
                  {exp.date}
                </span>
              </div>

              <h4 className="text-xl text-zinc-500 font-serif italic mb-6">
                {exp.org}
              </h4>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
