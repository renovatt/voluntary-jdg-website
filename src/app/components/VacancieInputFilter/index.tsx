import { BiSearch } from 'react-icons/bi'
import { VacancieInputFilterProps } from './types'

export const VacancieInputFilter = ({
  value,
  onChange,
}: VacancieInputFilterProps) => {
  return (
    <section className="relative w-full">
      <input
        type="text"
        placeholder="Qual posição você está procurando?"
        className="min-w-96 w-full rounded-lg border border-primary-300 bg-primary-900 p-3 pl-12 text-start text-secondary outline-none transition-all ease-in placeholder:text-secondary focus:border-primary md:w-96 lg:w-[30rem]"
        value={value}
        onChange={onChange}
      />
      <label className="absolute left-3 top-3">
        <BiSearch className="h-6 w-6 text-secondary" />
      </label>
    </section>
  )
}
