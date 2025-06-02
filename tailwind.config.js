/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        secondary: {
          DEFAULT: '#64748B',
          dark: '#94A3B8'
        },
        bg: {
          light: '#FFFFFF',
          dark: '#0F172A'
        },
        content: {
          light: '#0F172A',
          dark: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 