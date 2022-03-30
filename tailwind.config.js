module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightRed: "#D62839",
      darkRed: "#BA324F",
      yellow: "#fcbf49",
      blue: "#175676",
      lightBlue: "#4BA3C3",
      gray: "#CCE6F4",
      white: "#FFFFFF",
      black: "#000000"
    },
    fontSize: {
      small: "clamp(16px, 4vw, 20px)",
      medium: "clamp(20px, 4vw, 24px)",
      large: "clamp(24px, 4vw, 32px)",
      xlarge: "clamp(32px, 2vw, 46px)",
      xXL: "clamp(60px, 2vw, 85px)"
    },
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
      secondary: ["Libre Franklin", "sans-serif"]
    }
  },
  plugins: []
};
