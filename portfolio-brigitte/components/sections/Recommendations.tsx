// components/sections/Recommendations.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Link is hier niet nodig in de hoofdcomponent, dus verwijderd.
import { ChevronDown, FileText } from "lucide-react"; // Icons
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards"; // Importeer je nieuwe component
import { recommendationQuotes, fullRecommendations, FullRecommendation } from "@/data/recommendations"; // `FullRecommendation` toegevoegd

// Geen props voor Recommendations component, dus geen interface
export default function Recommendations({}) { // Geen props
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-800 dark:text-white">
          What Others Say
        </h2>

        {/* Infinite Moving Cards voor Quotes */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-700 dark:text-gray-300">Quick Impressions</h3>
          <InfiniteMovingCards
            items={recommendationQuotes}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="flex justify-center"
          />
        </div>

        {/* Accordion voor Volledige Aanbevelingen (PDF Downloads) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-700 dark:text-gray-300">Full Recommendations (PDF)</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {fullRecommendations.map((rec, index) => (
              <AccordionItem key={rec.id} recommendation={rec} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface AccordionItemProps {
  recommendation: FullRecommendation;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ recommendation, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-lg font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <span>
          {recommendation.company} - {recommendation.role}
          {recommendation.date && <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({recommendation.date})</span>}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} className="text-gray-600 dark:text-gray-300" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-5 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Click below to download the full recommendation letter from {recommendation.company}.
            </p>
            <a href={recommendation.pdfUrl} download
               className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200">
              <FileText size={20} /> Download PDF
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};