/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tech: ['Tech', 'Work Sans', 'Kanit', 'monospace'],
      },
    },
  },
  plugins: [],
};
