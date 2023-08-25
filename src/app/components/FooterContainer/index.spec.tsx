import FooterContainer from '.'
import { render } from '@testing-library/react'

describe('<FooterContainer/>', () => {
  it('should render children inside a container with correct styling', () => {
    const { container } = render(
      <FooterContainer>
        <p>Test Content</p>
      </FooterContainer>,
    )

    const containerElement = container.firstChild
    expect(containerElement).toHaveClass('container')
    expect(containerElement).toHaveClass('flex')
    expect(containerElement).toHaveClass('w-full')
    expect(containerElement).toHaveClass('flex-col')
    expect(containerElement).toHaveClass('items-center')
    expect(containerElement).toHaveClass('justify-center')
    expect(containerElement).toHaveClass('overflow-hidden')

    const childElement = container.querySelector('p')
    expect(childElement).toBeInTheDocument()

    if (childElement) {
      expect(childElement.textContent).toBe('Test Content')
    }
  })
})
