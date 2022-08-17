import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button test', () => {
  test('show text', () => {
    const clickHandler = vi.fn()

    render(<Button text="Click Me" clickHandler={clickHandler} />)

    fireEvent.click(screen.getByText(/click/i))

    expect(clickHandler).toBeCalled()

    expect(screen.getByText(/click/i)).toBeDefined()
  })
})
