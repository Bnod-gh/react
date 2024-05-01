import { useState } from 'react'
import './App.css'

function App() {
 let [counter, setCounter]= useState(15)


    const addValue=()=>{
    
      if (counter<30){
        counter=counter+1
  
      }else{
        counter=counter
    }
    setCounter(counter)
  }
  const remValue=()=>{
    if (counter<=0){
      counter=counter

    }else{
      counter=counter-1
    }
    setCounter(counter)
    }
  

  return (
    <>
    
    <h1>Binod</h1>
    <h2>Counter Value:{counter}</h2>
    <button 
    onClick={addValue}>Add value </button>
    
    <button
    onClick={remValue}>Remove Value</button>
    </>
  )
}

export default App
