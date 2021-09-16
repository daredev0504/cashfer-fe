module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "poppins",
    },
    extend: {
      colors: {
        "cashfer-purple": "#644C99",
        "cashfer-light-purple": "#F8F6FB",
        "cashfer-medium-purple": "#F4EDFF",
        "cashfer-dark": "#555555",
      },
      outline: {
        blue: "2px solid #644C99",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
