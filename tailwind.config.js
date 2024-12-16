/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        primary: "#6576FF",
        secondary: "#364A63",
        span_color: "#8091A7",
      },
    },
  },
  plugins: [],
};
