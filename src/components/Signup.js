import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import ShopContext from '../Shopcontext/itemsContext'
export default function Signup() {
const context=useContext(ShopContext)

let {setAlert}=context
const [user,setUser]=useState({name:"",email:"",password:""})
const control=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})


}
let name=user.name
let email=user.email
let password=user.password
const navigate=useNavigate()
const sign = async (name, email, password) => {
  let respon=  await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.

      headers: {
        'Content-Type': 'application/json'

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ name, email, password }) // body data type must match "Content-Type" header
    });
    const response= await respon.json()
  if (response.errors){
    setAlert({ shower: "", message: "Use valid credentials" })

    setTimeout(() => {
      setAlert({ shower: "d-none", message: "" })
    }, 2000);
  }
  else if(response==="sorry :   this email is taken try another one"){
    setAlert({ shower: "", message: "try any other" })

    setTimeout(() => {
      setAlert({shower:"d-none",message:""})
    }, 2000);
  }
  else{
    setAlert({ shower: "", message: "signed up successfully" })

    setTimeout(() => {
      setAlert({ shower: "d-none", message: "" })
    }, 2000);
  navigate('/Login')
  }
  }
  return (
    <div style={{marginTop: "0px",
    borderBottom: "20px solid rgba(0,0,0,0.25)"}} id="Login-Signup-Body">
   <div className="box-form" >
	<div className="left">
		<div className="overlay">
		<h1 id="h1">Sign-up</h1>
		<span>Let get this journey transform from the register and pen to the keyboard and printer.
      from drawers to the databases from waste of resources to utilize the resources.
    </span>
		<span>
			<p>Visit Home page</p>
			<Link to="/home"></Link>
		</span>
		</div>
	</div>
	
	
		<div className="right">
		<h5 >Signup</h5>
		<p>Do, have an account? <Link to="/Login"  type="button" id="login-btn" >Login</Link>
     </p>
		<div className="inputs">
    <input   onChange={control} id="name" type="name" name="name"  required />
    <br/>
			<input  onChange={control} id="email" type="email" name="email"/>
			<br/>
			<input  onChange={control }  id="password" className="form-content" type="password" name="password" required/>
		</div>
			
			<br/>
			<br/>
		<div className="remember-me--forget-password">
	
		</div>
			
			<br/>
      <button onClick={()=>sign(name,email,password)} type="button" id="login-btn">Sign-up</button>
	</div>
	
</div>
  </div>
  )
}
