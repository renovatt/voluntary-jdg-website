// import { render, screen, fireEvent } from '@testing-library/react'
// import VacanciesPage from '.'

// describe('<VacanciesPage/>', () => {
//   it('should render the component', () => {
//     render(<VacanciesPage />)

//     expect(screen.getByTestId('vacancies-header-text')).toBeInTheDocument()
//   })

//   it('should filter vacancies by category', () => {
//     render(<VacanciesPage />)

//     fireEvent.click(screen.getByText('Filtrar por'))
//     fireEvent.click(screen.getByText('Front-End'))

//     expect(screen.queryByText('Back-End Developer')).not.toBeInTheDocument()
//   })

//   it('should filter vacancies by text input', () => {
//     render(<VacanciesPage />)

//     const searchInput = screen.getByPlaceholderText(
//       'Qual posição você está procurando?',
//     )

//     fireEvent.change(searchInput, { target: { value: 'React' } })
//     expect(screen.queryByText('Node.js Developer')).not.toBeInTheDocument()
//   })
// })
