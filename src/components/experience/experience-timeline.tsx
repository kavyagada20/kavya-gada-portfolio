import React from 'react';
import { experienceData } from '@/data/experience';
import { SectionHeader } from '@/components/ui/section-header';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { StatusBadge } from '@/components/ui/status-badge';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="ENGINEERING JOURNEY"
          title="WORK EXPERIENCE"
          subtitle="Hands-on engineering internships focused on AI/ML system development, document processing, and practical technical leadership."
        />

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-12 max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 p-1.5 rounded-full bg-bg border-2 border-accent-blue text-accent-blue group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-8 hover:bg-bg-hover hover:border-border-active transition-all duration-300 space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <StatusBadge statusText="CURRENT ROLE" className="py-0.5 px-2 text-[10px]" />
                      )}
                    </div>
                    <p className="text-base font-mono font-semibold text-accent-blue mt-1">
                      @ {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end font-mono text-xs text-text-dim space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Focus Badge */}
                <div className="inline-block px-3 py-1 rounded bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue">
                  Focus: {exp.focusArea}
                </div>

                {/* Responsibility Bullets */}
                <ul className="space-y-2.5 pt-2 border-t border-border/60">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-text-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
