import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShopContext from "../Shopcontext/itemsContext";
import { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Spinner from "./Spinner";
function Navbar() {
  //////////////navbar on samller screen toggle view of nav bar cancel and menu  icon toggle state
  let [image, setImage] = useState("./menu.jpg");
  const cancel = (e) => {
    if (image == "./menu.jpg") {
      setImage("./cancel.png");
    } else {
      setImage("./menu.jpg");
    }
  };
  ///////////////////////////////////////////////////////////////////////////////
  // const location = useLocation();
  // useEffect(() => {}, [location]);

  let tok = localStorage.getItem("token");
  const context = useContext(ShopContext);
  const {
    data,
    setD,
    fetchD,
    art,
    alerter,
    gethistory,
    msggiver,
    disitem,
    tokenstate,
    progress,
    settokenstate,
    loading,
    loader,
  } = context;

  ///////////////////////////////////using enetr////////////////////////////////////////////////////
 
  const control = (e) => {
    setD({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      gethistory();
    }
  }, []);
  window.onload = () => {
    if (localStorage.getItem("token")) {
      alerter();
    }
  };
  ///////////////////token remover from local storage
  const tokenremover = () => {
    localStorage.removeItem("token");
    settokenstate(null);
    localStorage.removeItem("name");
    localStorage.removeItem("operator");
  };
  const settokenst = () => {
    localStorage.setItem("token");
    settokenstate(tok);
  };

  return (
    <header>
      <LoadingBar color="#f11946" height="5px" progress={progress} />
      <nav id="nav">
        <label id="label" htmlFor="check">
          {" "}
          <img
            src={require(`${image}`)}
            width={"50px"}
            height={"50px"}
            onClick={(e) => {
              cancel(e);
            }}
            className="checkbtn"
            id="cancel"
          ></img>
        </label>
        <input type="checkbox" name="check" id="check" />

        <Link
          className="navbarbrnd"
          id="navbaricon"
          to="/home"
          onClick={loader}
        >
          <i>
            <img
              className="ml-12"
              src={require("./home.png")}
              alt="no image "
              width={"70px"}
              height={"40px"}
            />{" "}
            <span id="text_brand"></span>
          </i>
        </Link>

        <ul id="nav-ul">
        <li className="line">
          <Link to="/Weather">
            Weather Forcast
          </Link>
        </li>
        <li className="line">
          
          <Link
            to="/Login" 
            // className={` ${!tok == "/Login" ? "d-none" : ""}`}
            onClick={!tok ? settokenst : tokenremover}
            id="3"
          >
            {!tok ? "Login to Inventory" : "Logout"}
          </Link>
        </li>
          <li className="line">
            <form className={`  ${!tok ? "d-none" : "d-flex"}`} id="form">
              <input
                type="search"
                name="item"
                id="sear"
                className="sear"
                onChange={control}
                aria-label="Search"
              />
              {/* <Link to="/invent"  onClick={clickhandle}
            >Search</Link> */}
            </form>
          </li>

          <li className="line">
            <Link to="/invent" className={` ${!tok ? "d-none" : ""}`} id="1">
              Inventory
            </Link>
          </li>

          <li className="line">
            <Link
              to="/history"
              className={`  ${!tok ? "d-none" : ""}`}
              onClick={msggiver}
              id="2"
            >
              Sales History
            </Link>
          </li>

        
          <li className="line">
            <Link to="/News">News</Link>
          </li>
        </ul>
      </nav>
      <section id="loader">{loading ? <Spinner /> : ""}</section>
      <div className={` ${art.shower}`}>
        <div id="alert">
          <span></span>
          <strong id="get_focus">
            Focus
            <img
              id="alert-icon"
              src={require("./alert-icon.png")}
              width={"40px"}
              height={"40px"}
            />
          </strong>
          <span></span>
          <span id="alert_message">{art.message}</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
