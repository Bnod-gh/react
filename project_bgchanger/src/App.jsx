import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("grey")
  return (
    < div className='h-screen w-full duration-200'
    style={{background:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 '>
          <button onClick={()=>{setColor("red")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{setColor("Green")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>{setColor("Blue")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("pink")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{setColor("purple")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>{setColor("black")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>{setColor("grey")}} className='outline-none px-4 py-1 rounded-3xl text-white'
          style={{backgroundColor:"grey"}}>Grey</button>
          </div>

      </div>

    </div>
    
  )
}

export default App