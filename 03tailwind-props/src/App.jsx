import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'
function App() {
  const [count, setCount] = useState(0)
  let obj1={
    name : "ansh",
    age : 20
  }
  let arr1=[1,2,3]

  return (
    <>
    <h1 className = 'bg-green-400 text-black p-8 rounded-xl'>tailwind css</h1>
   <Cards username = "amay" age ="19" price ="1 paisa"/>
   <Cards username = "verma" age = "19"  price ="1 athani"/>
   
   </>
  )
}

export default App
