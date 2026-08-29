import React from 'react';
import { activityData } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/section-header';
import { Users, CheckCircle2, Bot } from 'lucide-react';
import { TechBadge } from '@/components/ui/tech-badge';

export const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities" className="py-16 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="LEADERSHIP & AUTOMATION"
          title="LEADERSHIP & ACTIVITIES"
          subtitle="Demonstrated initiative, technical outreach, and practical workflow automation."
        />

        {/* Activity Card */}
        <div className="max-w-4xl mx-auto rounded-xl border border-border bg-bg-elevated p-6 sm:p-8 hover:bg-bg-hover hover:border-border-active transition-all duration-300 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-accent-violet/10 border border-accent-violet/20 text-accent-violet">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  {activityData.organization}
                </h3>
                <p className="text-sm font-mono text-accent-violet">
                  {activityData.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-violet/10 text-accent-violet text-xs font-mono border border-accent-violet/30">
              <Bot className="w-3.5 h-3.5" />
              Automated Outreach & Logistics
            </div>
          </div>

          {/* Verified Contributions */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-text-dim uppercase tracking-wider block">
              // VERIFIED CONTRIBUTIONS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activityData.verifiedContributions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className="pt-2 border-t border-border/60 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-text-dim mr-2">Skills:</span>
            {activityData.skillsDemonstrated.map((skill) => (
              <TechBadge key={skill} name={skill} variant="outline" size="sm" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
