// data/recommendations.ts
export interface RecommendationQuote {
  quote: string;
  author: string;
  title: string; 
}

export interface FullRecommendation {
  id: string; 
  company: string;
  role: string; 
  date?: string; 
  pdfUrl: string; 
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
    quote: "Ms. Heijkoop performed all tasks to our complete satisfaction and made a positive contribution to our organization.",
    author: "IT Manager",
    title: "M. Flinterman MSc",
  },
  {
    quote: "The quality of her work, her commitment, and her independence exceeded the expectations of what can be expected from an intern.",
    author: "IT Manager",
    title: "M. Flinterman MSc",
  },
  {
    quote: "Brigitte is a pleasure to work with. She's dedicated, detail-oriented, and always willing to help, ensuring tasks are completed efficiently and on time.",
    author: "Former classmate",
    title: "Esma K.",
  },
  // {
  //   quote: "XXX",
  //   author: "XXX",
  //   title: "XXX",
  // },
];

export const fullRecommendations: FullRecommendation[] = [
  {
    id: "rec-2-lucrasoft",
    company: "Lucrasoft ICT Groep (DEPOT)",
    role: "Full-stack Software Development, Scrum Coordinator",
    date: "February 2025",
    pdfUrl: "/documents/recommendations/Recommendation_Lucrasoft_DEPOT.pdf", 
  },
  {
    id: "rec-1-mod",
    company: "Ministry of Defence",
    role: "Full-stack Software Development Intern",
    date: "January 2024",
    pdfUrl: "/documents/recommendations/Recommendation_MOD_Internship.pdf", 
  },
];
