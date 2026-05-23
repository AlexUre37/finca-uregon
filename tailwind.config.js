/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── COLORES DE MARCA ────────────────────────────────────────────────
      // Para cambiar colores, edita estos valores:
      colors: {
        tierra: {
          50:  '#fdf8f0',
          100: '#f9edda',
          200: '#f0d4a8',
          300: '#e5b875',
          400: '#d99a45',
          500: '#c47e28',
          600: '#a6641c',
          700: '#864d17',
          800: '#6b3c14',
          900: '#4a2a0d',
        },
        cafetal: {
          50:  '#f0f5ec',
          100: '#d9e8cf',
          200: '#b2cf9e',
          300: '#85b068',
          400: '#5d9040',
          500: '#3d7228',
          600: '#2d5a1e',
          700: '#214316',
          800: '#172e0f',
          900: '#0d1c09',
        },
        crema: {
          50:  '#fefcf7',
          100: '#fdf6e8',
          200: '#f9e9c4',
          300: '#f4d899',
          400: '#edc46a',
          500: '#e4ad42',
        },
      },
      fontFamily: {
        // Fuentes cargadas desde Google Fonts en index.html
        serif:   ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.6s ease-out forwards',
        'float':     'float 4s ease-in-out infinite',
        'shimmer':   'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
