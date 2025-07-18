// components/sections/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AuroraBackgroundEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden
                    bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950
                    dark:from-black dark:via-gray-900 dark:to-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-custom"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-custom animation-delay-2000-custom"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob-custom animation-delay-4000-custom"></div>
      </div>
      <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-4xl mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <AuroraBackgroundEffect>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300"
      >
        Hi there! I&apos;m Brigitte.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-extralight text-xl md:text-3xl lg:text-4xl text-neutral-200 py-2"
      >
        Software Engineer & Full-Stack Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-base md:text-lg text-neutral-300 mt-4 max-w-2xl"
      >
        A recent graduate gaining hands-on experience in full-stack
        development and actively contributing to professional Scrum teams.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-base md:text-lg text-neutral-300 mt-2 max-w-2xl"
      >
        Currently pursuing an HBO-ICT degree while working as a systems
        developer at the Ministry of Defence. Eager to grow and collaborate
        on innovative technology solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10"
      >
        <Link href="/contact" className="inline-block">
          <button className="px-8 py-4 text-lg rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            Let&apos;s Connect!
          </button>
        </Link>
      </motion.div>
    </AuroraBackgroundEffect>
  );
}