import { CardVacanciesProps } from './types'

const CardVacancies = ({ techs, title, description }: CardVacanciesProps) => {
  return (
    <section
      className="min-w-96 my-2 h-full w-full rounded-lg border border-l-4 border-primary border-y-transparent border-r-transparent bg-primary-900 p-4 lg:w-[30rem]
      "
    >
      <span className="rounded-lg bg-primary-800 p-2 text-xs text-secondary">
        Estamos procurando um novo
      </span>
      <article className="mt-4">
        <h1 className="text-xl font-bold text-secondary">{title}</h1>
        {techs.map((tech, index) => (
          <span
            key={tech.id}
            data-tech={tech.name}
            className="relative p-2  text-xs text-primary-400"
          >
            {tech.name}
            {index < techs.length - 1 && (
              <span className="absolute top-[5.5px] pl-[5.5px] text-primary-400">
                .
              </span>
            )}
          </span>
        ))}
        <p className="my-4 max-h-16 overflow-hidden text-xs text-secondary-500">
          {description}
        </p>

        <button className="bg-gradient-btn mt-4 h-12 w-full rounded-lg border border-primary text-base text-secondary outline-none transition-all ease-in-out hover:bg-primary-400 hover:font-semibold hover:text-secondary-800">
          Voluntariar-se
        </button>
      </article>
    </section>
  )
}

export default CardVacancies
