/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColour: "hsl(231, 69%, 60%)",
        secondaryColour: "hsl(0, 94%, 66%)",
        neutral1Colour: "hsl(229, 8%, 60%)",
        neutral2Colour: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        primaryFont: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
