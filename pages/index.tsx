import Container from '../components/Misc/Container'
import Main from '../components/Misc/Main'
import Particles from 'react-tsparticles'
import particlesOptions from '../styles/particles'
import Heading from '../components/Heading'
import Icons from '../components/Icons'
import Socials from '../components/Socials'

export default function Home() {
  return (
    <Container>
      <Particles options={particlesOptions} className="fixed z-10" />
      <Main>
        <Heading />
        <Icons />
        <Socials />
      </Main>
    </Container>
  )
}
