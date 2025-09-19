// data/experience.ts
import React from "react";
import Image from "next/image"; // Zorg dat deze import er is als je Image gebruikt in je content

// Definieer de structuur van een tijdlijnitem met React.ReactNode voor content
export interface TimelineEntry {
  id: string; // Unieke ID
  title: string; // Het jaartal of periode (bijv. "2024", "2022-2023")
  content: React.ReactNode; // De daadwerkelijke content voor de kaart, inclusief beschrijving, details, etc.
  certificateUrl?: string; // NIEUW: Optioneel veld voor certificaat link
}

// Jouw Ervaring & Opleiding Data
export const experienceData: TimelineEntry[] = [
  {
    id: "exp-1",
    title: "July 2025 - Now",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Systems Developer @ Ministry of Defence</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
         Actively engaged in full-stack development in a government setting. Responsible for developing, maintaining, and setting up different roles in the area of work methodologies within the development team.
        </p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1 mb-4">
          <li>Working in and shaping Agile/Scrum teams</li>
          <li>Developing with C#/.NET for the backend</li>
          <li>Contributing to secure and scalable solutions</li>
          <li>Bridging data and people with complementary data analyst tasks.</li>
        </ul>
      </div>
    ),
  },

  {
    id: "exp-2",
    title: "September 2025 - Now",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>HBO-ICT (Parttime) @ Fontys University of Applied Sciences</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Continuing academic development alongside my work, focused on in-depth IT knowledge and applications.</p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1">
          <li>Deepening knowledge in software and cloud architecture</li>
          <li>Project-based work, teamwork, and business</li>
          <li>Understanding and applying principles of cybersecurity</li>
        </ul>
      </div>
    ),
  },

    {
    id: "exp-udemy-business-analysis-2025", // Nieuwe ID
    title: "September 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Udemy Certificate: Fundamentals of Business Analysis</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Foundations of business analysis, including stakeholder engagement, requirements gathering, modeling, presenting, and management.
        </p>
      </div>
    ),
    certificateUrl: "https://www.udemy.com/certificate/UC-41166b8c-cf4c-47be-b473-b90fb44614df/",
  },
  
  {
    id: "exp-4",
    title: "February 2025 - July 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Intern Full Stack Software Development @ Ministery of Defence</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Full-time internship full stack software developer working with .NET C# and Angular, including testing, documentation, and agile/scrum collaboration.
        </p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1 mb-4">
          <li>Worked with ASP.NET Core (Minimal API) and C# for backend development</li>
          <li>Developed frontend components using Angular and TypeScript</li>
          <li>Used Entity Framework Core for database interaction</li>
          <li>Collaborated in an Agile/Scrum team environment</li>
          <li>Applied CI/CD practices using Azure DevOps</li>
          <li>Implemented and maintained Swagger API documentation</li>
          <li>Contributed to system integration testing and quality assurance</li>
        </ul>
      </div>
    ),
  },
  {
    id: "exp-udemy-minimal-api-2025", // Nieuwe ID
    title: "February 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Udemy Certificate: ASP.NET Core Minimal API - Full Build</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Comprehensive course on building robust APIs with ASP.NET Core Minimal API.
        </p>
      </div>
    ),
    certificateUrl: "https://www.udemy.com/certificate/UC-ceccf419-f6f0-4af2-bcce-7a56014a706f/",
  },

{
    id: "exp-udemy-csharp-intermediate-2023", // Nieuwe ID
    title: "February 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Udemy Certificate: C# Intermediate</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Intermediate level course focusing on advanced C# concepts and best practices.
        </p>
      </div>
    ),
    certificateUrl: "https://www.udemy.com/certificate/UC-a3ca029a-328f-48dd-8e94-a113a908191e/",
  },

  {
    id: "exp-udemy-csharp-basics-2023", // Nieuwe ID
    title: "February 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Udemy Certificate: C# Basics & OOP</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Foundational course covering C# basics and Object-Oriented Programming (OOP) principles.
        </p>
      </div>
    ),
    certificateUrl: "https://www.udemy.com/certificate/UC-c337f6af-511f-4650-bf75-2b986497b58f/",
  },
  
  {
    id: "exp-5",
    title: "September 2024 - February 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Full-stack Software Development, Scrum Coordinator @ Lucrasoft ICT Groep</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Full-time project work at DEPOT (Lucrasoft Solutions BV) as part of a school-based work-learning track, focused on delivering a complete software solution in an Agile setting.
        </p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1">
          <li>Developed full-stack solution using React.js (frontend) and Node.js (backend)</li>
          <li>Led the Scrum process and fulfilled tasks as Scrum coordinator</li>
          <li>Applied Agile practices and SDLC methodologies</li>
          <li>Created technical schematics such as wireframes, ERDs, and user flow charts</li>
          <li>Collaborated intensively in a multidisciplinary team</li>
          <li>Utilized JSON data structures and version control with GitHub</li>
          <li>Implemented Model-View-ViewModel (MVVM) and applied MVC patterns</li>
        </ul>
      </div>
    ),
  },

  {
    id: "exp-6",
    title: "August 2023 - January 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Full-time Software Development Intern @ Ministerie van Defensie (JIVC / COMMIT)</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          Orientation internship (Aug 2023 – Jan 2024) at the Data Exchange Office (DEO), focusing on secure data exchange solutions in a formal and professional Agile environment.
        </p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1">
          <li>Developed and tested secure backend components using Python</li>
          <li>Applied security protocols for safe data communication</li>
          <li>Worked in Agile/Scrum sprints with cross-functional teams</li>
          <li>Contributed to documentation and stakeholder communication</li>
          <li>Used GitLab for version control and project collaboration</li>
          <li>Explored Lua for scripting and integration tasks</li>
        </ul>
      </div>
    ),
  },

  {
    id: "exp-3",
    title: "August 2023 - June 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>MBO Level 4 Software Development @ Da Vinci College</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
Completed education with a focus on practical skills in software development, including both frontend and backend techniques.
        </p>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1">
          <li>Frontend development with HTML, CSS, and Bootstrap</li>
          <li>Backend development using Laravel and MVC principles</li>
          <li>Database design and management with MySQL and phpMyAdmin</li>
          <li>Version control with Git and GitHub</li>
          <li>User Experience Design (UX) and collaboration skills</li>
        </ul>
      </div>
    ),
  },

  {
    id: "exp-udemy-laravel-2024", // Nieuwe ID
    title: "April 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
          <strong>Udemy Certificate: Laravel (Beginner & Intermediate)</strong>
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
          In-depth learning of the Laravel PHP framework for web application development.
        </p>
      </div>
    ),
    certificateUrl: "https://www.udemy.com/certificate/UC-3d3432be-cd2d-460d-9aee-9c9eafbf5db8/",
  },
  
];