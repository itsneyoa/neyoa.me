import Head from 'next/head'
import Particles from 'react-tsparticles'
import particlesOptions from '../styles/particles.json'
import subtitles from '../styles/subtitles.js'

export default function Home() {
  return (
    <container onContextMenu={e => e.preventDefault()}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
      </Head>

      <Particles options={particlesOptions} className="z-10" />

      <main>
        <h1 className="text-6xl font-bold leading-tight">
          Hi! I'm <span className="text-primary hover:text-secondary duration-1500">Lily</span>
        </h1>

        <p className="mt-3 text-2xl">{subtitles[Math.floor(Math.random() * subtitles.length)]}</p>

        <p className="icons mt-14 text-5xl">
          <Icon name="devicon-apache-plain" tooltip="Apache" />
          <Icon name="devicon-csharp-line-wordmark" tooltip="C#" />
          <Icon name="devicon-docker-plain" tooltip="Docker" />
          <Icon name="devicon-git-plain" tooltip="Git" />
          <Icon name="devicon-github-original" tooltip="GitHub" />
          <Icon name="devicon-nextjs-plain" tooltip="Next.js" />
          <Icon name="devicon-nginx-plain" tooltip="Nginx" />
          <Icon name="devicon-nodejs-plain" tooltip="NodeJS" />
          <Icon name="devicon-tailwindcss-plain" tooltip="TailwindCSS" />
          <Icon name="devicon-typescript-plain" tooltip="TypeScript" />
          <Icon name="devicon-javascript-plain" tooltip="JavaScript" />
          <Icon name="devicon-yarn-plain" tooltip="Yarn" />
        </p>

        <p className="mt-14 text-2xl">
          See my work on{' '}
          <a href="https://github.com/itsneyoa" target="_blank" rel="noreferrer" className="group contact">
            GitHub<span className="tooltip">itsneyoa</span>
          </a>{' '}
          or contact me via{' '}
          <a href="mailto:lily@neyoa.me" className="group contact">
            email<span className="tooltip">lily@neyoa.me</span>
          </a>{' '}
          or{' '}
          <span className="group contact">
            Discord<span className="tooltip">neyoa#1572</span>
          </span>
          .
        </p>
      </main>
    </container>
  )
}

function Icon(props) {
  return (
    <span className="group icon">
      <i className={props.name} />
      <span className="tooltip">{props.tooltip}</span>
    </span>
  )
}
