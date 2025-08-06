/** @type {import('tailwindcss').Config} */

console.log('Scanning for classes in:', require('fast-glob').sync([
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './node_modules/github-carousel/dist/**/*.{js,ts,jsx,tsx}'
]));

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // ← point at the compiled output, not the source
    './node_modules/github-carousel/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: { extend: {} },
  plugins: [
    // any plugins you need, e.g. require('tailwindcss-marquee')
  ],
};
