/** @type {import('tailwindcss').Config} */
module.exports = {
 purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primary:          "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft":   "rgb(var(--color-primary-soft) / <alpha-value>)",
        secondery:        "rgb(var(--color-secondery) / <alpha-value>)",
        bgbody:           "rgb(var(--color-bgbody) / <alpha-value>)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}