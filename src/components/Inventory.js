import React from 'react'
import ShopContext from '../Shopcontext/itemsContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useState } from 'react'
function Inventory() {
  const[operatorsetter,setoperatorsetter]=useState("")
  const conte= useContext(ShopContext)
  const {fetchall,all,del,fetchD,data,add}=conte
  useEffect(() => {
  fetchall()
  
  
  }, [])
 const dele=(x)=>{
   let bool=window.confirm("Do you really want to Delete this item")
   if(bool){
    del(x)

   }
 }
 const rfe=useRef(null)
 const fetchDa=(x)=>{
   fetchD(x)
   rfe.current.click()
 }
 
const handle=(e)=>{
let ob=  window.confirm("DO you really want to add this item")
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

///////////////////////setting operator
const setoperator=()=>{
  setoperatorsetter("d-none")
  let operator=document.getElementById("operator").value
  if(!localStorage.getItem("operator")){
    localStorage.setItem("operator",operator)

  }
}
let oper=localStorage.getItem("operator")
//////////////////////////remove operator
const removeoperator=()=>{
  setoperatorsetter("")
  localStorage.removeItem("operator")

}
  return (
    <div style={{paddingBottom:"10px"}}>
    <br />
    <div className={`lovi ${operatorsetter} ${oper?"d-none":""}`}>
     <label htmlFor="operator"  style={{display:"block"}}>operator</label>
     <input type="text" id="operator" placeholder='name' />
      <button className='btn btn-secondary my-2' onClick={setoperator}>Enter</button>
      </div>
      <button className={`btn btn-secondary my-2  ${(operatorsetter==="d-none")?"":"d-none"} `}onClick={removeoperator}>Logout operator</button>
    <center><h2>Inventory</h2></center>

<div className='tablesize'>
  <table className="table " id="table">
<thead>
  <tr className='trow'>
    <th className="thead"scope="col">Item Name</th>
    <th className="thead"scope="col">Totalitems</th>

    <th className="thead"scope="col">Price</th>
    <th className="thead"scope="col">Expiry</th>
    <th className="thead"scope="col">Delete Item</th>

  </tr>
</thead>
<tbody>
  {all.filter((val)=>{
    if(data.item===""){return val}
    else if(val.tittle.toLowerCase().includes((data.item).toLowerCase())){
     return val
    }
 }).map((elem)=>{

  return (
    <tr  key={elem._id} className=" trow"  >
    <td className="tdata"style={{fontSize:"3vh"}} onClick={()=>{fetchDa(elem.tittle)}}>{elem.tittle}</td>
    <td className="tdata"onClick={()=>{fetchDa(elem.tittle)}}> <strong style={{color:"grey"}} ><b >{elem.totalitems}</b></strong></td>
    <td className="tdata"onClick={()=>{fetchDa(elem.tittle)}}> <strong className='green'><b> {elem.price}</b></strong> </td>
    <td className="tdata"onClick={()=>{fetchDa(elem.tittle)}}> <strong className='green'><b> {elem.expiry}</b></strong></td>
    <td ><a href="#" className="btnclr" onClick={()=>dele(elem._id)}  style={{backgroundColor:"#0075a3",verticalAlign:"middle"}}>Delete</a>
    </td>
  </tr>
)
   
})} 



</tbody>
</table>
<div>

<div>
  <Link to="/invent" ref={rfe}  className='d-none'></Link></div>
 



  </div>
 
  </div>
  </div>
  )
}

export default Inventory