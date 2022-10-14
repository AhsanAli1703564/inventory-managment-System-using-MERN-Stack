import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ims from "./ims.svg"

function Footer() {
    const location=useLocation()
    useEffect(() => {
   
    }, [location])
    
  return (
    <div><footer id="footer_container"  
    className={` ${(location.pathname==="/history"||location.pathname==="/Login")?"d-none":""}`}>
      <section id="sect_left">
      <h1 id="footer_heading" className='d-cyan'>Services That costumers Seek <img width={"70px"} height={"50px"}  src={require("./3.png")}/></h1>
        <ul>
         
        <a href="#" id="footer_anchor">shop 
          </a>  <a href="#" id="footer_anchor">Outlets 
           </a>  <a href="#" id="footer_anchor">Nearby Councellors
          </a>  <a href="#" id="footer_anchor">Dealers
          </a>  <a href="#" id="footer_anchor">Terms and Conditions
           </a>
          <h3 id="copyright"> &#169; This Soft Product and Its Data is CopyRight Protected</h3>
         
        </ul>
      </section>
      <section id='sect_right'>
        <p id="footer_peragraph" className='d-cyan'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corporis voluptatem excepturi tempore, aliquam maxime, magni officiis sed amet nesciunt dicta facilis molestias tempora tenetur quod? Est optio inventore ipsum.
        </p>
      <div id="icons_container">
        <img className='footer_icon'  src={require('./figma-icon.png')} width={"50px"} height={"50px"}/>
        <img className='footer_icon'  src={require('./github.png')} width={"50px"} height={"50px"}/> 
        <img className='footer_icon'  src={require('./Material UI.png')} width={"50px"} height={"50px"}/> 
        <img className='footer_icon'  src={require('./js.png')} width={"50px"} height={"50px"}/> 
        <img className='footer_icon'  src={require('./Reactt Redux.png')} width={"50px"} height={"50px"}/> 
       
      


      </div>
        
      </section>
       
     
  </footer>
</div>
  )
}

export default Footer