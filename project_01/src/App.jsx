import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div >
      <nav className="max-w-1280px h-72px p-2 m-2 flex justify-between items-center">
      <div className=""><img src="../public/images/brand_logo.png" alt="logo"/></div>
      <div>
        <ul className='flex gap-7 text-lg font-medium'>
          <li><a href ="#">Menu</a></li>
          <li><a href ="#">Location</a></li>
          <li><a href ="#">About</a></li>
          <li><a href ="#">Contact</a></li>
        </ul>
        </div>
        <div><button className="border-black bg-slate-500 rounded-md font-semibold p-2 m-2">Login</button></div>
      
      </nav>

    </div>
     
    </>
  )
}

export default App
