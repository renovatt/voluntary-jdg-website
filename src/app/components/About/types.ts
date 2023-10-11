import { IconType } from 'react-icons'

export interface AboutMobileProps {
  icon: IconType
  title: string
  text: string
  open: boolean
  onClick: () => void
}
