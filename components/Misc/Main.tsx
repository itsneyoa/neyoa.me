import { ReactFragment } from 'react'

export default function Main({ children }: { children: ReactFragment }) {
  return <div className="grid place-content-center w-full px-20 text-center text-light-text dark:text-dark-text z-20">{children}</div>
}
