import { ElementType } from 'react'

export type FooterSocialLinksProps = {
  socialMedia: {
    social_name: string
    href: string
    icon: ElementType
  }[]
}
