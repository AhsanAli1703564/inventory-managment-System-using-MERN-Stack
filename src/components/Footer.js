import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Footer() {
    const location=useLocation()
    useEffect(() => {
   
    }, [location])
    
  return (
    <div><footer id="footer_container"  
    className={` ${(location.pathname==="/history"||location.pathname==="/Login")?"d-none":""}`}>
      <section id="sect_left">
      <h1 id="footer_heading" className='d-cyan'>Services That costumers Seek <img id="footer-img" width={"70px"} height={"50px"}  src={require("./3.png")}/></h1>
        <ul>
         
        <Link to="/News" id="footer_anchor">shop 
          </Link>  <Link to="/News" id="footer_anchor">Outlets 
           </Link>  <Link to="/News" id="footer_anchor">Nearby Councellors
          </Link>  <Link to="/News" id="footer_anchor">Dealers
          </Link>  <Link to="/News" id="footer_anchor">Terms and Conditions
           </Link>
          <h3 id="copyright"> &#169; This Soft Product and Its Data is CopyRight Protected</h3>
         
        </ul>
      </section>
      <section id='sect_right'>
        <p id="footer_peragraph" className='d-cyan'>
       All the rights of this software are reserved and the contents are third party free and without any dependency to a third party .
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