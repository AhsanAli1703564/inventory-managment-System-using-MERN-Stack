import React, {   useState } from 'react'
import { useContext,useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ShopContext from '../Shopcontext/itemsContext'


function Navbar(props) { 
  
  
  // Using callback
  ///////////////////////////////////////////////////////////////////
  const context=useContext(ShopContext)
const {dat,longlatt,control,locate}=context
 
window.onload=function() {
  locate();
  
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////




 
  
  const location=useLocation()
  // useEffect(() => {

  //   setProgress(50)
  //   ////////////////////
  //   ///////////////////
 

  //   setTimeout(() => {
  //   setProgress(100)
      
  //   }, 100);
    
  // }, [])
  const func=()=>{if(location.pathname=="/Weather"){
    locate()
  }
}
  useEffect(() => {

  func()
  }, [location])
  
 
  

//////////////////////////////////////////////////////////////////////////////

  return (
    <>
   

  <section  id="news-nav">

<ul id="news-nav-ul">
        <li className="line">
    <Link to="/ForcastFivedays"  className="news-nav-sear"  id='one'  >8 days </Link>
    </li>
    <li className="new-line" >
    <Link to="/Weather" className="news-nav-sear" id="two" >Today </Link>
    </li>
    <li className="line">

    <form className="news-form" role="search">
      

        <input className=" d-none my-2" type="search"  name="country" onChange={control} placeholder="country" />
      
        <input className="news-search"  type="search" id="four" name="city" onChange={control} placeholder="city" aria-label="Search"/>
        <button className="news-nav-sear "  id='three' type="submit" 
        onClick={(e)=>{
          console.log(dat.city)
          longlatt(dat.city)
          e.preventDefault()
          }}>search</button>

      </form>
      </li>
      </ul>
</section>
  </>
  )
}

export default Navbar