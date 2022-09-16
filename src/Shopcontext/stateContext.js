import React from 'react'
import ItemContext from './itemsContext'
import { useState } from 'react';

const StateContext=(props)=> {
  ///////////////////////////////////////////////////add graph datd set path of after login
  const[loginpath,setloginpath]=useState()

  /////////////////////////////home setperagto show or hide usestate
  const[perag,setperag]=useState("d-none")
  //////////////////////////////////////reciept shower use state
  const[receiptshower,setreceiptshower]=useState("d-none")
  ///////////////////////token state to show and hide the login etc from the navbar
  const [tokenstate,settokenstate]=useState(null)
  ////////////////////////////////itembutton displaying context
  const [disitem,setdisitem]=useState("d-none")
  ////////////////////////////////////////////////reciept k liye array using setstate
  let arr=[{id:10,date:"Date",Q:0,name:"name",total:0}]
  const [recipt,setrecipt]=useState(arr)
  ////////////////////////////////////////////////////
   const [data,setData]=useState({item:""})
   const[item,setItem]=useState({
    date: "Date",
                expiry: "Expiry",
                price: "price",
                tittle: "ItemsName",
                totalitems: "totalitems",
                __v: 0,
                _id: "62b1c0149668c5c865a76823"
  }
   )
/////////////////////////usestate for the gethistory function
const [datearray,setdatearray]=useState([])
const [salearray,setsalearray]=useState([])
//////////////////////////////////////////////get token
const token=localStorage.getItem('token')
///////////////////////////////////////////////
   const [hist,setHist]=useState([{date: "2022-06-15T05:34:10.480Z",
   ex:"a",
   itemssold: 0,
   tittle: "Bari",
   totalamount: 0,
   __v: 0,
   _id: "62a96f5215ce5ba405c3e61a"}])
   const[art,setAlert]=useState({shower:"d-none",message:""})
  const[message,setMessage]=useState("d-none")


   const[all,setAll]=useState([{date: "2022-06-10T10:18:01.719Z",
   tittle: "Name of item",
   totalitems: 0,
   __v: 0,
   _id: "62a1bab950a7d9b9c2be4e4c"
   }]
  )
 
  
     const fetchD=async(x)=>{
    
    
       const url = `http://localhost:5000/Items/findone/${x}`
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token':token
      
            },
          });
         let dat= await response.json()
         
         if(dat[0]===undefined){
       
              setAlert({shower:"",message:"No such Item found in the database"})
            setTimeout(() => {
              setAlert({shower:"d-none",message:""})
            }, 2000);
         }
         else{
          setItem(dat[0])
          setdisitem("")
         }
        
        } catch (error) {
          setAlert({shower:"",message:"Error occured try again "})
          setTimeout(() => {
            setAlert({shower:"d-none",message:""})
          }, 2000);
      }
      // console.log("lovingly awesome")
    }
    ////////////////////////////////////////////
    const setD=(x)=>{
      setData(x)
    }
    //////////////////////function to delete item////////////
    const del=async(id)=>{
      const uri=`http://localhost:5000/Items/remove/${id}`
      const response = await fetch(uri, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          "auth-token":token
  
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    //  let dat= await response.json()
    fetchall()
    }
    ////////////////////function to fetch all
 const fetchall=async()=>{
   const uri="http://localhost:5000/Items/getall"
   const response=await fetch(uri,{
    method:'GET',
    headers:{
      "content-type":"application/json",
      "auth-token":token
    }
   })
   const result=await response.json()
   setAll(result)
         
          
 }
 //////////////////////////////function to add item
 const add=async(x,y,z,f)=>{
   const uri="http://localhost:5000/Items/additem"
   const response=await fetch(uri,{
     method:"POST",
     headers:{
       "Content-Type":"application/json",
       "auth-token":token
     },
     body:JSON.stringify({"tittle":`${x}`,"totalitems":y,"price":z,"expiry":`${f}`})
    

   })
fetchall()

 } 
 ////////////////////////////update number of items using update api
 const updadd=async(id,number,tittle,dbnumber,date)=>{
   const uri=`http://localhost:5000/Items/update/${id}`
   const numb=(dbnumber+number)
   console.log(numb)
   const response=await fetch(uri,{
     method:"PATCH",
     headers:{
       "Content-Type":"application/json",
       "auth-token":token
     },
     body:JSON.stringify({
      "_id": `${id}`,
      "tittle": tittle,
      "totalitems":numb ,
      "date": `${date}`,
      "__v": 0
    })
   })
   const updated=await response.json()
   setItem(updated)
  gethistory()

 }
 ///////////////////////////////for sold
 const updsold=async(id,tittle,totalitems,date,expiry,y)=>{
  const uri=`http://localhost:5000/Items/update/${id}`
// console.log(typeof(y))
  if(y<=totalitems){const numb=(parseInt(totalitems)-parseInt(y))
    if(totalitems!==0){
      const response=await fetch(uri,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
          "auth-token":token
        },
        body:JSON.stringify({
         "_id": `${id}`,
         "tittle": tittle,
         "totalitems":numb ,
         "date": `${date}`,
         "expiry": `${expiry}`,
  
         "__v": 0
       })
      
    
      })
    const updated=await response.json()
    setItem(updated)
    fetchall()

    }
    else{
      console.log("out of stock")
      // setAlert({shower:"",message:"Item is out of stock."})
      // setTimeout(() => {
      // setAlert({shower:"d-none",message:""})
        
      // }, 1000);
    }
   
   


    
  
}
 else{
  console.log("nothing")
 }

 
}
////////////////////////////////////////////alerter
const alerter=async()=>{
  const uri="http://localhost:5000/Items/getall"
  const response=await fetch(uri,{
    method:"GET",
    headers:{
      "content-type":"application/json",
      "auth-token":token
    }
  })
  const result=await response.json()
         let a = result.map((elem)=>{if(elem.totalitems<10){return elem.tittle}})
         let b=a.toString()
         b=b.replaceAll(",","")
        
      if(b.length !==0){
        // console.log(b.length)
        setAlert({shower:"",message:b+" are low in stock ."}
        )
        setTimeout(() => {
          setAlert({shower:"d-none",message:""})
        }, 2000);

      }
      else{
      
      }
          
        
          
}
///////////////////////history 
const history=async(tittle,price,itemssold,pricesold,totalamount,operator)=>{
  try {

   const url="http://localhost:5000/Record/history"
   let response=await fetch(url,{
    method:"POST",
  headers:{
    "content-type":"application/json",
    "auth-token":token
  },
  body: JSON.stringify({
    "tittle":`${tittle}`,
    "price":price,
    "pricesold":pricesold,
    "itemssold":itemssold,
    "totalamount":totalamount,
    "operator":operator
  })
  })
  // console.log(tittle,price,itemssold,totalamount)
  const data=await response.json()
  // let localstrg=JSON.parse(localStorage.getItem('arrayofids'))
  // console.log(localstrg)
  // if(localstrg===null){
  //   let arr=[data._id]
  //   arr=JSON.stringify(arr)
  //   // localStorage.setItem("arrayofids",arr)
   
  // }
  // else{
  //   let ary=localstrg.concat(data._id)
  //  ary=JSON.stringify(ary)
  //   localStorage.setItem("arrayofids",ary)
  // }
 
gethistory()
  } catch (error) {
    console.log(error.message)
  }
  
}
////////////////////fetch history
const gethistory=async()=>{
  let uri='http://localhost:5000/Record/gethistory'
  const response= await fetch(uri,{
    method:"GET",
    headers:{ 'content-type':"application/json",
    "auth-token":token}
   
  })
  const data=await response.json()
  setHist(data)
  // console.log(data)
}
/////////////////////////////get graph
const getgraph=async()=>{
  const uri="http://localhost:5000/Graph/getgraph"
  const response=await fetch(uri,{
    method:"Get",
    headers:{
      "content-type":"application/json",
      "auth-token":token
    }
  })
const result=await response.json()
  let dates =result.map(elem=>{return elem.time})
      setdatearray(dates)  
      let sales=result.map(elem=>{return elem.totalsales})
         setsalearray(sales)
}
////////////////////////////////////////////post data daily for graph
const addgraphdata=async(time,totalsales)=>{
  try {
    const uri="http://localhost:5000/Graph/totalsales"
    const response=await fetch(uri,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "auth-token":token
      },
      body: JSON.stringify({
        "time":`${time}`,
       "totalsales":`${totalsales}`
      })
    })
  } catch (error) {
    console.log(error.messgae)
  }
}

 ///////////////////////////////////////////
 const msggiver=()=>{
 if(hist.length==0){
  setMessage("")
 }
 else{
      let arr= hist.map(elem=>{return elem.totalamount})
   
      let totalamountofallsales= arr.reduce((a,b)=>a+b)
       totalamountofallsales=parseInt(totalamountofallsales)
 
 }
}
//////////////////////////////function to delete history Item if we want to change the order eg clearing recipt which will delete every item that was sold by pressing sold button
const deletehistoryitem=async(id)=>{
  const uri=`http://localhost:5000/Record/deletehistoryitem/${id}`
    const response = await fetch(uri, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token":token

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  //  let dat= await response.json()
}
////////////////////////delete history
const deletehistory=async()=>{
  const uri="http://localhost:5000/Record/deletehistory"
  const response=await fetch (uri,{
    method:"DELETE",
    headers:{
      "content-type":"application/json",
      "auth-token":token
    }
  })
gethistory()  
}
///////////////////////////////////////fetchuser
const fetchuser=async(token)=>{
  if(!localStorage.getItem('token')){}
 const resp=await fetch('http://localhost:5000/api/auth/getuser', {

    method:'POST',
    headers:{
        'content-type': 'application/json',
        'auth-token':token
    },

   
})
let data=await resp.json()
  localStorage.setItem('name',data.name)
}

  return (
    <ItemContext.Provider value={{fetchD,data,setD,item,fetchall,all,del,add,updadd,updsold,alerter,art,setAlert,history,gethistory,hist,getgraph,salearray,datearray,addgraphdata,msggiver,message,recipt,setrecipt,setAlert,deletehistoryitem,deletehistory,disitem,setdisitem,fetchuser,deletehistory,tokenstate,settokenstate,receiptshower,setreceiptshower,perag,setperag,loginpath,setloginpath}}>
        {props.children}
    </ItemContext.Provider>
  )
}

export default StateContext