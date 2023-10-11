'use client'
import FooterLogo from '../FooterLogo'
import FooterContainer from '../FooterContainer'
import FooterNavLinks from '../FooterNavLinks'
import FooterSocialLinks from '../FooterSocialLinks'
import FooterCopyright from '../FooterCopyright'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdWhatsapp, MdOutlineMailOutline } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const path = usePathname()
  return (
    <footer
      id="contact"
      className="bg-gradient-footer px- flex items-center justify-center bg-primary px-4 pt-20"
    >
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between px-4 md:items-start md:px-0">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks
              title="Links"
              links={[
                {
                  name: 'Início',
                  href: '/',
                },
                {
                  name: 'Sobre',
                  href: `${path === '/' ? '#about-us' : '/#about-us'}`,
                },
                {
                  name: 'Blog',
                  href: '/blog',
                },
                {
                  name: 'Projetos',
                  href: `${path === '/' ? '#projects' : '/#projects'}`,
                },
              ]}
            />

            <FooterNavLinks
              title="Vagas"
              links={[
                {
                  name: 'Front-End',
                  href: '/vacancies',
                },
                {
                  name: 'Back-End',
                  href: '/vacancies',
                },
                {
                  name: 'Mobile',
                  href: '/vacancies',
                },
                {
                  name: 'UX/UI',
                  href: '/vacancies',
                },
              ]}
            />

            <FooterNavLinks
              title="Empresa"
              links={[
                {
                  name: 'Privacidade',
                  href: '#',
                },
                {
                  name: 'Termos e condições de uso',
                  href: '#',
                },
                {
                  name: 'Direitos reservados',
                  href: '#',
                },
              ]}
            />
          </aside>
        </section>
        <FooterSocialLinks
          socialMedia={[
            {
              social_name: '+55 (11) 94700-7927',
              href: '#',
              icon: MdWhatsapp,
            },
            {
              social_name: 'emailaddress@mail.com',
              href: '#',
              icon: MdOutlineMailOutline,
            },
            {
              social_name: 'linkedin.com/company/juniors-developers-group/',
              href: 'https://www.linkedin.com/company/juniors-developers-group/mycompany/',
              icon: SlSocialLinkedin,
            },
          ]}
        />
        <FooterCopyright />
      </FooterContainer>
    </footer>
  )
}

export default Footer
