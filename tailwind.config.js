/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#efefef",
        primaryColor: "#2c3e50",
        secondaryColor: "#34495e",
        lightRed: "#e74c3c",
        strongRed: "#c0392b",
        warningColor: "#ffc107",
        successColor: "#28a745",
        infoColor: "#2a7ddbb3",
        whiteColor: "#fff",
        grayColor: " rgb(88, 88, 88)"
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
});
