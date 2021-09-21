import Contact from './Contact'

export default function Socials() {
  return (
    <p className="mt-14 text-2xl">
      See my work on <Contact name="GitHub" tooltip="itsneyoa" link="https://github.com/itsneyoa" /> or contact me via <Contact name="email" tooltip="lily@neyoa.me" link="mailto:lily@neyoa.me" /> or <Contact name="Discord" tooltip="neyoa#1572" />.
    </p>
  )
}
