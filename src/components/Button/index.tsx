interface ButtonProps {
  text: string
  clickHandler: () => void
}

const Button = function ({ text, clickHandler }: ButtonProps) {
  return (
    <div>
      <button onClick={clickHandler}>{text}</button>
    </div>
  )
}

export { Button }
