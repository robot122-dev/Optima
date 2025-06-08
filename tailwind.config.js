/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',    // Корпоративный синий
        secondary: '#3B82F6',  // Светло-синий
        accent: '#10B981',     // Зеленый (успех, скорость)
        warning: '#F59E0B',    // Оранжевый (предупреждения)
        neutral: '#F8FAFC',    // Светло-серый фон
        textMain: '#1F2937',   // Темно-серый текст
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.4' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.04em',
      },
    },
  },
  plugins: [],
} 