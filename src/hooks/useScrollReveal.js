import { useEffect, useRef, useState } from "react";

const useScrollReveal = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);

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
      },
    );

    const currentElement = domRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }

      observer.disconnect();
    };
  }, [threshold]);

  return {
    ref: domRef,
    isVisible,
  };
};

export default useScrollReveal;