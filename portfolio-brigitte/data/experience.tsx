// data/experience.ts
import React from "react";
import Image from "next/image";


export interface TimelineEntry {
  title: string; 
  content: React.ReactNode; 
}

export const experienceData: TimelineEntry[] = [
  {
    title: "Heden", 
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
    title: "2025 - Heden",
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
    title: "2023 - 2025",
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
  title: "February - July 2025",
  content: (
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-2">
        <strong>Intern Full Stack Software Development @ Ministery of Defence</strong>
      </p>
      <p className="text-neutral-700 dark:text-neutral-300 text-xs mb-4">
        Full-time internship full stack software developer working with .NET C# and Angular, including testing, documentation, and agile/scrum collaboration.
      </p>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-xs space-y-1">
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
  title: "2024 – 2025",
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
  title: "2023 – 2024",
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
}
];