import React, { useContext, useEffect, useRef, useState } from 'react'
import ShopContext from '../Shopcontext/itemsContext'
import { Link } from 'react-router-dom'
function Saleshistory() {
  const cont=useContext(ShopContext)
  const {hist,getgraph,message,gethistory,addgraphdata,deletehistory}=cont
//  console.log(hist)
 
 let totaale=hist.map(elem=>{
  return elem.totalamount
 })
 let totalsales=(totaale.length===0)?[0]:totaale.reduce((a,b)=>a+b)

    useEffect(() => {
     gethistory()
     
    }, [])
   
 

  
  
 
  
 
 
  return (
    <div  style={{paddingBottom:"12vh"}}>
      <center><h1  className={message}>Carpe Diam ! No sales till Now . </h1></center>
      <table className="table " id="table">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Item Name</th>
        <th scope="col">Number of items sold</th>
        <th scope="col">Retail price</th>
        <th scope="col">Price sold profit/discount%</th>
        <th scope="col">total</th>
        <th scope="col">Operator Name</th>

      </tr>
    </thead>
    <tbody className={`  ${hist[0].tittle==="bari"?"d-none":""}`}>
    { hist.map((elem)=>{
      let a=new Date(elem.date).toDateString()
      let b=new Date(elem.date).toLocaleTimeString()
      let c=a+` /${b}`
      let percent=(elem.pricesold/elem.price)*100-100
      let loss=100-(elem.pricesold/elem.price)*100
      return (

        <tr  key={elem._id} >
        <th scope="row">{c}</th>
        <td>{elem.tittle}</td>
        <td>{elem.itemssold}</td>
        <td> {elem.price}</td>
        <td className={(elem.price<elem.pricesold)?"green":(elem.price==elem.pricesold)?"black":"red"}>{(elem.pricesold>elem.price)?elem.price+"+"+percent.toFixed(2)+"%":(elem.pricesold<elem.price)?elem.price+"-"+loss.toFixed(2)+"%":(elem.pricesold===elem.price)?elem.price:""}</td>
        <td>{elem.totalamount}</td>
        <td>{elem.operator}</td>

      </tr>
    )
       
    })} 
    
    
    
    </tbody>
  </table>
  <div>
  <center ><h5 >Total sales :{totalsales}  <b><strong> <span>rs</span> </strong></b></h5></center>
    <center> <span style={{color:"   rgb(78 78 77 / 56%)"}}> the total sales will collect data for a year </span>
    <Link to="/grap" className="btn btn-dark my-3" onClick={getgraph}>Graph</Link>
  
    </center>
    
   

  </div>
  <div className='historygraphfoot' ><p><strong>Login Required! </strong>Click this button once a day at a particular time in a day to set graph according to Total sale of the day.<strong>Report today,s sale</strong> <strong style={{color:'#3471a2'}}>Clicking! Report todays sale Button will automaticaly delete the sales history</strong> </p>
    <Link to="/Login" className="btn btn-dark my-3" onClick={()=>{localStorage.setItem("loginpather","loginpather")
  localStorage.removeItem("token")}}>Report Total sale</Link>
   <Link to="/Login" className="btn btn-dark my-3 mx-3" onClick={()=>{localStorage.setItem("additem","additem")
  localStorage.removeItem("token")}}>Add items</Link>
    </div>
  </div>
  )
}

export default Saleshistory