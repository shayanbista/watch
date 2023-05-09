import React from 'react'
// import videobg from './vid.mp4'
import clas from './Classic.mp4'
import './vidd.css';
export default function Video() {
  return (
   <div>
   <video src={clas} autoPlay loop muted />
     </div>
  )
}
