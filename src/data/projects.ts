import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: "community-tree-rag",
    title: "Multilingual Community Archive RAG & Event Engine",
    tagline: "End-to-End Archival Ingestion, OCR, Dual-Store Retrieval & Event DB",
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
    highlights: [
      "Multilingual OCR pipeline handling noisy scanned community PDF archives",
      "Dual-store retrieval strategy: Vector embeddings (ChromaDB) + Relational metadata (SQLite)",
      "Smart query router dynamically delegating factual SQL filters vs. semantic RAG queries",
      "Interactive Streamlit production demo serving live archival queries"
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
    tagline: "Multi-Agent Workflow Automation System",
    description: "An autonomous multi-agent engineering workflow designed to research target companies, analyze job descriptions against user resumes, and craft highly targeted application materials.",
    problem: "Tailoring job applications manually for dozens of roles is extremely time-consuming, highly repetitive, and often fails to capture company-specific nuances or keyword requirements.",
    solution: "Engineered an agentic workflow orchestration system using specialized AI agents (Research, Analysis, Tailoring, Writing) operating sequentially with real-time web search and fast LLM synthesis.",
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
      "Sequential multi-agent workflow architecture with specialized prompt contracts",
      "Real-time company intelligence retrieval via Tavily Search API integration",
      "High-throughput inference leveraging Groq Llama-3 acceleration",
      "Clean Flask REST backend paired with responsive Tailwind UI"
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
    slug: "healthcare-ai-assistant",
    title: "Intelligent Healthcare Assistance System",
    tagline: "AI-Powered Document Analysis & Symptom Assistance",
    description: "An AI-assisted document parsing and symptom analysis platform for extracting insights from medical reports and providing preliminary guidance.",
    problem: "Unstructured medical PDFs and clinical lab reports contain complex medical jargon that patients struggle to interpret prior to medical consultations.",
    solution: "Developed an intelligent document analysis tool that ingests medical reports, extracts key biomarkers and diagnoses via Gemini LLM, and presents simplified, structured summaries with safety guardrails.",
    stack: [
      "Python",
      "Google Gemini API",
      "PyMuPDF",
      "REST APIs",
      "HTML5 / CSS3",
      "JavaScript"
    ],
    github: "https://github.com/kavyagada20/sehatseva",
    liveDemo: "https://sehatseva.netlify.app/",
    featured: true,
    caseStudy: true,
    disclaimer: "For demo and educational purposes only. Not a medical diagnostic substitute.",
    highlights: [
      "PDF medical report extraction and structured text parsing",
      "Symptom assessment workflow with intelligent follow-up prompts",
      "Safety disclaimers and strictly scoped non-diagnostic advisory bounds",
      "Clean web interface for instant report uploads and summaries"
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
