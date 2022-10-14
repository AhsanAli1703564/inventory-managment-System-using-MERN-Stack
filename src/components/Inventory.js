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
  const {fetchall,all,del,fetchD,data,add,setAlert}=conte
  useEffect(() => {
  fetchall()
  
  
  }, [])
 const dele=(x)=>{
   let bool=window.confirm("Do you really want to Delete this item")
   localStorage.setItem("additem","additem")
  localStorage.removeItem("token")
   if(bool){
    del(x)

   }
 }
 const rfe=useRef(null)
 const fetchDa=(x)=>{
   fetchD(x)
   rfe.current.click()
   setAlert({ shower: "", message: ` ${x} has been selected  for transaction` })
   setTimeout(() => {
     setAlert({shower:"d-none",message:""})
  },2000)
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
  let operator=document.getElementById("operator_input").value
  if(!localStorage.getItem("operator")){
    localStorage.setItem("operator",operator)
    setAlert({ shower: "", message: "Operator has logged inn" })
        setTimeout(() => {
          setAlert({shower:"d-none",message:""})
       },2000)
  }
}
let oper=localStorage.getItem("operator")
//////////////////////////remove operator
const removeoperator=()=>{
  setoperatorsetter("")
  localStorage.removeItem("operator")
  setAlert({ shower: "", message: "Operator has logged out" })
  setTimeout(() => {
    setAlert({shower:"d-none",message:""})
 },2000)
}
  return (
    <section className='mt-8' >
    <br />
    <form id='operat' className={`lovi ${operatorsetter} ${oper?"d-none":""}`}>
     <label htmlFor="operator" id="inventory_label" style={{display:"block"}}>operator</label>
     <input type="text" id="operator_input" className='sear'  />
      <button className='btnclr mx-2 my-2' onClick={setoperator}>Login </button>
      </form>
      <button className={`btnclr my-2  ${oper?"":"d-none"} `} onClick={removeoperator}>Logout operator</button>
    <center><h2 className="heading-inventory">Inventory</h2></center>

<div id="overflow_table2">
  <table  className='sales_table'>
<thead >
  <tr className='sales_thead' >
    <th className="sales_theads" scope="col">Item Name</th>
    <th className="sales_theads" scope="col">Totalitems</th>

    <th className="sales_theads" scope="col">Price</th>
    <th className="sales_theads" scope="col">Expiry</th>
    <th className="sales_theads" scope="col">Delete Item</th>

  </tr>
</thead>
<tbody >
  {all.filter((val)=>{
    if(data.item===""){return val}
    else if(val.tittle.toLowerCase().includes((data.item).toLowerCase())){
     return val
    }
 }).map((elem)=>{

  return (
    <tr  key={elem._id} className="sales_row" >
    <td className="sales_tdatas"style={{fontSize:"3vh"}} onClick={()=>{fetchDa(elem.tittle)}}>{elem.tittle}</td>
    <td className="sales_tdatas"onClick={()=>{fetchDa(elem.tittle)}}> <strong style={{color:"grey"}} ><b >{elem.totalitems}</b></strong></td>
    <td className="sales_tdatas"onClick={()=>{fetchDa(elem.tittle)}}> <strong className='green'><b> {elem.price}</b></strong> </td>
    <td className="sales_tdatas"onClick={()=>{fetchDa(elem.tittle)}}> <strong className='green'><b> {elem.expiry}</b></strong></td>
    <td className='sales_tdatas' ><Link to="/Login" className="btnclr my-2 mx-2" onClick={()=>dele(elem._id)}  >Delete</Link>
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
  </section>
  )
}

export default Inventory