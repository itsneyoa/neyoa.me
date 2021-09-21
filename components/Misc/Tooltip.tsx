export default function Tooltip({ text }: { text: string }) {
  return (
    <span className="invisible opacity-0 bg-light-tooltip dark:bg-dark-tooltip text-light-text dark:text-dark-text rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip group-hover:opacity-100 group-hover:visible duration-500 hover:bg-tooltip hover:text-dark-tooltip">
      {text}
    </span>
  )
}
