module.exports = {
  content: [
    // "./**/*.css",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
//   important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
				'h1': ['40px', '54px'],
				'h2': ['32px', '42px'],
				'h3': '20px',
				'h4': '16px',
				'h5': '14px'
			},
      fontFamily: {
          'sans': ['Roboto', 'sans-serif']
      },
      screens: {
          'sm': '375px',
          'xs': '480px',
          'xsm': '640px',
          'md': '768px',
          'xmd': '880px',
          'lg': '1024px',
          'mlg': '1170px',
          'xmlg': '1200px',
          'xlg': '1280px',
          'xxlg': '1920px'
      },
      keyframes: {
          spin: {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' } ,
          },
          ripple: {
              'to': {
                  transform: 'scale(4)',
                  opacity: '0.2',
              },
          }
      },
      animation: {
          'spin-infinite': 'spin 2s linear infinite',
          'ripple': 'ripple 600ms linear',
      },
      boxShadow: {
        'top': '0px -14px 11px -9px rgba(0, 0, 0, 0.3)',
      }
  },
  cursor: {
      grab: "grab",
      pointer: "pointer",
  },
  fontFamily: {
      sans: ['Roboto', 'sans-serif'],
  },
  colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
          5: "#F2F4F6",
          10: "#E4E9EC",
          20: "#CBD5DC",
          40: "#98ACB9",
          60: "#668397",
          80: "#335A75",
          90: "#14142B",
          DEFAULT: "#013253",
      },
      primaryCTA: {
          5: "#FFFAF5",
          10: "#FEF4EA",
          20: "#FDEBD7",
          40: "#FCD8B0",
          60: "#FBC58A",
          80: "#FAB263",
          DEFAULT: "#F99F3D",
      },
      neutrals: {
          5: "#FFFFFF",
          10: "#F4F4F4",
          20: "#D3D6D7",
          40: "#A9AEB1",
          60: "#7E868A",
          80: "#545E64",
          DEFAULT: "#2A363E",
      },
      navigation: {
          5: "#F2F9FB",
          10: "#E5F4F6",
          20: "#CCE9EE",
          40: "#99D3DC",
          60: "#66BDCB",
          80: "#33A7B9",
          DEFAULT: "#0091A8",
      },
      accents: {
          5: "#FFF7F4",
          10: "#FFEFE9",
          20: "#FFE0D5",
          40: "#FEC1AB",
          60: "#FDA281",
          80: "#FC8357",
          DEFAULT: "#FC642D",
      },
      success: {
          5: "#F4FDF9",
          10: "#EAFBF3",
          20: "#D6F6E7",
          40: "#ADEDCF",
          60: "#84E3B7",
          80: "#5BDA9F",
          DEFAULT: "#33D188",
      },
      warning: {
          5: "#F9F7F2",
          10: "#F3EEE6",
          20: "#E8DECF",
          40: "#D2BE9F",
          60: "#BB9D6F",
          80: "#A47D3F",
          DEFAULT: "#8E5D0F",
      },
      error: {
          0: "#EF8F76",
          5: "#FDF5F5",
          10: "#F9EAEA",
          20: "#F4D6D6",
          40: "#EAAEAE",
          60: "#DF8787",
          80: "#D55F5F",
          DEFAULT: "#CB3838",
      },
      special: {
          5: "#FFD236",
          10: "#C4E6EB",
          20: "#FFA800",
          30: "#FCFCFC",
          40: "#000000",
      }
  },
  screens: {
    'sm': '375px',
    'xsm': '640px',
    'md': '768px',
    'xmd': '880px',
    'lg': '1024px',
    'xlg': '1280px',
    'xxlg': '1920px'
  },
  minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
  },
  maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
  },
  width: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
  },
  boxShadow: {
      DEFAULT : "0px 4px 6px rgba(0, 0, 0, 0.16)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
        addComponents({
          '.container': {
            maxWidth: '100%',
            margin: 'auto',
            // '@screen xs': {
            //   maxWidth: '480px',
            //   margin: 'auto'
            // },
            // '@screen sm': {
            //   maxWidth: '640px',
            //   margin: 'auto'
            // },
            // '@screen md': {
            //   maxWidth: '768px',
            //   margin: 'auto'
            // },
            // '@screen xmd': {
            //   maxWidth: '880px',
            //   margin: 'auto'
            // },
            // '@screen lg': {
            //   maxWidth: '1024px',
            //   margin: 'auto'
            // },
            // '@screen mlg': {
            //   maxWidth: '1170px',
            //   margin: 'auto'
            // },
            '@screen xmlg': {
              maxWidth: '1192px',
              margin: 'auto'
            },
          }
        });
      },
  ],
}
