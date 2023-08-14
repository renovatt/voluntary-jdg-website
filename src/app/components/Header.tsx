'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from './NavBar'
import logo from '@/assets/jdg.png'
import NavbarMobile from './NavbarMobile'
import { useToggle } from '@/hooks/useToggle'

const Header = () => {
  const { modal, openModal, closeModal } = useToggle()

  return (
    <header className="flex h-20 w-full items-center justify-between bg-primary px-16 transition-all">
      <Link href="/" className="flex">
        <figure className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
          <Image
            src={logo}
            alt="logo"
            className="h-full w-full object-cover p-1"
          />
        </figure>
      </Link>

      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />

      <Link
        href="#contact"
        className="hidden h-10 w-36 items-center justify-center rounded-lg bg-primary-400 text-base font-semibold text-secondary-950 transition-all hover:text-white md:flex"
      >
        Contato
      </Link>
    </header>
  )
}

export default Header
