import Link from 'next/link'
import Container from '../components/Misc/Container'

export default function PageNotFound() {
  return (
    <Container>
      <h1 className="font-black text-9xl opacity-90">404</h1>
      <h2 className="font-semibold text-5xl opacity-80 p-10">Page not found</h2>
      <div className="font-light text-2xl opacity-50">
        Chances are you want to go{' '}
        <span className="text-primary">
          <Link href="/">here</Link>
        </span>
        !
      </div>
    </Container>
  )
}
