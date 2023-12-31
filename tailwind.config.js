/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grays: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "shorten-mobile": "url('/images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
        "boost-mobile": "url('/images/bg-boost-mobile.svg')",
        "boost-desktop": "url('/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
