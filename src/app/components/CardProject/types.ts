import { StaticImageData } from 'next/image'

export type CardProjectsProps = {
  src: StaticImageData
  tittle: string
  description: string
  href: string
  side?: boolean
}
