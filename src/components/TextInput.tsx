import { useState } from 'react'

interface TextInputProps extends HTMLInputElement {
  color: 'red' | 'green' | 'blue'
  initValue?: string
  logger?: (text: string) => void
}

function TextInput({
  color,
  placeholder,
  initValue = '',
  logger,
}: TextInputProps) {
  const [inputValue, setInputValue] = useState(initValue)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
    if (logger) {
      logger(inputValue)
    }
  }

  return (
    <input
      type="text"
      style={{ color, borderColor: color, padding: '1rem 2rem' }}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
    />
  )
}

export { TextInput }
