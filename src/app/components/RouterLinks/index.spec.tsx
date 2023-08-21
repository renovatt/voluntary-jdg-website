import RouterLinks from '.'
import { fireEvent, render } from '@testing-library/react'

describe('<RouterLinks/>', () => {
  it('should render RouterLinks component with link and text elements', () => {
    const { getByRole, getByText } = render(
      <RouterLinks href="/" text="Home" />,
    )

    const linkElement = getByRole('link')
    const childrenElement = getByText('Home')

    expect(linkElement).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
  })

  it('should call onClick prop when clicked', () => {
    const onClickMock = jest.fn()
    const { getByRole } = render(
      <RouterLinks onClick={onClickMock} href="/" text="Home" />,
    )
    const linkElement = getByRole('link')

    fireEvent.click(linkElement)

    expect(onClickMock).toHaveBeenCalled()
  })

  it('should apply default style without onClick prop', () => {
    const { getByText } = render(<RouterLinks href="/" text="Blog" />)
    const linkElement = getByText('Blog')

    expect(linkElement).toHaveClass('text-base text-zinc-400')
  })

  it('should apply hover style on mouse hover', () => {
    const { getByText } = render(<RouterLinks href="/" text="Blog" />)
    const linkElement = getByText('Blog')

    expect(linkElement).toHaveClass('hover:text-secondary')
  })
})
