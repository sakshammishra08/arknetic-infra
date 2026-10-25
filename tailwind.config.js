/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { black: "#0a0a0a", gray: "#1a1a1a" },
      },
    },
  },
  plugins: [],
}
