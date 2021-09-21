import subtitles from '../../styles/subtitles'

export default function Subtitle() {
  return <p className="mt-3 text-2xl">{subtitles[Math.floor(Math.random() * subtitles.length)]}</p>
}
