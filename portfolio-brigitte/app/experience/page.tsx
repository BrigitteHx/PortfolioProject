// app/experience/page.tsx
import React from 'react';
import Timeline from '@/components/sections/Timeline'; // Let op: default import
import { experienceData } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <Timeline data={experienceData} />
    </div>
  );
}