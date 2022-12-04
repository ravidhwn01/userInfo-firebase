import { useEffect, useState } from 'react'
import Header from './components/Header'
import Midsec from './components/Midsec'
import Navbar from './components/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import { auth } from './firebase'
function App() {
  const [username, setUsername] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      } else {
        setUsername("");
      }})},[])




  return (
   <>
    {/* <Navbar/>
    <Header/>
    <Midsec/> */}
    {/* routing */}
    <Router>
      <Routes>
        <Route path="/" element={<Home name = {username} />}/>
        <Route exact  path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
   </>
  )
}

export default App
