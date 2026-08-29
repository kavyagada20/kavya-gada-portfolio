'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { portfolioMeta } from '@/data/portfolio';
import { CTAButton } from '@/components/ui/cta-button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Problem Solving', href: '#problem-solving' },
  { label: 'Education', href: '#education' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-accent-blue/50 rounded-lg p-1"
        >
          <span className="font-bold text-text-primary text-base sm:text-lg tracking-wider font-mono group-hover:text-accent-blue transition-colors">
            KAVYA GADA
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-accent-blue/15 text-accent-blue border border-accent-blue/30 tracking-wide">
            [AI/ML]
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-bg-elevated/70 border border-border/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 text-xs font-mono text-text-muted hover:text-text-primary hover:bg-bg-hover/80 rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={portfolioMeta.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors border border-transparent hover:border-border"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioMeta.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-muted hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors border border-transparent hover:border-border"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <CTAButton
            href="/resume.pdf"
            external
            variant="secondary"
            size="sm"
            icon={<Download className="w-3.5 h-3.5" />}
          >
            Resume
          </CTAButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex sm:hidden p-2 text-text-muted hover:text-text-primary rounded-lg border border-border bg-bg-elevated"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-bg-elevated border-b border-border px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-text-muted hover:text-text-primary hover:bg-bg-hover rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={portfolioMeta.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioMeta.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text-primary"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <CTAButton
              href="/resume.pdf"
              external
              variant="primary"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
            >
              Resume
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
};
