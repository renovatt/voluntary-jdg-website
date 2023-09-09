import Vacancies from './page'
import { render, screen } from '@testing-library/react'

describe('<Vacancies/>', () => {
  it('should render the VacanciesPage component', () => {
    render(<Vacancies />)

    const vacanciesPage = screen.getByTestId('vacancies-page')
    expect(vacanciesPage).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Vacancies />)

    expect(asFragment()).toMatchSnapshot()
  })
})
