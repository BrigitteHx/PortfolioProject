// components/sections/Skills.tsx
"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { skillsData, SkillCategory } from "@/data/skills"; // `SkillCategory` is nodig, dus niet verwijderen
import { Dot } from "lucide-react";

interface SkillsProps {
  data: SkillCategory[]; // Type de props correct
}

export default function Skills({ data }: SkillsProps) { // Gebruik de SkillsProps interface
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-800 dark:text-white">
          My Toolkit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1,
               transition: { duration: 0.6, delay: index * 0.08, ease: cubicBezier(0.25, 0.1, 0.25, 1) } },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-0.5 rounded-xl transition-all duration-300 ease-out
                 bg-gradient-to-br from-blue-500 via-transparent to-purple-500
                 dark:from-blue-700 dark:to-purple-900 group"
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,rgba(60,0,255,0.4),rgba(100,0,255,0.4),rgba(60,0,255,0.4))] dark:bg-[linear-gradient(to_right,rgba(60,0,255,0.5),rgba(168,85,247,0.5),rgba(60,0,255,0.5))] animate-border-pulse transition-opacity duration-300 z-0 opacity-0 group-hover:opacity-100"
        ></motion.div>
      </div>

      <div className="relative bg-white dark:bg-gray-800 rounded-xl h-full p-6 md:p-8 border border-gray-200 dark:border-gray-700 flex flex-col justify-between
                      shadow-custom-medium transition-transform duration-300 transform group-hover:scale-[1.01] group-hover:shadow-custom-strong">
        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          {category.category}
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 flex-grow">
          {category.skills.map((skill, i) => (
            <li key={i} className="flex items-center text-lg">
              <Dot size={24} className="text-purple-500 mr-1 flex-shrink-0" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-3">
          {category.skills.length} skills
        </div>
      </div>
    </motion.div>
  );
};