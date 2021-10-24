module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#E95420",
        secondary: {
          100: "#818181",
          200: "#000081",
          300: "#616161",
          400: "#CFCFCF",
        },
        base: {
          100: "#fafafa",
          200: "#4F184D",
          300: "#1D1D1D",
          400: "#303030",
          500: "#343434",
          600: "#2c2c2c",
          700: "#3e3e3e",
          800: "#3a3a3a",
          900: "#373737",
          1000: "#484848",
          1100: "#5b5b5b",
        },
      },
      width: {
        desktop: "150%",
        start: "250px",
        files: "900px",
        firefox: "1120px",
      },
      height: {
        desktop: "150%",
        start: "400px",
        files: "600px",
        firefox: "800px",
      },
      borderColor: (theme) => ({
        darkActive: "#ffffff #202020 #202020 #ffffff",
        darkInactive: "#202020 #ffffff #ffffff #202020",
        lightInactive: "#929292 #ffffff #ffffff #929292",
      }),
      fontFamily: {
        ubuntu: ["Ubuntu"],
        poppins: ["Poppins"],
      },
      backgroundImage: {
        wallpaper: "url('/src/images/wallpaper.jpg')",
      },
      margin: {
        18: "4.25rem",
      },
      gridTemplateColumns: {
        explorer: "repeat(2, 1fr)",
      },
      minWidth: {
        50: "50%",
        60: "60%",
        70: "70%",
        75: "75%",
        80: "80%",
        85: "85%",
        90: "90%",
      },
      opacity: {
        1: "1%",
        2: "2%",
        3: "3%",
        4: "4%",
        15: "15%",
        35: "35%",
        45: "45%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
