'use client';

import React, { useState } from 'react';
import { portfolioMeta } from '@/data/portfolio';
import { Mail, Linkedin, Github, Download, Send, Check } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    // If exact email is placeholder, notify user cleanly
    navigator.clipboard.writeText("kavyagada[NEEDS_INPUT]@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-border/60 relative overflow-hidden bg-radial-glow">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Main CTA Heading */}
        <div className="space-y-4">
          <span className="font-mono text-xs font-semibold text-accent-blue tracking-widest uppercase">
            // GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Let's build something intelligent.
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Open to AI/ML engineering roles, software engineering opportunities, and technical collaborations. Feel free to reach out via LinkedIn or GitHub.
          </p>
        </div>

        {/* Contact Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={portfolioMeta.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-accent-blue hover:bg-blue-600 text-white shadow-lg shadow-accent-blue/20 transition-all hover:scale-[1.02]"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>

          <a
            href={portfolioMeta.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-bg-elevated hover:bg-bg-hover text-text-primary border border-border hover:border-border-active transition-all hover:scale-[1.02]"
          >
            <Github className="w-4 h-4" />
            GitHub Profile
          </a>

          <CTAButton
            href="/resume.pdf"
            external
            variant="outline"
            size="lg"
            icon={<Download className="w-4 h-4" />}
          >
            Download Resume
          </CTAButton>
        </div>

        {/* Email Quick Action */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-text-muted hover:text-text-primary bg-bg-elevated/80 border border-border/80 rounded-full transition-all hover:border-accent-blue/40"
          >
            <Mail className="w-3.5 h-3.5 text-accent-violet" />
            <span>Copy Email Address [NEEDS INPUT]</span>
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Send className="w-3 h-3 text-text-dim" />}
          </button>
        </div>

      </div>
    </section>
  );
};
