import { render, screen , fireEvent} from "@testing-library/react"
import AboutMobileAccordion from "./AboutMobileAccordion"


const data = {
  icon: 'icon.svg',
  title: 'Missão',
  text: 'Testando componente',
  open: true,
  onClick: () => {}
}

const { getByAltText, getByRole, getByText } = screen

const renderComponent = () => {
  render(<AboutMobileAccordion {...data} />)
}

describe('AboutMobileAccordion', () => {
  const onClick = jest.fn()
  it('should render component by default', () => {
    renderComponent()

    const icon = getByAltText(data.title)
    const title = getByRole('heading', { name: data.title })
    const text = getByText(data.text)

    expect(icon).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('should call onClick when clicking on icon', () => {
    render(<AboutMobileAccordion {...data} onClick={onClick} />)

    const iconArrowDown = getByAltText('Arrow Down')
    fireEvent.click(iconArrowDown)
    expect(onClick).toBeCalled()  
  })
})