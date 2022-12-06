/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // to generate utilities as !important
  content: [
    // add the paths to all of your template files
    "./src/*.{jsx,tsx}",
    "./src/**/*.{jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
