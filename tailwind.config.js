/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainBg: "#faf7f2",
        textMain: "#332117",
        textSecondary: "#172733",
        primary: "#bc8c53",
        textLight: "#f4eee0",
        primaryDark: "#60422e",
        disablebBg: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
