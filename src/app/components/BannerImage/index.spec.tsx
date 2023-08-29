import BannerImage from '.'
import { render } from '@testing-library/react'

describe('<BannerImage/>', () => {
  it('should render the image', () => {
    const { getByAltText } = render(<BannerImage />)
    const imageElement = getByAltText('banner-image')
    expect(imageElement).toBeInTheDocument()
  })

  it('has correct alt text for the image', () => {
    const { getByAltText } = render(<BannerImage />)
    const imageElement = getByAltText('banner-image')
    expect(imageElement).toHaveAttribute('alt', 'banner-image')
  })
})
