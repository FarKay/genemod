/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#0728b6",
        },
      },

      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },

    boxShadow: {
      "custom-1": "0px 2px 4px -2px rgba(16, 24, 40, 0.06)", // #1018280F converted to rgba
      "custom-2": "0px 4px 8px -2px rgba(16, 24, 40, 0.10)", // #1018281A converted to rgba
    },
  },
  plugins: [],
};
