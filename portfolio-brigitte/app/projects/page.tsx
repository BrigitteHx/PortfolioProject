// app/projects/page.tsx
import React from 'react';
import Projects from '@/components/sections/Projects'; 
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white rounded-lg shadow-lg">
      
      <Projects data={projectsData} />
    </div>
  );
}