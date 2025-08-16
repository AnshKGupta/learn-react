import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)
  //let counter=6
   const inc =() => {
    
    if (counter <=19)
      counter +=1
    else if (counter ==20)
      counter =20 
    setCounter(counter)

   }
   const dec =() => {
   if (counter>=-19)  
    counter -= 1 
   else if (counter == -20)
      counter = -20
   setCounter(counter)
    }


   
  return (
    <>
      <h1>ok</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={inc}>
        increase counter {counter}
      </button>
      <br/>
      <button onClick={dec}>
        decrease counter {counter}

      </button>
      <p> footer:{counter} </p>
    </>
  )
}

export default App
