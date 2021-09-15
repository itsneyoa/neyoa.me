import { IOptions, RecursivePartial } from 'react-tsparticles'

export default {
  fullScreen: {
    enable: true,
  },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 80,
          smooth: 7.5,
        },
        resize: true,
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
    },
    resize: true,
  },
  particles: {
    color: {
      animation: {
        enable: true,
        sync: false,
        speed: 50,
      },
      value: '#0fc0fc',
    },
    links: {
      color: 'random',
      enable: true,
      width: 2,
      triangles: {
        enable: true,
        frequency: 0.01,
      },
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      speed: 2,
    },
    number: {
      density: {
        enable: true,
      },
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
      },
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.3,
      },
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 3,
        speed: 3,
      },
      value: 5,
      random: {
        enable: true,
        minimumValue: 3,
      },
    },
    twinkle: {
      lines: {
        enable: true,
        frequency: 0.5,
        opacity: 1,
      },
      particles: {
        enable: true,
        frequency: 0.1,
        opacity: 1,
      },
    },
    reduceDuplicates: true,
  },
} as RecursivePartial<IOptions>
