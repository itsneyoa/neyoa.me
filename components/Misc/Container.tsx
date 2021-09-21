import { ReactFragment } from 'react'

export default function Container({ children }: { children: ReactFragment }) {
  return (
    <div className="grid place-content-center min-h-screen py-2 bg-light-background dark:bg-dark-background z-0 select-none relative" onContextMenu={e => e.preventDefault()}>
      {children}
    </div>
  )
}
