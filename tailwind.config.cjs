/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      borderWidth: {
        '12': '12px',
        '16': '16px',
        // ... add other sizes as needed
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

