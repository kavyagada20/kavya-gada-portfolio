import React from 'react';
import { Cpu, Code, Target } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { EngineeringPillarCard } from '@/components/about/engineering-pillar-card';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="BACKGROUND & PILLARS"
          title="ABOUT"
          subtitle="I am an early-career AI/ML Engineer with a B.Tech in Artificial Intelligence & Machine Learning from DJSCE, Mumbai. I specialize in building practical RAG pipelines, multi-agent workflows, and document intelligence systems grounded in solid computer science fundamentals."
        />

        {/* 3 Engineering Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EngineeringPillarCard
            title="AI & AGENTIC SYSTEMS"
            subtitle="RAG & Agent Architectures"
            icon={Cpu}
            items={[
              "Production RAG pipelines",
              "Multi-agent workflows",
              "Ingestion & OCR",
              "Vector search",
              "ChromaDB"
            ]}
          />

          <EngineeringPillarCard
            title="CORE SOFTWARE ENG"
            subtitle="Systems & CS Fundamentals"
            icon={Code}
            items={[
              "Python & C++",
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Database Management Systems",
              "MySQL & SQLite",
              "Operating Systems"
            ]}
          />

          <EngineeringPillarCard
            title="CURRENT FOCUS"
            subtitle="Active Engineering Goals"
            icon={Target}
            items={[
              "RAG systems",
              "Document intelligence",
              "Structured event extraction",
              "AI agents",
              "LLM applications"
            ]}
          />
        </div>

      </div>
    </section>
  );
};
