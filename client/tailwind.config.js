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
        obsidian: {
          800: '#262422',
          850: '#1F1D1B',
          900: '#161514',
          950: '#0E0D0C',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
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
