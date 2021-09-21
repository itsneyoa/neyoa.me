import 'devicon/devicon.min.css'

import Icon from './Icon'

export default function Icons() {
  return (
    <>
      <main>
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
      </main>
    </>
  )
}
