import { PortfolioData, EducationData, ActivityData, MetricCardData } from '@/types';

export const portfolioMeta: PortfolioData = {
  name: "Kavya Gada",
  primaryRole: "AI/ML Engineer",
  secondaryRoles: ["Software Engineer", "AI Engineer", "Agentic AI Engineer"],
  tagline: "Building intelligent systems, RAG pipelines, AI agents, and production software applications.",
  coreStatement: "Building intelligent systems, RAG pipelines, AI agents, and production software applications.",
  currentStatus: "Currently building AI systems @ Community Tree",
  educationSummary: "B.Tech Artificial Intelligence & Machine Learning · DJSCE · Mumbai",
  location: "Mumbai, India",
  socialLinks: {
    github: "https://github.com/kavyagada20",
    linkedin: "https://www.linkedin.com/in/kavyagada",
    leetcode: "https://leetcode.com/u/kavyagada/",
    hackerrank: "https://www.hackerrank.com/profile/kavyagada20",
    neetcode: "https://neetcode.io/user/QuantumKaiba236",
    unstop: "https://unstop.com/u/kavyagad3674",
    email: "mailto:kavyagada[NEEDS_INPUT]@example.com", // [NEEDS INPUT] placeholder until user provides exact address
  },
};

export const educationData: EducationData = {
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  institution: "Dwarkadas J. Sanghvi College of Engineering (DJSCE)",
  location: "Mumbai, India",
  period: "2023 – Present",
  cgpa: "7.552 / 10",
};

export const activityData: ActivityData = {
  organization: "TEDx DJSCE",
  role: "Marketing Co-Committee",
  verifiedContributions: [
    "Secured ₹6,000 food stall sponsorship",
    "Secured 160+ books sponsorship",
    "Built and curated custom sponsor database",
    "Implemented automated web scraping & bulk email outreach workflows"
  ],
  skillsDemonstrated: [
    "Outreach Automation",
    "Web Scraping",
    "Database Curation",
    "Technical Communication",
    "Team Organization"
  ]
};

export const metricCards: MetricCardData[] = [
  {
    value: "100+",
    label: "Algorithmic Problems Solved",
    badge: "Problem Solving",
    platformUrl: "https://leetcode.com/u/kavyagada/",
    platformName: "LeetCode"
  },
  {
    value: "5★",
    label: "HackerRank SQL",
    badge: "Databases & Querying",
    platformUrl: "https://www.hackerrank.com/profile/kavyagada20",
    platformName: "HackerRank"
  },
  {
    value: "SQL 50",
    label: "LeetCode Badge",
    badge: "Database Optimization",
    platformUrl: "https://leetcode.com/u/kavyagada/",
    platformName: "LeetCode"
  },
  {
    value: "Active",
    label: "Competitive Programming",
    badge: "Data Structures & Algos",
    platformUrl: "https://neetcode.io/user/QuantumKaiba236",
    platformName: "NeetCode & Unstop"
  }
];
