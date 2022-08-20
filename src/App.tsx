import { useState } from 'react'
import { TextInput } from './components/TextInput'

function App() {
  const [name, setName] = useState('Joe')
  const [favColor, setFavColor] = useState('')
  const [age, setAge] = useState<number | string>('')

  function handleNameInputChange(incomingValue: string) {
    setName(incomingValue)
  }

  function handleFavColorInputChange(incomingValue: string) {
    setFavColor(incomingValue)
  }

  function handleAgeInputChange(incomingValue: string) {
    setAge(incomingValue)
  }

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 900,
        gap: '2rem',
      }}
    >
      <TextInput
        color="blue"
        value={name}
        changeHandler={handleNameInputChange}
      />
      <TextInput
        color="red"
        value={favColor}
        changeHandler={handleFavColorInputChange}
        placeholder="whats up"
      />
      <TextInput
        color="green"
        value={age.toString()}
        changeHandler={handleAgeInputChange}
      />
    </div>
  )
}

export default App
