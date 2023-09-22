/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}',"./Components/**/*.{js,ts,jsx,tsx}"], // Adjust this path based on your project structure
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
