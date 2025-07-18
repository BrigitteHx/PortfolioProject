// app/recommendations/page.tsx
import React from 'react';

export default function RecommendationsPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white rounded-lg shadow-lg min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl font-bold mb-6">Recommendations</h1>
      <p className="text-lg mb-4">
        Wat anderen over mijn werk en samenwerking zeggen.
        Deze sectie zal mijn aanbevelingen van teamleiders en collega's bevatten.
      </p>
      {/* moving cards/testimonials component */}
    </div>
  );
}