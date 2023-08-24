import Link from 'next/link'
import { FooterNavLinksProps } from './types'

const FooterNavLinks = ({ title, links }: FooterNavLinksProps) => {
  return (
    <nav
      data-testid="footer-nav-links"
      className="mx-2 flex flex-col items-start justify-center md:mx-4"
    >
      <h4 className="mb-4 text-xs font-semibold text-secondary">{title}</h4>
      {links.map((link, index) => (
        <Link
          key={index}
          className="mb-4 text-xs text-secondary"
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default FooterNavLinks
