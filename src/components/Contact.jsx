import { useState } from "react";
import { ArrowUpRight, MoveRight } from "lucide-react";
import MagneticElement from "./ui/MagneticElement";
import { DATA } from "../../src/data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScAORAYUguGH6wFlV52-Qndg3lHxH_YFsdHHIPlP6KiHNcWQg/formResponse";

    const formDataToSubmit = new FormData();

    formDataToSubmit.append("entry.1796866374", formData.name);
    formDataToSubmit.append("entry.2042212280", formData.email);
    formDataToSubmit.append("entry.1275965416", formData.message);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <footer
      id="connect"
      className="pt-32 pb-12 px-6 md:px-12 relative overflow-hidden bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        {/* Top Label */}
        <p className="font-mono text-xs text-[#ccff00] uppercase tracking-widest mb-16 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse" />
          Open for new opportunities
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[15vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter text-zinc-100 uppercase mb-6 group cursor-pointer w-max">
              <span className="block group-hover:text-transparent group-hover:custom-stroke transition-all duration-500">
                Let's
              </span>

              <span className="block text-transparent custom-stroke group-hover:text-white transition-all duration-500">
                Talk
              </span>
            </h2>

            <p className="text-zinc-400 text-lg max-w-sm mt-8">
              Whether you have a technical challenge, a project in mind, or just
              want to connect.
            </p>
          </div>

          {/* Right Form */}
          <div className="flex items-center">
            <form
              className="w-full flex flex-col gap-8 relative z-10"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="NAME // ALIAS"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-100 font-mono text-sm uppercase placeholder:text-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="group relative">
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="COMM LINK // EMAIL"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-100 font-mono text-sm uppercase placeholder:text-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="group relative">
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="TRANSMISSION DATA // MESSAGE"
                  className="w-full bg-transparent border-b border-zinc-800 py-4 text-zinc-100 font-mono text-sm uppercase placeholder:text-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors resize-none"
                />
              </div>

              {isSubmitted && (
                <p className="text-[#ccff00] font-mono text-xs uppercase tracking-widest">
                  ✓ Transmission Successful
                </p>
              )}

              {/* Button */}
              <MagneticElement className="magnetic-wrap self-start">
                <button
                  type="submit"
                  className="px-10 py-5 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-500 font-mono text-xs uppercase tracking-widest font-bold group"
                >
                  Transmit
                  <MoveRight
                    size={16}
                    className="ml-3 group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </MagneticElement>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full border-t border-zinc-800 pt-12">
          {/* Socials */}
          <div className="flex gap-6">
            {DATA.socials.map(({ icon: Icon, url }, index) => (
              <MagneticElement
                key={index}
                className="magnetic-wrap"
                strength={0.3}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold"
                >
                  <Icon size={24} />
                </a>
              </MagneticElement>
            ))}
          </div>

          {/* Email */}
          <a
            href={`mailto:${DATA.email}`}
            className="group flex items-center gap-4 text-xl md:text-2xl font-bold tracking-tight text-zinc-400 hover:text-zinc-100 transition-colors uppercase"
          >
            {DATA.email}

            <ArrowUpRight
              size={28}
              className="text-[#ccff00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>

          {/* Copyright */}
          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest text-center md:text-right">
            <p>Devashish Sharma © {new Date().getFullYear()}</p>

            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
