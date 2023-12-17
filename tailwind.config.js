/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "coral-red": "#CD7F32",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "dark-blue": "#0F2A33",
        "dark-yellow": "#B58558",
        "dark-red": "#874338",
        "light-yellow": "#FBEBD1",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
    },
    animation: {
      'slide-in': 'slideIn 1s ease-out',
    },
    keyframes: {
      slideIn: {
        from: {
          transform: 'translateX(-100%)',
          opacity: 0,
        },
        to: {
          transform: 'translateX(0)',
          opacity: 1,
        },
      },
    },
  },
  // ...
};
