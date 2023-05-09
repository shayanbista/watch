import React from 'react'

import clas from './Classic.mp4'
import './imgi.css';
export default function Images() {
  return (
    <>
    <div>
     <video id="frnt"src={clas} autoPlay loop muted />
     </div>
   
    </>
  )
}
