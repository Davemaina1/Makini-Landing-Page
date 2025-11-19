import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [canOverflow, setCanOverflow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          
          // Allow overflow after the animation duration (900ms) + delay
          // This ensures hover shadows/transforms are not clipped
          timeout = setTimeout(() => {
            setCanOverflow(true);
          }, 900 + (delay * 1000));
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (timeout) clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <div ref={ref} style={{ width, position: 'relative', overflow: canOverflow ? 'visible' : 'hidden' }}>
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(75px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};