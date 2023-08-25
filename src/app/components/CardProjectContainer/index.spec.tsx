import CardProjectContainer from '.'
import { render } from '@testing-library/react'

describe('<CardProjectContainer />', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <CardProjectContainer>
        <div>Child 1</div>
        <div>Child 2</div>
      </CardProjectContainer>,
    )

    const child1 = getByText('Child 1')
    const child2 = getByText('Child 2')

    expect(child1).toBeInTheDocument()
    expect(child2).toBeInTheDocument()
  })

  it('should have the correct CSS classes', () => {
    const { container } = render(
      <CardProjectContainer>
        <div>Child 1</div>
        <div>Child 2</div>
      </CardProjectContainer>,
    )

    const sectionElement = container.querySelector('section')

    expect(sectionElement).toHaveClass('mb-10')
    expect(sectionElement).toHaveClass('mt-2')
    expect(sectionElement).toHaveClass('flex')
    expect(sectionElement).toHaveClass('flex-col')
    expect(sectionElement).toHaveClass('items-start')
    expect(sectionElement).toHaveClass('justify-start')
    expect(sectionElement).toHaveClass('gap-10')
    expect(sectionElement).toHaveClass('md:flex-row')
  })
})
