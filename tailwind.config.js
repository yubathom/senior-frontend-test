module.exports = {
  theme: {
    fontFamily: {
      sans: ['ProximaNova', 'sans-serif'],
      serif: ['ProximaNova', 'sans-serif']
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
      ]
    }
  }
}