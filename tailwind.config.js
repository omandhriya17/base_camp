/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "-4px 4px #000000",
      },
      backgroundColor: {
        cardBgColor: "#F3F3F3",
      },
      fontSize: {
        fontSize: "45px",
      },
      fontWeight: {
        fontWeight: "bold",
      },
      screens: {
        mobileSmall: "320px",
        mobileMedium: "375px",
        mobileLarge: "425",
        tabet: "768px",
        laptop: "1024",
        laptopLarge: "1440",
      },
    },
  },
  plugins: [],
};
