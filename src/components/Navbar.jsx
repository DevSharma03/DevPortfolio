const Navbar = () => (
  <nav
    className="navbar-blur fixed top-0 left-0 right-0 z-50 h-[65px] px-6 flex justify-between items-center font-mono text-sm uppercase tracking-widest text-zinc-200"
    aria-label="Main navigation"
  >
    <a
      href="#index"
      className="font-bold flex items-center gap-2 group shrink-0 h-full"
    >
      <div className="w-2 h-2 bg-[#ccff00] rounded-full group-hover:scale-150 transition-transform duration-300" />
      Devashish.AI
    </a>

    <div className="hidden md:flex items-center gap-10 h-full">
      {["Index", "Manifesto", "Builds", "Journey", "Connect"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="relative h-full flex items-center overflow-hidden group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            {item}
          </span>

          <span className="absolute left-0 top-full text-[#ccff00] group-hover:-translate-y-full transition-transform duration-300">
            {item}
          </span>
        </a>
      ))}
    </div>
  </nav>
);

export default Navbar;
