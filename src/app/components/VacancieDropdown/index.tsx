import { Fragment } from 'react'
import { BiFilter } from 'react-icons/bi'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Categories } from '@/mocks/Categories'
import { VacancieDropdownProps } from './types'

const VacancieDropdown = ({ handleCategorySelect }: VacancieDropdownProps) => {
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Menu
      as="div"
      className="relative w-full text-left md:inline-block xl:w-auto"
    >
      <section>
        <Menu.Button
          className="inline-flex w-full items-center justify-between gap-x-1.5 rounded-md bg-primary-900 px-4 py-3 text-sm text-secondary shadow-sm hover:bg-zinc-900 md:flex md:justify-center
         xl:w-60"
        >
          <BiFilter className="h-5 w-5" />
          Filtrar por
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </section>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <section className="py-1">
            {Categories.map((categories) =>
              categories.categories.map((category) => (
                <Menu.Item key={category.id}>
                  {({ active }) => (
                    <div
                      onClick={() => handleCategorySelect(category.name)}
                      className={classNames(
                        active ? 'text-secondary' : 'text-secondary-500',
                        'block px-4 py-2 text-sm',
                      )}
                    >
                      {category.name}
                    </div>
                  )}
                </Menu.Item>
              )),
            )}
          </section>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default VacancieDropdown
