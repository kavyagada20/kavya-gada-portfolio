import React from 'react';
import Link from 'next/link';
import { portfolioMeta } from '@/data/portfolio';
import { Github, Linkedin, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border bg-bg-elevated/40 font-mono text-xs text-text-dim">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand info */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-bold text-text-primary">KAVYA GADA</span>
            <span className="text-accent-blue">•</span>
            <span className="text-text-muted">{portfolioMeta.primaryRole}</span>
          </div>
          <p>© {new Date().getFullYear()} Kavya Gada. All rights reserved.</p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={portfolioMeta.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={portfolioMeta.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>

        {/* Right Tech Stack credits */}
        <div className="flex items-center gap-1.5 text-text-dim text-center md:text-right">
          <Code className="w-3.5 h-3.5 text-accent-violet" />
          <span>Built with Next.js, Tailwind CSS & Motion</span>
        </div>

      </div>
    </footer>
  );
};
