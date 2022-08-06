module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          default: "#282525",
          secondary: "rgba(40, 37, 37, 0.7)",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
