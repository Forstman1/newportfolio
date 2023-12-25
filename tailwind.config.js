/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#292929',
        'secondary': '#0F0F0F',
        'tertiary': '#772AF4',
        'quaternary': '#1A1A1A',

        
      },
    },
  },
  plugins: [],
}