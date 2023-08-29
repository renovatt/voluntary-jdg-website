import FooterLogo from '.'
import { render } from '@testing-library/react'

describe('<FooterLogo/>', () => {
  it('should render the logo with correct text and styling', () => {
    const { getByText, container } = render(<FooterLogo />)

    const logoTextElement = getByText('jdg.')
    expect(logoTextElement).toBeInTheDocument()
    expect(logoTextElement).toHaveClass('text-5xl')
    expect(logoTextElement).toHaveClass('font-bold')
    expect(logoTextElement).toHaveClass('text-primary')

    const taglineElement = getByText('Junte-se à revolução')
    expect(taglineElement).toBeInTheDocument()

    const sectionElement = container.querySelector('section')
    expect(sectionElement).toHaveClass('flex')
    expect(sectionElement).toHaveClass('h-28')
    expect(sectionElement).toHaveClass('w-36')
    expect(sectionElement).toHaveClass('flex-col')
    expect(sectionElement).toHaveClass('items-start')
    expect(sectionElement).toHaveClass('justify-between')
  })
})
