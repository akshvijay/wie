export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieeeBlue: "#00629B",   // IEEE official blue
        wiePurple: "#513189ff",  // WIE purple
        softGray: "#F7F7F7",   // light background
        darkGray: "#1F2937",   // text / footer
      },
    },
  },
  plugins: [],
};
