module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          default: "#282525",
          secondary: "rgba(40, 37, 37, 0.7)",
          bg: "rgb(249, 242, 237)",
        },
        new: {
          bg: "#222",
          offset: "#333;",
          border: "hsla(0,0%,100%,.1)",
          grey1: "#eee;",
          grey2: "#aaa;",
          grey3: "#777",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
