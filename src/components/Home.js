import React, { useContext } from 'react'
import ShopContext from '../Shopcontext/itemsContext'

function Home() {
const cont=useContext(ShopContext)
const {perag,setperag}=cont
const peragseter=()=>{
  setperag("")
}
  return (
    <div  style={{paddingBottom:"12vh"}}>
    {/* /////////////////////////////////////////////////////////// */}
   
    {/* ////////////////////////////////////////////////////////////// */}
    <div className='homecolor'>
    <div className='homeflex' >
        <div  style={{width:"50vw",margin:"6vw 0vw"}}><p className='desc' style={{margin:"1vw"}}>It is smooth fast and reliable! <strong>Join us</strong> 30 days trial is free.WE won't disapoint you that's our <strong>PROMISE</strong>.</p></div>
   <div className="bodydiv" ><div className="words word-1">
   <span>F</span>
   <span>A</span>
   <span>S</span>
   <span>T</span>
 </div>
 
 <div className="words word-2">
   <span>R</span>
   <span>E</span>
   <span>L</span>
   <span>I</span>
   <span>A</span>
   <span>B</span>
   <span>L</span>
   <span>E</span>
 </div>
 
 <div className="words word-3">
   <span>S</span>
   <span>E</span>
   <span>C</span>
   <span>U</span>
   <span>R</span>
   <span>E</span>
 </div></div> 
 </div>
 </div>
 

 <div className='homecontent'style={{marginTop:"5vh"}}><div className='headpera'><h4>Introduction</h4>
 <p><strong>Reliable </strong>we are reliable fast and secure .We provide you tension and <em>hassle free</em>  Inventory managment system to maintaine your inventory with complete history of inventory items sold and daily sales graph with the reciept that can be printed.Just login add items and you are good to go.We introduced <em>privacy of total sales</em> of the owners particular private business informations and sales graph access control to specific users only that the owner will allow. </p></div><div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}
 className="firstpic"></div></div>
 {/* ///////////////////////// */}
 <div className='homecontent'>
 <div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}  className="scndpic"></div><div  className="headpera"><h4><em></em>Future<em/></h4>
 <p><strong>Digital future is ahead with centrelized data to access </strong><em>So choose wisely</em>  the features added comes with the scalablity <em>Grow at your pace</em> And leave the rest to us your data is in safe hands here is no restriction to devices you can login with the user account provided.our Website will inform you about the stock available and prevent any form of corruption that most of owners face from their employees. <em>Watch your growth from signing in to the current day track your progress with the bussiness charts and seler reports </em> </p></div></div>
 <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"6vw 0vw"}} onClick={peragseter}><div style={{width:"80vw",justifyContent:"center",alignContent:"center"}} className="thirdpic"><h3>  Privacy & Confidentiality </h3></div ></div>
 <div className={`${perag}`} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
 <h4 >Our privacy Policy</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div>
  
 </div>

 
  )
}

export default Home