module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          text: '#23272a',
          background: '#ffffff',
          'tooltip-background': '#efefef',
        },
        dark: {
          text: '#eaeaea',
          background: '#23272a',
          'tooltip-background': '#2c2f33',
        },
        contact: {
          start: '#4ade80',
          end: '#06b6d4',
        },
        primary: '#f53678',
        secondary: '#0fc0fc',
        'tooltip-background': '#50e3c2',
        transparent: 'transparent',
      },
      inset: {
        tooltip: '120%',
      },
      transitionDuration: {
        1500: '1.5s',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
