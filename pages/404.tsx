import Link from 'next/link'

export default function PageNotFound() {
  return (
    <div className="grid place-content-center min-h-screen py-2 bg-light-background dark:bg-dark-background z-0 relative">
      <main className="grid place-content-center w-full px-20 text-center text-light-text dark:text-dark-text z-20">
        <h1 className="font-black text-9xl opacity-90">404</h1>
        <h2 className="font-semibold text-5xl opacity-80 p-10">Page not found</h2>
        <div className="font-light text-2xl opacity-50">
          Chances are you want to go{' '}
          <span className="text-primary">
            <Link href="/">here</Link>
          </span>
          !
        </div>
      </main>
    </div>
  )
}
