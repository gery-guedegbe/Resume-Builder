/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        cursive: ["cursive"],
        openSans: ["Open Sans", "sans-serif"],
      },

      colors: {
        "custom-blue": "#009ddc",
        "custom-light-blue": "#2ac2ff",
        "custom-light-black": "#d8d8d0",
        "custom-ultra-black": "#110f01",
        "custom-light-grey": "#F3F4F6",
        "custom-grey": "#6B7280",
        "custom-red": "#9D2424",
        "custom-yellow": "#f2e172",
        "custom-ultra-yellow": "#eed742",
        "custom-orange": "#f26430",
        "custom-light-orange": "#fdefea",
        "custom-light-magenta": "#ef42db",
        "custom-light-green": "#d2ea14",
        "custom-blue": "#009ddc",
        "custom-light-blue": "#2ac2ff",
        "custom-violet": "#a292f7",
        "custom-model1-color": "#1f2937",
      },
      width: {
        a4: "794px",
      },

      height: {
        a4: "1123px",
      },

      screens: {
        larg: "1550px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
