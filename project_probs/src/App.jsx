import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4 ">Tailwind test</h1>
    <Card username="Talyor" btnText="click me"/>
    <br />
    <Card username="Beyounce"/>
  
    
    </>
  )
}

export default App
