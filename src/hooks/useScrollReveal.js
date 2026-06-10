import {
  useEffect,
  useRef,
  useState,
} from "react";

const useScrollReveal = (threshold = 0.15) => {
  const [isVisible, setIsVisible] =
    useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            observer.unobserve(entry.target);
          }
        });
      },

      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (domRef.current)
      observer.observe(domRef.current);

    return () => {
      if (domRef.current)
        observer.unobserve(domRef.current);
    };
  }, [threshold]);

  return {
    ref: domRef,
    isVisible,
  };
};

export default useScrollReveal;
