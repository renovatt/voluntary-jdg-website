import Projects from '.'
import { render } from '@testing-library/react'

describe('<Projects />', () => {
  it('should render CardProjectContainer and CardProjects correctly', () => {
    const { getAllByTestId } = render(<Projects />)
    const cardProjectContainers = getAllByTestId('card-project-container')
    expect(cardProjectContainers.length).toBeGreaterThan(0)

    const cardProjects = getAllByTestId('card-project')
    expect(cardProjects.length).toBeGreaterThan(0)
  })

  it('should render the main heading correctly', () => {
    const { getByText } = render(<Projects />)
    const mainHeading = getByText('PROJETOS')
    expect(mainHeading).toBeInTheDocument()
  })
})
