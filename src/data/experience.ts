import { Experience } from '@/types';

export const experienceData: Experience[] = [
  {
    id: "binge-consulting",
    company: "Binge Consulting",
    role: "Software Engineer Intern",
    period: "Oct 2026 – Present",
    location: "Mumbai, India",
    isCurrent: true,
    focusArea: "AI-Driven Platforms, Computer Vision (YOLO) & Advertising Workflows",
    bullets: [
      "Contributing to AI-driven products including LeadBridge (automated lead generation and conversion platform) and LeadSign (digital document signing platform), evaluating technical implementation approaches for business requirements.",
      "Developed and trained a YOLO-based person detection model for restaurant CCTV analytics to power operational intelligence.",
      "Engineering Google Ads API integrations to support automated advertising workflows and programmatic campaign optimization."
    ]
  },
  {
    id: "community-tree",
    company: "Community Tree",
    role: "AI/ML Intern",
    period: "Jun 2026 – Sep 2026",
    location: "Mumbai, India",
    isCurrent: false,
    focusArea: "Multilingual RAG Chatbot, Ingestion Pipeline & Automated Event Calendar",
    bullets: [
      "Developed a multilingual RAG-based AI chatbot with streaming responses, enabling natural-language search across 2 years of daily-published community newspaper archives through semantic retrieval.",
      "Built an automated multilingual data ingestion pipeline using Playwright and Gemini Vision OCR, incorporating text cleaning, classification, context-aware chunking, Gemini embeddings, ChromaDB vector storage, and reranking.",
      "Implemented document summarization to generate concise summaries of newspaper articles, improving accessibility to historical community information.",
      "Engineered an automated Event Calendar pipeline to extract, normalize, deduplicate, and enrich events from newspaper articles, with incremental SQLite updates and automated JSON publishing for a dynamic web calendar.",
      "Implemented event filtering, search, sorting, and dedicated event detail pages, enabling structured access to community events by date, location, organization, and category."
    ]
  },
  {
    id: "robokart",
    company: "Robokart",
    role: "Research and Development Engineer Intern",
    period: "June 2024 – July 2024",
    location: "Mumbai, India",
    isCurrent: false,
    focusArea: "STEM Engineering, Hands-On Workshops & GUJHOST Initiative",
    bullets: [
      "Spearheaded technical research and hands-on laboratory modules for STEM engineering workshops.",
      "Facilitated technical sessions under the GUJHOST initiative to train students on practical hardware and software problem solving.",
      "Collaborated with cross-functional engineering leads to streamline workshop curriculum delivery."
    ]
  }
];
