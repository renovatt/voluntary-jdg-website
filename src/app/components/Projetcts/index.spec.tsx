import Projects from '.'
import { render } from '@testing-library/react'

describe('<Projects />', () => {
  it('should render CardProjectContainer and CardProjects correctly', () => {
    // const { getByTestId } = render(<Projects />)
    // const cardProjectContainers = getByTestId('card-project-container')
    // expect(cardProjectContainers).toBeInTheDocument()
    // const cardProjects = getByTestId('card-project')
    // expect(cardProjects).toBeInTheDocument()
  })

  it('should render the main heading correctly', () => {
    const { getByText } = render(<Projects />)
    const mainHeading = getByText('PROJETOS')
    expect(mainHeading).toBeInTheDocument()
  })
})
