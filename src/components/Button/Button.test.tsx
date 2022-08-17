import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '.'

describe('Button test', () => {
  test('show text', () => {
    render(<Button />)
    expect(screen.getByText(/button/)).toBeDefined()
  })
})
