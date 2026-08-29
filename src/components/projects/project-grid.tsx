import React from 'react';
import { projectsData } from '@/data/projects';
import { SectionHeader } from '@/components/ui/section-header';
import { ProjectCard } from '@/components/projects/project-card';

export const ProjectGridSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="SYSTEMS & ARCHITECTURE"
          title="FEATURED PROJECTS"
          subtitle="Production AI applications, RAG pipelines, and multi-agent workflows engineered with clean system design and robust computer science fundamentals."
        />

        {/* Project List */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isPrimary={index === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
