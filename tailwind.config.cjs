/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        text: {
          light: '#4B5563',  // gray-600
          dark: '#1F2937',   // gray-800
        },
      },
      fontFamily: {
        montreal: ['Montreal', 'sans-serif'],
        commons: ['TT Commons', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
