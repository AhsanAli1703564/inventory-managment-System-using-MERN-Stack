import React, { useContext, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ShopContext from '../Shopcontext/itemsContext';

import { ComponentToPrint } from './Reciptclass';

const Example = () => {
  const cont=useContext(ShopContext)
  const{setrecipt,gethistory,updsold,history,setdisitem,receiptshower,setreceiptshower}=cont
    const cons=()=>{
      setreceiptshower("d-none")
        // console.log("reciept cleared")
/////array of ids to clear history if we remove recipt it will remove history that is added on sold buttonclick
          // let idarraytodeleletefromhistory=JSON.parse(localStorage.getItem('arrayofids'))
          // if(idarraytodeleletefromhistory===null){
          //   setAlert({shower:"",message:"Nothing is in the Reciept to remove"})
          //   setTimeout(() => {
          //     setAlert({shower:"d-none",message:""})
  
          //   }, 2000);
          // }
          // else{
         
          //       let y=0
          //       let ourarray=JSON.parse(localStorage.getItem('ourarray'))
          //         if(ourarray!==null){
          //           ourarray.map(elem=>{

          //             updadd(elem.id,y,elem.tittle,elem.totalitems,elem.date)
          //           })

          //         }
          //   idarraytodeleletefromhistory.forEach(element => {
          //   deletehistoryitem(element)
    
            setrecipt([{date:"Date",Q:0,name:"name",total:0}])
            localStorage.removeItem("arrayofhistory")
            localStorage.removeItem("arrayofsoldobj")
            // setTimeout(() => {
            // // localStorage.removeItem("ourarray")
            // // localStorage.removeItem("arrayofids")
            // //   console.log("cleared local storage")
            // // }, 100);
            // });
            
          }
      
         ///////////////////////////////////////////////////////////////

    // }
    ///////////////////just reciept clearer for next costumer
        // history(name,price,y,z,toce,operator)

    const recieptclearer=()=>{
      let arrayofhistory=JSON.parse(localStorage.getItem("arrayofhistory"))
      let arrayofsold=JSON.parse(localStorage.getItem("arrayofsoldobj"))
      if(localStorage.getItem("operator")&&arrayofhistory&&arrayofsold){
        
        setreceiptshower("d-none")
        setdisitem("d-none")
        setrecipt([{date:"Date",Q:0,name:"name",total:0}])

        //////////////////////////////////////////////////
              arrayofhistory.map((elem)=>{
                history(elem.name,elem.price,elem.y,elem.z,elem.toce,elem.operator)
              })
// updsold(id,tittle,totalitems,date,expirydate,y)

              arrayofsold.map((elem)=>{
                updsold(elem.id,elem.tittle,elem.totalitems,elem.date,elem.expirydate,elem.y)


              })
              ///////////////////////////////////////////
              // localStorage.removeItem("ourarray")
                    // localStorage.removeItem("arrayofids")
                    gethistory()
                    setTimeout(() => {
                      localStorage.removeItem("arrayofhistory")
                      localStorage.removeItem("arrayofsoldobj")
                    }, 1000);

      }
     
    }

    //////////////////////////////////scam proof
//     const scamer=()=>{
//       if(localStorage.getItem("scamproof")
//       ){
//         console.log("can,t scam")
//       }
//     }
// window.onload(
// scamer()
// //   recieptclearer()
// )
/////////////////////////////////////////////
  const componentRef = useRef();


  return (
    <div style={{paddingBottom:"10vh",margin:"6vw 0vw 0vw 0vw",TextDecoration:"undeline"}} className={`${receiptshower}`}>
    
      <ComponentToPrint ref={componentRef} />
      <ReactToPrint
        trigger={() => <center><button  className='btnclr' onClick={recieptclearer}>Print</button></center>}
        content={() => componentRef.current}
      />
    <center>
    <button onClick={cons} className='btnclr my-2'>clear recipt</button></center> 
   
    </div>
  );
};
export default Example