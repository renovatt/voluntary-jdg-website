import Link from 'next/link'
import { FooterSocialLinksProps } from './types'

const FooterSocialLinks = ({ socialMedia }: FooterSocialLinksProps) => {
  return (
    <section
      data-testid="footer-social-links"
      className="mt-8 flex w-full flex-wrap items-center justify-start border border-x-transparent border-y-primary-400 p-4 sm:justify-center"
    >
      {socialMedia.map((social, index) => (
        <Link
          key={index}
          target="_blank"
          data-testid="social-link"
          className="my-4 flex items-center justify-center gap-5 px-2 text-xs text-secondary"
          href={social.href}
        >
          {<social.icon className="h-5 w-5" data-testid="social-icon" />}
          {social.social_name}
        </Link>
      ))}
    </section>
  )
}

export default FooterSocialLinks
