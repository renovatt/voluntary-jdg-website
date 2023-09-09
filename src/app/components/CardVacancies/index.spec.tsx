import CardVacancies from '.'
import { render } from '@testing-library/react'

describe('<CardVacancies />', () => {
  const techs = [
    { id: 1, name: 'React' },
    { id: 2, name: 'JavaScript' },
  ]
  const title = 'Front-end Developer'
  const description = 'Join our team as a front-end developer.'

  it('should render the card with provided data', () => {
    const { getByText, getByRole } = render(
      <CardVacancies
        techs={techs}
        title={title}
        description={description}
        id={0}
        category={''}
      />,
    )

    const titleElement = getByText(title)
    expect(titleElement).toBeInTheDocument()

    techs.forEach((tech) => {
      const techElement = getByText(tech.name)
      expect(techElement).toBeInTheDocument()
    })

    const descriptionElement = getByText(description)
    expect(descriptionElement).toBeInTheDocument()

    const volunteerButton = getByRole('button', { name: 'Voluntariar-se' })
    expect(volunteerButton).toBeInTheDocument()
  })

  it('should have the appropriate CSS classes', () => {
    const { container } = render(
      <CardVacancies
        techs={techs}
        title={title}
        description={description}
        id={0}
        category={''}
      />,
    )

    const cardSection = container.querySelector('section')
    expect(cardSection).toHaveClass('min-w-96')
    expect(cardSection).toHaveClass('my-2')
    expect(cardSection).toHaveClass('h-full')
    expect(cardSection).toHaveClass('w-full')
    expect(cardSection).toHaveClass('rounded-lg')
    expect(cardSection).toHaveClass('border')
    expect(cardSection).toHaveClass('border-l-4')
    expect(cardSection).toHaveClass('border-primary')
    expect(cardSection).toHaveClass('border-y-transparent')
    expect(cardSection).toHaveClass('border-r-transparent')
    expect(cardSection).toHaveClass('bg-primary-900')
    expect(cardSection).toHaveClass('p-4')
    expect(cardSection).toHaveClass('lg:w-[30rem]')

    const typeTag = container.querySelector('span')
    expect(typeTag).toHaveClass('rounded-lg')
    expect(typeTag).toHaveClass('bg-primary-800')
    expect(typeTag).toHaveClass('p-2')
    expect(typeTag).toHaveClass('text-xs')
    expect(typeTag).toHaveClass('text-secondary')

    const article = container.querySelector('article')
    expect(article).toHaveClass('mt-4')

    const titleElement = container.querySelector('h1')
    expect(titleElement).toHaveClass('text-xl')
    expect(titleElement).toHaveClass('font-bold')
    expect(titleElement).toHaveClass('text-secondary')

    techs.forEach((tech) => {
      const techElement = container.querySelector(`[data-tech="${tech.name}"]`)
      expect(techElement).toHaveClass('relative')
      expect(techElement).toHaveClass('p-2')
      expect(techElement).toHaveClass('text-xs')
      expect(techElement).toHaveClass('text-primary-400')
    })

    const descriptionElement = container.querySelector('p')
    expect(descriptionElement).toHaveClass('my-4')
    expect(descriptionElement).toHaveClass('max-h-16')
    expect(descriptionElement).toHaveClass('overflow-hidden')
    expect(descriptionElement).toHaveClass('text-xs')
    expect(descriptionElement).toHaveClass('text-secondary-500')

    const volunteerButton = container.querySelector('button')
    expect(volunteerButton).toHaveClass('bg-gradient-btn')
    expect(volunteerButton).toHaveClass('mt-4')
    expect(volunteerButton).toHaveClass('h-12')
    expect(volunteerButton).toHaveClass('w-full')
    expect(volunteerButton).toHaveClass('rounded-lg')
    expect(volunteerButton).toHaveClass('border')
    expect(volunteerButton).toHaveClass('border-primary')
    expect(volunteerButton).toHaveClass('text-base')
    expect(volunteerButton).toHaveClass('text-secondary')
    expect(volunteerButton).toHaveClass('outline-none')
    expect(volunteerButton).toHaveClass('transition-all')
    expect(volunteerButton).toHaveClass('ease-in-out')
    expect(volunteerButton).toHaveClass('hover:bg-primary-400')
    expect(volunteerButton).toHaveClass('hover:font-semibold')
    expect(volunteerButton).toHaveClass('hover:text-secondary-800')
  })
})
