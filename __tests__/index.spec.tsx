import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'


describe('Page', () => {
  test('deve renderizar a página', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', {
      name: 'Bem vindo a JDG',
    })
 
    expect(heading).toBeInTheDocument()
  })
})