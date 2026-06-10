import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) =>
      setPos({
        x: e.clientX,
        y: e.clientY,
      });

    const updateHover = (e) => {
      const isInteractable =
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.closest(".magnetic-wrap") ||
        e.target.closest(".project-row") ||
        e.target.closest("input") ||
        e.target.closest("textarea");

      setIsHovering(!!isInteractable);
    };

    window.addEventListener("mousemove", updateCursor);

    window.addEventListener("mouseover", updateHover);

    return () => {
      window.removeEventListener("mousemove", updateCursor);

      window.removeEventListener("mouseover", updateHover);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-out hidden md:flex items-center justify-center"
      style={{
        transform: `translate3d(${pos.x - (isHovering ? 40 : 8)}px, ${pos.y - (isHovering ? 40 : 8)}px, 0)`,

        width: isHovering ? "80px" : "16px",

        height: isHovering ? "80px" : "16px",
      }}
    >
      <div className="w-full h-full bg-[#ccff00] rounded-full transition-all duration-300 flex items-center justify-center">
        {isHovering && (
          <span className="text-black text-[10px] font-bold tracking-widest uppercase">
            Interact
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
