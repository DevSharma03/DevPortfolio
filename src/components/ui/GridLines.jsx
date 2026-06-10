import React from "react";
import { Plus } from "lucide-react";

const GridLines = () => (
  <div className="fixed inset-0 z-[-1] pointer-events-none flex justify-between px-6 md:px-12 opacity-20">
    <div className="w-px h-full bg-zinc-800 relative">
      <Plus className="absolute top-1/4 -left-3 text-zinc-700" size={24} />
      <Plus className="absolute top-3/4 -left-3 text-zinc-700" size={24} />
    </div>
    <div className="w-px h-full bg-zinc-800 hidden md:block relative">
      <Plus className="absolute top-1/2 -left-3 text-zinc-700" size={24} />
    </div>
    <div className="w-px h-full bg-zinc-800 hidden lg:block relative">
      <Plus className="absolute top-1/3 -left-3 text-zinc-700" size={24} />
    </div>
    <div className="w-px h-full bg-zinc-800 relative">
      <Plus className="absolute top-2/3 -left-3 text-zinc-700" size={24} />
    </div>
  </div>
);

export default GridLines;
