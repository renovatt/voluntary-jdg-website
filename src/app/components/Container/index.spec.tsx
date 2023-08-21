import Container from '.'
import { render, screen } from '@testing-library/react'

describe('<Container/>', () => {
  it('should render Container component', () => {
    render(<Container>Children</Container>)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
