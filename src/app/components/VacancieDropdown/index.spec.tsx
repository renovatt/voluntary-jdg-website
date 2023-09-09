import VacancieDropdown from '.'
import { Categories } from '@/mocks/Categories'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

const mockHandleCategorySelect = jest.fn()

describe('<VacancieDropdown />', () => {
  it('should render the dropdown button correctly', () => {
    render(<VacancieDropdown handleCategorySelect={mockHandleCategorySelect} />)
    const dropdownButton = screen.getByText('Filtrar por')
    expect(dropdownButton).toBeInTheDocument()
    expect(dropdownButton).toHaveClass('text-sm font-semibold text-secondary')
  })

  it('should open the dropdown menu on button click', async () => {
    render(<VacancieDropdown handleCategorySelect={mockHandleCategorySelect} />)
    const dropdownButton = screen.getByText('Filtrar por')

    fireEvent.click(dropdownButton)

    await waitFor(() => {
      const dropdownMenu = screen.getByRole('menu')
      expect(dropdownMenu).toBeInTheDocument()
    })
  })

  it('should render category options correctly', async () => {
    render(<VacancieDropdown handleCategorySelect={mockHandleCategorySelect} />)
    const dropdownButton = screen.getByText('Filtrar por')
    fireEvent.click(dropdownButton)

    await waitFor(() => {
      Categories[0].categories.forEach((category) => {
        const categoryOption = screen.getByText(category.name)
        expect(categoryOption).toBeInTheDocument()
        expect(categoryOption).toHaveClass('text-sm')
      })
    })
  })

  it('should call handleCategorySelect when a category is selected', async () => {
    render(<VacancieDropdown handleCategorySelect={mockHandleCategorySelect} />)
    const dropdownButton = screen.getByText('Filtrar por')
    fireEvent.click(dropdownButton)

    const selectedCategory = Categories[0].categories[0]
    const categoryOption = screen.getByText(selectedCategory.name)

    fireEvent.click(categoryOption)

    await waitFor(() => {
      expect(mockHandleCategorySelect).toHaveBeenCalledTimes(1)
      expect(mockHandleCategorySelect).toHaveBeenCalledWith(
        selectedCategory.name,
      )
    })
  })
})
