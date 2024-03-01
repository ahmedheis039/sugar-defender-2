/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#931F1E',
        buttonBG: '#FFE500',
        secondary: "#2D3B57"
      },
    },
  },
  plugins: [],
}

