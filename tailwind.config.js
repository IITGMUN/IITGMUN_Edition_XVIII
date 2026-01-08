import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#3245a9",
        royalblue: "#596bcf",
        crimson: "#f8506b",
        khaki: "#fed470",
        lightsteelblue: "#aab4e7",
        mediumaquamarine: "#a0edc9",
        lightRed: '#F8506B',
        darkRed:"#F22949",
        darkBlue:'#3245A9',
      },
      spacing: {},
      fontFamily: {
        "cabinet-grotesk": "'Cabinet Grotesk'",
        cabinet: ['Cabinet-Grotesk'],
        montserrat: 'Montserrat, sans-serif',
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        xl: "20px",
        base: "16px",
        inherit: "inherit",
      },
      screens: {
        mq950:{
          raw:'screen and (max-width:950px)'
        },
        mq750: {
          raw: "screen and (max-width: 750px)",
        },
        mq675: {
          raw: "screen and (max-width: 675px)",
        },
        mq520: {
          raw: "screen and (max-width: 520px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
        mq400: {
          raw: "screen and (max-width: 400px)",
        },
        mq350:{
          raw: "screen and (max-width: 350px)",
        }
      },
      boxShadow:{
        'line':'0 38.5px 10px -40px #000000f4',
        'lineLight': '0 36px 10px -40px #000000f4',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
