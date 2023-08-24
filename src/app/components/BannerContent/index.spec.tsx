import BannerContent from '.'
import { render } from '@testing-library/react'

describe('<BannerContent/>', () => {
  it('should render heading text correctly', () => {
    const { getByText } = render(<BannerContent />)
    const headingElement = getByText(/Junte-se à revolução/i)
    expect(headingElement).toBeInTheDocument()
  })

  it('should render subheading text correctly', () => {
    const { getByText } = render(<BannerContent />)
    const subheadingElement = getByText(
      /Faça parte do Juniors Developers Group/i,
    )
    expect(subheadingElement).toBeInTheDocument()
  })

  it('should render the correct font sizes for headings', () => {
    const { getByText } = render(<BannerContent />)
    const headingElement = getByText(/Junte-se à revolução/i)
    expect(headingElement).toHaveClass('text-xl sm:text-4xl md:text-5xl')
  })

  it('should render the correct font sizes for subheadings', () => {
    const { getByText } = render(<BannerContent />)
    const subheadingElement = getByText(
      /Faça parte do Juniors Developers Group/i,
    )
    expect(subheadingElement).toHaveClass('text-xs sm:text-base md:text-xl')
  })
})
