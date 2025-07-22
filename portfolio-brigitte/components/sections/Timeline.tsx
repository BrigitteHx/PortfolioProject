// components/sections/Timeline.tsx
"use client"; // Deze component gebruikt Framer Motion, dus is een Client Component

import React, { useEffect, useRef, useState } from "react";
// Belangrijke imports van Framer Motion:
import { motion, useScroll, useSpring, useTransform, AnimatePresence, cubicBezier } from "framer-motion";
import Link from "next/link"; // Link toegevoegd
import { FileText } from "lucide-react"; // FileText icon toegevoegd

import { experienceData, TimelineEntry } from "@/data/experience"; // Importeer je data

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => { // Export as named export
  const ref = useRef<HTMLDivElement>(null); // Ref voor de container die de hoogte van de scrollable content bepaalt
  const containerRef = useRef<HTMLDivElement>(null); // Ref voor de container die scrollen detecteert voor de lijn
  const [height, setHeight] = useState(0); // State om de hoogte van de scrollable content te bewaren

  // Bepaal de hoogte van de content om de scrollbar te animeren
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
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
      className="w-full bg-gray-50 dark:bg-gray-950 font-sans md:px-10" // Achtergrond consistent
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-800 dark:text-white max-w-4xl mx-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center">
          My Journey Timeline
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-sm mx-auto text-center mb-12">
          An overview of my academic and professional development.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}

        {/* De verticale, animerende lijn (volgens jouw oude structuur) */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent from-[0%] via-[10%] to-[90%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// --- Subcomponent: TimelineItem (voor elk individueel tijdlijnitem) ---
interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Ref voor whileInView animaties

  const cardEntryVariants = {
    hidden: { opacity: 0, y: 50 }, // Basic fade-in/up animatie voor de kaart
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.05, ease: cubicBezier(0.25, 0.1, 0.25, 1) } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardEntryVariants} // Animatie op de hele TimelineItem div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-start pt-10 md:pt-40 md:gap-10" // De layout van jouw oude item
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Sticky Jaartal Cirkel aan de linkerzijde - OUDE STIJL, NU MET GOEDE KLEUREN */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* De inner cirkel (staat voor het "punt" op de tijdlijn) */}
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-gray-200 dark:border-gray-700"> {/* Rand om bolletje */}
          <div className="h-4 w-4 rounded-full bg-blue-500 dark:bg-purple-500 border border-blue-600 dark:border-purple-600 p-2" /> {/* Gekleurd bolletje */}
        </div>
        {/* Het jaartal zelf, alleen op desktop */}
        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-gray-500 dark:text-gray-500 ">
          {item.title}
        </h3>
      </div>

      {/* Inhoud van het Tijdlijnitem - NIEUWE, GAVE STYLING */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Het jaartal op mobiel */}
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-500 dark:text-gray-500">
          {item.title}
        </h3>
        {/* De Kaart met de Content */}
        <div className={`relative p-0.5 rounded-xl overflow-hidden transition-all duration-300 ease-out
                        bg-gradient-to-br from-blue-500 via-transparent to-purple-500 /* Gradiënt rand van buitenaf */
                        dark:from-blue-700 dark:to-purple-900 group`}>
          {/* GLOWING BORDER EFFECT ON HOVER */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,rgba(60,0,255,0.4),rgba(100,0,255,0.4),rgba(60,0,255,0.4))] dark:bg-[linear-gradient(to_right,rgba(60,0,255,0.5),rgba(168,85,247,0.5),rgba(60,0,255,0.5))] animate-border-pulse transition-opacity duration-300 z-0 opacity-0 group-hover:opacity-100"
              ></motion.div>
            )}
          </AnimatePresence>

          {/* Innerlijke kaart met content */}
          <div className="relative bg-white dark:bg-gray-800 rounded-xl h-full p-6 md:p-8 border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between
                          shadow-custom-medium transition-transform duration-300 transform group-hover:scale-[1.01] group-hover:shadow-custom-strong">
            {item.content}{" "}

            {/* Certificaat Link */}
            {item.certificateUrl && (
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <Link href={item.certificateUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md">
                  <FileText size={16} /> View Certificate
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};