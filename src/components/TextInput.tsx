import { useState } from 'react'

interface TextInputProps {
  color: 'red' | 'green' | 'blue'
  placeholder?: string
  value: string
  changeHandler: (text: string) => void
}

function TextInput({
  color,
  placeholder,
  value,
  changeHandler,
}: TextInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeHandler(e.target.value)
  }

  return (
    <input
      type="text"
      style={{
        color,
        borderColor: color,
        padding: '1rem 2rem',
        fontSize: '1.4rem',
      }}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  )
}

export { TextInput }
