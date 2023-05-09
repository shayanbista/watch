import React from 'react'
import Navbar from './Navbar'
import Video from './Video';
// import Form from './Form';
import Service from './Service';
import Rizan from './Rizan';
// import Images from './Images';
import Pocket from './Pocket';
import Wrist from './Wrist';
import Types from './Types';
// import Contact from './Contact';
// import Login from './Login';
import Foot from './Foot';

export default function Home() {
  return (
    <> 
      <Navbar/>
      <Video/>
      <Service/>
      <Rizan/>
     <Pocket/>     
     <Wrist/>
     <Types/>
     <Foot/>
     </>
  )
}
