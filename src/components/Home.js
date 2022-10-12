import React, { useContext } from 'react'
import ShopContext from '../Shopcontext/itemsContext'

function Home() {
const cont=useContext(ShopContext)
const {perag,setperag}=cont
const peragseter=()=>{
  setperag("")
}
  return (
    <section  >
 <div className='homecontent' ><div className='headpera'><h2>Introduction</h2>
 <p><strong>Reliable </strong>we are reliable fast and secure .We provide you tension and <em>hassle free</em>  Inventory managment system to maintaine your inventory with complete history of inventory items sold and daily sales graph with the reciept that can be printed.Just login add items and you are good to go.We introduced <em>privacy of total sales</em> of the owners particular private business informations and sales graph access control to specific users only that the owner will allow. </p></div><div style={{width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}
 className="firstpic"></div></div>
 {/* ///////////////////////// */}
 <div className='homecontent'>
 <div   className="scndpic"></div><div  className="headpera"><h2><em></em>Future<em/></h2>
 <p><strong>Digital future is ahead with centrelized data to access </strong><em>So choose wisely</em>  the features added comes with the scalablity <em>Grow at your pace</em> And leave the rest to us your data is in safe hands here is no restriction to devices you can login with the user account provided.our Website will inform you about the stock available and prevent any form of corruption that most of owners face from their employees. <em>Watch your growth from signing in to the current day track your progress with the bussiness charts and seler reports </em> </p></div></div>
 <div id="home_ourpolicy_container"  onClick={peragseter}><div  className="thirdpic"><h3>  Privacy & Confidentiality </h3></div ></div>
 <div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our privacy Policy</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div>
  <div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Hard Products</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our Team</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our Legacy</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our Concurrent services</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Redundance of assets</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our Biblography</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Questions Associated guidence</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our Consultants</h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div><div className={`${perag}`} id="home_oupolicy_inner_container"  >
 <h4 >Our Outlets </h4><p style={{width:"80%"}}>
  We don,t associate with any of other companies so we stand our grounds .We do not share our data to any third party for any purpose .We won't promote anything on this application.You won't find any sort of advertisement .We strictly do follow the terms and policies we defined and <em>NO PROMOTION POLICY</em> is the companies constant and consistent policy.Our team ensures the security and privacy of each fragment of the data which is stored in our data base.We do not have any hidden or blurred policy statements.Every thing descibed here will be considered.We won't charge a single hidden penny from our users. </p></div>
 </section>

 
  )
}

export default Home