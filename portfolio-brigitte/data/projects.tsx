// data/projects.ts
import React from "react";
import Image from "next/image"; // Zorg dat deze import bovenaan staat

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  technologies: string[];
  features: string[];
  imageUrl: string; // URL naar een projectafbeelding
  liveDemoUrl?: string;
  githubUrl?: string;
  documentsUrl?: string;
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
    imageUrl: "/depot-simulator-screenshot.png", // <--- DIT IS HET CORRECTE PAD
    liveDemoUrl: "JOUW_LIVE_DEMO_URL_HIER", // Vervang door je live demo URL
    githubUrl: "https://github.com/BrigitteHx/20WekenProject.git", // Jouw GitHub repo
    documentsUrl: "JOUW_DOCUMENTATIE_URL_HIER", // Optioneel: Link naar opleverdocument/documentatie
    isFeatured: true,
  },
  // {
  //   id: "project-2-personal",
  //   title: "My Portfolio Website",
  //   subtitle: "React & Tailwind CSS",
  //   description: (
  //     <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
  //       This very website, showcasing my skills and projects using modern web technologies.
  //     </p>
  //   ),
  //   technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
  //   features: ["Responsive Design", "Interactive UI", "Dark Mode (future)"],
  //   imageUrl: "/images/portfolio-screenshot.png", // Screenshot van je portfolio
  //   githubUrl: "https://github.com/BrigitteHx/YOUR_PORTFOLIO_REPO",
  //   liveDemoUrl: "https://your-portfolio-url.com",
  //   isFeatured: false,
  // },
];