import React from 'react'
import InputControl from '../inputcontrol/InputControl'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
    <h1>Signup</h1>
    <InputControl label = "Name" placeholder = "enter your email address" />
    <InputControl label = "Email" placeholder = "enter your email address" />
    <InputControl label = "Password" placeholder = "enter Password" />
    <div className="btn">
        <button>Signup</button>
        <p>
            
             <Link to="/login">Login</Link>
        </p>
    </div>
</div>
  )
}

export default Signup