// app/recommendations/page.tsx
import React from 'react';
import Recommendations from '@/components/sections/Recommendations'; 

export default function RecommendationsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <Recommendations />
    </div>
  );
}