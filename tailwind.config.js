/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#fff9eb',
          100: '#ffeec6',
          200: '#ffd888',
          300: '#ffc44d',
          400: '#ffb329',
          500: '#f59e0b',
          600: '#de8500',
          700: '#b86900',
          800: '#935109',
          900: '#77430d'
        },
        'dark': {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1e1e2d',
          600: '#2a2a3a'
        },
        'neon': '#00d4ff',
        'gold': '#d4af37'
      },
      fontFamily: {
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
        'mono': ['"Fira Code"', 'monospace']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px theme(colors.gold)' },
          '100%': { boxShadow: '0 0 20px theme(colors.gold), 0 0 30px theme(colors.neon)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    },
  },
  plugins: [],
}