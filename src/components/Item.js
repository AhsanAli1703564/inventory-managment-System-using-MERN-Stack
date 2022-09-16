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

    // const addupd=(id,tittle,date,dbnumber)=>{
    //  let con= window.confirm("you realy want to continue")
    //  if(con){
    //   let db=parseInt(dbnumber)
    //   let y=document.getElementById("it").value
    //   y= parseInt(y)
    //   updadd(id,y,tittle,date,db)
    
    //  }
    
    // }


    const addso=(id,tittle,totalitems,date,expirydate)=>{
      if(!localStorage.getItem("operator")){
        setAlert({shower:"",message:"Go to inventory and sign in operator name"})
        setTimeout(() => {
          setAlert({shower:"d-none",message:""})
        }, 2000);


      }
      else{
        setreceiptshower("")
        //  console.log(expirydate)
        
    //////////////////////////////////////////////////
    
          let con =window.confirm("you realy want to continue")
          let y=document.getElementById("it").value
          y=parseInt(y)
          
        //   localStorage.setItem("db",totalitems)
        //   localStorage.setItem('tittle',tittle)
        //   localStorage.setItem('date',date)
        //  localStorage.setItem("id",id)
        //  let ar=[]
        //////////////////////////////our array setter
        // if(localStorage.getItem("ourarray")===null){
        //   let obj={
        //     id:id,
        //     tittle:tittle,
        //     totalitems:totalitems,
        //     date:date,
        //    }
        //    let ourarry=[obj]
      
        //    localStorage.setItem("ourarray",JSON.stringify(ourarry))
        // }
        // else{
        //   let obj={
        //     id:id,
        //     tittle:tittle,
        //     totalitems:totalitems,
        //     date:date,
        //    }
        //  let arr= JSON.parse(localStorage.getItem("ourarray"))
        //  let ournewarray=arr.concat(obj)
        //  localStorage.setItem("ourarray",JSON.stringify(ournewarray))
    
        // }
        
    
      
          if(con){
               
        
        
            // let a=z*y
        
            
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
      console.log(recipt)
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
    <div style={{display:"flex",justifyContent:"space-between",paddingBottom:"8vh"}}>
      <div  style={{display:"inline-block",width:"40vw"}}>
    <div >  <div  >
     <center  style={{marginTop:"5vw"}}> <h1 style={{TextDecoration:"undeline"}}>{item.tittle}</h1></center>
    <div className="col-sm-4 ">
   <div className="card my-3 mx-3" style={{width: '18rem'}}>
<div className="card-body">
  <center>
 <h5 className="card-title">Name of item : <strong><b>{item.tittle}</b></strong> </h5>
 <p className="card-text">No of items in stock : <strong><b> {item.totalitems}</b></strong> </p>
 <p className="card-text">Expiry date: <strong><b> {item.expiry}</b></strong> </p>

 <p className="card-text">price: <strong><b>{item.price}</b></strong> </p>
 <p className='card-text'>Total price:   <strong>{umber}</strong> </p>

 </center>
 <center>
 <form style={{display:"flex",flexDirection:"row",flexWrap:"wrap",marginBottom:"20px"}} >
  <br /> <input  onChange={control} style={{height:"4vh",width:"100%", marginBottom: "10px",border:"1px solid grey",justifyContent:"center"}}  placeholder="تعداد"  id="it" autoComplete="off" aria-label="number"/>
   <br /><input style={{height:"4vh",width:"100%"}} autoComplete="off" onChange={control} placeholder="قیمت" id="sold" aria-label="number"/>
 </form>
 </center>
 <center>
 {/* <button className="btnclr mx-2 my-2" type="submit" onClick={()=>addupd(item._id,item.tittle,item.totalitems,item.date)}>Add Item</button> */}

 <Link to=""  className="btnclr " onClick={(e)=>{
   addso(item._id,item.tittle,item.totalitems,item.date,item.expiry)}}>Sold</Link></center>
   <button ref={refi} className='d-none' onClick={()=>{
    historyadder(item.tittle,item.price,item.totalitems)
   }}></button>
 
</div>
</div>



</div>

</div>
</div>
</div>

<div style={{display:"inline-block",width:"40vw",justifyContent: "center",
    display: "flex",padding:"0px 10vw"}}><Example recipt={recipt}/></div>
</div>
  )
}

export default Item