// app/contact/page.tsx
import React from 'react';

export default function ContactPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 dark:bg-gray-900 dark:text-white rounded-lg shadow-lg min-h-[calc(100vh-64px)]">
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-lg mb-4">
        Heb je vragen of wil je samenwerken? Neem gerust contact op!
      </p>
      <div className="mt-8">
        <p className="text-lg font-semibold">Zakelijke e-mail:</p>
        <a href="mailto:jouw.email@example.com" className="text-blue-600 hover:underline dark:text-blue-400">brigitte.dev@gmail.com</a>
      </div>
            <div className="mt-8">
        <p className="text-lg font-semibold">Persoonlijke e-mail:</p>
        <a href="mailto:jouw.email@example.com" className="text-blue-600 hover:underline dark:text-blue-400">brigitteheijkoop@gmail.com</a>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">LinkedIn:</p>
        <a href="https://www.linkedin.com/in/brigitte-h" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">linkedin.com/in/brigitte-h</a>

      </div>
      {/*contactformulier */}
    </div>
  );
}