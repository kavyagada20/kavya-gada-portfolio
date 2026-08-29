import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0c',
          elevated: '#111115',
          hover: '#18181f',
          terminal: '#0d0d12',
        },
        border: {
          DEFAULT: '#23232a',
          active: '#3b3b47',
          subtle: '#1c1c24',
        },
        text: {
          primary: '#f4f4f6',
          muted: '#8f8f9d',
          dim: '#5c5c69',
        },
        accent: {
          blue: '#3b82f6',
          violet: '#6366f1',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(59, 130, 246, 0.07) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
