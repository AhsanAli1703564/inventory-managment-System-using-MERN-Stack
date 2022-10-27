import React, { useContext } from 'react'
import ShopContext from '../Shopcontext/itemsContext'
import { useState } from 'react'
import { useRef } from 'react'
import {Link} from 'react-router-dom'
import Example from './Reciept'
// import { json } from 'body-parser'
function Item() {
  const refi=useRef(null)
    const cont=useContext(ShopContext)
    const{item,updadd,setrecipt,recipt,setAlert,setreceiptshower}=cont
    const [umber,setNumber]=useState(0)

    const addso=(id,tittle,totalitems,date,expirydate)=>{
    // getting operator if signed inn

    let op=localStorage.getItem("operator")

      if(op==null){
        setAlert({ shower: "", message: "Please Log in operator to complete the transaction" })
        setTimeout(() => {
          setAlert({shower:"d-none",message:""})
       },3000)

      }
      else{
        setreceiptshower("")
      
        
    //////////////////////////////////////////////////
    
          let con =window.confirm("you realy want to continue")
          let y=document.getElementById("it").value
          y=parseInt(y)
          
     
      
      
        
    
      
          if(con){
            if(y<=totalitems){
              let dat=new Date()
    let   dte=dat.getDay()
    let   month=dat.getMonth()
    let year=dat.getFullYear()
    let time=dat.getHours()
    let minutes=dat.getMinutes()
    let waqt=dte+":"+month+":"+year+"/"+time+":"+minutes
    
              let y=document.getElementById("it").value
              let z=document.getElementById("sold").value
              let total=z*y
             y=parseInt(y)
                let c= parseInt(total)
                setNumber(c)
                
                 ////////////reciept item adder
         
    let token=Math.floor(Math.random() * 10000)
    let obj={
     id:id, date:waqt,Q:y,name:tittle,total:total,token:token,expiry:expirydate,
    }
    
    // if(recipt.date=="Date"){
      let ar=recipt
      ar.push(obj)
    // }
    // else{
    setrecipt(ar)
    // }
    // console.log(arr)
    refi.current.click()
    // updsold(id,tittle,totalitems,date,expirydate,y)
    /////////////////////////////////////sold updater setlocal storage
    let soldobj={id,tittle,totalitems,date,expirydate,y}
    let  soldobjarray=[soldobj]
    let arrayofobjectsofeverythingsold=localStorage.getItem("arrayofsoldobj")
    // arrayofobjectsofeverythingsold.concat(soldobj)
    if(arrayofobjectsofeverythingsold==null){
      
      localStorage.setItem("arrayofsoldobj",JSON.stringify(soldobjarray))
    }
    else{
      let objarray=JSON.parse(localStorage.getItem("arrayofsoldobj"))
      
    objarray.push(soldobj)
    localStorage.setItem("arrayofsoldobj",JSON.stringify(objarray))
    // console.log(objarray)
    }
    
    //////////////////////////////////////////////////////////
        
     
            }
            else{
              setAlert({shower:"",message:"you cant sell more than you have in stock add valid number"})
              setTimeout(() => {
                setAlert({shower:"d-none",message:""})
    
              }, 2000);
            }
           
          }
        
        }
        
      
       
      //////////////////////////////show or hide receipt setstate
     
    }
    const [data,setData]=useState()
    const control=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
 }
    ///////////////////////////history adder
    let operator=localStorage.getItem("operator")
    const historyadder=async(name,price,totalnumberofitems)=>{
      
      let y=document.getElementById("it").value
      let z=document.getElementById("sold").value
      z=parseInt(z)

      y=parseInt(y)
      let totalprice=z*y
      
     let  toce=parseInt(totalprice)
      if(y<=totalnumberofitems){
        // history(name,price,y,z,toce,operator)
       //////////////////////////////////////////////////history set storage
       let soldobj={name,price,y,z,toce,operator}
let  soldobjarray=[soldobj]
let arrayofobjectsofeverythingsold=localStorage.getItem("arrayofhistory")
// arrayofobjectsofeverythingsold.concat(soldobj)
if(arrayofobjectsofeverythingsold==null){
  
  localStorage.setItem("arrayofhistory",JSON.stringify(soldobjarray))
}
else{
  let objarray=JSON.parse(localStorage.getItem("arrayofhistory"))
  
objarray.push(soldobj)
localStorage.setItem("arrayofhistory",JSON.stringify(objarray))
// console.log(objarray)
}

      }
      else{
        console.log("do not do such things")
      }

    }
  return (
    <div id='item-border'>  <div>
    <label id="Item_label"  className='text_align_center'>{item.tittle}</label>
    <div >
   <div className="card my-3 mx-3" >
<div  className='text_align_center'>
  
 <h5 className="card-title">Name of item : <strong><b>{item.tittle}</b></strong> </h5>
 <span className="card-text text_align_center">No of items in stock : <strong><b> {item.totalitems}</b></strong> </span>
 <span className="card-text text_align_center">Expiry date: <strong><b> {item.expiry}</b></strong> </span>

 <span className="card-text text_align_center">price: <strong><b>{item.price}</b></strong> </span>
 <span className='card-text text_align_center'>Total price:   <strong>{umber}</strong> </span>

 <form id='Item_form'  >
  <br /> <input  onChange={control} className="Item_form_input"   placeholder="تعداد"  id="it" autoComplete="off" aria-label="number"/>
   <br /><input className="Item_form_input" autoComplete="off" onChange={control} placeholder="قیمت" id="sold" aria-label="number"/>
 </form>
 
 <Link to=""  className="btnclr " onClick={(e)=>{
   addso(item._id,item.tittle,item.totalitems,item.date,item.expiry)}}>Sold</Link>
   <button ref={refi} className='d-none' onClick={()=>{
    historyadder(item.tittle,item.price,item.totalitems)
   }}></button>
 
</div>
</div>



</div>

</div>

<div ><Example recipt={recipt}/></div>
</div>
  )
}

export default Item