import { ReactNode } from 'react'

export type RouterLinksProps = {
  text: string
  href: string
  onClick?: () => void
}

export type NavbarTypeProps = {
  openModal: () => void
}

export type NavbarMobileTypeProps = {
  modal: boolean
  closeModal: () => void
}

export type ContainerTypeProps = {
  children: ReactNode
}
