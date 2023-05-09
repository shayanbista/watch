import React from 'react'
import './Pok.css';
import emerson from './Emerson.png';
import carter from './Carter.png';
import denver from './Denver.png';
import kengiston from './Kengiston.png';

export default function Pocket() {
  return (
    <div className="main">
        <h1>Pocket Watches</h1><br></br>
        <h3>Largest Supply of exquisite Pocket Watches</h3>
        <div className="pocketentry">
            <li id="poki" className='pockettt'>
                <img src={emerson} alt="" />
                <h1>Emerson</h1>
                <h4>Rs:20,000/-</h4>
                <button>Add To Cart</button>
            </li>
            <li id="toki" className='pockettt'>
                <img src={carter} alt="" />
                <h1>Carter</h1>
                <h4>Rs:15,500/-</h4>
                <button>Add To Cart</button>
            </li>
            <li id="doki" className='pockettt'>
                 <img src={denver} alt="" />
                <h1>Denver</h1>
                <h4>Rs:18,673/-</h4>
                <button>Add To Cart</button>
            </li>
            <li id="noki" className='pockettt'>
                 <img src={kengiston} alt="" />
                <h1>Kengiston</h1>
                <h4>Rs:19,077/-</h4>
                <button>Add To Cart</button>
            </li>
        </div>
      </div>
  )
}
