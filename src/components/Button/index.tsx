interface ButtonProps {
  text: string
  clickHandler: () => void
  color?: 'red' | 'blue' | 'green'
}

const Button = function ({ text, color = 'blue', clickHandler }: ButtonProps) {
  return (
    <div>
      <button
        onClick={clickHandler}
        style={{
          color,
          padding: '1rem 2rem',
          fontSize: '1.4rem',
          backgroundColor: 'unset',
          border: '.25rem solid',
          borderBlockColor: color,
          cursor: 'pointer',
        }}
      >
        {text}
      </button>
    </div>
  )
}

export { Button }
