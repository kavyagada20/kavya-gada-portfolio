import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  statusText: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ statusText, className }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent-emerald/30 bg-accent-emerald/10 text-xs font-mono text-emerald-400 shadow-sm transition-all duration-300 hover:border-accent-emerald/50',
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="font-medium tracking-tight text-emerald-300">{statusText}</span>
    </div>
  );
};
