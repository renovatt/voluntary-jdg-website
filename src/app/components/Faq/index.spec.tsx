import Faq from '.'
import { render } from '@testing-library/react'
import { FAQSessionsMock } from '@/mocks/FAQSessions'

describe('<Faq/>', () => {
  it('should render all FAQ sessions', () => {
    const { getAllByRole } = render(<Faq />)
    const sessionButtons = getAllByRole('button')
    expect(sessionButtons).toHaveLength(FAQSessionsMock.length)
  })

  it('should have closed content for all FAQ sessions initially', () => {
    const { queryByText } = render(<Faq />)

    FAQSessionsMock.forEach((session) => {
      const contentElement = queryByText(session.content)
      expect(contentElement).not.toBeInTheDocument()
    })
  })
})
