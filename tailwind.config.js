/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "#1b1d23",
        darkGray: "#60636d",
        mediumGrey: "#7d828f",
        lightGrey: "#c8ccd8",
        veryLightGrey: "#eeeff4",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "home-hero-mobile": "url(home/mobile/image-hero-paramour.jpg)",
        "home-hero-tablet": "url(home/tablet/image-hero-paramour.jpg)",
        "home-hero-desktop": "url(home/desktop/image-hero-paramour.jpg)",
        "small-team-mobile": "url(home/mobile/image-small-team.jpg)",
      }),
    },
  },
  plugins: [],
};
