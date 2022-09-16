import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ShopContext from '../Shopcontext/itemsContext';
import { useEffect } from 'react';
import ims from "./ims.svg"
function Navbar() {
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
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link className="navbarbrnd" to='/home'><div className='icon'><img src={ims} /></div></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           
              <Link to="/invent" className={`btnclr my-1 mx-1 ${!tok ? "d-none" : ""}`}>
                Inventory
              </Link>
           
           
              {/* <Link to="/item" className={` btnclr my-1 mx-1 ${disitem} ${!tok ? "d-none" : ""}`}
              >item
              </Link> */}
           
           
              <Link to="/history" className={`btnclr my-1 mx-1 ${!tok ? "d-none" : ""}`} onClick={msggiver} >
                Sales History
              </Link>
           
           
              <Link to={!tok ? "/Login" : ""} id="loginlinkonmobile" className={`btnclr my-1 mx-1${(location.pathname == "/Login") ? "d-none" : ""}`} onClick={(!tok) ? settokenst : tokenremover}
              >
                {!tok ? "Login to Inventory" : "Logout"}
              </Link>
           
          </ul>
          <form className={`form-inline my-1 mx-1  ${!tokenstate === null ? "d-none" : "d-flex"}`}>
            <input type="search" name="item" id="sear" className="form-control mr-sm-2" onChange={control}
              placeholder="Search" aria-label="Search" />
            <Link to="/invent" className="btn btnclr my-1 mx-1" onClick={clickhandle}
            >Search</Link>
          </form>
        </div>
      </nav>
      <div style={{ backgroundColor: "orange",color:"white",fontFamily:"monospace",fontSize:"4vh" }}


className={` ${art.shower}`}  >
        <strong>Focus</strong><span>{art.message}</span>
      </div>
    </>
  )
}

export default Navbar