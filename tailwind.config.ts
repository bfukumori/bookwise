import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          green: {
            100: '#50B2C0',
            200: '#255D6A',
            300: '#0A313C',
          },

          purple: {
            100: '#8381D9',
            200: '#2A2879',
          },

          gray: {
            100: '#F8F9FC',
            200: '#E6E8F2',
            300: '#D1D6E4',
            400: '#8D95AF',
            500: '#303F73',
            600: '#252D4A',
            700: '#181C2A',
            800: '#0E1116',
          },
        },
      },
      gridTemplateColumns: {
        app: 'minmax(232px, 598px) 1fr',
      },
    },
  },
  plugins: [],
};
export default config;
