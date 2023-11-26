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
        primary: '#005f73', // Replace with your primary color
        secondary: '#0a9396', // Replace with your secondary color
        accent: '#94d2bd', // An accent color
        neutral: '#e9d8a6', // A neutral color
        base: '#ee9b00', // Base or call-to-action color
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}
