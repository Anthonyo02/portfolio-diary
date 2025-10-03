/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1e3a5f',
          800: '#152941',
          900: '#0a1929',
        },
      },
    },
  },
  plugins: [],
};
