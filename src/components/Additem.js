import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ShopContext from '../Shopcontext/itemsContext'

function Additem() {
    const context=useContext(ShopContext)
    const {add,fetchall}=context
    const [data,setData]=useState()
    const navigate=useNavigate()
    useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/Login')
    }
    }, [])
    
    const control=(e)=>{
       setData({...data,[e.target.name]:e.target.value})
    }
const handle=(e)=>{
 let ob=  window.confirm("DO you really want to add this item")
 if(localStorage.getItem("token")){
  if(ob){
  
    let x= document.getElementById("item").value
     let y=document.getElementById("number").value
     let z=document.getElementById("price").value
     let f=document.getElementById("Expiry").value
  
      add(x,y,z,f)
      fetchall()
   }
   else{
    if(ob){
  
      let x= document.getElementById("item").value
       let y=document.getElementById("number").value
       let z=document.getElementById("price").value
       let f=document.getElementById("Expiry").value
    
        add(x,y,z,f)
        fetchall()
     }
     else{e.preventDefault()}
     
   }
   
 }
 
}
  return (
    <div  className='additemcolors'><center><h5 id="add-item">Add item </h5>
      <form className='formi' style={{display:"flex",justifyContent: "space-evenly",margin:"10px 10px",flexWrap:"wrap"}}>
    <div>
      <label htmlFor="Name of item" className='label-to-addItem'>Name </label>
      <br />
      <input type="text" className="inpu" style={{margin:"10px 0px"}} placeholder='Name of item' name="item" id="item" onChange={control} aria-describedby="Item name"/>
    </div>
    <div  >
    <label htmlFor="No of items" className='label-to-addItem'>Quantity </label>
<br />
      <input type="number" style={{margin:"10px 0px"}} placeholder='Quantity in numbers' className="inpu" name="number" id="number" onChange={control}/>
    </div>
    <div >
    <label htmlFor="Price of item" className='label-to-addItem'>Price </label>
    <br />

      <input type="number" placeholder='Price of item'style={{margin:"10px 0px"}} className="inpu" name="price" id="price" onChange={control}/>
    </div>
    <div >
    <label htmlFor="Expirey date of item" className='label-to-addItem'>Expiry  </label>
    <br />

      <input type="string" placeholder='dd/mm/yyyy'style={{margin:"10px 0px"}} className="inpu" name="Expiry" id="Expiry" onChange={control}/>
    </div>
   
  </form>
  </center>
  <center><Link to="" type="submit" className="btnclr my-2 mx-2" onClick={handle}>Add Item</Link></center>

  </div>
  )
}

export default Additem