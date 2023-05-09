import React from 'react'
import './Hist.css';
import sir  from './Sir.png'
export default function History() {
  return (
    <>
    <div id="his">
        <h1>Classique Watces</h1>
        <p>Established Since 1967</p>
      <p>Assembled in Australia,fitted with more than g5% Swissmade movement</p>
      <div className="ph">
        <img src={sir} alt="" />
         <p>The founder of Classique Watches, Mr. Sam Der Bedrossian began his career in Sydney, Australia in 1964. At that time, the import duty on watches from Switzerland was extremely high. Importers were therefore importing watch movements separately and assembling the individual components to save on duty. During that time, Sam was assembling at least 2000 - 3000 watches per week for numerous watch importers/wholesalers all around Australia.<br></br>
        To this day, Sam is very passionate about the detail & design of his watches and is still involved in every aspect of manufacturing. Starting with the selection of world quality parts & components to the end result. Classique now proudly boasts the widest range of watches in the country, with prices ranging from as low as $200 to over $10,000 (solid gold diamond set watches).</p>
      </div>
      <div className="na">
      <p>Sam Der Bedrossian AM<br></br>Founder, Managing Director<br></br>Classique Watches</p>
    </div>
   
    </div>
    </>
  )
}
