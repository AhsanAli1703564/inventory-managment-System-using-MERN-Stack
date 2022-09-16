import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ims from "./ims.svg"

function Footer() {
    const location=useLocation()
    useEffect(() => {
   
    }, [location])
    
  return (
    <div><footer style={{display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"}} className={`fixed_footer ${(location.pathname==="/history"||location.pathname==="/Login")?"d-none":""}`}>
        
      <div className='icon'><img src={ims}/></div>
  </footer></div>
  )
}

export default Footer