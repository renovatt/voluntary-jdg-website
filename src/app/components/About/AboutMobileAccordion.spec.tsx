import { render, screen, fireEvent } from '@testing-library/react'
import AboutMobileAccordion from './AboutMobileAccordion'
import { IoEyeSharp } from 'react-icons/io5'

const data = {
  icon: IoEyeSharp,
  title: 'Missão',
  text: 'Testando componente',
  open: true,
  onClick: () => {
    jest.fn()
  },
}

const { getByAltText, getByRole, getByText } = screen

const renderComponent = () => {
  render(<AboutMobileAccordion {...data} />)
}

describe('AboutMobileAccordion', () => {
  const onClick = jest.fn()
  it('should render component by default', () => {
    renderComponent()

    const title = getByRole('heading', { name: data.title })
    const text = getByText(data.text)

    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
