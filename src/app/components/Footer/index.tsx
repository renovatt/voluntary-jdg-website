import Link from 'next/link'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdWhatsapp, MdOutlineMailOutline } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-primary pt-20">
      <section className="container flex w-full flex-col items-center justify-center overflow-hidden">
        <section className="flex w-full flex-wrap items-center justify-between px-4 md:items-start md:px-20">
          {/* Logo */}
          <section className="flex h-28 w-36 flex-col items-start justify-between">
            <h1 className="text-5xl font-bold text-primary">jdg.</h1>
            <p className="flex flex-col text-xs text-secondary">
              Junte-se à revolução
              <span>da programação! 🚀</span>
            </p>
          </section>

          {/* List map links */}
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <nav className="mx-2 flex flex-col items-start justify-center md:mx-8">
              <h4 className="mb-4 text-xs font-semibold text-secondary">
                Links
              </h4>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Início
              </Link>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Sobre
              </Link>
              <Link className="text-xs text-secondary" href={'#'}>
                Blog
              </Link>
            </nav>

            <nav className="mx-2 flex flex-col items-start justify-center md:mx-8">
              <h4 className="mb-4 text-xs font-semibold text-secondary">
                Vagas
              </h4>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Front-End
              </Link>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Back-End
              </Link>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Mobile
              </Link>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                UX/UI
              </Link>
            </nav>

            <nav className="mx-2 flex flex-col items-start justify-center md:mx-8">
              <h4 className="mb-4 text-xs font-semibold text-secondary">
                Empresa
              </h4>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Privacidade
              </Link>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Termos e condições de uso
              </Link>
              <Link className="mb-4 text-xs text-secondary" href={'#'}>
                Direitos reservados
              </Link>
            </nav>
          </aside>
        </section>

        {/* social links */}
        <section className="mt-8 flex w-[90%] flex-wrap items-center justify-start border border-x-transparent border-y-primary-400 p-4 sm:justify-center">
          <Link
            className="my-4 flex items-center justify-center gap-5 px-2 text-xs text-secondary"
            href={'#'}
          >
            <MdWhatsapp className="h-5 w-5" />
            +55 (11) 94700-7927
          </Link>
          <Link
            className="my-4 flex items-center justify-center gap-5 px-2 text-xs text-secondary"
            href={'#'}
          >
            <MdOutlineMailOutline className="h-5 w-5" />
            emailaddress@mail.com
          </Link>
          <Link
            className="my-4 flex items-center justify-center gap-5 px-2 text-xs text-secondary"
            href={'#'}
          >
            <SlSocialLinkedin className="h-5 w-5" />
            linkedin.com/company/juniors-developers-group/
          </Link>
        </section>

        {/* copyright */}
        <section className="mb-20 mt-8 flex items-center justify-center">
          <h6 className="px-4 text-center text-xs text-secondary">
            © Juniors Developers Group 2023. Todos os direitos reservados.
          </h6>
        </section>
      </section>
    </footer>
  )
}

export default Footer
