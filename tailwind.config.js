/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainYellow: "#FAB400",
        mainDark: "#FAB400",
        mainBlue: "#002138",
        mainWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
