"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          y: 0, // Slide up effect
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap gap-2">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0 inline-block"
              initial={{ opacity: 0, y: 20 }} // Start slightly below
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn("font-bold", className)}
      ref={containerRef} // Attach the ref here for scroll detection
    >
      <div className="mt-4">
        <div className="dark:text-white text-white text-sm sm:text-xl md:text-2xl  tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
