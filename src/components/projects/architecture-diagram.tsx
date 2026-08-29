import React from 'react';
import { ArchitectureNode } from '@/types';
import { Database, FileText, Cpu, ArrowRight, ArrowDown, Network, Share2 } from 'lucide-react';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  title?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  nodes,
  title = "SYSTEM ARCHITECTURE",
}) => {
  const getNodeIcon = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'input':
        return <FileText className="w-3.5 h-3.5 text-accent-blue" />;
      case 'process':
        return <Cpu className="w-3.5 h-3.5 text-accent-violet" />;
      case 'storage':
        return <Database className="w-3.5 h-3.5 text-amber-400" />;
      case 'router':
        return <Network className="w-3.5 h-3.5 text-emerald-400" />;
      case 'output':
        return <Share2 className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  const getNodeBorder = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'input':
        return 'border-accent-blue/40 bg-accent-blue/5 text-accent-blue';
      case 'process':
        return 'border-accent-violet/40 bg-accent-violet/5 text-accent-violet';
      case 'storage':
        return 'border-amber-500/40 bg-amber-500/5 text-amber-400';
      case 'router':
        return 'border-emerald-500/40 bg-emerald-500/5 text-emerald-400';
      case 'output':
        return 'border-emerald-400/50 bg-emerald-400/10 text-emerald-300';
    }
  };

  return (
    <div className="w-full rounded-xl border border-border/80 bg-bg-elevated p-4 sm:p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-border/60 pb-3">
        <span className="font-mono text-xs font-semibold text-text-muted tracking-wider uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-blue" />
          {title}
        </span>
        <span className="font-mono text-[11px] text-text-dim">Interactive Workflow</span>
      </div>

      {/* Desktop / Responsive Flow Grid */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-2 py-2">
        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            {/* Node Box */}
            <div
              className={`flex flex-col p-3 rounded-lg border text-left min-w-[140px] max-w-[190px] shadow-sm transition-all hover:scale-[1.02] ${getNodeBorder(
                node.type
              )}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {getNodeIcon(node.type)}
                <span className="font-mono font-bold text-xs tracking-tight text-text-primary">
                  {node.label}
                </span>
              </div>
              {node.subtext && (
                <span className="font-mono text-[11px] text-text-dim line-clamp-1">
                  {node.subtext}
                </span>
              )}
            </div>

            {/* Connector Arrow */}
            {index < nodes.length - 1 && (
              <div className="flex items-center justify-center shrink-0 my-1 sm:my-0 text-text-dim">
                <ArrowRight className="hidden sm:block w-4 h-4 text-border-active" />
                <ArrowDown className="block sm:hidden w-4 h-4 text-border-active" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
