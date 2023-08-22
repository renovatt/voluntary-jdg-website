import FaqSessionContent from '.'
import { render } from '@testing-library/react'

describe('<FaqSessionContent/>', () => {
  it('should render without errors', () => {
    render(<FaqSessionContent content="Test content" />)
  })

  it('should display content prop correctly', () => {
    const testContent = 'This is a test content'
    const { getByText } = render(<FaqSessionContent content={testContent} />)
    const contentElement = getByText(testContent)

    expect(contentElement).toBeInTheDocument()
  })

  it('must apply css classes correctly', () => {
    const testContent = 'This is a test content'
    const { getByText } = render(<FaqSessionContent content={testContent} />)
    const contentElement = getByText(testContent)

    expect(contentElement).toHaveClass('mb-6')
    expect(contentElement).toHaveClass('mt-4')
    expect(contentElement).toHaveClass('animate-faq')
    expect(contentElement).toHaveClass('px-4')
    expect(contentElement).toHaveClass('text-base')
    expect(contentElement).toHaveClass('leading-8')
    expect(contentElement).toHaveClass('text-secondary')
  })
})
