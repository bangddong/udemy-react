/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        handjet: ["Handjet", "monospace"],
      },
      colors: {
        main: "#54a399",
        hover: "#3c8379",
        button: "#12352f",
      },
      backgroundImage: {
        "gradient-radial-content": "radial-gradient(#0b201d, #021619)",
        "gradient-radial-challenge": "radial-gradient(#4df8df, #4df0f8)",
      },
      boxShadow: {
        "content-box": "0 2px 8px rgba(0, 0, 0, 0.8)",
        "challenge-box": "box-shadow: 0 2px 8px rgba(35, 34, 34, 0.6);",
      },
      animation: {
        "challenge-active": "flash 1s infinite",
        "modal-open": "slide-in-from-top 0.35s ease-out",
      },
      backgroundColor: {
        modal: "rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
