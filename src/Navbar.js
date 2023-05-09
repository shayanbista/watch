import './Nav.css';
import React from 'react';
import classic from './classic.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <nav>
    <div className='container'>
      <li id="fir"><img src={classic} alt="" /></li>
     <ul className='navlist'>
        <Link className='non' to="/">Home</Link>
        <Link className='non' to="/cont">About Us</Link>
        <Link className='non' to="/login">login </Link>
      </ul>
      <li id="sec">
        <input type="text"  value={"search here"} />
      </li>
    </div>
    </nav>
    </>
     )
}
