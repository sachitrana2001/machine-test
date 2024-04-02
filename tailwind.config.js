const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors: {
      blue: "#002850",
      lightBlue: "#B7C6D7",
      bgBlue: "#F5FBFD",
      red: "#DB2D3C",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
});
