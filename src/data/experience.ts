import { Experience } from '@/types';

export const experienceData: Experience[] = [
  {
    id: "community-tree",
    company: "Community Tree",
    role: "AI/ML Intern",
    period: "June 2026 – Present",
    location: "Mumbai, India",
    isCurrent: true,
    focusArea: "RAG-Based AI Chatbot, Document Ingestion, OCR & Vector Search",
    bullets: [
      "Building production archival RAG systems and ingestion pipelines for scanned multilingual documents.",
      "Engineered OCR document extraction using PaddleOCR and PyMuPDF to parse low-quality community newsletters.",
      "Implemented semantic chunking, embedding generation, and vector similarity search in ChromaDB.",
      "Integrated SQLite relational database to extract, store, and query structured community events alongside unstructured semantic search."
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
