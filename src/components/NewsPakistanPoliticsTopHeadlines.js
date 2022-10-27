import React,{useEffect,useState,useContext} from 'react'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import ShopContext from '../Shopcontext/itemsContext';
export default function NewsPakistanPoliticsTopHeadlines (props) {
  
  let context= useContext(ShopContext)
let {loading,update,articles,totalResults,fetchMoreData, setCountry,country}=context
 
 
const setcountry=(e)=>{
  // console.log(e.target.name)
  if(e.target.name == "first"){
    console.log(e.target.name)
    setCountry("us")
    update()
  }
  
 else if(e.target.name == "second"){
    console.log(e.target.name)
    setCountry("in")
    update()
  }
  else if(e.target.name == "third"){
    console.log(e.target.name)
    setCountry("cn")
    update()
  }
  else if(e.target.name == "fourth"){
    console.log(e.target.name)
    setCountry("jp")
    update()
  }
  else{}
  
}

useEffect(() => {
  update()
}, [country])
    
  
  

  

     useEffect(() => {
      update()
    
      
    
    },[])
   
    
 
  


    return (
        
    
        <>
        <section >
        <h3 id="News-Nav-heading">Select Country</h3>

        <div id="News-Nav">
          <button name="first" className="btn-News-Nav"  onClick={(e)=>setcountry(e)}>USA </button>
          <button name="second" className="btn-News-Nav" id="second" onClick={(e)=>setcountry(e)}>India </button>
          <button name="third" className="btn-News-Nav" id="third" onClick={(e)=>setcountry(e)}>China</button>
          <button name="fourth" className="btn-News-Nav" id="fourth" onClick={(e)=>setcountry(e)}>Japan</button>
        </div>
        </section>
        
        <h1  id="center-News-Heading">Dawn <span className='red'>
        {(country == "us")?"United States of America":(country=="cn")?"China":(country=="jp")?"Japan":(country=="in")?"India":"world-wide"}
          </span> Business News.</h1>

        <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length !== totalResults }
    loader={loading&&<Spinner/>}
      endMessage={
            <p id="endmsg" style={{ textAlign: "center",margin:"10px 10px" }}>
              <b className='d-cyan'> You have seen it all</b>
            </p>
          }>
      <div className="container-News">
          
        {articles.map((elem)=>{

          return <div  className="card-News"  key={Math.random(0,1)}>
             <span className="pill-red">
    {!elem.source.name?"Local reports":elem.source.name}
    </span>
              {loading?<Spinner/>:<img src={!elem.urlToImage?"https://ichef.bbci.co.uk/news/1024/branded_news/02F7/production/_124295700_4e039eab-0a79-4919-a168-eaaefeb03d12.jpg":elem.urlToImage} className="card-img-top" alt="No-mage-to-Display" />}
      <div className="card-News-body" id="hider">
        <h5 className="card-News-tittle">{elem.title?elem.title:""}</h5>
        <p className="card-News-text">{elem.description?elem.description:""}</p>
        <a  href={elem.url} className="btnclr">Details</a>
        <h3>Author </h3>
        <span className='red'>{!elem.author?"Mr NOpul Pants":elem.author}s</span>
      </div>
      </div>
        })}
        </div>
        
      </InfiniteScroll>

        </>
    )
  }
  
 