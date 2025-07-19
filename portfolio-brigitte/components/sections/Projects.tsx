// components/sections/Projects.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, BookOpen, Check } from "lucide-react"; // Icons voor links en features

import { projectsData, ProjectItem } from "@/data/projects";

interface ProjectsProps {
  data: ProjectItem[];
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-gray-800 dark:text-white">
          My Projects
        </h2>

        {data.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1,
               transition: { duration: 0.7, delay: index * 0.15, ease: cubicBezier(0.25, 0.1, 0.25, 1) } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-xl p-0.5 overflow-hidden transition-all duration-300 ease-out
                  bg-gradient-to-br from-blue-500 via-transparent to-purple-500
                  dark:from-blue-700 dark:to-purple-900 group mb-12`}
      style={{
        boxShadow: project.isFeatured ? '0 0 40px rgba(60, 0, 255, 0.3), 0 0 20px rgba(100, 0, 255, 0.2)' : 'none',
      }}
    >
      {/* GLOWING BORDER EFFECT ON HOVER */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,rgba(60,0,255,0.4),rgba(100,0,255,0.4),rgba(60,0,255,0.4))] dark:bg-[linear-gradient(to_right,rgba(60,0,255,0.5),rgba(168,85,247,0.5),rgba(60,0,255,0.5))] animate-border-pulse transition-opacity duration-300 z-0"
          />
        )}
      </AnimatePresence>

      <div className="relative bg-white dark:bg-gray-800 rounded-xl h-full p-8 md:p-10 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8 shadow-md transition-transform duration-300 transform group-hover:scale-[1.01] group-hover:shadow-xl">
        {/* Project Afbeelding (VERTICAAL FORMAAT) */}
        <div className="flex-shrink-0 md:w-1/3 lg:w-1/4"> {/* Aangepaste breedte voor verticale afbeelding */}
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={300} // Pas de breedte aan, zodat hij in de w-1/3 past
            height={500} // Pas de hoogte aan voor verticale verhouding (bijv. 300x500 of 200x400)
            className="rounded-lg object-cover w-full h-auto max-h-[400px] md:max-h-full shadow-md border border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Project Details */}
        <div className="flex-grow md:w-2/3 lg:w-3/4"> {/* Aangepaste breedte voor de tekst */}
          <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-lg text-blue-600 dark:text-blue-400 mb-4 font-semibold">
            {project.subtitle}
          </p>
          {project.description}

          {/* Technologies */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Realized Features */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Features:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300 text-base">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={18} className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveDemoUrl && (
              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md">
                <ExternalLink size={20} /> Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-md">
                <Github size={20} /> GitHub Repo
              </Link>
            )}
            {project.documentsUrl && (
              <Link href={project.documentsUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md">
                <BookOpen size={20} /> Documentation
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};