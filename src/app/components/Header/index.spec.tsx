import Header from '.'
import { render, fireEvent } from '@testing-library/react'

describe('<Header/>', () => {
  it('should render Header component', () => {
    render(<Header />)
  })

  it('should redirect correctly when clicking the link', () => {
    const { getByRole } = render(<Header />)
    const linkElement = getByRole('link', { name: /contato/i })

    fireEvent.click(linkElement)
  })

  it('should have the correct href attribute for the logo link', () => {
    const { getByTestId } = render(<Header />)
    const logoLink = getByTestId('logo-link')

    expect(logoLink).toHaveAttribute('href', '/')
  })

  // it('should have the correct href attribute for the "Contato" link', () => {
  //   const { getByRole } = render(<Header />)
  //   const contactLink = getByRole('link', { name: /contato/i })

  //   expect(contactLink).toHaveAttribute('href', '#contact')
  // })

  it('should apply hover style on link mouse hover', () => {
    const { getByRole } = render(<Header />)
    const linkElement = getByRole('link', { name: /contato/i })

    fireEvent.mouseEnter(linkElement)

    expect(linkElement).toHaveClass('hover:text-white')
  })

  it('should render the logo image', () => {
    const { getByRole } = render(<Header />)
    const logoImage = getByRole('img')

    expect(logoImage).toBeInTheDocument()
  })
})
