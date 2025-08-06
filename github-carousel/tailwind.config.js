// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // all of your own JSX/TSX so Tailwind picks up the classes you actually use
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 80s linear infinite",
      },
    },
  },
  plugins: [],
};
