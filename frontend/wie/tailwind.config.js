/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        softPurple: "#bd9dc1", // 🌸 global background
        ieeeBlue: "#00629B",
      },
    },
  },
  plugins: [],
};
