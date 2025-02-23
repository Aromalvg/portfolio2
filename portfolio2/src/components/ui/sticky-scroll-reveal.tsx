"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");
      let closestIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundColors = [
    "var(--black)",
    "var(--black)",
    "var(--black)",
  ];
  const linearGradients = [
    "var(--black)",
    "var(--black)",
    "var(--black)",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="min-h-screen flex flex-col lg:flex-row justify-center relative space-x-10 rounded-md p-10"
    >
      {/* Main Content */}
      <div className="relative flex flex-col px-4">
        {content.map((item, index) => (
          <div key={item.title + index} className="scroll-section my-40">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-2xl font-bold font-serif text-slate-100"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-lg text-slate-500 font-mono max-w-sm mt-10"
            >
              {item.description}
            </motion.p>

            {/* Sticky Content for Small Screens (Directly Below Corresponding Section) */}
            <div
              style={{ background: linearGradients[index % linearGradients.length] }}
              className={cn(
                "h-60 w-full rounded-md bg-white mt-6 p-4 lg:hidden", // Visible only on small screens
                contentClassName
              )}
            >
              {item.content ?? null}
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Content for Large Screens */}
      <div
        style={{ background: linearGradients[activeCard % linearGradients.length] }}
        className={cn(
          "h-80 w-80 rounded-md bg-white top-10 overflow-hidden",
          "lg:sticky lg:block hidden", // Only visible & sticky on large screens
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
