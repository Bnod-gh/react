import { useState } from 'react'
import image_icon from './assets/image/bino.jpg'


function App() {
  const [count, setCount] = useState(true);
  const [bgdiv,setBgdiv]= useState(true)
  const [input,setInput]=useState("")
  const [sizeof,setSizeof]=useState()
  const [color,setColor]=useState()

  const showbtn =count?'Hide':'Show';
  
  const click =bgdiv?"Red":"Blue"


  
  
  return (
    <div className='min-h-screen bg-slate-500'>
      <div className='w-3/6 bg-white h-40 m-auto'>
        <div className='flex flex-col items-center justify-center'>
        <h1 className='p-0 m-0 text-3xl font-bold'>Binod Ghimire</h1>
        <h2 className='p-0 m-0 text-gray-700'>State Management React Application</h2>
        <h2 className='p-2 m-2 rounded-lg bg-black text-white'>Hide or Show app</h2>
        </div>
      </div>
      {count?<div className='m-auto w-3/6 bg-white h-96 mb-2'>
        <img src ={image_icon} className= 'h-full cover w-full ' alt=""  />
      </div>:<div className='m-auto w-3/6 bg-white h-96 mb-2'></div>}
      
      <button className='flex flex-col justify-center items-center bg-blue-600 text-white text-bold p-2 m-auto rounded-xl w-14' onClick={()=>{setCount(!count)}}>
    {showbtn}
    
  </button>

<div className='flex justify-center items-center flex-col'>

<div className='w-96 h-96 pt-5 m-3 ' style={{backgroundColor:(bgdiv?"Blue":"Red")}}> </div>
   
  <button className='w-auto p-2 m-auto text-bold text-white bg-black rounded-xl' onClick={()=>{setBgdiv(!bgdiv)}} >{click}</button>
    </div>

    <div className='mb-5 pb-2'>
      <h1>Live Preview</h1>
      <input type="text" placeholder='Type input to update your value'
      onChange={(e)=>setInput(e.target.value)}/>
      <h1 className='mb-5 '>{input}</h1>

    </div>
    <div className= 'h-96 flex justify-center items-center flex-col'>
    <h1>Font size checker</h1>
    <p style={{fontSize:sizeof}}>Binod Ghimire</p>
    
    <input type="range" min={12}  max={50} step="1" onChange={(e)=>{
      setSizeof(Number(e.target.value))}} /> {sizeof}
      <div>
        <h2>Color Sample</h2>
        <input type="text" placeholder='Enter the color' onChange={(e)=>{setColor(e.target.value)}} />
        <div className='w-40 h-40 mt-4 border-dotted'style={{backgroundColor:color}}></div>

        
        </div>
      </div>

      
    </div>  

  )
}

export default App
