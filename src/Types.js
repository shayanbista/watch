import React from 'react'
import './pendant.css'
 import brace from './Bracelet.PNG';

 import pendant from './pendant.PNG'
 import poki from './pocket.PNG'
export default function Types() {
  const mel=()=>{
    let nene1=document.getElementById("NENE1");
    let nene2=document.getElementById("NENE2");
    let nene3=document.getElementById("NENE3");
      nene1.style.transform='translateX(5%)';
       nene1.style.transition='transform 0.5s ease-in-out';
        nene2.style.transform='translateX(5%)';
        nene2.style.transition='transform 0.5s ease-in-out';
        nene3.style.transform='translateX(5%)';
        nene3.style.transition='transform 0.5s ease-in-out';
   }
  return (
    <div id="whole" onMouseOver={mel}>
        <div >
          <img src={brace} alt="" id="NENE1"/></div>
        <div >
           <img src={pendant} alt="" id="NENE2"/>
        </div>
        <div>
           <img src={poki} alt="" id="NENE3"/>
        </div>
    </div>
  )}