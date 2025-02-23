import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  images, // Accept an array of image URLs
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  images: string[]; // Change prop type to an array of strings
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const durations = { fast: "5s", normal: "20s", slow: "40s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durations[speed] || "20s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
  ref={scrollerRef}
  className={cn(
    "flex min-w-full shrink-0 py-4 w-max flex-nowrap tracking-tight space-x-[15px]",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {images.map((image, idx) => (
    <li key={idx} className="w-[200px] md:w-[350px] flex-shrink-0">
      <img
        src={image}
        alt={`Scrolling Image ${idx + 1}`}
        className="w-full h-full object-cover rounded-xl border border-slate-700"
      />
    </li>
  ))}
</ul>

    </div>
  );
};
