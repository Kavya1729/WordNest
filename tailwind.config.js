/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-4': '#f4eede', // Custom cream color
        'neon-green': '#39FF14', // Custom neon green color
      },
    },
  },
  plugins: [],
}
