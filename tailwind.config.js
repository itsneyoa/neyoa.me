module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          text: '#23272a',
          background: '#ffffff',
          tooltip: '#efefef',
        },
        dark: {
          text: '#eaeaea',
          background: '#23272a',
          tooltip: '#2c2f33',
        },
        contact: '#4ade80',
        primary: '#f53678',
        secondary: '#0fc0fc',
        tooltip: '#50e3c2',
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
