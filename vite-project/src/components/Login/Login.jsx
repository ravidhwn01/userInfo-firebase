import React from 'react'
import InputControl from '../inputcontrol/InputControl'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1>login</h1>
        <InputControl label = "Email" placeholder = "enter your email address" />
        <InputControl label = "Password" placeholder = "enter Password" />
        <div className="btn">
            <button>Login</button>
            <p>
                already have an account?
                 <Link to="/signup">Signup</Link>
            </p>
        </div>
    </div>
  )
}

export default Login