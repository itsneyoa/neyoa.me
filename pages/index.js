import Head from 'next/head'
import Image from 'next/image'
import rainbowcrystalheart from '../public/rainbowcrystalheart.gif'
import transcrystalheart from '../public/transcrystalheart.gif'
import Particles from "react-tsparticles";
import particlesOptions from '../styles/particles.json'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-light-background dark:bg-dark-background z-0 select-none" onContextMenu={(e) => e.preventDefault()}>
      <Head>
        <title>neyoa</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Particles options={particlesOptions} className="z-10" />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-light-text dark:text-dark-text z-20">
        <h1 className="text-6xl font-bold leading-tight">
          Hi! I'm <span className="text-primary">neyoa</span>
        </h1>

        <p className="mt-3 text-2xl">
          <Image src={rainbowcrystalheart} width="20" height="20" /> Happy pride!!! <Image src={transcrystalheart} width="20" height="20" /> {/* if you read this you're a cutie <3 */}
        </p>

        <p className="mt-12 text-5xl flex flex-row flex-wrap justify-center">
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-apache-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">Apache</span>
          </span >
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-csharp-line-wordmark" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">C#</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-digitalocean-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">DigitalOcean</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-git-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">Git</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-github-original" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">GitHub</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-nextjs-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">Next.js</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-nodejs-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">Node.js</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-javascript-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">JavaScript</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-ubuntu-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">Ubuntu</span>
          </span>
          <span className="group relative px-4 inline-block justify-center items-center">
            <i className="devicon-yarn-plain" /><span className="opacity-0 bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">Yarn</span>
          </span>
        </p >

        <p className="m-0 leading-none text-2xl mt-10">
          See my work on <a href="https://github.com/itsneyoa" target="_blank" rel="noreferrer" className="group text-tertiary relative inline-flex justify-center items-center">GitHub<span className="opacity-0 text-light-text dark:text-dark-text bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">itsneyoa</span></a> or contact me via <a href="mailto:hello@neyoa.me" className="group text-tertiary relative inline-flex justify-center items-center">email<span className="opacity-0 text-light-text dark:text-dark-text bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">hello@neyoa.me</span></a> or <span className="group text-tertiary relative inline-flex justify-center items-center">Discord<span className="opacity-0 text-light-text dark:text-dark-text bg-light-tooltip dark:bg-dark-tooltip rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip m-tooltip group-hover:opacity-100">neyoa#1572</span></span>.
        </p>
      </main >
    </div >
  )
}
