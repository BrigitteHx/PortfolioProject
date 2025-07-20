// data/recommendations.ts
export interface RecommendationQuote {
  quote: string;
  author: string;
  title: string; // Functie/relatie van de auteur
}

export interface FullRecommendation {
  id: string; // Unieke ID voor de sleutel
  company: string;
  role: string; // Jouw rol tijdens deze aanbeveling
  date?: string; // Optioneel: Datum van de aanbeveling
  pdfUrl: string; // Pad naar de PDF in de public/documents map
}

export const recommendationQuotes: RecommendationQuote[] = [
  {
    quote: "Brigitte is an exceptionally driven and collaborative software engineer. Her ability to quickly grasp complex concepts and integrate seamlessly into our Scrum team was remarkable. She delivered high-quality work consistently.",
    author: "Team Lead Agile Dev",
    title: "Ministry of Defence",
  },
  {
    quote: "Her problem-solving skills and commitment to continuous learning are truly impressive. Brigitte brought a positive energy to our daily stand-ups and retrospectives, fostering a great team spirit.",
    author: "Senior Software Engineer",
    title: "Lucrasoft ICT Groep",
  },
  {
    quote: "Brigitte excelled in her full-stack internship, demonstrating strong proficiency in both .NET C# and Angular. Her dedication to testing and documentation was exemplary, contributing significantly to project quality.",
    author: "Manager Software Development",
    title: "Ministry of Defence (Internship)",
  },
  {
    quote: "As a Scrum Coordinator, Brigitte showed excellent organizational skills, keeping our project on track and ensuring smooth communication within the team. Her proactive approach was invaluable.",
    author: "Project Manager",
    title: "Lucrasoft ICT Groep (DEPOT)",
  },
  // Voeg hier meer quotes toe! Probeer ze kort en krachtig te houden.
];

export const fullRecommendations: FullRecommendation[] = [
  {
    id: "rec-1-mod",
    company: "Ministry of Defence",
    role: "Full-stack Software Development Intern",
    date: "July 2025",
    pdfUrl: "/documents/recommendations/Recommendation_MOD_Internship.pdf", // <--- PLAATS HIER DE PDF
  },
  {
    id: "rec-2-lucrasoft",
    company: "Lucrasoft ICT Groep (DEPOT)",
    role: "Full-stack Software Development, Scrum Coordinator",
    date: "August 2025",
    pdfUrl: "/documents/recommendations/Recommendation_Lucrasoft_DEPOT.pdf", // <--- PLAATS HIER DE PDF
  },
  // Voeg meer volledige aanbevelingen toe!
];
