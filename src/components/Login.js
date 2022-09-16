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

  return (
   
    <div  style={{paddingBottom:"10vh"}}>
     <div id="card">
  <div id="card-content">
    <div id="card-title">
      <h2>LOGIN</h2>
      <div className="underline-title"></div>
    </div>
    <form method="post" className="form">
      <label className='labeli' htmlFor="user-email" style={{paddingTop:"13px"}}>
          &nbsp;Email
        </label>
      <input  className="form-content" onChange={control} id="email" type="email" name="email" autoComplete="on" required />
      <div className="form-border"></div>
      <label htmlFor="user-password" className='labeli' style={{paddingTop:"22px"}}>&nbsp;Password
        </label>
      <input  onChange={control }  id="password" className="form-content" type="password" name="password" required />
      <div className="form-border"></div>
<center><button  onClick={loging} type="button"  className=" btnclr mx-3 my-3 ">Login</button></center>
<center><div className='container my-3' >
  <span className='fw-lighter ' >  Sign up if dont have an account</span>
  
  <Link to="/Signup"  type="button" className=" btnclr my-3 mx-3 ">Sign-up</Link>
  
  </div></center>
    </form>
    
  </div>

</div>
<center><span style={{color:"grey", marginTop:"4vh"}}>Don,t have an Account <strong>Sign-up</strong></span></center>

</div>
  )
  }
