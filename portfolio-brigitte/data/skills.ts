// data/skills.ts
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      "C#",
      "Python",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "C++"
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "ASP.NET Core Minimal API",
      "Entity Framework",
      "Refit",
      "WireMock",
      "FluentValidation",
      "React.js",
      "Node.js",
      "Bootstrap",
      "MVVM",
      "MVC"
    ]
  },
  {
    category: "Databases & Data Handling",
    skills: [
      "MySQL",
      "Entity Framework Core",
      "JSON"
    ]
  },
  {
    category: "Security & Privacy",
    skills: [
      "Data minimization principles",
      "Error handling & logging",
      "Security protocols"
    ]
  },
  {
    category: "Version Control & CI/CD",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "Git branching strategies",
      "CI/CD Pipelines"
    ]
  },
  {
    category: "Testing Tools",
    skills: [
      "Integration testing",
      "Swagger/OpenAPI",
      "Manual & automated testing",
      "AAA Testing pattern"
    ]
  },
  {
    category: "Development Methodologies",
    skills: [
      "Agile",
      "Scrum",
      "Scrum Master experience",
      "MS Teams",
      "Skype for Business",
      "SAP"
    ]
  },
  {
    category: "Courses & Certifications",
    skills: [
      "Udemy – Laravel (Beginner & Intermediate)",
      "Udemy – ASP.NET Core Minimal API Development – Full Build",
      "Udemy – C# Basics & OOP (Intermediate)",
      "Internal sessions – GitLab, Sigrid (code quality analysis)"
    ]
  },
];