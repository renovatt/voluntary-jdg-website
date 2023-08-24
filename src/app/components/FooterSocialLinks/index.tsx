import Link from 'next/link'
import { FooterSocialLinksProps } from './types'

const FooterSocialLinks = ({ socialMedia }: FooterSocialLinksProps) => {
  return (
    <section className="mt-8 flex w-[90%] flex-wrap items-center justify-start border border-x-transparent border-y-primary-400 p-4 sm:justify-center">
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          className="my-4 flex items-center justify-center gap-5 px-2 text-xs text-secondary"
          href={social.href}
        >
          {<social.icon className="h-5 w-5" />}
          {social.social_name}
        </Link>
      ))}
    </section>
  )
}

export default FooterSocialLinks
