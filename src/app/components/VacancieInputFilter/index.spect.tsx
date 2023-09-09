import { VacancieInputFilter } from '.'
import { render, screen, fireEvent } from '@testing-library/react'

describe('<VacancieInputFilter />', () => {
  it('should render the input field and label correctly', () => {
    const handleChange = jest.fn()
    const inputValue = 'Frontend Developer'

    render(<VacancieInputFilter value={inputValue} onChange={handleChange} />)

    const inputElement = screen.getByPlaceholderText(
      'Qual posição você está procurando?',
    ) as HTMLInputElement

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveClass(
      'w-full rounded-lg border border-primary-300 bg-primary-900 p-3 pl-12 text-start text-secondary outline-none transition-all ease-in placeholder:text-secondary focus:border-primary md:w-96',
    )

    const labelElement = screen.getByLabelText('Search')
    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveClass('left-3 top-3')

    const iconElement = screen.getByTestId('search-icon')
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toHaveClass('h-6 w-6 text-secondary')

    expect(inputElement.value).toBe(inputValue)
  })

  it('should call the onChange handler when input changes', () => {
    const handleChange = jest.fn()
    const inputValue = 'Frontend Developer'

    render(<VacancieInputFilter value={inputValue} onChange={handleChange} />)

    const inputElement = screen.getByPlaceholderText(
      'Qual posição você está procurando?',
    ) as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'Backend Developer' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('Backend Developer')
  })
})
