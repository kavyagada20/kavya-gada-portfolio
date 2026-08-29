import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EngineeringPillarCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
}

export const EngineeringPillarCard: React.FC<EngineeringPillarCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  items,
}) => {
  return (
    <div className="rounded-xl border border-border bg-bg-elevated p-6 hover:bg-bg-hover hover:border-border-active transition-all duration-300 group flex flex-col justify-between">
      <div>
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-lg bg-accent-blue/10 border border-accent-blue/20 text-accent-blue group-hover:scale-105 transition-transform">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-text-primary text-base sm:text-lg tracking-tight">
              {title}
            </h3>
            <span className="text-xs font-mono text-text-dim">{subtitle}</span>
          </div>
        </div>

        {/* Pillar Items */}
        <ul className="space-y-2 pt-2 border-t border-border/60">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
