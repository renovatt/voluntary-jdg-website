import FaqSessionButton from '.'
import { render, fireEvent } from '@testing-library/react'

describe('<FaqSessionButton/>', () => {
  const testQuestion = 'Test Question'

  it('should render without errors', () => {
    const onClick = jest.fn()

    render(
      <FaqSessionButton
        question={testQuestion}
        isOpen={false}
        onClick={onClick}
      />,
    )
  })

  it('should display the question prop correctly', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <FaqSessionButton
        question={testQuestion}
        isOpen={false}
        onClick={onClick}
      />,
    )
    const questionElement = getByText(testQuestion)
    expect(questionElement).toBeInTheDocument()
  })

  it('should display the correct icon based on isOpen prop', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <FaqSessionButton
        question={testQuestion}
        isOpen={true}
        onClick={onClick}
      />,
    )
    const xMarkIcon = getByTestId('xMarkIcon')
    expect(xMarkIcon).toBeInTheDocument()

    const { getByTestId: getByTestIdPlus } = render(
      <FaqSessionButton
        question={testQuestion}
        isOpen={false}
        onClick={onClick}
      />,
    )
    const plusIcon = getByTestIdPlus('PlusIcon')
    expect(plusIcon).toBeInTheDocument()
  })

  it('shoulf call onClick when button is clicked', () => {
    const mockOnClick = jest.fn()
    const { getByText } = render(
      <FaqSessionButton
        question={testQuestion}
        isOpen={false}
        onClick={mockOnClick}
      />,
    )
    const buttonElement = getByText(testQuestion)
    fireEvent.click(buttonElement)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
