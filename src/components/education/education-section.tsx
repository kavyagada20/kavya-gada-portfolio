import React from 'react';
import { educationData } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/section-header';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND"
          title="EDUCATION"
          subtitle="Strong academic foundation in Artificial Intelligence, Machine Learning, and Core Computer Science."
        />

        {/* Education Compact Card */}
        <div className="max-w-3xl mx-auto rounded-xl border border-border bg-bg-elevated p-6 sm:p-8 hover:bg-bg-hover hover:border-border-active transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-text-primary">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-mono text-accent-blue">
                  {educationData.institution}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-text-dim pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                    {educationData.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                    {educationData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex flex-col items-start md:items-end border-t md:border-t-0 md:border-l border-border/60 pt-4 md:pt-0 md:pl-6 shrink-0 space-y-1">
              <span className="text-xs font-mono text-text-dim uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                Cumulative CGPA
              </span>
              <span className="text-2xl font-bold font-mono text-emerald-400">
                {educationData.cgpa}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
