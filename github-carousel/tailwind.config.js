// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",        // now scans your App-Router files
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // if you still have a pages/ folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // picks up your CarouselContainer, squares, etc.
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
