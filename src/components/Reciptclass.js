import React, { useContext ,useEffect} from "react";
import ShopContext from "../Shopcontext/itemsContext";
export const ComponentToPrint = React.forwardRef((props, ref) => {
    const contexto=useContext(ShopContext)
    const {recipt}=contexto
    // let recipt=props.recipt
   
    
    
    let totl=recipt.map(elem=>{
      return elem.total
    })
    let totalbill=totl.reduce((a,b)=>a+b)
    return (
    
      <div ref={ref}> <div className="ticket" >
      {/* <img src="./logo.png" alt="Logo"/> */}
     <h5 style={{margin:"0px"}}>Cash Deposit</h5>
     <span style={{fontSize:"4px"}}>Reciept No #{(recipt.length===1)?"Token":recipt[1].token}</span>
     <br/><span style={{fontSize:"4px"}}>Date :{(recipt.length===1)?"Date":recipt[1].date}</span>
     <center>
      <table>
          <thead>
           
              <tr>
                  <th className="quantity mx-4">Q.</th>
                  <th className="description mx-4">name</th>
                  <th className="price mx-4">Rs</th>
                  <th className="price mx-4">exp</th>

              </tr>
          </thead>
          <tbody>
        { recipt.map((elem)=>{
            return(
                <tr key={elem.name}>
                <td className="quantity">{(elem.Q===0)?"":elem.Q}</td>
                <td className="description">{elem.name==="name"?"":elem.name}</td>
                <td className="price">{(elem.total===0)?"":elem.total}</td>
                <td className="price size">{(elem.total===0)?"":elem.expiry}</td>

            </tr>
              
            )
        
            
          })
        }
          </tbody>
      </table>
      </center>
      <span className="centered">Total Bill :{totalbill}
          </span>
     <br /> <p className="centered">Thanks for shopping with us!
     <br /><span>operatorName {localStorage.getItem("operator")}</span>

          </p>
  </div>
  </div>
    );
  });