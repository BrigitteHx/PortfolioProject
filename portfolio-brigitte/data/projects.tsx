// data/projects.ts
import React from "react";
import Image from "next/image";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  technologies: string[];
  features: string[]; 
  imageUrl: string; 
  liveDemoUrl?: string; 
  githubUrl?: string; 
  linkedinPostUrl?: string; 
  downloadPdfUrl?: string; 
  isFeatured?: boolean; 
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-1-depot",
    title: "Home Battery Simulator",
    subtitle: "Full-stack Web Application (DaVinci College / Lucrasoft Solutions BV)",
    description: (
      <>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
          The "Home Battery Simulator" is a web application developed to help solar panel owners
          simulate how a home battery can optimize their energy management. It provides insights
          into energy storage, consumption, and cost savings, contributing to a more efficient
          and sustainable energy usage. This project was developed using an Agile/Scrum methodology
          in collaboration with Depot Software by Lucrasoft Solutions BV.
        </p>
      </>
    ),
    technologies: [
      "React.js", "Chart.js", "Node.js", "MySQL", "Express.js",
      "Axios", "Bcrypt.js", "JSON Web Tokens", "Nodemailer",
      "HTML", "CSS", "Bootstrap"
    ],
    features: [
      "About Us Page", "Battery & Solar Dashboards", "CAPTCHA", "Contact & Feedback Forms",
      "FAQ", "Login/Logout & Password Reset", "Simulation Dashboard (Interactive Graphs)",
      "User Account Management", "Welcome Page"
    ],
    imageUrl: "/depot-simulator-screenshot.png",
    liveDemoUrl: "https://brigittehx.github.io/DemoDepot/",
    githubUrl: "https://github.com/BrigitteHx/DemoDepot", 
    linkedinPostUrl: "https://www.linkedin.com/posts/activity-7295882286145720320-9QyP?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEKSdeUByppUsmVdIKsQNwpm25ja1zt_st8", // <--- NIEUWE LINKEDIN POST URL
    downloadPdfUrl: "/documents/opleverdocument.pdf",
    isFeatured: true,
  },
  {
    id: "project-2-portfolio", 
    title: "My Developer Portfolio",
    subtitle: "Modern Web Showcase (Self-Built)",
    description: (
      <>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
          This very website serves as my personal developer portfolio, designed and built from scratch
          to showcase my technical skills, projects, and professional journey. It leverages modern
          web development practices to create a dynamic, responsive, and visually appealing user experience.
        </p>
      </>
    ),
    technologies: [
      "Next.js", "React.js", "Tailwind CSS", "Framer Motion", "TypeScript",
      "Responsive Design", "UI/UX Principles"
    ],
    features: [
      "Dynamic Routing", "Interactive Sidebar Navigation", "Animated Hero Section",
      "Scroll-Driven Timeline", "Animated Skill Cards", "Responsive Project Showcase",
      "Dark Mode Support (planned/future)", "Downloadable CV/Documents"
    ],
    imageUrl: "/portfolio-screenshot.png", 
    githubUrl: "https://github.com/BrigitteHx/PortfolioProject", 
    liveDemoUrl: "XXX",
    isFeatured: false, 
  },
{
    id: "project-3-laravel", 
    title: "Laravel Applications Collection",
    subtitle: "Web Applications with PHP & Laravel Framework",
    description: (
      <>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-4">
          A collection of web applications developed using PHP and the Laravel framework.
          These projects demonstrate various aspects of full-stack web development,
          including database interactions, user authentication, and interactive features.
        </p>
      </>
    ),
    technologies: [
      "PHP", "Laravel", "Blade Templating", "Livewire", "MySQL", "PHPMyAdmin",
      "HTML", "CSS", "Bootstrap", "JavaScript"
    ],
    features: [
      "Book Review System",
      "Event Management Platform",
      "Job Board Application",
      "Real-time Livewire Poll App",
      "Task/To-Do List Manager",
      "User Authentication & Authorization",
      "CRUD Operations"
    ],
    imageUrl: "/laravel-apps-screenshot.jpg", 
    githubUrl: "https://github.com/BrigitteHx/LaravelShowcase", 
    isFeatured: false,
  },
];