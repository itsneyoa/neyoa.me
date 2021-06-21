export default function Custom404() {
  return (
    <div id="container" onContextMenu={(e) => e.preventDefault()}>
      <main id="main">
        <h1 className="text-large font-bold leading-tight bg-gradient-to-br bg-clip-text text-transparent from-purple-700 to-pink-600">404</h1>
        <h2 className="text-3xl font-semibold bg-gradient-to-br bg-clip-text text-transparent from-purple-700 to-pink-600">Page not found!</h2>
      </main>
    </div>)
}
