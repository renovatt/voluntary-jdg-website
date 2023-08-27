import React from 'react'
import CardProjects from '.'
import { getByRole, render } from '@testing-library/react'
import projectImage from '@/assets/breve.png'

describe('<CardProjects />', () => {
  const mockProps = {
    tittle: 'Project Title',
    src: projectImage,
    href: 'https://example.com',
    description: 'Project description.',
    side: true,
  }

  it('should render correctly with provided props', () => {
    const { getByText, getByRole } = render(<CardProjects {...mockProps} />)

    const projectTitle = getByText('Project Title')
    const projectDescription = getByText('Project description.')
    const projectLink = getByText('Ver projeto')

    expect(projectTitle).toBeInTheDocument()
    expect(projectDescription).toBeInTheDocument()
    expect(projectLink).toBeInTheDocument()

    const imageElement = getByRole('img')
    expect(imageElement).toBeInTheDocument()
  })

  it('should have the correct CSS classes based on props', () => {
    const { container } = render(<CardProjects {...mockProps} />)

    const sectionElement = container.querySelector('section')
    const figureElement = container.querySelector('figure')
    const titleElement = container.querySelector('h1')
    const descriptionElement = container.querySelector('p')
    const linkElement = container.querySelector('a')

    expect(sectionElement).toHaveClass('flex')
    expect(sectionElement).toHaveClass('h-full')
    expect(sectionElement).toHaveClass('w-full')
    expect(sectionElement).toHaveClass('flex-col')
    expect(sectionElement).toHaveClass('items-center')
    expect(sectionElement).toHaveClass('justify-center')
    expect(sectionElement).toHaveClass('md:w-1/2')
    expect(sectionElement).toHaveClass('md:mt-28')

    expect(figureElement).toBeInTheDocument()

    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('text-1xl')
    expect(titleElement).toHaveClass('font-bold')
    expect(titleElement).toHaveClass('text-secondary')
    expect(titleElement).toHaveClass('md:text-2xl')

    expect(descriptionElement).toBeInTheDocument()
    expect(descriptionElement).toHaveClass('text-xs')
    expect(descriptionElement).toHaveClass('text-primary-400')
    expect(descriptionElement).toHaveClass('md:text-sm')

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
    expect(linkElement).toHaveClass('text-xs')
    expect(linkElement).toHaveClass('text-secondary')
    expect(linkElement).toHaveClass('md:text-sm')
  })

  it('should have different CSS classes when `side` prop is false', () => {
    const { container } = render(<CardProjects {...mockProps} side={false} />)

    const sectionElement = container.querySelector('section')

    expect(sectionElement).toHaveClass('md:mt-0')
    expect(sectionElement).not.toHaveClass('md:mt-28')
  })
})
