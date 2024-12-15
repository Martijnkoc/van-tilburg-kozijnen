/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff3e6',
          100: '#ffe1c2',
          200: '#ffc999',
          300: '#ffb170',
          400: '#ff9947',
          500: '#f28526',
          600: '#e67012',
          700: '#cc5a0f',
          800: '#b3440c',
          900: '#992e09',
          950: '#801808',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4B5563',
            maxWidth: 'none',
            p: {
              marginBottom: '1.5rem',
              lineHeight: '1.75'
            },
            ul: {
              marginBottom: '1.5rem',
              listStyleType: 'disc',
              paddingLeft: '1.25rem'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
