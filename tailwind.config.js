/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all React component files for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#c5f618', // Custom OneThrive green accent
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Optional: Set a clean default font
      },
    },
  },
  plugins: [],
};


