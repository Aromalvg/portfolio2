"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffectBlack = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the text is visible
      }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="80%"
      height="80%"
      viewBox="0 0 700 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className || ""}`}    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          <stop offset="0%" stopColor={"var(--yellow-500)"} />
          <stop offset="25%" stopColor={"var(--red-500)"} />
          <stop offset="50%" stopColor={"var(--blue-500)"} />
          <stop offset="75%" stopColor={"var(--cyan-500)"} />
          <stop offset="100%" stopColor={"var(--violet-500)"} />
        </linearGradient>
      </defs>

      {/* Gradient Stroke */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold fill-transparent text-7xl"
      >
        {text}
      </text>

      {/* White Fill on Scroll */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-[helvetica] font-bold fill-black text-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: duration ?? 5, ease: "easeInOut" }}
      >
        {text}
      </motion.text>
    </svg>
  );
};
