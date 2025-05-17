/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cute: ['"Fredoka"', "sans-serif"],
      },
      colors: {
        babyblue: "#60A5FA",
        babypink: "#F9A8D4",
        softlavender: "#C4B5FD",
        lightmint: "#A7F3D0",
        pastelyellow: "#FDE68A",
        offwhite: "#FEF9EF",
      },
    },
  },
  plugins: [],
};
