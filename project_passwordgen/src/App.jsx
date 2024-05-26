import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length,setLength]= useState(8);
  const [numberAllowed, setNumberalloewd]= useState(false);
  const [charAllowed, setCharAllowed]= useState(false);
  const [password,setPassword]=useState('')
  
  const passwordRef=useRef(null)

  const passwordgen= useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let strpl=str.toLocaleLowerCase()+str

  
  

  if (numberAllowed) strpl+="0123456789"
  if (charAllowed) strpl +="!@#$%^&*()_+"
  for (let i = 0; i < length; i++) {
    const char=Math.floor(Math.random()* strpl.length +1)
    pass+=strpl.charAt(char)
    
  }
    setPassword(pass)
  },[length,charAllowed,numberAllowed])
  
  useEffect(()=>{
    passwordgen()
  },[length,charAllowed,numberAllowed])

  const copyPassword=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <>
    <div className='w-screen mad-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-green-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-4'
        placeholder='Password'
        readOnly 
        ref={passwordRef}/>
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 px-3'>
          <input 
          type="range"
          min={6}
          max={50}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=> setLength(e.target.value)}
          name=''
          id=''/>
          <label htmlFor="length">length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          name=''
          id=''
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberalloewd((prev)=>!prev)
          }}
          />
          <label htmlFor="numberAllowed">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          name=''
          id=''
          defaultChecked={charAllowed}
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}/>
          <label htmlFor="characterAllowed">Character</label>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
