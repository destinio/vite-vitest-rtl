import { beforeAll, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button', () => {
  it('show text', () => {
    render(<Button text="Click Me" color="red" />)
    const button = screen.getByText(/Click Me/)

    expect(button).toBeDefined()

    expect(button.style.color).toBe('red')
  })

  it('should render and have style color red', () => {
    const clickHandler = vi.fn()

    render(<Button text="Click Me" color="red" clickHandler={clickHandler} />)

    const button = screen.getByText(/Click Me/)
    fireEvent.click(button)
    expect(clickHandler).toBeCalled()
  })
})
