import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar/>
    <Header/>
   </>
  )
}

export default App
