import React from 'react'
import Button from './Button'
import { render } from '@testing-library/react'
import { BrowserRouter as Router} from 'react-router-dom'

describe('Testando componete Button', () => {
  const text = 'Criar Trazação'
  const href = 'http://localhost'
  test('Verificar se o texto esta renderizando', () => {
    const { getByText } = render(<Button>{text}</Button>)
    expect(getByText(text)).toBeInTheDocument()
  })

  test('quando componete Button receber href componente dev renderizar um link tag <a>', () => {
    const { container } = render(<Router><Button href={href}>{text}</Button></Router>)
    expect(container.querySelector('a')).toHaveAttribute('href')
  })
})
