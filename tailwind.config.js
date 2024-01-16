module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  fontFamily: {
    Poppins: ["Poppins, sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#586056",
        "bookmark-white": "#f7f7f7",
        "kimenda-colorOne": "#bc6c25",
        "kimenda-colorTwo" :"#dda15e",
        "kimenda-colorAltOne": "#67b99a",
        "kimenda-colorAltTwo": "#248277",
        "kimenda-colorAltThree": "#99E2B4",
        "kimenda-colorAltFour":"#469D89",
        "kimenda-colorAltFive":"#036666",
        "kimenda-colorAltSix":"#2177B5",
        "kimenda-colorAltSeven":"#245B82",
        "kimenda-text": "#fefae0"
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
      fontSize: {
        'xxs': '.65rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      }
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};


