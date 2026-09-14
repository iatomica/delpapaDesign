/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        travertine: {
          50: '#FBF9F6',
          100: '#F5F2EC',
          200: '#ECE6DC',
          300: '#DFD7CA',
          400: '#C7BBA8',
          500: '#9C8F7A',
        },
        bronze: {
          300: '#B8A484',
          400: '#9E8967',
          500: '#846F4E',
          600: '#6C583B',
          700: '#53432B',
        },
        terracotta: {
          300: '#D5B493',
          400: '#C59F7C',
          500: '#B59675',
          600: '#9E7E5D',
          700: '#846647',
        },
        calc: {
          50: '#FBF9F6',
          100: '#F7F5F0',
          200: '#F2EDE5',
          300: '#E8E1D5',
        },
        obsidian: {
          800: '#262422',
          850: '#1F1D1B',
          900: '#161514',
          950: '#0E0D0C',
        },
      },
      fontFamily: {
        serif: ['Lora', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        architectural: '.12em',
      },
    },
  },
  plugins: [],
}
