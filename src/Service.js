import React from 'react'
import './Ser.css';
import img from './pic.PNG'
import imgi from './Harper.PNG'
import luci from './lucille.PNG'
import alec from './Allesia.PNG'
import ser from './Serena.png'

export default function service() {
  return (
    <>
    <div className="smoke">
    <h1>Services</h1>
    <h5>We go beyond watchmaking and extends these values to our happy customers</h5>
    <div className="serviced">
        <li className="cont">30 days return
        <p>Should you change your mind, need your item altered or find a fault, we offer returns within 30 days</p>
        </li>
        <li className="cont">Fully insured shipping
        <p>For your peace of mind, all our items are fully insured when they get shipped. Packages are shipped via trusted couriers.</p>
        </li>
        <li className="cont">Expert made
        <p>With over 55 years experience in watch making and crafting, rest assured your piece has been assembled by experts.</p></li>
        <li className="cont">Swiss Quality
        <p>With Swiss and European parts and materials, the majority of our watches come fitted with Swiss Quartz Movement.</p>
        </li>
    </div>
    </div>
    <div className="secondpart">
      
     <div className="femWatch">
      <div className='showcase'>
      <li className='bt-1'>
       <img id="harp"src={imgi} alt="" />
        <h3>harper</h3>
        <h4>Rs:20,000/-</h4>
        <button >add to cart</button>
       </li>
      <li className='bt-2'>
      <img id="luce" src={luci} alt="" />
        <h3>Lucille Diamond</h3>
        <h4>Rs:76,909/-</h4>
        <button>add to cart</button>
      </li>
      </div>
      <div className='showcase2'>
        <li className='bt-2'>
           <img id="alec" src={alec} alt="" />
        <h3>Allesia</h3>
        <h4>Rs:526,058.00/-</h4>
        <button >add to cart</button>
        </li>
        <li className='bt-2'>
           <img id="sere" src={ser} alt="" />
        <h3>Serena</h3>
        <h4>Rs:29,005.00/-</h4>
        <button >add to cart</button>
        </li>
      </div>
     </div>
     <div className="femPhoto">
        <img  src={img} alt="" />
        <button>Try Julietta watch</button>
        </div>
  </div>
  
    </>
  )
}
