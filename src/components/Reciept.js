import React, { useContext, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ShopContext from '../Shopcontext/itemsContext';

import { ComponentToPrint } from './Reciptclass';

const Example = () => {
  const cont=useContext(ShopContext)
  const{setrecipt,gethistory,updsold,history,setdisitem,receiptshower,setreceiptshower}=cont
    const cons=()=>{
      setreceiptshower("d-none")
      
    
            setrecipt([{date:"Date",Q:0,name:"name",total:0}])
            localStorage.removeItem("arrayofhistory")
            localStorage.removeItem("arrayofsoldobj")
          
            
          }
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

              arrayofsold.map((elem)=>{
                updsold(elem.id,elem.tittle,elem.totalitems,elem.date,elem.expirydate,elem.y)


              })
           
                    gethistory()
                    setTimeout(() => {
                      localStorage.removeItem("arrayofhistory")
                      localStorage.removeItem("arrayofsoldobj")
                    }, 1000);

      }
     
    }

   
/////////////////////////////////////////////
  const componentRef = useRef();


  return (
    <div id="reciept_container"  className={`${receiptshower}`}>
    
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