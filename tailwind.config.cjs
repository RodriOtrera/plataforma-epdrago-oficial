/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        background: "#12131A",
        container: "#23242A",
        lightContainer: "#2D2E35",
        hoverColor: "#23242A",
        text: "#A4A5A7",
        button: "#E45531",
      },
    },
  },
  plugins: [],
};
