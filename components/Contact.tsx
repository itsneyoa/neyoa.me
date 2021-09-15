export default function Contact({ name, tooltip, link }: { name: string; tooltip: string; link?: string }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group text-contact relative inline-flex justify-center items-center">
      {name}
      <span className="invisible opacity-0 bg-light-tooltip dark:bg-dark-tooltip text-light-text dark:text-dark-text rounded-lg text-center text-lg px-2 py-1 w-auto absolute bottom-tooltip group-hover:opacity-100 group-hover:visible duration-500 hover:bg-tooltip hover:text-dark-tooltip">
        {tooltip}
      </span>
    </a>
  )
}
