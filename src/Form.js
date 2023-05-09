import React from 'react'
import './Forn.css';
import inf  from './logwatch.png'
export default function Form() {
  return (
    <div className="contain">
     <img src={inf} alt="" />
  
     <div className="inse">
      <h1>login</h1>
      
        <input type="text" className='inp' placeholder='enter name' />
        <input type="text"  className='inp' placeholder='enter password'/>
        <button>submit</button>
        <a href="/">Forgot Password?</a>
        <a href="/">Dont Have An Acc?</a>

      
        </div>
   </div>
  )
}
