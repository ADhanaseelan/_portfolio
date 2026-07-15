/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        surface: '#111111',
        primary: '#FFFFFF',
        secondary: '#CFCFCF',
        accentOrange: '#FF7A18',
        accentBlue: '#00A3FF',
        borderGlass: 'rgba(255,255,255,0.08)',
        surfaceGlass: 'rgba(255,255,255,0.05)',
        glowOrange: 'rgba(255,122,24,0.15)',
        glowBlue: 'rgba(0,163,255,0.10)',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Geist', 'sans-serif'],
        display: ['Outfit', 'SF Pro Display', 'Geist', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
