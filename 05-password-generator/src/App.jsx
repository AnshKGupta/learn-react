import { useState , useCallback } from 'react'
function App() {
  const [length, setLength] = useState(6)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
 
  const generatePassword = useCallback(() => { 
    let pass=""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`-="
    for (let i = 1; i <=Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numAllowed,charAllowed]) 
  return (
    <>
        <div className ="w-full max-w-md mx-auto shadow-md rounded-lg
        px-4 py-3 my-8 text-center text-blue-900 bg-gray-800"> 

          <h1 className="text-white text-center">Password Generator</h1>
          
          <div className= "flex shawdow rounded-lg overflow-hidden mb-4">
         
          <input 
          type= "text"
          value={password}
          className="bg-white outline-none w-full py-1 px-3 "
          placeholder='password'
          readOnly
          />

        </div>
      </div>
    </>
  )
}

export default App
