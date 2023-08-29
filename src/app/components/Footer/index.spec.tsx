import Footer from '.'
import { render } from '@testing-library/react'

describe('<Footer/>', () => {
  it('should render all footer components with correct styling', () => {
    const { container, getByTestId } = render(<Footer />)

    const footerContainer = getByTestId('footer-container')
    expect(footerContainer).toBeInTheDocument()

    const footerLogo = getByTestId('footer-logo')
    expect(footerLogo).toBeInTheDocument()

    const footerNavLinks = container.querySelectorAll(
      '[data-testid="footer-nav-links"]',
    )
    expect(footerNavLinks).toHaveLength(3)
    footerNavLinks.forEach((navLinks) => {
      expect(navLinks).toBeInTheDocument()
    })

    const footerSocialLinks = getByTestId('footer-social-links')
    expect(footerSocialLinks).toBeInTheDocument()

    const footerCopyright = getByTestId('footer-copyright')
    expect(footerCopyright).toBeInTheDocument()

    const footerElement = container.querySelector('footer')
    expect(footerElement).toBeInTheDocument()
    expect(footerElement).toHaveClass('flex')
    expect(footerElement).toHaveClass('items-center')
    expect(footerElement).toHaveClass('justify-center')
    expect(footerElement).toHaveClass('bg-primary')
    expect(footerElement).toHaveClass('bg-gradient-footer')
    expect(footerElement).toHaveClass('pt-20')
  })
})
