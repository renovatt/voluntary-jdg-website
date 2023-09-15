import FooterSocialLinks from '.'
import { render } from '@testing-library/react'
import { FooterSocialLinksProps } from './types'

describe('<FooterSocialLinks/>', () => {
  const socialMediaMock: FooterSocialLinksProps['socialMedia'] = [
    {
      social_name: 'Twitter',
      icon: () => <svg />,
      href: 'https://twitter.com/example',
    },
    {
      social_name: 'Instagram',
      icon: () => <svg />,
      href: 'https://instagram.com/example',
    },
  ]

  it('should render social media links', () => {
    const { getByText } = render(
      <FooterSocialLinks socialMedia={socialMediaMock} />,
    )

    socialMediaMock.forEach((social) => {
      const socialNameElement = getByText(social.social_name)
      expect(socialNameElement).toBeInTheDocument()

      const socialLinkElement = getByText(social.social_name)
      expect(socialLinkElement).toBeInTheDocument()
      expect(socialLinkElement).toHaveAttribute('href', social.href)
    })
  })

  it('should have correct container styling', () => {
    const { container } = render(
      <FooterSocialLinks socialMedia={socialMediaMock} />,
    )
    const sectionElement = container.querySelector('section')
    expect(sectionElement).toHaveClass('mt-8')
    expect(sectionElement).toHaveClass('flex')
    expect(sectionElement).toHaveClass('w-full')
    expect(sectionElement).toHaveClass('flex-wrap')
    expect(sectionElement).toHaveClass('items-center')
    expect(sectionElement).toHaveClass('justify-start')
    expect(sectionElement).toHaveClass('border')
    expect(sectionElement).toHaveClass('border-x-transparent')
    expect(sectionElement).toHaveClass('border-y-primary-400')
    expect(sectionElement).toHaveClass('p-4')
    expect(sectionElement).toHaveClass('sm:justify-center')
  })
})
