import React from 'react';
import { MetricCardData } from '@/types';
import { ExternalLink, Code2 } from 'lucide-react';

interface MetricCardProps {
  data: MetricCardData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  return (
    <div className="rounded-xl border border-border bg-bg-elevated p-6 hover:bg-bg-hover hover:border-border-active transition-all duration-300 group flex flex-col justify-between">
      <div className="space-y-3">
        
        {/* Top Badge */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
            {data.badge || 'Metric'}
          </span>
          <Code2 className="w-4 h-4 text-text-dim group-hover:text-accent-blue transition-colors" />
        </div>

        {/* Metric Value */}
        <div className="text-3xl sm:text-4xl font-extrabold font-mono text-text-primary tracking-tight group-hover:text-accent-blue transition-colors">
          {data.value}
        </div>

        {/* Label */}
        <p className="text-sm font-semibold text-text-muted">
          {data.label}
        </p>
      </div>

      {/* External Platform Link */}
      {data.platformUrl && (
        <div className="pt-4 mt-4 border-t border-border/60">
          <a
            href={data.platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-dim hover:text-accent-blue transition-colors"
          >
            <span>Verify on {data.platformName}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};
