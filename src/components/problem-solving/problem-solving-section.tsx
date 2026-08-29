import React from 'react';
import { metricCards, portfolioMeta } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/section-header';
import { MetricCard } from '@/components/problem-solving/metric-card';
import { ExternalLink, Terminal } from 'lucide-react';

export const ProblemSolvingSection: React.FC = () => {
  return (
    <section id="problem-solving" className="py-20 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="DATA STRUCTURES & ALGORITHMS"
          title="PROBLEM SOLVING & SQL"
          subtitle="Proven proficiency in algorithmic logic, optimization, complex SQL queries, and competitive programming across industry platforms."
        />

        {/* 4 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((card, idx) => (
            <MetricCard key={idx} data={card} />
          ))}
        </div>

        {/* Platform Links Bar */}
        <div className="mt-10 p-4 rounded-xl border border-border/80 bg-bg-elevated flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Terminal className="w-4 h-4 text-accent-blue" />
            <span>Coding Profiles:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={portfolioMeta.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              LeetCode
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={portfolioMeta.socialLinks.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              HackerRank
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={portfolioMeta.socialLinks.neetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              NeetCode
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={portfolioMeta.socialLinks.unstop}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-text-muted hover:text-accent-blue transition-colors"
            >
              Unstop
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
