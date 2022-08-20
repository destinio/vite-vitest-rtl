import { useState } from 'react'
import { TextInput } from './components/TextInput'

function App() {
  const [name, setName] = useState('')

  function handleInputChange(incomingNameValue: string) {
    setName(incomingNameValue)
  }

  return (
    <div className="App">
      <TextInput color="blue" value={name} changeHandler={handleInputChange} />
    </div>
  )
}

export default App
