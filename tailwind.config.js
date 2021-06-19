module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      light: {
        'text': '#23272a',
        'background': '#ffffff',
        'tooltip-background': '#efefef',
        'contact': '#800080'
      },
      dark: {
        'text': '#eaeaea',
        'background': '#23272a',
        'tooltip-background': '#2c2f33',
        'contact': '#ccff00',
      },
      'primary': '#f53678',
      'secondary': '#0fc0fc',
      'tooltip-background': '#50e3c2',
    },
    extend: {
      inset: {
        'tooltip': '120%'
      },
      margin: {
        'tooltip': 'auto -3em'
      },
      transitionDuration: {
        '1500': '1.5s'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
