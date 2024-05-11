import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberallowed]=useState(false)
  const [charallowed, setCharallowed]=useState(false)

  return (
    <>
    <h1 className='text-5xl text text-white text-center '>Password Generator</h1>
    <div className= 'bg-yellow-200 justify-center py-3 px-2 w-auto h-52'>
      <div className='bg-white rounded'><input type="text" /></div>

    </div>
    </>
  )
}

export default App
