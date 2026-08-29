import React from 'react';
import { skillsData } from '@/data/skills';
import { SectionHeader } from '@/components/ui/section-header';
import { TechBadge } from '@/components/ui/tech-badge';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="TECHNICAL STACK"
          title="SKILLS & PROFICIENCIES"
          subtitle="Comprehensive technical skill set spanning AI systems, software engineering, databases, and computer science fundamentals."
        />

        {/* Skills Group Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-bg-elevated p-6 hover:bg-bg-hover hover:border-border-active transition-all duration-300 space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-border/60 pb-3">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                <h3 className="font-bold text-text-primary text-sm sm:text-base font-mono">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} variant="default" size="md" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
