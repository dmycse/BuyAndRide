import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
    },
    fontFamily: {
      rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
      mona: ['var(--font-mona)', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

export default config;