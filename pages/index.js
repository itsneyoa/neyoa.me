import Head from 'next/head'
import Image from 'next/image'
import rainbowcrystalheart from '../public/rainbowcrystalheart.gif'
import transcrystalheart from '../public/transcrystalheart.gif'
import Particles from "react-tsparticles";
import particlesOptions from '../styles/particles.json'

export default function Home() {
  return (
    <div id="container" onContextMenu={(e) => e.preventDefault()}>
      <Head>
        <title>neyoa</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Particles options={particlesOptions} className="z-10" />

      <main id="main">
        <h1 className="text-6xl font-bold leading-tight">
          Hi! I'm <span className="text-primary hover:text-secondary duration-1500">neyoa</span>
        </h1>

        <p className="mt-3 text-2xl">
          <Image src={rainbowcrystalheart} width="20" height="20" alt="Rainbow Crystal Heart" /> Happy pride!!! <Image src={transcrystalheart} width="20" height="20" alt="Trans Flag Crystal Heart" /> {/* if you read this you're a cutie <3 */}
        </p>

        <p className="icons mt-14 text-5xl">
          <span className="group icon">
            <i className="devicon-apache-plain" /><span className="tooltip">Apache</span>
          </span >
          <span className="group icon">
            <i className="devicon-csharp-line-wordmark" /><span className="tooltip">C#</span>
          </span>
          <span className="group icon">
            <i className="devicon-docker-plain" /><span className="tooltip">Docker</span>
          </span>
          <span className="group icon">
            <i className="devicon-git-plain" /><span className="tooltip">Git</span>
          </span>
          <span className="group icon">
            <i className="devicon-github-original" /><span className="tooltip">GitHub</span>
          </span>
          <span className="group icon">
            <i className="devicon-nextjs-plain" /><span className="tooltip">Next.js</span>
          </span>
          <span className="group icon">
            <i className="devicon-nodejs-plain" /><span className="tooltip">Node.js</span>
          </span>
          <span className="group icon">
            <i className="devicon-tailwindcss-plain" /><spam className="tooltip">TailwindCSS</spam>
          </span>
          <span className="group icon">
            <i className="devicon-typescript-plain" /><span className="tooltip">TypeScript</span>
          </span>
          <span className="group icon">
            <i className="devicon-javascript-plain" /><span className="tooltip">JavaScript</span>
          </span>
          <span className="group icon">
            <i className="devicon-yarn-plain" /><span className="tooltip">Yarn</span>
          </span>
        </p >

        <p className="mt-14 text-2xl">
          See my work on <a href="https://github.com/itsneyoa" target="_blank" rel="noreferrer" className="group contact">GitHub<span className="tooltip">itsneyoa</span></a> or contact me via <a href="mailto:hello@neyoa.me" className="group contact">email<span className="tooltip">hello@neyoa.me</span></a> or <span className="group contact">Discord<span className="tooltip">neyoa#1572</span></span>.
        </p>
      </main >
    </div >
  )
}
