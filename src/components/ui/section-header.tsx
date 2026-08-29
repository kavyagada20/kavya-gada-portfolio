import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left',
}) => {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block font-mono text-xs font-semibold tracking-wider text-accent-blue uppercase mb-2">
          // {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
