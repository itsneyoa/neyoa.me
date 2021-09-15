import { ReactFragment } from 'react'
import Tooltip from './Tooltip'

export default function Icon({ icon, name }: { icon: string; name: string }) {
  return (
    <span className="group relative flex justify-center items-center">
      <i className={icon} />
      <Tooltip text={name} />
    </span>
  )
}
