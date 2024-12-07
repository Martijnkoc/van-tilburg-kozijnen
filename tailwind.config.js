/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#e6f9fe',
          '100': '#ccf3fd',
          '200': '#99e7fb',
          '300': '#66dbf9',
          '400': '#33d5f7',
          '500': '#26cff2',
          '600': '#1ea6c2',
          '700': '#177c91',
          '800': '#0f5361',
          '900': '#082930',
          '950': '#041518',
        },
        'accent': {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed7aa',
          '300': '#fdba74',
          '400': '#fb923c',
          '500': '#f97316',
          '600': '#ea580c',
          '700': '#c2410c',
          '800': '#9a3412',
          '900': '#7c2d12',
          '950': '#431407',
        },
        'bg': {
          'light': '#ffffff',
          'dark': '#1a1a1a',
        },
        'text': {
          'light': '#4a5568',
          'dark': '#1a202c',
        },
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'montreal': ['Montreal', 'sans-serif'],
        'commons': ['TT Commons', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
