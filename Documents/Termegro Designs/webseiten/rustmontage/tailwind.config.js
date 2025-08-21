/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        braun: {
          light: '#8B5E3C',
          DEFAULT: '#5A3F27',
          dark: '#3E2F1C'
        },
        primary: '#3E2F1C',
        secondary: '#5A3F27',
        accent: '#8B5E3C',
        'background-light': '#F8F8F8',
        'text-primary': '#1a1a1a',
        'text-secondary': '#666666',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        roboto: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}