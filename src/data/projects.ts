import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: "community-tree-rag",
    title: "Multilingual Community Archive RAG & Event Engine",
    tagline: "Multilingual Archival Ingestion, Gemini Vision OCR, ChromaDB RAG & Automated Event Calendar",
    period: "Jun 2026 – Sep 2026",
    description: "AI-powered multilingual information retrieval and event management system developed during an AI/ML internship at Community Tree (whose multi-community platform serves 1.15 lakh+ overall daily active users across several communities, with the Vagad community representing an estimated ~50K–100K population). Built to process 2 years of daily-published Gujarati Vagad Patrika newspaper archives using Playwright and Google Gemini Vision OCR, storing 768-dimensional normalized embeddings in ChromaDB (7,020 chunks locally indexed) with semantic reranking and streaming responses. Operates a dual delivery model: an interactive Streamlit RAG chatbot with document summarization for archival search, and an automated event engine publishing 1,739 canonical events into SQLite and web feeds with dedicated event detail pages engineered for planned integration into the main Community Tree app.",
    problem: "Accessing information across two years of daily-published historical Vagad Patrika newspaper PDFs was hindered by legacy scanned documents, complex multi-column layouts, mixed Gujarati and English text, and outdated font encodings (SHREE-GUJ7) where direct text copying yielded garbled characters. Traditional keyword search failed across language boundaries and phrasing variations, while event announcements were scattered across hundreds of issues without centralized tracking.",
    solution: "Architected a dual-delivery production pipeline: (1) An interactive Multilingual RAG Chatbot (demonstrated via Streamlit) featuring streaming responses, automated document summarization, and semantic reranking, powered by Playwright and PyMuPDF rasterization at 300 DPI, Google Gemini Vision OCR with an automated 15-key round-robin rotation pool, context-aware semantic chunking, and 768-dimensional Gemini embeddings (models/gemini-embedding-001) in ChromaDB; and (2) An Automated Event Calendar engine extracting structured event entities, normalizing event dates, deduplicating records across 270 newspaper editions in an authoritative SQLite database (data/vagad_events.db), and publishing a canonical events.json feed with dedicated event detail pages engineered for planned integration into Community Tree's main mobile and web application.",
    stack: [
      "Python",
      "Google Gemini API",
      "ChromaDB",
      "SQLite",
      "Playwright",
      "PyMuPDF",
      "Streamlit",
      "MySQL",
      "JavaScript"
    ],
    liveDemo: "https://multilingual-community-rag-1.streamlit.app/",
    github: "https://github.com/kavyagada20/Multilingual-Community-RAG",
    featured: true,
    caseStudy: true,
    architectureImage: "/images/projects/community-rag-architecture.jpg",
    highlights: [
      "Engineered for Community Tree's multi-community platform ecosystem (1.15L+ platform-wide DAU across multiple community groups), focusing on 2 years of daily-published Vagad community archival records (~50K–100K demographic)",
      "Automated multilingual data ingestion pipeline combining Playwright and Gemini Vision OCR (gemini-flash-latest, gemini-3.1-flash-lite) with automated 15-key round-robin rotation for complex Gujarati multi-column layouts",
      "RAG chatbot architecture with streaming responses, document summarization, and semantic reranking over 768-dimensional Gemini embeddings in ChromaDB (7,020 chunks locally indexed)",
      "Automated Event Calendar pipeline extracting, normalizing, deduplicating, and enriching 1,739 canonical events across 270 newspaper sources into SQLite and canonical events.json, engineered for planned integration into the main Community Tree application",
      "Interactive event filtering, search, sorting, and dedicated event detail pages with 14/14 passing automated tests in pytest (tests/test_event_calendar.py)",
      "Dual delivery architecture combining an interactive Streamlit RAG research demo with a structured JSON/SQLite event publisher ready for app integration"
    ],
    architectureNodes: [
      { id: "1", label: "Patrika PDFs", subtext: "Playwright Ingestion & Scans", type: "input", connectsTo: ["2"] },
      { id: "2", label: "Gemini Vision OCR", subtext: "PyMuPDF 300 DPI + 15-Key Pool", type: "process", connectsTo: ["3a", "3b"] },
      { id: "3a", label: "Clean, Classify & Chunk", subtext: "core/ Modules & Summarization", type: "process", connectsTo: ["4a"] },
      { id: "3b", label: "Event Extractor", subtext: "event_calendar/ Engine", type: "process", connectsTo: ["4b"] },
      { id: "4a", label: "ChromaDB & Reranking", subtext: "768-Dim Gemini Embeddings (7k Chunks)", type: "storage", connectsTo: ["5"] },
      { id: "4b", label: "SQLite DB", subtext: "data/vagad_events.db (1.7k Events)", type: "storage", connectsTo: ["5"] },
      { id: "5", label: "Query Router", subtext: "core/query_router.py Intent Filter", type: "router", connectsTo: ["6"] },
      { id: "6", label: "Gemini LLM", subtext: "Streaming RAG QA & Guardrails", type: "process", connectsTo: ["7"] },
      { id: "7", label: "App & Web Delivery", subtext: "App Event Feed (JSON) & Streamlit Demo", type: "output" }
    ],
    keyChallenges: [
      "Resolving legacy Gujarati font encodings (SHREE-GUJ7) and noisy scanned layouts where direct text extraction failed",
      "Eliminating offline OCR latency bottlenecks (~45–90s/page) by migrating to concurrent Google Gemini Vision OCR with multi-key rate-limit rotation",
      "Deduplicating multi-day and recurring event announcements across 270 newspaper editions while strictly separating publication dates from event dates",
      "Maintaining state-tracked incremental execution and resumability across multi-stage ingestion pipelines without duplicating database or vector entries"
    ],
    learnings: [
      "Gemini Vision OCR delivers superior accuracy over traditional offline OCR on dense, multi-column Indic layouts with mixed typography",
      "Dual-store architecture (SQLite relational + ChromaDB vector) outperforms pure vector search by enabling deterministic date and entity filtering",
      "Automated API key round-robin rotation successfully mitigates rate-limiting barriers during high-volume batch document extraction",
      "Decoupling the structured event feed (for planned app integration) from the exploratory conversational interface simplifies deployment paths"
    ]
  },
  {
    slug: "multi-agent-job-application-agent",
    title: "Multi-Agent Job Application Agent",
    tagline: "Autonomous Multi-Agent Application & Resume Tailoring Workflow",
    period: "June to Sept 2026",
    description: "An autonomous multi-agent engineering workflow designed to research target companies, analyze job descriptions against user resumes, calculate candidate match scores, and craft highly targeted application materials.",
    problem: "Tailoring job applications manually for dozens of roles is extremely time-consuming, highly repetitive, and often fails to capture company-specific nuances or keyword requirements.",
    solution: "Engineered an agentic workflow orchestration system using specialized AI agents (Research, Analysis, Tailoring, Writing) operating sequentially with real-time web search, STAR method resume bullet customization, automated DOCX generation, and one-click ZIP export.",
    stack: [
      "Python",
      "Flask",
      "Groq LLM",
      "Tavily Search API",
      "Tailwind CSS",
      "REST APIs"
    ],
    github: "https://github.com/kavyagada20/Job-Application-Agent",
    featured: true,
    caseStudy: true,
    highlights: [
      "Multi-agent AI system calculating 0–100% candidate-job match score and identifying skill gaps",
      "STAR-based resume bullet tailoring aligned directly with target job descriptions",
      "Generates cover letters, recruiter outreach emails, LinkedIn InMails, and STAR interview prep guides",
      "Automated DOCX customized resume generation with one-click ZIP package export"
    ],
    architectureNodes: [
      { id: "1", label: "Job & Resume Input", subtext: "URL / Job Description", type: "input", connectsTo: ["2"] },
      { id: "2", label: "Company Research Agent", subtext: "Tavily Search API", type: "process", connectsTo: ["3"] },
      { id: "3", label: "Resume Analysis Agent", subtext: "Skill & Gap Extraction", type: "process", connectsTo: ["4"] },
      { id: "4", label: "Tailoring Agent", subtext: "Keyword Alignment", type: "process", connectsTo: ["5"] },
      { id: "5", label: "Cover Letter Agent", subtext: "Groq LLM Engine", type: "process", connectsTo: ["6"] },
      { id: "6", label: "Final Tailored Package", subtext: "Customized Resume & Letter", type: "output" }
    ],
    keyChallenges: [
      "Preventing hallucination in agent research steps by enforcing Tavily verification",
      "Managing token context windows across chained agent executions",
      "Designing clean UI states for multi-step async agent progress"
    ],
    learnings: [
      "Decomposing complex tasks into specialized single-purpose agents yields far higher quality than single long prompts",
      "Low-latency inference providers like Groq enable interactive multi-agent web apps",
      "Strict JSON outputs between agents eliminate parsing failures"
    ]
  },
  {
    slug: "aquascan",
    title: "AquaScan — Aquatic Waste & Pollution Reporting System",
    tagline: "AI-Assisted Aquatic Waste Detection & Environmental Reporting Platform",
    period: "Oct 2025 – Jun 2026",
    description: "An end-to-end applied AI and full-stack platform combining a decoupled computer vision (YOLO) microservice, multimodal Gemini Vision fallback, Node.js REST orchestration, role-based citizen and committee workflows, and automated gamification.",
    problem: "Aquatic waste and water pollution frequently go unaddressed due to high reporting friction, a lack of automated severity classification, and the absence of structured, actionable data for municipal cleanup committees.",
    solution: "Engineered a dual-tier AI reporting platform where users submit pollution sightings through a mobile-first web interface. A dedicated Python/FastAPI microservice runs YOLO inference to detect waste items and evaluate pollution severity. For edge cases (blurry images, low confidence, or non-aquatic scenes), the backend orchestrates a multimodal vision fallback using Google Gemini 2.5 Flash before structuring report data for municipal cleanup tracking and citizen gamification.",
    stack: [
      "React (Vite)",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "YOLO (Ultralytics)",
      "Google Gemini Vision",
      "OpenCV",
      "REST APIs",
      "Docker"
    ],
    featured: true,
    caseStudy: true,
    architectureImage: "/images/projects/aquascan-architecture.png",
    highlights: [
      "Decoupled AI Microservice: Engineered a standalone Python FastAPI service serving a fine-tuned YOLO model for real-time aquatic debris detection.",
      "Hybrid Heuristic + LLM Fallback: Implemented OpenCV Laplacian blur analysis and HSV water-surface masking, automatically cascading to Google Gemini 2.5 Flash when YOLO confidence drops below 0.6.",
      "Dynamic Severity & Urgency Scoring: Created algorithmic post-processing to compute waste density and coverage, translating raw bounding boxes into standardized municipal severity metrics (Low, Medium, High).",
      "Dual-Perspective Operational Workflows: Built synchronized portals for citizen reporting and municipal committee dispatch, with status histories (Submitted → Under Review → In Progress → Resolved).",
      "Gamification Engine: Integrated automated impact scoring (35 pts/report) with dynamic tier calculation across 6 citizen levels (Wayfinder to Eternal)."
    ],
    architectureNodes: [
      { id: "1", label: "User App (React / SPA)", subtext: "Photo Capture & Geolocation", type: "input", connectsTo: ["2"] },
      { id: "2", label: "Backend API (Node + Express)", subtext: "Orchestration & Gamification", type: "process", connectsTo: ["3", "4"] },
      { id: "3", label: "ML Microservice (FastAPI)", subtext: "YOLO Debris & Severity Scoring", type: "process", connectsTo: ["5"] },
      { id: "4", label: "Fallback Engine", subtext: "OpenCV Blur & Gemini 2.5 Flash", type: "router", connectsTo: ["5"] },
      { id: "5", label: "Operations Portal", subtext: "Lifecycle Tracking & Cleanup Ops", type: "output" }
    ],
    keyChallenges: [
      "Handling False Positives & Ambiguous Imagery: Standard object detection models often trigger false alarms on non-water backgrounds or blurry water reflections. Solved by implementing an OpenCV water-ratio pre-filter combined with a vision model fallback.",
      "Microservice Communication & Payload Handling: Coordinated multipart image stream forwarding between Express and FastAPI with in-memory buffering to minimize disk I/O bottlenecks.",
      "Mobile-First Responsive Experience: Designed an app-like mobile viewport with reactive client-side state synchronization for fast field-reporting performance."
    ],
    learnings: [
      "Decoupling compute-heavy PyTorch/YOLO inference from web request routing prevents event-loop blocking and ensures predictable backend response times.",
      "Multimodal fallback pipelines drastically improve system resilience against real-world user photography edge cases.",
      "Clear visual progression (badges, streaks, impact counters) turns passive reporting into an engaging civic habit."
    ]
  },
  {
    slug: "healthcare-ai-assistant",
    title: "Intelligent Healthcare Assistance System",
    tagline: "AI-Powered Document Analysis & Symptom Assistance",
    period: "Dec 2025",
    description: "An AI-assisted document parsing and symptom analysis platform for extracting insights from medical reports and providing preliminary guidance.",
    problem: "Unstructured medical PDFs and clinical lab reports contain complex medical jargon that patients struggle to interpret prior to medical consultations.",
    solution: "Developed an AI-powered healthcare web application that analyzes user symptoms and uploaded blood report PDFs to provide structured, non-diagnostic health guidance with safety guardrails.",
    stack: [
      "HTML5 / CSS3",
      "JavaScript",
      "Google Gemini API",
      "Python",
      "PyMuPDF",
      "REST APIs"
    ],
    github: "https://github.com/kavyagada20/sehatseva",
    liveDemo: "https://sehatseva.netlify.app/",
    featured: true,
    caseStudy: true,
    disclaimer: "For demo and educational purposes only. Not a medical diagnostic substitute.",
    highlights: [
      "PDF medical report extraction and structured biomarker parsing",
      "Symptom assessment workflow generating urgency levels and specialist recommendations",
      "Interactive results dashboard displaying blood report insights and hospital guidance",
      "Strict safety guardrails ensuring non-diagnostic advisory bounds"
    ],
    architectureNodes: [
      { id: "1", label: "Medical PDF / Report", subtext: "Lab Results / Symptoms", type: "input", connectsTo: ["2"] },
      { id: "2", label: "PDF Extraction Engine", subtext: "PyMuPDF Text Extractor", type: "process", connectsTo: ["3"] },
      { id: "3", label: "Gemini Analysis Engine", subtext: "Medical Concept Extraction", type: "process", connectsTo: ["4"] },
      { id: "4", label: "Safety & Disclaimer Filter", subtext: "Rule-Based Guardrails", type: "router", connectsTo: ["5"] },
      { id: "5", label: "Interactive Health Dashboard", subtext: "Structured Insights UI", type: "output" }
    ],
    keyChallenges: [
      "Enforcing rigid non-diagnostic disclaimers in LLM output generation",
      "Parsing varied PDF formatting across lab test vendors",
      "Ensuring responsive rendering of complex lab value tables"
    ],
    learnings: [
      "AI in healthcare must always operate within advisory boundaries with prominent disclaimers",
      "Regex combined with LLM extraction handles unformatted report data efficiently"
    ]
  }
];
