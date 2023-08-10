import RouterLinks from './RouterLinks'
import { NavbarTypeProps } from '@/@types'
import { Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = ({ openModal }: NavbarTypeProps) => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouterLinks href="/" text="Início" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#about-us" text="Sobre" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#vacancy" text="Vagas" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#blog" text="Blog" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#projects" text="Projetos" />
        </li>
      </ul>

      <Bars3Icon
        className="h-6 w-6 cursor-pointer text-white md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
