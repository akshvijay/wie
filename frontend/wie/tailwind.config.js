/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieeeBlue:    "#00629B",
        wiePurple:   "#7C3AED",
        wieDeepBlue: "#01022e",
        wieNavy:     "#0a1045",
        wieAccent:   "#FDB515",
        wieGlass:    "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "Inter", "ui-sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-purple": "0 0 30px rgba(124, 58, 237, 0.35)",
        "glow-blue":   "0 0 30px rgba(0, 98, 155, 0.35)",
        "glow-amber":  "0 0 20px rgba(253, 181, 21, 0.4)",
        glass:         "0 8px 32px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in":    "fadeInUp 0.7s ease-out forwards",
        "ken-burns":  "kenBurns 8s ease-in-out infinite alternate",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        shimmer:      "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenBurns: {
          "0%":   { transform: "scale(1.0) translate(0px, 0px)" },
          "100%": { transform: "scale(1.08) translate(-8px, -4px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,58,237,0.3)" },
          "50%":       { boxShadow: "0 0 45px rgba(124,58,237,0.7)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
