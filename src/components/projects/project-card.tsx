import React from 'react';
import Link from 'next/link';
import { Project } from '@/types';
import { Github, ExternalLink, ArrowUpRight, AlertTriangle, Layers } from 'lucide-react';
import { TechBadge } from '@/components/ui/tech-badge';
import { ArchitectureDiagram } from '@/components/projects/architecture-diagram';
import { CTAButton } from '@/components/ui/cta-button';

interface ProjectCardProps {
  project: Project;
  isPrimary?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isPrimary = false }) => {
  return (
    <article
      className={`rounded-2xl border transition-all duration-300 bg-bg-elevated overflow-hidden ${
        isPrimary
          ? 'border-accent-blue/50 shadow-xl shadow-accent-blue/5 hover:border-accent-blue'
          : 'border-border hover:border-border-active hover:bg-bg-hover'
      }`}
    >
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Header Badges & Links */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {isPrimary && (
              <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/40">
                ★ FEATURED PROJECT
              </span>
            )}
            <span className="text-xs font-mono text-text-dim">
              System Architecture & RAG
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary rounded-lg border border-border hover:border-border-active transition-colors"
                title="View GitHub Repository"
                aria-label={`${project.title} GitHub repository`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-accent-emerald/15 text-emerald-400 border border-accent-emerald/40 hover:bg-accent-emerald/25 transition-colors"
                aria-label={`${project.title} Live Demo`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary hover:text-accent-blue transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="text-sm font-mono text-accent-blue">
            {project.tagline}
          </p>
          <p className="text-base text-text-muted leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-bg/80 border border-border/80 space-y-1.5">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
              // PROBLEM
            </span>
            <p className="text-xs sm:text-sm text-text-muted leading-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg/80 border border-border/80 space-y-1.5">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              // SOLUTION
            </span>
            <p className="text-xs sm:text-sm text-text-muted leading-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Diagram Visualization */}
        {project.architectureNodes && project.architectureNodes.length > 0 && (
          <div className="pt-2">
            <ArchitectureDiagram nodes={project.architectureNodes} />
          </div>
        )}

        {/* Healthcare Disclaimer Notice if applicable */}
        {project.disclaimer && (
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{project.disclaimer}</span>
          </div>
        )}

        {/* Stack Chips & Case Study Link */}
        <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.map((tech) => (
              <TechBadge key={tech} name={tech} variant="default" size="sm" />
            ))}
          </div>

          {project.caseStudy && (
            <CTAButton
              href={`/projects/${project.slug}`}
              variant="outline"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Read Case Study
            </CTAButton>
          )}
        </div>

      </div>
    </article>
  );
};
