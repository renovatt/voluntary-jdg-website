import FooterLogo from '../FooterLogo'
import FooterNavLinks from '../FooterNavLinks'
import FooterSocialLinks from '../FooterSocialLinks'
import FooterCopyright from '../FooterCopyright'
import FooterContainer from '../FooterContainer'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdWhatsapp, MdOutlineMailOutline } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-primary bg-gradient-footer pt-20">
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between px-4 md:items-start md:px-20">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks
              title="Links"
              links={[
                {
                  name: 'Início',
                  href: '#',
                },
                {
                  name: 'Sobre',
                  href: '#',
                },
                {
                  name: 'Projetos',
                  href: '#',
                },
                {
                  name: 'Blog',
                  href: '#',
                },
              ]}
            />

            <FooterNavLinks
              title="Vagas"
              links={[
                {
                  name: 'Front-End',
                  href: '#',
                },
                {
                  name: 'Back-End',
                  href: '#',
                },
                {
                  name: 'Mobile',
                  href: '#',
                },
                {
                  name: 'UX/UI',
                  href: '#',
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
              href: '#',
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
