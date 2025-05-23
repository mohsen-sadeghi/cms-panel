/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        Homenaje: ["Homenaje"],
        vazir: ["Vazirmatn"],
        Lalezar: ["Lalezar"],
      },
      screens: {
        xs: "420px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1537px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
        padding: "10px",
      },
    },
  },
  plugins: [],
}

