import { render, screen } from '@testing-library/react'
import VolunteersItem from './VolunteersItem'

const data = {
  image: '/image.png',
  name: 'Carlos',
  jobPosition: 'Dev Front-end',
}

const { getByAltText, getByText } = screen

describe('VolunteersItem', () => {
  it('should render component by default', () => {
    render(<VolunteersItem {...data} />)

    const image = getByAltText(data.name)
    const name = getByText(data.name)
    const jobPosition = getByText(data.jobPosition)

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(jobPosition).toBeInTheDocument()
  })
})
