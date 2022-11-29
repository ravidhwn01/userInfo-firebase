import { useState } from 'react'
import Header from './components/Header'
import Midsec from './components/Midsec'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar/>
    <Header/>
    <Midsec/>
   </>
  )
}

export default App
