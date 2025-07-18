// app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white rounded-lg shadow-lg min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg mb-4">
        Hi! I'm Brigitte, a dedicated Software Engineer with a passion for building robust and scalable applications.
        I recently completed my MBO Level 4 Software Development program at Da Vinci College, where I specialized in
        full-stack development and gained hands-on experience in various technologies.
      </p>
      <p className="text-lg mb-4">
        Currently, I'm furthering my education with a part-time HBO-ICT degree at Fontys University of Applied Sciences,
        while simultaneously working as a Systems Developer at the Ministry of Defence. This dual path allows me to
        constantly apply theoretical knowledge in a real-world, high-stakes environment.
      </p>
      <p className="text-lg">
        I thrive in collaborative, Agile environments and love tackling complex problems with innovative solutions.
        My goal is to continuously grow as a developer and contribute to impactful technology projects.
      </p>
    </div>
  );
}