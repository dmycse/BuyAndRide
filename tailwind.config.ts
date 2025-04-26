import { colors } from './node_modules/@sanity/runtime-cli/node_modules/chalk/source/index.d';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
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
    extend: {
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        mona: ['var(--font-mona)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#222222',
          hover: '#2f2f2f'
        },
        accent: {
          DEFAULT: 'ed1d24',
          hover: '#d6001c'
        }
      },
    },
  },
  plugins: [],
}

export default config;