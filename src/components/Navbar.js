import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ShopContext from '../Shopcontext/itemsContext';
import { useEffect } from 'react';
import ims from "./ims.svg"

function Navbar() {
   //////////////navbar on samller screen toggle view of nav bar cancel and menu  icon toggle state
   let[image,setImage]=useState("./menu.jpg")
   const cancel=()=>{
    if(image == "./menu.jpg" ){
      setImage("./cancel.png")
    }
    else{
      setImage("./menu.jpg")
    }
   }
   ///////////////////////////////////////////////////////////////////////////////
  const location = useLocation()
  useEffect(() => {

  }, [location])
 
  let tok = localStorage.getItem("token")
  const context = useContext(ShopContext)
  const { data, setD, fetchD, art, alerter, gethistory, msggiver, disitem, tokenstate, settokenstate } = context
  
  ///////////////////////////////////using enetr////////////////////////////////////////////////////
  const clickhandle = (e) => {
    const datafromsearchbar = document.getElementById('sear').value
    fetchD(datafromsearchbar)
    if (disitem === "d-none") {
      e.preventDefault()
    }

  }
  const control = (e) => {
    setD({ ...data, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      gethistory()

    }
  }, [])
  window.onload = () => {
    if (localStorage.getItem("token")) {
      alerter()

    }
  }
  ///////////////////token remover from local storage
  const tokenremover = () => {
    localStorage.removeItem("token")
    settokenstate(null)
    localStorage.removeItem("name")
    localStorage.removeItem("operator")
  }
  const settokenst = () => {
    localStorage.setItem('token')
    settokenstate(tok)
  }
 
  return (
    <header>
      <nav >
      <label htmlFor="check" > <img src={require(`${image}`)} width={"50px"} height={"50px"} onClick={cancel} className="checkbtn" id="cancel"  ></img></label>
                <input type="checkbox" name="check" id="check" />



        <Link className="navbarbrnd" id="navbaricon" to='/home'>

                  <i ><img className="ml-12" src={require("./home.png")} alt="no image " width={"50px"} height={"50px"}/> <span id="text_brand">Ahsan</span></i>
          </Link>

      
        
          <ul id="nav-ul">
          <li  className="line">
           <form className={`form-inline  ${!tok  ? "d-none" : "d-flex"}`} id="form">
            <input type="search" name="item" id="sear" className="form-control mr-sm-2" onChange={control}
              placeholder="Search" aria-label="Search" />
            <Link to="/invent"  onClick={clickhandle}
            >Search</Link>
          </form>
           </li>
            
              <li className="line">
              <Link to="/invent" className={` ${!tok ? "d-none" : ""}`} id="1">
                Inventory
              </Link>
              </li>
           
           
             
           
           
              <li className="line">
              <Link to="/history" className={`  ${!tok ? "d-none" : ""}`} onClick={msggiver} id="2" >
                Sales History
              </Link>
              </li>
           
           
             <li className="line"> <Link to={!tok ? "/Login" : ""}  className={` ${(location.pathname == "/Login") ? "d-none" : ""}`} onClick={(!tok) ? settokenst : tokenremover} id="3"
              >
                {!tok ? "Login to Inventory" : "Logout"}
              </Link>
              </li>
            
          </ul>
        
      </nav>
      <div className={` ${art.shower}`}  >

  <div id="alert">

  
  <span></span><strong id="get_focus">Focus
  <img id='alert-icon' src={require("./alert-icon.png")} width={"40px"} height={"40px"}/>
  </strong><span></span><span id="alert_message">{art.message}</span>

  </div>

     
      </div>
    </header>
  )
}

export default Navbar