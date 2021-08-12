export default function Custom404() {
  return (
    <container className="bg-gradient-to-tr from-primary to-secondary" onContextMenu={e => e.preventDefault()}>
      <main className="text-dark-text">
        <h1 className="font-black text-9xl opacity-70">404</h1>
        <h2 className="font-semibold text-5xl opacity-50 p-10">Page not found</h2>
        <div className="grid grid-cols-2">
          <a href={'https://neyoa.me'}>
            <div className="from-red-500 to-yellow-400 buttonTilt">Home</div>
          </a>
          <a href={'https://bio.link/neyoa'}>
            <div className="from-purple-600 to-primary buttonTilt">Contact me </div>
          </a>
        </div>
      </main>
    </container>
  )
}
