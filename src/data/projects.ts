import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: "community-tree-rag",
    title: "Multilingual Community Archive RAG & Event Engine",
    tagline: "End-to-End Archival Ingestion, OCR, Dual-Store Retrieval & Event DB",
    period: "Jan 2026 – Present",
    description: "Production-grade archival RAG pipeline processing scanned, multilingual newsletters and historical community documents into semantic vector stores and structured relational database events.",
    problem: "Community newsletters and archives contain scanned, non-searchable, multilingual documents (Gujarati, Hindi, English). Extracting event timelines, historical records, and precise context manually was error-prone and unscalable.",
    solution: "Built a dual-path document processing workflow featuring PaddleOCR preprocessing, semantic chunking with vector embeddings in ChromaDB, structured event extraction into SQLite, and a smart query router backed by Gemini for contextual QA.",
    stack: [
      "Python",
      "Streamlit",
      "Google Gemini API",
      "ChromaDB",
      "SQLite",
      "PaddleOCR",
      "PyMuPDF"
    ],
    liveDemo: "https://multilingual-community-rag-1.streamlit.app/",
    github: "https://github.com/kavyagada20/Multilingual-Community-RAG",
    featured: true,
    caseStudy: true,
    architectureImage: "/images/projects/community-rag-architecture.jpg",
    highlights: [
      "Automated multi-agent ingestion pipeline handling noisy scanned community PDF archives (Vagad Patrika)",
      "Dual-store retrieval strategy: Vector embeddings (ChromaDB) + Relational metadata (SQLite)",
      "Smart query router dynamically delegating factual SQL filters vs. semantic RAG queries",
      "Interactive Streamlit production demo serving live archival queries with page & date citations"
    ],
    architectureNodes: [
      { id: "1", label: "Patrika PDFs / Images", subtext: "Scanned Archive Documents", type: "input", connectsTo: ["2"] },
      { id: "2", label: "OCR & Text Cleaning", subtext: "PaddleOCR + PyMuPDF", type: "process", connectsTo: ["3a", "3b"] },
      { id: "3a", label: "Semantic Chunker", subtext: "Contextual Chunking", type: "process", connectsTo: ["4a"] },
      { id: "3b", label: "Event Extractor", subtext: "Structured Event Parser", type: "process", connectsTo: ["4b"] },
      { id: "4a", label: "ChromaDB", subtext: "Vector Store (Embeddings)", type: "storage", connectsTo: ["5"] },
      { id: "4b", label: "SQLite DB", subtext: "Structured Event DB", type: "storage", connectsTo: ["5"] },
      { id: "5", label: "Smart Query Router", subtext: "Hybrid Retrieval Engine", type: "router", connectsTo: ["6"] },
      { id: "6", label: "Gemini LLM", subtext: "RAG Answer Generation", type: "process", connectsTo: ["7"] },
      { id: "7", label: "Streamlit UI", subtext: "User Interface", type: "output" }
    ],
    keyChallenges: [
      "Handling OCR noise and multi-column layouts in legacy scanned newsletters",
      "Balancing exact event date filtering with semantic similarity search",
      "Optimizing query routing latencies for low-resource deployment on Streamlit Cloud"
    ],
    learnings: [
      "Hybrid search (relational + vector) vastly outperforms pure vector search for event-based queries",
      "Robust document cleaning prior to chunking prevents embedding degradation",
      "Structuring prompt outputs into JSON schemas simplifies database insertions"
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
    description: "An end-to-end applied AI + full-stack platform combining computer vision (YOLO) for aquatic waste detection, REST APIs, role-based workflows for citizens and authorities, report tracking, and gamification.",
    problem: "Water pollution and aquatic waste often go unreported or untracked due to friction in reporting mechanisms, lack of structured data for cleanup authorities, and absence of automated severity classification.",
    solution: "Built an AI-assisted reporting platform where users upload pollution images, automated YOLO-based computer vision models analyze waste severity, and structured reports are stored with location geotags and routed to municipal authorities with status tracking and cleanup workflows.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "YOLO",
      "OpenCV",
      "Vite",
      "REST APIs"
    ],
    featured: true,
    caseStudy: true,
    architectureImage: "/images/projects/aquascan-architecture.png",
    highlights: [
      "AI-assisted aquatic waste reporting platform using computer vision (YOLO) to analyze pollution images",
      "Generates structured environmental reports enriched with geotag location metadata and severity scoring",
      "Authentication and role-based access control (RBAC) for citizens and municipal authorities",
      "Comprehensive dashboards with report tracking, cleanup management workflows, user badges, and impact points"
    ],
    architectureNodes: [
      { id: "1", label: "User App (React / Mobile)", subtext: "Image Upload & Geotag", type: "input", connectsTo: ["2"] },
      { id: "2", label: "Backend API (Node + Express)", subtext: "Auth & Report Service", type: "process", connectsTo: ["3", "4"] },
      { id: "3", label: "ML Service (FastAPI + YOLO)", subtext: "Object Detection & Severity", type: "process", connectsTo: ["4"] },
      { id: "4", label: "Database (MongoDB)", subtext: "Reports, Users & Analytics", type: "storage", connectsTo: ["5"] },
      { id: "5", label: "Dashboard & Operations Panel", subtext: "User & Committee Portals", type: "output" }
    ],
    keyChallenges: [
      "Optimizing YOLO object detection latency for diverse water body and waste lighting conditions",
      "Managing asynchronous ML inference calls from the Node.js Express backend API",
      "Designing responsive, real-time tracking portals for both citizen reporters and municipal cleanup committees"
    ],
    learnings: [
      "Decoupling heavy ML inference services (FastAPI/Python) from web backend APIs (Node/Express) ensures high system scalability",
      "Gamification mechanics (badges, points, streaks) significantly increase user participation in environmental reporting"
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
