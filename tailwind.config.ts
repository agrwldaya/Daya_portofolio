import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hacker: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        terminal: {
          green: '#00ff41',
          cyan: '#00ffff',
          dark: '#0a0e27',
          darker: '#050816',
          border: '#1a2332',
        },
        neon: {
          green: '#39ff14',
          cyan: '#00ffff',
          blue: '#0080ff',
          purple: '#bf00ff',
        },
        dark: {
          50: '#1a1a1a',
          100: '#0d0d0d',
          200: '#000000',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        handwritten: ['var(--font-dancing)', 'cursive'],
        handwritten2: ['var(--font-caveat)', 'cursive'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-green': 'glow-green 2s ease-in-out infinite alternate',
        'glow-cyan': 'glow-cyan 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 3s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'button-glow': 'button-glow 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(217, 70, 239, 0.5), 0 0 10px rgba(217, 70, 239, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(217, 70, 239, 0.8), 0 0 30px rgba(217, 70, 239, 0.5)' },
        },
        'glow-green': {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 255, 65, 0.5), 0 0 10px rgba(0, 255, 65, 0.3), 0 0 15px rgba(0, 255, 65, 0.2)',
            textShadow: '0 0 5px rgba(0, 255, 65, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 30px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3)',
            textShadow: '0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.5)'
          },
        },
        'glow-cyan': {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
            textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5)',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)'
          },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00ff41' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'button-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 255, 65, 0.5), 0 0 10px rgba(0, 255, 65, 0.3), inset 0 0 10px rgba(0, 255, 65, 0.1)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 30px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config

