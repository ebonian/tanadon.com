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
          100: "#008282",
          200: "#4F184D",
          300: "#1D1D1D",
          400: "#403d3b",
          500: "#343434",
          600: "#2c2c2c",
          700: "#3e3e3e",
        },
      },
      width: {
        start: "250px",
        window: "840px",
      },
      height: {
        start: "400px",
        window: "600px",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
