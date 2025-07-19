// components/sections/Timeline.tsx
"use client"; // Deze component gebruikt Framer Motion, dus is een Client Component

import React, { useEffect, useRef, useState } from "react";
// Belangrijke imports van Framer Motion:
// motion voor geanimeerde elementen.
// useScroll en useSpring voor de lijnanimatie.
// cubicBezier voor de easing functies.
import { motion, useScroll, useSpring, useTransform, cubicBezier } from "framer-motion";

import { experienceData, TimelineEntry } from "@/data/experience"; // Importeer je data

interface TimelineProps {
  data: TimelineEntry[];
}

export default function Timeline({ data }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null); // Ref voor de container die de hoogte van de scrollable content bepaalt
  const containerRef = useRef<HTMLDivElement>(null); // Ref voor de container die scrollen detecteert voor de lijn
  const [height, setHeight] = useState(0); // State om de hoogte van de scrollable content te bewaren

  // Bepaal de hoogte van de content om de scrollbar te animeren
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
    // Dit effect wordt opnieuw uitgevoerd als de 'data' verandert,
    // wat belangrijk is als je de tijdlijn dynamisch zou laden.
  }, [ref, data]);

  // Monitor scroll progress binnen de 'containerRef' voor de verticale lijn
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"], // Lijnanimatie begint als 10% van de container in beeld is, eindigt op 50%
  });

  // Transformeer scroll progress naar de hoogte van de geanimeerde lijn
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  // Transformeer scroll progress naar de opacity van de geanimeerde lijn
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-black dark:text-white max-w-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          My Journey Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm">
          An overview of my academic and professional development.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item) => ( // Gebruik item.id voor de key
          <div
            key={item.id} // Hier is de unieke key!
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Sticky Jaartal Cirkel aan de linkerzijde */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* De inner cirkel (staat voor het "punt" op de tijdlijn) */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Het jaartal zelf, alleen op desktop */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            {/* Inhoud van het Tijdlijnitem */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Het jaartal op mobiel */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <div className="p-6 rounded-lg shadow-xl bg-neutral-100 dark:bg-neutral-800">
                {item.content}{" "}
              </div>
            </div>
          </div>
        ))}

        {/* De verticale, animerende lijn */}
        <div
          style={{
            height: height + "px", // Zorgt ervoor dat de lijn de hoogte van de content volgt
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent from-[0%] via-[10%] to-[90%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform, // De geanimeerde hoogte
              opacity: opacityTransform, // De geanimeerde opacity
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};