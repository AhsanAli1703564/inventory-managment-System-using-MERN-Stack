import React from 'react'
import {Radar} from 'react-chartjs-2'
import {Bar} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2'


import { useEffect } from 'react'
import { useContext } from 'react'
import ShopContext from '../Shopcontext/itemsContext'

import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
function Graph() {

    const cone=useContext(ShopContext)
    const {datearray}=cone
    const {salearray}=cone
    const{getgraph}=cone
    ///////////////////////////graphsettingcode
    
    



     /////////////////////////////////////////
    window.onload=()=>{
      if(localStorage.getItem("token")!==null){
        getgraph()
  
      }
    }
    useEffect(() => {
    getgraph()

    }, [])
    {
    }
     const dat={ 
        labels: datearray,
        datasets: [
            
            {
            
            label: 'Sales History',
            data: salearray,
            legend: {
              display: true,
              position: "bottom"
           },
          
            borderWidth: 4,
            borderColor:"green",
            // backgroundColor: 'rgb(0,0,0)',
            backgroundColor: 'rgb(255, 99, 100)',
         

            borderColor: 'rgb(255, 99, 132)',
        }
      ]
    }
  
    const data={ 
      labels: datearray,
      datasets: [
          
          {
          
          label: 'Sales History',
          data: salearray,
          legend: {
            display: true,
            position: "bottom"
         },
        
          borderWidth: 4,
          borderColor:"green",
          // backgroundColor: 'rgb(0,0,0)',
          backgroundColor: 'rgb(111,111,980)',
       

          borderColor: 'rgb(255, 99, 132)',
      }
    ]
  }

  
  return (
    <>
        <Bar
        data={dat}
      
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    display: false
                }
            }
        }}}

        />
        <Radar
        data={data}
      
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    display: false
                }
            }
        }}}

        />
          <Line
        data={dat}
      
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    display: false
                }
            }
        }}}

        />
        </>
  )
}

export default Graph