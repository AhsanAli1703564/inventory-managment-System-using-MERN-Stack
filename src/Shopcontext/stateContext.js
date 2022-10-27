import React from "react";
import ItemContext from "./itemsContext";
import { useState } from "react";

const StateContext = (props) => {
  // top loading bar state loading////////////////////////
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  // state for the news bussiness/////////////
  const[country,setCountry]=useState("us")
  const [articles,setArticles]=useState([])
const[page,setPage]=useState(1)
const[disp,setDisplay]=useState("d-none")
const[totalResults,settotalResults]=useState(0)







const update=async()=>{ 
  if(articles===[]){
      

      setLoading(true)
  }
  else{setLoading(false) 
    setDisplay("block")}
  setProgress(20)

  let  url=`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=ab6e3e9ed7bb4b15b3a044efd3c63540&pageSize=100`
  setLoading(true)

  let data=await fetch(url)
 setProgress(60)
  
let parseddata=await data.json()
if(parseddata.code==="rateLimited"){document.write("you have consumed your limit")}
setArticles(parseddata.articles)
setLoading(false)
settotalResults(parseddata.totalResults)
setProgress(100)

   }
   const  fetchMoreData =async () => {
     
     
    
    setLoading(true)
    setDisplay("block")
    setProgress(20)
    
    let  url=`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=ab6e3e9ed7bb4b15b3a044efd3c63540&pageSize=100`
       setLoading(false)
    setPage(page+1)
        let data=await fetch(url)
        setProgress(60)
    
        
    let parseddata=await data.json()
    setProgress(80)
    
          // a fake async api call like which sends
          // 20 more records in 1.5 secs
          setTimeout(() => {
           
              setArticles(articles.concat(parseddata.articles))
          setLoading(false)
           ;
          }, 1000);
          setProgress(100)
    
        };
        
 
  ///////////////////////////////////////////////////add graph datd set path of after login

  const [loginpath, setloginpath] = useState();

  /////////////////////////////home setperagto show or hide usestate
  const [perag, setperag] = useState("d-none");
  //////////////////////////////////////reciept shower use state
  const [receiptshower, setreceiptshower] = useState("d-none");
  ///////////////////////token state to show and hide the login etc from the navbar
  const [tokenstate, settokenstate] = useState(null);
  ////////////////////////////////itembutton displaying context
  const [disitem, setdisitem] = useState("d-none");
  ////////////////////////////////////////////////reciept k liye array using setstate
  let arr = [{ id: 10, date: "Date", Q: 0, name: "name", total: 0 }];
  const [recipt, setrecipt] = useState(arr);
  ////////////////////////////////////////////////////
  const [data, setData] = useState({ item: "" });
  const [item, setItem] = useState({
    date: "Date",
    expiry: "Expiry",
    price: "price",
    tittle: "ItemsName",
    totalitems: "totalitems",
    __v: 0,
    _id: "62b1c0149668c5c865a76823",
  });
  /////////////////////////usestate for the gethistory function
  const [datearray, setdatearray] = useState([]);
  const [salearray, setsalearray] = useState([]);
  //////////////////////////////////////////////get token
  const token = localStorage.getItem("token");
  ///////////////////////////////////////////////
  const [hist, setHist] = useState([
    {
      date: "2022-06-15T05:34:10.480Z",
      ex: "a",
      itemssold: 0,
      tittle: "Bari",
      totalamount: 0,
      __v: 0,
      _id: "62a96f5215ce5ba405c3e61a",
    },
  ]);
  const [art, setAlert] = useState({ shower: "d-none", message: "" });
  const [message, setMessage] = useState("d-none");

  const [all, setAll] = useState([
    {
      date: "2022-06-10T10:18:01.719Z",
      tittle: "Name of item",
      totalitems: 0,
      __v: 0,
      _id: "62a1bab950a7d9b9c2be4e4c",
    },
  ]);

  const fetchD = async (x) => {
    const url = `http://localhost:5000/Items/findone/${x}`;
    setProgress(100);
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });
      let dat = await response.json();

      if (dat[0] === undefined) {
        setAlert({ shower: "", message: "No such Item found in the database" });
        setTimeout(() => {
          setAlert({ shower: "d-none", message: "" });
        }, 2000);
      } else {
        setItem(dat[0]);
        setdisitem("");
      }
    } catch (error) {
      setAlert({ shower: "", message: "Error occured try again " });
      setTimeout(() => {
        setAlert({ shower: "d-none", message: "" });
      }, 2000);
    }
    setProgress(0);
    setLoading(false);

    // console.log("lovingly awesome")
  };
  ////////////////////////////////////////////
  const setD = (x) => {
    setData(x);
  };
  //////////////////////function to delete item////////////
  const del = async (id) => {
    const uri = `http://localhost:5000/Items/remove/${id}`;

    const response = await fetch(uri, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    //  let dat= await response.json()
    fetchall();
  };
  ////////////////////function to fetch all
  const fetchall = async () => {
    setProgress(100);
    setLoading(true);

    const uri = "http://localhost:5000/Items/getall";
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": token,
      },
    });

    const result = await response.json();
    setAll(result);
    setProgress(0);
    setLoading(false);
  };
  //////////////////////////////function to add item
  const add = async (x, y, z, f) => {
    const uri = "http://localhost:5000/Items/additem";
    setProgress(50);

    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        tittle: `${x}`,
        totalitems: y,
        price: z,
        expiry: `${f}`,
      }),
    });
    setProgress(100);
    setLoading(true);

    fetchall();
    setProgress(0);
    setLoading(false);
  };
  ////////////////////////////update number of items using update api
  const updadd = async (id, number, tittle, dbnumber, date) => {
    const uri = `http://localhost:5000/Items/update/${id}`;
    const numb = dbnumber + number;
    setProgress(100);
    setLoading(true);

    const response = await fetch(uri, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify({
        _id: `${id}`,
        tittle: tittle,
        totalitems: numb,
        date: `${date}`,
        __v: 0,
      }),
    });
    const updated = await response.json();
    setItem(updated);
    gethistory();
    setProgress(0);
    setLoading(false);
  };
  ///////////////////////////////for sold
  const updsold = async (id, tittle, totalitems, date, expiry, y) => {
    const uri = `http://localhost:5000/Items/update/${id}`;
    // console.log(typeof(y))
    if (y <= totalitems) {
      const numb = parseInt(totalitems) - parseInt(y);
      if (totalitems !== 0) {
        const response = await fetch(uri, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify({
            _id: `${id}`,
            tittle: tittle,
            totalitems: numb,
            date: `${date}`,
            expiry: `${expiry}`,

            __v: 0,
          }),
        });
        const updated = await response.json();
        setProgress(50);

        setItem(updated);
        fetchall();
        setProgress(100);
        setLoading(true);
      } else {
        console.log("out of stock");
        // setAlert({shower:"",message:"Item is out of stock."})
        // setTimeout(() => {
        // setAlert({shower:"d-none",message:""})

        // }, 1000);
      }
    } else {
      console.log("nothing");
    }
    setProgress(0);
    setLoading(false);
  };
  ////////////////////////////////////////////alerter
  const alerter = async () => {

    const uri = "http://localhost:5000/Items/getall";
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token": token,
      },
    });
    const result = await response.json();
    setProgress(100);
    setLoading(true);

    let a = result.map((elem) => {
      if (elem.totalitems < 10) {
        return elem.tittle;
      }
    });
    let b = a.toString();
    b = b.replaceAll(",", "");

    if (b.length !== 0) {
      // console.log(b.length)
      setAlert({ shower: "", message: b + " are low in stock ." });
      setTimeout(() => {
        setAlert({ shower: "d-none", message: "" });
      }, 2000);
    } else {
    }
    setProgress(0);
    setLoading(false);
  };
  ///////////////////////history
  const history = async (
    tittle,
    price,
    itemssold,
    pricesold,
    totalamount,
    operator
  ) => {
    try {
      const url = "http://localhost:5000/Record/history";
      setProgress(0);
      setLoading(false);

      let response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          tittle: `${tittle}`,
          price: price,
          pricesold: pricesold,
          itemssold: itemssold,
          totalamount: totalamount,
          operator: operator,
        }),
      });
      // console.log(tittle,price,itemssold,totalamount)
      const data = await response.json();
      setProgress(100);
      setLoading(true);

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

      gethistory();
    } catch (error) {
      console.log(error.message);
    }
    setProgress(0);
    setLoading(false);
  };
  ////////////////////fetch history
  const gethistory = async () => {
    setProgress(100);
    setLoading(true);

    let uri = "http://localhost:5000/Record/gethistory";
    const response = await fetch(uri, {
      method: "GET",
      headers: { "content-type": "application/json", "auth-token": token },
    });
    const data = await response.json();
    setHist(data);
    // console.log(data)
    setProgress(0);
    setLoading(false);
  };
  /////////////////////////////get graph
  const getgraph = async () => {
    setProgress(100);
    setLoading(true);

    const uri = "http://localhost:5000/Graph/getgraph";
    const response = await fetch(uri, {
      method: "Get",
      headers: {
        "content-type": "application/json",
        "auth-token": token,
      },
    });
    const result = await response.json();
    let dates = result.map((elem) => {
      return elem.time;
    });
    setdatearray(dates);
    let sales = result.map((elem) => {
      return elem.totalsales;
    });
    setsalearray(sales);
    setProgress(0);
    setLoading(false);
  };
  ////////////////////////////////////////////post data daily for graph
  const addgraphdata = async (time, totalsales) => {
    setProgress(100);
    setLoading(true);

    try {
      const uri = "http://localhost:5000/Graph/totalsales";
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({
          time: `${time}`,
          totalsales: `${totalsales}`,
        }),
      });
    } catch (error) {
      console.log(error.messgae);
    }
    setProgress(0);
    setLoading(false);
  };

  ///////////////////////////////////////////
  const msggiver = () => {
    setProgress(100);
    setLoading(true);

    if (hist.length == 0) {
      setMessage("");
    } else {
      let arr = hist.map((elem) => {
        return elem.totalamount;
      });

      let totalamountofallsales = arr.reduce((a, b) => a + b);
      totalamountofallsales = parseInt(totalamountofallsales);
    }
    setProgress(0);
    setLoading(false);
  };
  //////////////////////////////function to delete history Item if we want to change the order eg clearing recipt which will delete every item that was sold by pressing sold button
  const deletehistoryitem = async (id) => {
    setProgress(10);

    const uri = `http://localhost:5000/Record/deletehistoryitem/${id}`;
    setProgress(100);
    setLoading(true);

    const response = await fetch(uri, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    setProgress(0);
    setLoading(false);

    //  let dat= await response.json()
  };
  ////////////////////////delete history
  const deletehistory = async () => {
    const uri = "http://localhost:5000/Record/deletehistory";
    setProgress(50);
    const response = await fetch(uri, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": token,
      },
    });
    setProgress(100);
    setLoading(true);
    gethistory();
    setProgress(0);
    setLoading(false);
  };
  ///////////////////////////////////////fetchuser
  const fetchuser = async (token) => {
    if (!localStorage.getItem("token")) {
    }
    setProgress(50);
    const resp = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token": token,
      },
    });
    setProgress(100);
    setLoading(true);
    let data = await resp.json();
   
    localStorage.setItem("name", data.name);
    setProgress(0);
    setLoading(false);
  };
  ///////////////////////spinner for home
  const loader = () => {
    setLoading(true);
    setProgress(100)
    setTimeout(() => {

      setLoading(false);
      setProgress(0)
    }, 1000);
  };


///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////................................................
   // weather forcast///////////////////////.....................////////////////////
   const [city, setCity] = useState("City")
   const [state, setState] = useState("State")
   const[cntry,setcntry]=useState("country")
 
 
   ///////////////////////////////////////function that returns daily
   const daily =
     [
       {
         "dt": 'Date',
         "sunrise": 'Sunrise',
         "sunset": 'Sunset',
         "moonrise": 'moonrise',
         "moonset": 'moonset',
         "moon_phase": 0.12,
         "temp": {
           "day": 'Temperetur',
           "min": 'Mininmum Temperature',
           "max": 'Maimum Temperature',
           "night": 'temperature during night',
           "eve": 'tempereture during evening',
           "morn": "tempreture during morning"
         },
         "feels_like": {
           "day": 'feel during day',
           "night": 'feel during night',
           "eve": 'feel during eve',
           "morn": 'feel during morning'
         },
         "pressure": 'Atmospheric pressure',
         "humidity": 'humidity',
         "dew_point": 270.81,
         "wind_speed": 3.4,
         "wind_deg": 320,
         "wind_gust": 7.41,
         "weather": [
           {
             "id": 800,
             "main": "condition",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": 1,
         "pop": 0,
         "uvi": 11.11
       },
       {
         "dt": 'Date',
         "sunrise": 'Sunrise',
         "sunset": 'Sunset',
         "moonrise": 'moonrise',
         "moonset": 'moonset',
         "moon_phase": 0.12,
         "temp": {
           "day": 'Temperetur',
           "min": 'Mininmum Temperature',
           "max": 'Maimum Temperature',
           "night": 'temperature during night',
           "eve": 'tempereture during evening',
           "morn": "tempreture during morning"
         },
         "feels_like": {
           "day": 'feel during day',
           "night": 'feel during night',
           "eve": 'feel during eve',
           "morn": 'feel during morning'
         },
         "pressure": 'Atmospheric pressure',
         "humidity": 'humidity',
         "dew_point": 270.81,
         "wind_speed": 3.4,
         "wind_deg": 320,
         "wind_gust": 7.41,
         "weather": [
           {
             "id": 800,
             "main": "Condition",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": 0,
         "pop": 0,
         "uvi": 11.44
       },
 
     ]
   const [forcast, setforcast] = useState(daily)
   let news = {
     "coord": {
       "lon": 74.3142,
       "lat": 31.5657
     },
     "weather": [
       {
         "id": 800,
         "main": "Clear",
         "description": "clear sky",
         "icon": "01d"
       }
     ],
     "base": "stations",
     "main": {
       "temp":'temperature',
       "feels_like":'feel ',
       "temp_min": 'Minimum temperature',
       "temp_max": 'Maximum temperature',
       "pressure": 'Pressure',
       "humidity": 'Humidity',
       "sea_level": 996,
       "grnd_level": 973
     },
     "visibility": 'Visibility',
     "wind": {
       "speed": 'speed',
       "deg": 221,
       "gust": 3.48
     },
     "clouds": {
       "all": 9
     },
     "dt": 'Current date',
     "sys": {
       "type": 1,
       "id": 9157,
       "country": "Country Code",
       "sunrise": 'SunRise',
       "sunset": 'SunSet'
     },
     "timezone": 18000,
     "id": 1172451,
     "name": "City",
     "cod": 200
   }
 
 
 
 
   //// array of object with multiple alternatives we can serch city or country
   // let data=[
   //     {
   //     "name": "Lahore",
   //     "local_names": {
   //     "eo": "Lahoro",
   //     "uk": "Лахор",
   //     "he": "להורה",
   //     "ur": "لاہور",
   //     "ml": "ലാഹോർ",
   //     "es": "Lahore",
   //     "pl": "Lahaur",
   //     "ja": "ラホール",
   //     "kn": "ಲಾಹೋರ್",
   //      "ar": "لاهور",
   //     "ru": "Лахор",
   //     "oc": "Lahaur",
   //     "ta": "லாகூர்",
   //     "fr": "Lahore",
   //     "hi": "लाहौर",
   //     "et": "Lahore",
   //     "zh": "拉合尔",
   //     "en": "Lahore",
   //     "it": "Lahore",
   //     "cs": "Láhaur",
   //     "ko": "라호르",
   //     "de": "Lahore"
   //     },
   //     "lat": 31.5656822,
   //     "lon": 74.3141829,
   //     "country": "PK",
   //     "state": "Punjab"
   //     }
   //     ]
   /////////////////////////////////////////////////////////////////
   // function setting icon with main
 
   function iconizer() {
     if (weatherarray.weather[0].main === 'Clear') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsunrays').style.display = "none"
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById('thunderstorm').style.display = "none"
 
     }
     else if (weatherarray.weather[0].main === 'Clouds') {
       document.getElementById('cloudsunrain').style.display = "none"
       document.getElementById('sunrays').style.display = "none"
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('cloudsunrays').style.display = "none"
       document.getElementById('thunderstorm').style.display = "none"
 
     }
     else if (weatherarray.weather[0].main === 'Thunderstorm') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
     }
     else if (weatherarray.weather[0].main === 'Rain') {
       document.getElementById('cloudsunrain').style.display = "none"
       document.getElementById('sunrays').style.display = "none"
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudsunrays').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById('thunderstorm').style.display = "none"
 
     }
     else if (weatherarray.weather[0].main === 'Drizzle') {
       document.getElementById('cloudsunrain').style.display = "none"
       document.getElementById('sunrays').style.display = "none"
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudsunrays').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById('thunderstorm').style.display = "none"
 
 
     }
     else if (weatherarray.weather[0].main === 'Snow') {
 
       document.getElementById('cloudsunrays').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById('thunderstorm').style.display = "none"
       document.getElementById('sunrays').style.display = "none"
       document.getElementById('cloudsunrain').style.display = "none"
 
 
 
 
 
     }///////////////////////////////////////////////////////////////
     else if (weatherarray.weather[0].main === 'Tornado') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
     }
     else if (weatherarray.weather[0].main === 'Squall') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
 
     }
     else if (weatherarray.weather[0].main === 'Ash') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
 
     }
     else if (weatherarray.weather[0].main === 'Dust') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
     } else if (weatherarray.weather[0].main === 'Sand') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
 
 
     } else if (weatherarray.weather[0].main === 'Fog') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
 
     } else if (weatherarray.weather[0].main === 'Haze') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
     } else if (weatherarray.weather[0].main === 'Smoke') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
 
     } else if (weatherarray.weather[0].main === 'Mist') {
       document.getElementById('cloudsunrain').style.display = "none"
 
       document.getElementById('cloudsnowflakeflake').style.display = "none"
       document.getElementById('cloudrain').style.display = "none"
       document.getElementById('justcloud').style.display = "none"
       document.getElementById("sunrays").style.display = "none"
       document.getElementById("cloudsunrays").style.display = "none"
 
 
 
 
     }
     else { console.log("lovingly ") }
   }
 
 
 
 
 
 
 
   //////////////////////////////////////////////
   const [weatherarray, setweatherarray] = useState(news)
 
 
 
   const [dat, setDat] = useState({ city: "", country: "" })
   ////////////////////////
 
   const locate=()=> {
  
     // check if the Geolocation API is supported
     if (!navigator.geolocation) {
         console.log( `Your browser doesn't support Geolocation`) ;
         return;
     }
   
     // handle click event
    
         // get the current position
         navigator.geolocation.getCurrentPosition(onSuccess, onError);
     
   
   
     // handle success case
     function onSuccess(position) {
         const {
             latitude,
             longitude
         } = position.coords;
   
        displayLocation(latitude,longitude)
       return
     }
   
     // handle error case
     function onError() {
       setMessage({message:"No iternet connection ",description:"check your connection before trying again"})
      setTimeout(() => {
        setAlert({ shower: "d-none", message: "" })
      }, 1000);
     }
   };
   
   ////////////////////////////////////////////////////////////////////////////////////////
   const  displayLocation=async (x,y)=>{
     try {
       let uri=  `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${x}&longitude=${y}&localityLanguage=en&key=85bf7b5c7c65489982b9b72c648ada38`
   let data=await fetch(uri)
   let resp=await data.json()
     let city=resp.locality
     let lon=city.replace("Tehsil","")
     console.log(lon)
   longlatt(lon)
   
     } catch (error) {
      
console.log("done")
     }
   
   // longlatt(resp.locality)
   
   }
   
   const control=(e)=>{
     setDat({...dat,[e.target.name]:e.target.value})
    console.log(e.target.value)
       }
      
     // //////////////////////////////////////////////////////////
     const fetchNews=async(x,y)=>{
     
       const     url=`https://api.openweathermap.org/data/2.5/weather?lat=${x}&lon=${y}&appid=95bace996bd0ebb37dbbf65d43415c85`
            let data=await fetch(url)
     setProgress(50)
     
            let resp=await data.json()
            setProgress(80)
     
            setweatherarray(resp)
     setProgress(100)
     
        }
     // ////////////////////////////////////////////////////////// 
       const longlatt=async(currentcity)=>{
         try { setCity(currentcity)
      
           let url=`https://api.openweathermap.org/geo/1.0/direct?q=${currentcity}&units=standard&appid=95bace996bd0ebb37dbbf65d43415c85`
           const respo=await fetch(url)
         
       
          let resp= await respo.json()
         
       
          setcntry(`${resp[0].country}`)
          setState(`${resp[0].state}`)
      
          fetchNews(resp[0].lat,resp[0].lon)
          forcastday(resp[0].lat,resp[0].lon)
          setMessage( {message:"Success",description:`Weather of current location `})
          setTimeout(() => {
          setAlert({ shower: "d-none", message: "" })
            
          }, 1000);
          
           
         } catch (error) {
           setMessage( {message:"Network error",description:"type correctly or check internet connection"})
        
           setTimeout(() => {
          setAlert({ shower: "d-none", message: "" })
            
           }, 1000);
         }
       }
     
     //////////////////////////////////////////////////////////////////////////////
     const forcastday=async(x,y)=>{
       try {
         const uri=`https://api.openweathermap.org/data/2.5/onecall?lat=${x}&lon=${y}&exclude=minutely,current,alerts,hourly&appid=95bace996bd0ebb37dbbf65d43415c85`
       const days=await fetch(uri)
       const obj=await days.json()
       setforcast(obj.daily)
     
       } catch (error) {
         setMessage( {message:"Network error",description:Error.message})
         setTimeout(() => {
          setAlert({ shower: "d-none", message: "" })
          
         }, 1000);
        
       }
       
      }
    const  setProg=(x)=>{
      setProgress(x)
    }
  return (
    <ItemContext.Provider
      value={{
        fetchD,
        data,
        setD,
        item,
        fetchall,
        all,
        del,
        add,
        updadd,
        updsold,
        alerter,
        art,
        setAlert,
        history,
        gethistory,
        hist,
        getgraph,
        salearray,
        datearray,
        addgraphdata,
        msggiver,
        message,
        recipt,
        setrecipt,
        setAlert,
        deletehistoryitem,
        deletehistory,
        disitem,
        setdisitem,
        fetchuser,
        deletehistory,
        tokenstate,
        settokenstate,
        receiptshower,
        setreceiptshower,
        perag,
        setperag,
        loginpath,
        setloginpath,
        progress,
        loading,
        loader,
        articles,
        page,
        disp,
        totalResults,
       update,
      
       fetchMoreData,
      setCountry,
      country,

forcast,


      weatherarray, state, city, cntry, iconizer,
      dat,longlatt,control,locate
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default StateContext;
