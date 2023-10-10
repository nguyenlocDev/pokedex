/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColorTop: "#2c3137",
        backgroundColorBottom: "#17191d",
        backgroundColorCard: "#2E3339",
      },
      animation: {
        spinLoad: "spinLoad 1s linear infinite",
      },
      keyframes: {
        spinLoad: {
          "0%": { transform: "translate(-50%,-50%) rotate(0deg) " },
          "100%": { transform: " translate(-50%,-50%) rotate(360deg) " },
        },
      },
    },
  },
  plugins: [],
};
//17191d  //2c3137
