import { beforeAll, describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button test', () => {
  beforeAll(() => {})

  test('show text', () => {
    const clickHandler = vi.fn()

    render(<Button text="Click Me" clickHandler={clickHandler} />)

    // screen.debug()

    const button = screen.getByText(/Click Me/)

    expect(button).toBeDefined()

    fireEvent.click(button)

    expect(clickHandler).toBeCalled()
  })
})
