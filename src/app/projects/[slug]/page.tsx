import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Lightbulb } from 'lucide-react';
import { TechBadge } from '@/components/ui/tech-badge';
import { ArchitectureDiagram } from '@/components/projects/architecture-diagram';
import { CTAButton } from '@/components/ui/cta-button';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Breadcrumbs & Back Nav */}
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <nav className="flex items-center gap-2 font-mono text-xs text-text-dim">
          <Link href="/" className="hover:text-accent-blue transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-accent-blue transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-text-primary">{project.title}</span>
        </nav>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </Link>
      </div>

      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-accent-blue/15 text-accent-blue border border-accent-blue/30 inline-block">
            Case Study & System Design
          </span>
          {project.period && (
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-bg-elevated text-text-muted border border-border inline-block">
              {project.period}
            </span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary">
          {project.title}
        </h1>
        <p className="text-lg font-mono text-accent-blue">
          {project.tagline}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-accent-emerald/20 text-emerald-300 border border-accent-emerald/40 hover:bg-accent-emerald/30 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Interactive Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-bg-elevated hover:bg-bg-hover text-text-primary border border-border transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub Repository
            </a>
          )}
        </div>
      </div>

      {/* Overview Block */}
      <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-8 space-y-3">
        <h2 className="text-sm font-mono font-bold text-accent-blue uppercase tracking-wider">
          // OVERVIEW
        </h2>
        <p className="text-base text-text-muted leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Problem & Solution Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-6 space-y-3">
          <h2 className="text-sm font-mono font-bold text-red-400 uppercase tracking-wider">
            // THE ENGINEERING PROBLEM
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 space-y-3">
          <h2 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider">
            // THE ARCHITECTURAL SOLUTION
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* System Architecture Diagram Image */}
      {project.architectureImage && (
        <div className="space-y-4 rounded-xl border border-border bg-bg-elevated p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-primary tracking-tight">
              System Architecture Diagram
            </h2>
            <a
              href={project.architectureImage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent-blue hover:underline flex items-center gap-1"
            >
              View Full High-Res Diagram
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-border/80 bg-black/40 p-2 sm:p-4">
            <img
              src={project.architectureImage}
              alt={`${project.title} Architecture Diagram`}
              className="w-full h-auto object-contain max-h-[650px] rounded"
            />
          </div>
        </div>
      )}

      {/* System Architecture Interactive Nodes */}
      {project.architectureNodes && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-text-primary tracking-tight">
            Pipeline Flow & Component Nodes
          </h2>
          <ArchitectureDiagram nodes={project.architectureNodes} />
        </div>
      )}

      {/* Key Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
            <Layers className="w-5 h-5 text-accent-blue" />
            Key Technical Implementations
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Challenges & Learnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.keyChallenges && (
          <div className="rounded-xl border border-border bg-bg-elevated p-6 space-y-3">
            <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Key Technical Challenges
            </h2>
            <ul className="space-y-2">
              {project.keyChallenges.map((challenge, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-text-muted font-mono list-disc list-inside">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.learnings && (
          <div className="rounded-xl border border-border bg-bg-elevated p-6 space-y-3">
            <h2 className="text-base font-bold text-text-primary flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-accent-blue" />
              Engineering Learnings
            </h2>
            <ul className="space-y-2">
              {project.learnings.map((learning, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-text-muted font-mono list-disc list-inside">
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tech Stack Badges */}
      <div className="p-6 rounded-xl border border-border bg-bg-elevated space-y-3">
        <h2 className="text-xs font-mono font-bold text-text-dim uppercase tracking-wider">
          // TECHNOLOGIES UTILIZED
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechBadge key={tech} name={tech} variant="accent" size="md" />
          ))}
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="pt-8 border-t border-border/60 space-y-4">
          <h2 className="text-xl font-bold text-text-primary">
            Other Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="p-5 rounded-xl border border-border bg-bg-elevated hover:bg-bg-hover hover:border-border-active transition-all group space-y-2"
              >
                <span className="text-xs font-mono text-accent-blue">Case Study</span>
                <h3 className="font-bold text-text-primary text-base group-hover:text-accent-blue transition-colors">
                  {rel.title}
                </h3>
                <p className="text-xs text-text-muted line-clamp-2">
                  {rel.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
