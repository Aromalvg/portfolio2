"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: React.ReactNode; // Accepts mixed content like strings and JSX
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
  repeat?: boolean; // Add repeat prop
  repeatCount?: number; // Optional: limit the number of repeats
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  repeat = false, // Default is no repeat
  repeatCount = Infinity, // Infinite repeats by default
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const [repeatIndex, setRepeatIndex] = useState(0); // Keep track of repeat count
  const elementRef = useRef<HTMLElement | null>(null);

  // Convert children to string if it's not JSX
  const sanitizedText = typeof children === "string" ? children : String(children);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started || (repeat && repeatIndex >= repeatCount)) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < sanitizedText.length) {
        setDisplayedText(sanitizedText.substring(0, i + 1)); // Incrementally display characters
        i++;
      } else {
        clearInterval(typingEffect);
        // When typing finishes, start the repeat (if enabled)
        if (repeat) {
          setTimeout(() => {
            setRepeatIndex((prev) => prev + 1); // Increment repeat index
            setDisplayedText(""); // Clear the displayed text
            setStarted(true); // Restart the typing animation
          }, 500); // Delay before restart
        }
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [sanitizedText, duration, started, repeat, repeatIndex, repeatCount]);

  // Function to render the text with <br /> tag
  const renderTextWithBreaks = (text: string) => {
    return text.split("\n").map((part, index) => (
      <span key={index}>
        {index > 0 && <br />}
        {part}
      </span>
    ));
  };
  

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {renderTextWithBreaks(displayedText)} {/* Render with breaks */}
    </MotionComponent>
  );
}
