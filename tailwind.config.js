/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#CADB7F",
        darkGreen: "#146531",
        lightGray: "#49454F",
        custombgGray: 'rgba(20, 20, 20, 0.2)',
        customBlack: '#001',
      },
    },
  },
  plugins: [],
};
