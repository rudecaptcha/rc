/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      animation: {
        widthGrow: "widthGrow 2s ease-in-out infinite",
      },
      keyframes: {
        widthGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
