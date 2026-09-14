'use client';

import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';

interface TerminalLine {
  type: 'command' | 'output';
  content: string | string[];
}

const terminalData: TerminalLine[] = [
  { type: 'command', content: 'whoami' },
  { type: 'output', content: 'kavya-gada' },
  { type: 'command', content: 'focus' },
  {
    type: 'output',
    content: [
      'AI/ML & RAG Systems',
      'Agentic Workflows',
      'DSA & Problem Solving',
      'Core CS & Systems',
      'Upskilling'
    ]
  },
  { type: 'command', content: 'status' },
  { type: 'output', content: 'Building archival RAG & ingestion systems @ Community Tree' },
];

export const TerminalWidget: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(terminalData.length);

  const handleCopy = () => {
    const fullText = terminalData
      .map((item) =>
        item.type === 'command'
          ? `$ ${item.content}`
          : Array.isArray(item.content)
          ? item.content.join('\n')
          : item.content
      )
      .join('\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-xl border border-border bg-bg-terminal shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Titlebar */}
      <div className="bg-[#14141a] px-4 py-2.5 border-b border-border/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          <span className="ml-2 text-xs text-text-dim flex items-center gap-1 font-mono">
            <TerminalIcon className="w-3.5 h-3.5 text-accent-blue/80" />
            zsh — kavya@rag-engine
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1 text-text-dim hover:text-text-muted transition-colors rounded hover:bg-bg-hover"
          title="Copy terminal output"
          aria-label="Copy terminal content"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-3 min-h-[260px] text-text-primary">
        {terminalData.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === 'command' ? (
              <div className="flex items-center gap-2 text-accent-blue font-semibold">
                <span className="text-accent-violet select-none">$</span>
                <span>{item.content}</span>
              </div>
            ) : Array.isArray(item.content) ? (
              <ul className="pl-4 space-y-1 text-text-muted border-l-2 border-border/60 my-1">
                {item.content.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2">
                    <span className="text-accent-emerald text-xs">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="pl-4 text-emerald-400/90 font-medium">
                {item.content}
              </div>
            )}
          </div>
        ))}

        {/* Prompt cursor */}
        <div className="flex items-center gap-2 text-text-dim pt-2">
          <span className="text-accent-violet select-none">$</span>
          <span className="w-2.5 h-4 bg-accent-blue animate-blink inline-block rounded-sm"></span>
        </div>
      </div>
    </div>
  );
};
