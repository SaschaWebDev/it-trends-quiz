module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dee3ea",
          200: "#b2bdcd",
          300: "#5d7290",
          600: "#323d4d",
          700: "#242c37",
          800: "#151a21",
          900: "#0b0e11",
        },
        background: {
          dark: "#0b0e11",
        },
      },
      screens: {
        xs: { max: "400px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
