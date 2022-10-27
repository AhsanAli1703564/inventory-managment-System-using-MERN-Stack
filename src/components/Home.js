import React, { useContext } from 'react'
import ShopContext from '../Shopcontext/itemsContext'

function Home() {
const cont=useContext(ShopContext)
const {perag,setperag}=cont

  return (
    // style={{backgroundColor:"#DC143C"}}
    <div>
    
    <section  >
      <div id="home-svg">
        <span id="home-svg-heading" className='h-s-m'>Deliverables</span>
        <span id="home-svg-heading2" className='h-s-m'> <img  src={require("./Material UI.png")} width={"50px"}
        height={"50px"} />
        <img className='mx-2' src={require("./js.png")} width={"50px"}
        height={"50px"} />
        <img className='mx-2' src={require("./Reactt Redux.png")} width={"50px"}
        height={"50px"} />
        <img className='mx-2' src={require("./github.png")} width={"50px"}
        height={"50px"} />
       </span>
      </div>
      <section className="section-one"> 
    <div className="container">
      <h1 id="h-home">We are an Inventory Management Solution. </h1>
      <p id='pera-h'>We offer the online Inventory management with full security and centerlized data-base so that you can access your inventory remotely anywhere and the  architecture off our software provides scam proof use even from the employees side. </p>
      {/* <a href="" className="home-button">Read More</a> */}
    </div>  
  </section> 
  <section className="section-one" id="bg-im1"> 
    <div className="container">
      <h1 id="h-home"> Simply Sign-up login and voillah you are at a platform where you are not dependent. </h1>
      <p id='pera-h'>It is realy costly for the business to manage inventory at a costly custom device specific installed System which is not even online most of the times.This scenerio also comes with the life-time dependency of the service providing company or individual.So why not join a hassle free management software. </p>
      {/* <a href="" className="home-button">Read More</a> */}
    </div>  
  </section>  
  <section className="section-one" id="bg-im2"> 
    <div className="container" >
      <h1 id="h-home">In the part time you can also read world economic news and see the weather forcast also </h1>
      <p id='pera-h'>  Free at the company do not worry we provide you with the world-wide business news .You can also keep track at the weather watch weather forcasts of any city.  </p>
    </div>  
  </section> 
      <section id='sect-h-lgap'>
  <h1  className="avun">As Simple as it can get</h1>
 <section id='corou'>
 <input type="radio" name="position"  />
  <input type="radio" name="position" />
  <input type="radio" name="position" defaultChecked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  

  <main id="carousel">
    <div className="item"><a  className='cr-anchor coral' href="https://www.youtube.com/watch?v=7eol5SX3i1A">Sign up</a></div>
    <div className="item"><a className='cr-anchor white' href="https://www.youtube.com/watch?v=7eol5SX3i1A">Log in </a></div>
    <div className="item"><a className='cr-anchor white' href="https://www.youtube.com/watch?v=7eol5SX3i1A">Add Items </a></div>
    <div className="item"><a className='cr-anchor yellow' href="https://www.youtube.com/watch?v=7eol5SX3i1A"> Transactions</a></div>
    <div className="item"><a className='cr-anchor white' href="https://www.youtube.com/watch?v=7eol5SX3i1A">Report  </a></div>
   
    </main>
 </section>

 </section>
 <section  style={{backgroundColor:"yellow"}}>
 <h1  className='avun'  id="lower-avun">An oline Inventory Management system</h1>
 <section className='homecontent' ><div className='headpera'><h2 className='black burl-size '>Introduction</h2>
 <p className='p'><strong className='black'>Reliable </strong>we are reliable fast and secure .We provide you tension and <em className='black'>hassle free</em>  Inventory managment system to maintaine your inventory with complete history of inventory items sold and daily sales graph with the reciept that can be printed.Just login add items and you are good to go.We introduced <em className='black'>privacy of total sales</em> of the owners particular private business informations and sales graph access control to specific users only that the owner will allow. </p></div><div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}
 className="firstpic"></div></section>
 {/* ///////////////////////// */}
 <section className='homecontent'>
 <div   className="scndpic"></div><div  className="headpera"><h2 className='black burl-size'>Future</h2>
 <p className='p'><strong className='black'>Digital future is ahead with centrelized data to access </strong><em className='black'>So choose wisely</em>  the features added comes with the scalablity <em className=''>Grow at your pace</em> And leave the rest to us your data is in safe hands here is no restriction to devices you can login with the user account provided.our Website will inform you about the stock available and prevent any form of corruption that most of owners face from their employees. <em className='black'>Watch your growth from signing in to the current day track your progress with the bussiness charts and seler reports </em> </p></div></section>

 </section>
     
 <section className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 className='black burl-size'>Our privacy Policy</h4><p className='p' style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em className='black'>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></section>
 

 </section>
 
 <section id="block-container" >
 <div id="block" className="blockquote-wrapper">
  <div className="blockquote">
    <h3 className='black'>
      keep Track Remotely with full Security .
     </h3>
     <p className='black'>You will find it secure in every Aspect</p>
    <h4 className=' f-30 f-w-900'> Ai Invents</h4>
  </div>
</div>

 </section>
 
 
 </div>
 
  )
}

export default Home