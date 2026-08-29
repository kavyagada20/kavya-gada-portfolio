import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  external = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 disabled:opacity-50 disabled:pointer-events-none rounded-lg';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-accent-blue hover:bg-blue-600 text-white font-semibold shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/30 active:scale-[0.98]',
    secondary: 'bg-bg-elevated hover:bg-bg-hover text-text-primary border border-border hover:border-border-active active:scale-[0.98]',
    outline: 'bg-transparent text-text-primary border border-border-active hover:bg-bg-elevated hover:border-accent-blue/50 active:scale-[0.98]',
    ghost: 'bg-transparent text-text-muted hover:text-text-primary hover:bg-bg-elevated',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};
