module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      light: {
        'text': '#23272a',
        'background': '#ffffff',
        'tooltip': '#efefef',
      },
      dark: {
        'text': '#eaeaea',
        'background': '#23272a',
        'tooltip': '#2c2f33'
      },
      'primary': '#f53678',
      'secondary': '#0fc0fc',
      'tertiary': '#ccff00',
      'tooltip': '#50e3c2',
    },
    extend: {
      inset: {
        'tooltip': '120%'
      },
      margin: {
        'tooltip': 'auto -3em'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
