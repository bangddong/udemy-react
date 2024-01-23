/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        main: "#54a399",
        hover: "#3c8379",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(#186a5e, #053339)",
      },
    },
  },
  plugins: [],
};
