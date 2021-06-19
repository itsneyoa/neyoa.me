module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      light: {
        'text': '#23272a',
        'background': '#ffffff',
      },
      dark: {
        'text': '#eaeaea',
        'background': '#23272a',
      },
      'primary': '#f53678',
      'secondary': '#0fc0fc',
      'tertiary': '#50e3c2',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
