export interface ArchitectureNode {
  id: string;
  label: string;
  subtext?: string;
  type: 'input' | 'process' | 'storage' | 'output' | 'router';
  connectsTo?: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  architectureNodes?: ArchitectureNode[];
  github?: string;
  liveDemo?: string;
  featured: boolean;
  disclaimer?: string;
  highlights: string[];
  keyChallenges?: string[];
  learnings?: string[];
  caseStudy?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  focusArea: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface MetricCardData {
  value: string;
  label: string;
  badge?: string;
  platformUrl?: string;
  platformName?: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export interface ActivityData {
  organization: string;
  role: string;
  period?: string;
  verifiedContributions: string[];
  skillsDemonstrated: string[];
}

export interface PortfolioData {
  name: string;
  primaryRole: string;
  secondaryRoles: string[];
  tagline: string;
  coreStatement: string;
  currentStatus: string;
  educationSummary: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    leetcode: string;
    hackerrank: string;
    neetcode: string;
    unstop: string;
    email: string;
  };
}
