import FooterNavLinks from '.'
import { FooterNavLinksProps } from './types'
import { render } from '@testing-library/react'

describe('<FooterNavLinks/>', () => {
  const linksMock: FooterNavLinksProps['links'] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
  ]

  it('should render the title correctly', () => {
    const title = 'Navigation'
    const { getByText } = render(
      <FooterNavLinks title={title} links={linksMock} />,
    )
    const titleElement = getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    const { getByText } = render(
      <FooterNavLinks title="Navigation" links={linksMock} />,
    )

    linksMock.forEach((link) => {
      const linkElement = getByText(link.name)
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', link.href)
    })
  })

  it('should have correct container styling', () => {
    const { container } = render(
      <FooterNavLinks title="Navigation" links={linksMock} />,
    )
    const navElement = container.querySelector('nav')
    expect(navElement).toHaveClass('mx-2')
    expect(navElement).toHaveClass('flex')
    expect(navElement).toHaveClass('flex-col')
    expect(navElement).toHaveClass('items-start')
    expect(navElement).toHaveClass('justify-center')
    expect(navElement).toHaveClass('md:mx-4')
  })
})
