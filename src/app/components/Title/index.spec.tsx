import Title from '.'
import { render } from '@testing-library/react'

describe('<Title />', () => {
  it('should render the title correctly', () => {
    const text = 'Test Title'
    const { getByText } = render(<Title text={text} />)
    const titleElement = getByText(text)
    expect(titleElement).toBeInTheDocument()
  })

  it('should have the appropriate classes', () => {
    const text = 'Test Title'
    const { container } = render(<Title text={text} />)
    const titleElement = container.querySelector('h1')
    expect(titleElement).toHaveClass('mb-8')
    expect(titleElement).toHaveClass('inline-block')
    expect(titleElement).toHaveClass('border')
    expect(titleElement).toHaveClass('border-transparent')
    expect(titleElement).toHaveClass('border-b-primary')
    expect(titleElement).toHaveClass('font-bold')
    expect(titleElement).toHaveClass('text-secondary')
  })
})
