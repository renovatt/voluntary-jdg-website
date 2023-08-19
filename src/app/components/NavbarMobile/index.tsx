import { useEffect } from 'react'
import RouterLinks from '../RouterLinks'
import { NavbarMobileTypeProps } from './types'
import { XMarkIcon } from '@heroicons/react/24/outline'

const NavbarMobile = ({ modal, closeModal }: NavbarMobileTypeProps) => {
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'auto'
  }, [modal])
  return (
    <>
      {modal && (
        <nav
          data-testid="navbar-mobile"
          className={`absolute left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-primary bg-gradient-to-b from-transparent to-primary-400 backdrop-blur-sm transition-all ease-in ${
            modal ? 'flex animate-mobileActive' : ''
          }`}
        >
          <ul className="flex w-full transform flex-col items-center justify-center gap-8 overflow-hidden transition-all">
            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-secondary-800">
              <RouterLinks href="/" text="Início" onClick={closeModal} />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-secondary-800">
              <RouterLinks href="#about-us" text="Sobre" onClick={closeModal} />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-secondary-800">
              <RouterLinks
                href="#vacancies"
                text="Vagas"
                onClick={closeModal}
              />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-secondary-800">
              <RouterLinks href="#blog" text="Blog" onClick={closeModal} />
            </li>

            <li className="m-2 w-full p-2 text-center transition-all hover:scale-105 hover:bg-secondary-800">
              <RouterLinks
                href="#projects"
                text="Projetos"
                onClick={closeModal}
              />
            </li>
          </ul>

          <XMarkIcon
            data-testid="xmark-icon"
            className="hover:text-textPrimary absolute right-8 top-8 h-8 w-8 cursor-pointer text-white transition-all ease-in"
            onClick={closeModal}
          />
        </nav>
      )}
    </>
  )
}

export default NavbarMobile
