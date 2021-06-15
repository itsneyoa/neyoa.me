import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Particles from "react-tsparticles";
import particlesOptions from '../styles/particles.json'

export default function Home() {
  return (
    <div className={styles.container} onContextMenu={(e) => e.preventDefault()}>
      <Head>
        <title>neyoa</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"></link>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>

      <Particles options={particlesOptions} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi! I'm <span>neyoa</span>
        </h1>

        <p className={styles.description}>
          bottom text {/* finish writing this */}
        </p>

        <p className={styles.icons}>
          <span className={styles.icon}>
            <i className="devicon-apache-plain"></i><span className={styles.tooltip}>Apache</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-csharp-line-wordmark"></i><span className={styles.tooltip}>C#</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-digitalocean-plain"></i><span className={styles.tooltip}>DigitalOcean</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-git-plain"></i><span className={styles.tooltip}>Git</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-github-original"></i><span className={styles.tooltip}>GitHub</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-nextjs-plain"></i><span className={styles.tooltip}>Next.js</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-nodejs-plain"></i><span className={styles.tooltip}>Node.js</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-javascript-plain"></i><span className={styles.tooltip}>JavaScript</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-ubuntu-plain"></i><span className={styles.tooltip}>Ubuntu</span>
          </span>
          <span className={styles.icon}>
            <i className="devicon-yarn-plain"></i><span className={styles.tooltip}>Yarn</span>
          </span>
        </p>

        <p className={styles.contacts}>
          See my work on <a href="https://github.com/itsneyoa" target="_blank" rel="noreferrer" className={styles.contact}>GitHub<span className={styles.tooltip}>itsneyoa</span></a> or contact me via <a href="mailto:hello@neyoa.me" className={styles.contact}>email<span className={styles.tooltip}>hello@neyoa.me</span></a> or <span className={styles.contact}>Discord<span className={styles.tooltip}>neyoa#1572</span></span>.
        </p>
      </main>
    </div>
  )
}
