interface TextInputProps {
  color: 'red' | 'green' | 'blue'
  placeholder?: string
  value: string
  changeHandler: (text: string) => void
  logger?: (text: string) => void
}

function TextInput({
  color,
  placeholder,
  value,
  changeHandler,
  logger,
}: TextInputProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = e.target.value

    changeHandler(currentValue)

    if (logger) {
      logger(currentValue)
    }
  }

  return (
    <input
      type="text"
      style={{
        color,
        borderColor: color,
        padding: '1rem 2rem',
        fontSize: '1.4rem',
        border: '.25rem solid',
        outline: 'none',
      }}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  )
}

export { TextInput }
