/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
  colors: {
    primary: "#a855f7",
    secondary: "#ec4899",
    dark: "#020617",
  },
  boxShadow: {
    glow: "0 0 40px rgba(168,85,247,0.35)",
    soft: "0 20px 60px rgba(0,0,0,0.6)",
  },
  animation: {
    float: "float 6s ease-in-out infinite",
    pulseSlow: "pulse 4s ease-in-out infinite",
  },
  keyframes: {
    float: {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-12px)" },
    },
  },
}

  },
  plugins: [],
}
