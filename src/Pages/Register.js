import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="contain">
    
  
     <div className="inse">
      <h1>Register</h1>
      
        <input type="text" className='inp' placeholder='enter name' />
        <input type="text"  className='inp' placeholder='enter password'/>
        <button>submit</button>
        <a href="/">Forgot Password?</a>
        <p>Dont Have An Acc?</p> <Link to="/register">Register</Link>

      
        </div>
   </div>
  )
}
