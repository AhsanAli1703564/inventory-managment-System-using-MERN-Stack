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
    <div style={{paddingBottom:"10vh",marginTop:"90px"}}>
  <div id="card">
<div id="card-content">
 <div id="card-title">
   <h2>Sign-up</h2>
   <div className="underline-title"></div>
 </div>
 <form method="post" className="form">
  <label className='labeli' htmlFor="Name" style={{paddingTop:"13px"}}>
    &nbsp;Name
  </label>
<input  className="form-content" onChange={control} id="name" type="name" name="name"  required />
   <label className='labeli' htmlFor="user-email" style={{paddingTop:"13px"}}>
       &nbsp;Email
     </label>
   <input  className="form-content" onChange={control} id="email" type="email" name="email" autoComplete="on" required />
   <div className="form-border"></div>
   <label htmlFor="user-password" className='labeli' style={{paddingTop:"22px"}}>&nbsp;Password
     </label>
   <input  onChange={control }  id="password" className="form-content" type="password" name="password" required />
   <div className="form-border"></div>
<center><button onClick={()=>sign(name,email,password)} type="button"  className=" btnclr mx-3 my-3 ">Sign-up</button></center>
<center><div className='container my-3' >

</div></center>
 </form>
 
</div>

</div>
    </div>
  )
}
