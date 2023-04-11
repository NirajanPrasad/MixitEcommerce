/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dimGrey: "#888",
        "grey-800": "#343a40",
        red: "#ff0000",
      },
    },
  },
  plugins: [],
};
