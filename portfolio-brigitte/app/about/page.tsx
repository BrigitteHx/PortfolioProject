// app/about/page.tsx
"use client";

import React, { useState } from 'react'; // useState is nu nodig voor hover effecten
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence ook toegevoegd
import { Star, StarHalf, Circle } from 'lucide-react'; // Circle icon voor de What Drives Me dots

// Helper component om sterren te renderen (licht aangepast)
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill(0).map((_, i) => (
        <Star key={`full-${i}`} size={18} fill="currentColor" className="text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf key="half" size={18} fill="currentColor" className="text-yellow-400" />}
      {Array(emptyStars).fill(0).map((_, i) => (
        <Star key={`empty-${i}`} size={18} className="text-gray-300 dark:text-gray-600" />
      ))}
    </div>
  );
};


export default function AboutPage() {
  // Staat voor hover-effect op de profielfoto
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-800 dark:text-white">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Jouw Profielfoto - VERFIJNDE STYLING */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-shrink-0 relative rounded-full p-1.5 overflow-hidden
                       group transition-all duration-300 ease-out"
            onHoverStart={() => setIsPhotoHovered(true)}
            onHoverEnd={() => setIsPhotoHovered(false)}
          >
            {/* Achtergrond gradiënt die pulseert op hover (net als Skills card) */}
            <AnimatePresence>
              {isPhotoHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,rgba(99,102,241,0.5),rgba(168,85,247,0.5),rgba(255,0,255,0.5))]
                             dark:bg-[linear-gradient(to_right,rgba(99,102,241,0.5),rgba(168,85,247,0.5),rgba(255,0,255,0.5))]
                             animate-border-pulse transition-opacity duration-300 z-0"
                ></motion.div>
              )}
            </AnimatePresence>
            
            {/* Foto Container - met een schaduw die de glow reflecteert */}
            <div className="relative rounded-full border-4 border-gray-200 dark:border-gray-700
                            shadow-lg group-hover:shadow-xl transition-shadow duration-300 z-10">
              <Image
                src="/brigitte-profile.jpg"
                alt="Brigitte's Professional Profile"
                width={250}
                height={250}
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* De Tekstinhoud */}
          <div className="flex-grow text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4 text-gray-700 dark:text-gray-300"
            >
              Hi! I&apos;m Brigitte, a dedicated Software Engineer with a passion for building robust and scalable applications.
              I recently completed my MBO Level 4 Software Development program at Da Vinci College, where I specialized in
              full-stack development and gained hands-on experience in various technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4 text-gray-700 dark:text-gray-300"
            >
              Currently, I&apos;m furthering my education with a part-time HBO-ICT degree at Fontys University of Applied Sciences,
              while simultaneously working as a Systems Developer at the Ministry of Defence. This dual path allows me to
              constantly apply theoretical knowledge in a real-world, high-stakes environment.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4 text-gray-700 dark:text-gray-300"
            >
            </motion.p>
          </div>
        </div>

        {/* What Drives Me Section - VERFIJNDE STYLING */}
        <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Kaart 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md
                               border border-gray-200 dark:border-gray-700
                               group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                    {/* Bovenste dot voor decoratie */}
                    <Circle size={24} className="absolute top-4 left-4 text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" />
                    
                    <h3 className="text-xl font-semibold mb-2 mt-8 text-gray-800 dark:text-white">Continuous Learning</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        The tech landscape is always evolving, and I&apos;m passionate about staying current with new technologies and best practices. I actively seek out courses, read industry blogs, and experiment with new tools.
                    </p>
                    {/* Subtiele achtergrond gradiënt op hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </motion.div>

                {/* Kaart 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md
                               border border-gray-200 dark:border-gray-700
                               group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                    {/* Bovenste dot voor decoratie */}
                    <Circle size={24} className="absolute top-4 left-4 text-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" />
                    
                    <h3 className="text-xl font-semibold mb-2 mt-8 text-gray-800 dark:text-white">Collaborative Innovation</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        I believe the best solutions come from diverse perspectives and strong teamwork. I enjoy contributing to a positive team dynamic and fostering an environment where ideas can flourish.
                    </p>
                    {/* Subtiele achtergrond gradiënt op hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                </motion.div>
            </div>
        </div>

        {/* Beyond Code Section */}
        <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Beyond Code</h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            >
              In my free time, I love staying active; you&apos;ll often find me at the gym or out running.
              Additionally, I spend my Saturdays at the stables, where I&apos;ve enjoyed horseback riding since I was a child.
              I also love going out with my friends or getting lost in an exciting book.
            </motion.p>
        </div>

        {/* Language Proficiency - OPGEFLEURD & GROTER */}
        <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Language Proficiency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto"> {/* max-w-2xl voor meer ruimte */}
                {[
                    { language: "English", rating: 4 },
                    { language: "Dutch", rating: 5 },
                    { language: "German", rating: 3 },
                    { language: "French", rating: 3 },
                    { language: "Italian", rating: 1 },
                    { language: "Portuguese", rating: 1 },
                    { language: "Danish", rating: 1 },
                ].map((lang, index) => (
                    <motion.div
                        key={lang.language}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md flex flex-col items-center justify-center
                                   border border-gray-200 dark:border-gray-700
                                   transition-all duration-300 hover:scale-[1.03] hover:shadow-xl
                                   min-h-[100px]" // Min-hoogte om de boxen gelijk te houden
                    >
                        <span className="text-xl font-medium mb-2 text-gray-800 dark:text-white">{lang.language}</span> {/* Grotere tekst */}
                        <StarRating rating={lang.rating} />
                    </motion.div>
                ))}
            </div>
        </div>

      </div> {/* End of max-w-4xl mx-auto */}
    </div>
  );
}