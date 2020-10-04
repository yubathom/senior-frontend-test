module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    fontFamily: {
      sans: ['ProximaNova', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-darkblue': '#313E4F',
        'primary-lightgrey': '#E8EDF3',
        'primary-grey': '#989EA7',
        'accent-blue': '#33A6BA',
        'accent-red': '#FF7B92',
        'accent-yellow': '#FFC062',
        'accent-background': '#FFFFFF'
      },
      boxShadow: {
        'micro': '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
      ],
      options: {
        whitelist: [
          'bg-primary-darkblue',
          'bg-primary-lightgrey',
          'bg-accent-yellow',
          'bg-primary-darkblue',
          'fade',
          'fade-enter-active',
          'fade-leave-active',
          'fade-enter',
          'fade-leave-to',
          'grow',
          'grow-enter-active',
          'grow-leave-active',
          'grow-enter',
          'grow-leave-to'
        ],
      }
  },
  variants: {
    backgroundColor: ['hover', 'disabled'],
    border: ['focus'],
    opacity: ['disabled']
  }
}