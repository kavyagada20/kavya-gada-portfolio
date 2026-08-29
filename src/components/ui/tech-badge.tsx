import React from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'accent' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded transition-colors duration-200';
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs',
  };

  const variantStyles = {
    default: 'bg-bg-elevated text-text-muted border border-border/80 hover:text-text-primary hover:border-border-active',
    accent: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30 hover:bg-accent-blue/20',
    outline: 'bg-transparent text-text-dim border border-border/60 hover:text-text-muted',
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {name}
    </span>
  );
};
