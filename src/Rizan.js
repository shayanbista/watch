import React from 'react'
import './Riz.css';
import men from './men.PNG'
import blakely from './Blakely diamond.PNG'
import carson from './Carson.png'
import capture from './capture.png'
import bailey from './Bailey.png'
export default function Rizan() {
  return (
    <div className="main">
        <div className="dividing">
            <div id="left">
                <img src={men} alt="" />
                <button>The Aviator Watch</button>
            </div>
            <div className="con">
            <div id="right">
                  <div className="foli">
                    <img src={blakely} alt="" />
                   <h3 className="ring">Blakely Diamond</h3>
                   <div className="ping">Rs:137542.22/-</div>
                   <button>Add To Cart</button>
                  </div>
                  <div className="coli">
                     <img src={carson} alt="" />
                   <h3 className="ringi">Carson</h3>
                   <div className="pingi">Rs:28,615.00/-</div>
                   <button>hello world</button>
                    </div>  
              </div>
              <div id="lefti">
                  <div className="foli">
                     <img id="cap" src={capture} alt="" />
                   <h3 className="ring">Leonardo</h3>
                   <div className="ping">Rs:23846.00/-</div>
                   <button>Add To Cart</button>

                   {/* <div className="">1</div>
                   {/* <div className="">2</div>
                   <div className="">3</div> */} 
                  </div>
                  <div className="colii">
                     <img src={bailey} alt="" />
                   <h3 className="ringi">Bailey</h3>
                   <div className="pingi">Rs:521,150.00/-</div>
                    <button>Add To Cart</button>
                   </div>  
              </div>
              </div>
              
        </div>
        
    </div>
  )
}

