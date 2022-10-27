import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext,useEffect } from 'react'
import ShopContext from '../Shopcontext/itemsContext'
// import { useEffect } from 'react'
export default function Login() {
const location=useLocation()
useEffect(() => {
 
}, [location])

     
  const context =useContext(ShopContext)
  let {setAlert,fetchuser,settokenstate,hist,addgraphdata,deletehistory,getgraph,gethistory}=context
  const navigate=useNavigate()
  useEffect(() => {

    if(localStorage.getItem('token')){navigate('/invent')}
  
  }, [])
  
 
const[log,setLog]=useState({email:"",password:""})



const control=(e)=>{
  setLog({...log,[e.target.name]:e.target.value})
}
////////////////////////////////////////////////
//////////////////////////////////////////////
let email=log.email
let password=log.password
// function loging
const loging=async()=>{
 
  
  const response=   await fetch("http://localhost:5000/api/auth/login", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
 
    headers: {
      'Content-Type': 'application/json',
      
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
   
    body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
  });
  const authToken=await response.json()
 if(authToken.sorry){

  setAlert({ shower:"", message: "try again with valid email and password" })
  setAlert("show")
  setTimeout(() => {
    setAlert({shower:"d-none"})
 },4000)
 navigate('/Login')

 }
 
else{
  fetchuser(authToken)

  localStorage.setItem('token',authToken)
  settokenstate(authToken)
  setAlert({ shower: "", message: "You are logged in" })
  setTimeout(() => {
    setAlert({shower:"d-none",message:""})
 },3000)
 if(localStorage.getItem("loginpather")){
  let totaale=hist.map(elem=>{
    return elem.totalamount
   })
   let totalsales=(totaale.length===0)?[0]:totaale.reduce((a,b)=>a+b)
   let time=new Date()
   time=time.toLocaleTimeString()+"+"+time.toDateString()
addgraphdata(time,totalsales)
deletehistory()
getgraph()
gethistory()

  navigate("/grap")
  setTimeout(() => {
    localStorage.removeItem("loginpather")
  }, 1000);
 }
 else if(localStorage.getItem('additem')){
  navigate('/additem')
  setTimeout(() => {
    localStorage.removeItem("additem")
  }, 1000);

 }
 
 else{
  navigate('/invent')

 }
 
}
}
function setWithExpiry(key, value, expiration) {
  const now = new Date()

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
      value: value,
      expiry: now.getTime() + expiration,
  }
  localStorage.setItem(key, JSON.stringify(item))
}

  return (
  <div style={{marginTop: "0px",
    borderBottom: "20px solid rgba(0,0,0,0.25)"}} id="Login-Signup-Body">
   <div className="box-form" >
	<div className="left">
		<div className="overlay">
		<h1 id="h1">Login to Account</h1>
		<span>Let get this journey transform from the register and pen to the keyboard and printer.
      from drawers to the databases from waste of resources to utilize the resources.
    </span>
		<span>
			<p>Visit Home-page</p>
			<Link to="/home"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
		</span>
		</div>
	</div>
	
	
		<div className="right">
		<h5>Login</h5>
		<p>Don't have an account? <Link to="/Signup"  type="button" id="login-btn" >Sign-up</Link>
    <span style={{display:"block"}} className='mx-3'>all it takes a minute</span> </p>
		<div className="inputs">
      
			<input  onChange={control} id="email" type="email" name="email"/>
			<br/>
			<input  onChange={control }  id="password" name='password' type="password" />
		</div>
			
			<br/>
			<br/>
		<div className="remember-me--forget-password">
	<label className='label-of-login'>
		<input type="checkbox" name="item" defaultChecked/>
		<span className="text-checkbox" onClick={()=>{setWithExpiry(document.getElementById("email").value,document.getElementById("password").value,12000)}}>Remember me</span>
	</label>
			<p>forget password?</p>
		</div>
			
			<br/>
			<button onClick={loging} id="login-btn">Login</button>
	</div>
	
</div>
  </div>
  )
  }
