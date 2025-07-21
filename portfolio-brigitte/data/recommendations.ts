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
    quote: "Her enthusiasm is contagious and a source of inspiration for others.",
    author: "Team DEPOT",
    title: "Lucrasoft ICT Groep",
  },
  {
    quote: "We have come to know Brigitte as a driven and talented professional in the making, with a strong vision and the ability to put it into practice.",
    author: "Angelique Noordijk",
    title: "Managing Director DEPOT",
  },
  {
    quote: "Her technical contributions were solid, and her commitment and involvement played a significant role in the project’s success.",
    author: "Angelique Noordijk",
    title: "Managing Director DEPOT",
  },
  {
    quote: "As a Scrum Coordinator, Brigitte showed excellent organizational skills, keeping our project on track and ensuring smooth communication within the team. Her proactive approach was invaluable.",
    author: "Project Manager",
    title: "Lucrasoft ICT Groep (DEPOT)",
  },
  {
    quote: "She naturally assumed the role of leader and motivator within the team.",
    author: "Project Manager",
    title: "Lucrasoft ICT Groep (DEPOT)",
  },
  {
    quote: "Ms. Heijkoop performed all tasks to our complete satisfaction and made a positive contribution to our organization.",
    author: "IT Manager",
    title: "M. Flinterman MSc",
  },
  {
    quote: "The quality of her work, her commitment, and her independence exceeded the expectations of what can be expected from an intern.",
    author: "IT Manager",
    title: "M. Flinterman MSc",
  },
  // {
  //   quote: "XXX",
  //   author: "XXX",
  //   title: "XXX",
  // },
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
