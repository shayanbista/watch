import React from 'react'
import './pic.css';
 import pic from './gadee.jpg';
 import { Link } from 'react-router-dom';
export default function Wrist() {
    const hello=()=>{
      console.log("hello");
      let trans=document.getElementById("llll");
      trans.style.transform='translateX(30%)';
      trans.style.transition='transform 0.5s ease-in-out';

    }
  return (
    <div id ="wrest" className="wrest" >
   <img src={pic}alt="" onMouseOver={hello}/>
   <div id='llll'>
      <h1>Our heritage</h1>
      <p>With over 55 years of Australian watchmaking under our belt, Classique Watches presents handcrafted and curated timepieces with 95% of our watches fitted with a quality Swiss movement. Established in 1967, Sam Der Bedrossian handpicks his movements and world quality parts, curating one of the widest ranges of watches available.</p>
      <button>
        <Link to="/hist">Read More About History</Link></button>
   </div>
   </div>
  )
}
