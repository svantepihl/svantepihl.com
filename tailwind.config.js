module.exports = {
  future: {
     removeDeprecatedGapUtilities: true,
     purgeLayersByDefault: true,
     defaultLineHeights: true,
     standardFontWeights: true
  },
  purge: [],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '414px', 
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontSize: {
        'xxs': '4.5px',
        'xs': '0.35rem',
        'sm': '.5rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    }
  },
  variants: {},
  plugins: []
}
