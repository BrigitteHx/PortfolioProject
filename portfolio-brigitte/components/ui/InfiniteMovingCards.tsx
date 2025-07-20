// components/ui/InfiniteMovingCards.tsx
"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useAnimation, cubicBezier } from "framer-motion";
import { RecommendationQuote } from "@/data/recommendations";

interface InfiniteMovingCardsProps {
  items: RecommendationQuote[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const controls = useAnimation();

  const [start, setStart] = useState(false);
  const [copiedItems, setCopiedItems] = useState<RecommendationQuote[]>([]);
  const [duration, setDuration] = useState(0);

  const get = useCallback(() => {
    if (scrollerRef.current) {
      const contentWidth = scrollerRef.current.scrollWidth;
      
      let speedFactor;
      if (speed === "fast") speedFactor = 0.4;
      else if (speed === "normal") speedFactor = 0.8;
      else speedFactor = 1.2;

      setDuration(contentWidth / 50 * speedFactor); 

      setCopiedItems([...items, ...items]); 
    }
  }, [items, speed]);

  const animateScroll = useCallback(async () => {
    if (!scrollerRef.current) return;

    controls.set({ x: direction === "left" ? 0 : -scrollerRef.current.scrollWidth / 2 });
    
    await controls.start({
        x: direction === "left" ? -scrollerRef.current.scrollWidth / 2 : 0,
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: duration,
                ease: "linear",
            },
        },
    });
  }, [direction, duration, controls]);

  useEffect(() => {
    get();
    setStart(true);
  }, [get]);

  useEffect(() => {
    if (start) {
      animateScroll();
    }
  }, [start, animateScroll]);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
                  dark:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
                  ${className}`}
    >
      <motion.ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap ${
          pauseOnHover && "hover:pause-animation"
        } `}
        animate={controls}
      >
        {copiedItems.map((item, idx) => (
          <li
            className="w-[300px] sm:w-[350px] max-w-full relative rounded-xl p-0.5 overflow-hidden transition-all duration-300 ease-out
                       bg-gradient-to-br from-blue-500 via-transparent to-purple-500
                       dark:from-blue-700 dark:to-purple-900 group flex-shrink-0"
            key={idx}
          >
            {/* GLOWING BORDER EFFECT ON HOVER (zoals bij Skills) */}
            <div className="absolute inset-0 rounded-xl pointer-events-none z-0">
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} // Deze wordt altijd 1 voor pulse
                transition={{ duration: 0.3 }} // Transition op de inner div
                className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,rgba(60,0,255,0.4),rgba(100,0,255,0.4),rgba(60,0,255,0.4))] dark:bg-[linear-gradient(to_right,rgba(60,0,255,0.5),rgba(168,85,247,0.5),rgba(60,0,255,0.5))] animate-border-pulse transition-opacity duration-300 z-0 opacity-0 group-hover:opacity-100"
                ></motion.div>
            </div>
            
            {/* Innerlijke kaart met content */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl h-full p-6 md:p-8 border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between
                            shadow-custom-medium transition-transform duration-300 transform group-hover:scale-[1.01] group-hover:shadow-custom-strong">
                <blockquote className="relative z-10 flex flex-col justify-between h-full">
                    {/* Quote tekst */}
                    <p className="text-base md:text-lg leading-relaxed font-normal text-neutral-700 dark:text-neutral-300 mb-6">
                        &ldquo;{item.quote}&rdquo;
                    </p>
                    
                    {/* Auteur en Titel */}
                    <div className="flex flex-col gap-1 mt-auto">
                        <cite className="text-base font-semibold leading-none text-neutral-900 dark:text-white">
                            {item.author}
                        </cite>
                        <cite className="text-sm leading-none text-neutral-500 dark:text-neutral-400">
                            {item.title}
                        </cite>
                    </div>
                </blockquote>
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};