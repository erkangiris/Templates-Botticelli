/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '240px', 'max': '1022px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1599px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1600px', 'max': '1921px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      color: {
        "venus-dark": "#0b0b0d",
        "venus-orange":"#C24D3C",
      },
      backgroundColor:  {
        "venus-dark": "#0b0b0d",
        "venus-red":"#d21519",
        "venus-brown":"#C24D3C",
        "botticelli-blue":"#204055",
        "botticelli-softblue":"#DBDBDA",

      },
      height: {
        "15":"60px",
        "300":"300px",
        "400":"400px",
        "500":"500px",
        "600":"600px",
        "700":"700px",
        "800":"800px",
        "900":"900px",
      },
      width:{
        "1270":"1270px",
      },
      fontSize:{
        "xxs":"10px"
      },
      boxShadow: {
        'btn-shadow': '0px 0px 20px rgba(0, 0, 0, 0.1)',
        'card': '0px 0px 20px rgba(0, 0, 0, 0.07)',
        
      },
      zIndex:{
        "1000":"1000",
        "1001":"1001"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
