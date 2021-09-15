import Head from 'next/head'
import Particles from 'react-tsparticles'
import particlesOptions from '../styles/particles'
import subtitles from '../styles/subtitles'
import Icon from '../components/Icon'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="grid place-content-center min-h-screen py-2 bg-light-background dark:bg-dark-background z-0 select-none relative" onContextMenu={e => e.preventDefault()}>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
      </Head>

      <Particles options={particlesOptions} className="fixed z-10" />

      <main className="grid place-content-center w-full px-20 text-center text-light-text dark:text-dark-text z-20">
        <h1 className="text-6xl font-bold leading-tight">
          Hi! I'm <span className="text-primary hover:text-secondary duration-1500">Lily</span>
        </h1>

        <p className="mt-3 text-2xl">{subtitles[Math.floor(Math.random() * subtitles.length)]}</p>

        <p className="flex flex-row flex-wrap justify-center gap-10 mt-14 text-5xl">
          <Icon icon="devicon-apache-plain" name="Apache" />
          <Icon icon="devicon-csharp-line-wordmark" name="C#" />
          <Icon icon="devicon-docker-plain" name="Docker" />
          <Icon icon="devicon-git-plain" name="Git" />
          <Icon icon="devicon-github-original" name="GitHub" />
          <Icon icon="devicon-nextjs-plain" name="Next.js" />
          <Icon icon="devicon-nginx-plain" name="Nginx" />
          <Icon icon="devicon-nodejs-plain" name="NodeJS" />
          <Icon icon="devicon-tailwindcss-plain" name="TailwindCSS" />
          <Icon icon="devicon-typescript-plain" name="TypeScript" />
          <Icon icon="devicon-javascript-plain" name="JavaScript" />
          <Icon icon="devicon-yarn-plain" name="Yarn" />
        </p>

        <p className="mt-14 text-2xl">
          See my work on <Contact name="GitHub" tooltip="itsneyoa" link="https://github.com/itsneyoa" /> or contact me via <Contact name="email" tooltip="lily@neyoa.me" link="mailto:lily@neyoa.me" /> or <Contact name="Discord" tooltip="neyoa#1572" />.
        </p>
      </main>
    </div>
  )
}
