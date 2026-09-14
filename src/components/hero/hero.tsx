'use client';

import React from 'react';
import { ArrowRight, Download, Code2, Sparkles } from 'lucide-react';
import { portfolioMeta } from '@/data/portfolio';
import { StatusBadge } from '@/components/ui/status-badge';
import { CTAButton } from '@/components/ui/cta-button';
import { TerminalWidget } from '@/components/hero/terminal-widget';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div>
              <StatusBadge statusText={portfolioMeta.currentStatus} />
            </div>

            {/* Name & Primary Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
                KAVYA GADA
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-mono font-semibold text-accent-blue tracking-wide">
                  AI/ML ENGINEER
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-violet inline-block"></span>
                <span className="text-sm font-mono text-text-muted">
                  SOFTWARE ENGINEER
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
              {portfolioMeta.coreStatement}
            </p>

            {/* Sub-line: Education */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-dim border-l-2 border-accent-blue/40 pl-3">
              <Code2 className="w-4 h-4 text-accent-blue shrink-0" />
              <span>{portfolioMeta.educationSummary}</span>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <CTAButton
                href="/#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Projects
              </CTAButton>

              <CTAButton
                href="/resume.pdf"
                external
                variant="secondary"
                size="lg"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </CTAButton>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Widget */}
          <div className="lg:col-span-5 w-full">
            <TerminalWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
