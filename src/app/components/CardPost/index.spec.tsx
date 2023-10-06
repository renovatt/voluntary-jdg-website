import CardPost from '.'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('CardPost', () => {
  const mockCardData = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    image: '/test-image.jpg',
    createdAt: '2023-08-21',
  }

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue({
      back: jest.fn(),
    })
  })

  it('should render the title', () => {
    render(<CardPost {...mockCardData} />)
    const titleElement = screen.getByText('Test Title')
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the subtitle', () => {
    render(<CardPost {...mockCardData} />)
    const subtitleElement = screen.getByText('Test Subtitle')
    expect(subtitleElement).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<CardPost {...mockCardData} />)
    const descriptionElement = screen.getByText('Test Description')
    expect(descriptionElement).toBeInTheDocument()
  })

  it('should render the created date', () => {
    render(<CardPost {...mockCardData} />)
    const createdAtElement = screen.getByText('2023-08-21')
    expect(createdAtElement).toBeInTheDocument()
  })

  it('should render the image with alt text', () => {
    render(<CardPost {...mockCardData} />)
    const imageElement = screen.getByAltText('post-image')
    expect(imageElement).toBeInTheDocument()
  })
})
