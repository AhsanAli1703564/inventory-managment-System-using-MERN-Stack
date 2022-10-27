import { useContext } from 'react'
import ShopContext from '../Shopcontext/itemsContext'
function Forcast() {
  const context = useContext(ShopContext)
  //  value={country,setCountry,city,setCity,longitudeLattitude,setlongitudeLattitude,state,setState,weatherarray,update,setweatherarray,}
  const { forcast} = context
  ///////////////////////////////////////////////////////////////////////




  return (

    <div className="col-sm-4" >

        {
          forcast.map((elem) => {


            return (<div id="one-day" key={Math.random(0,1)}>
              <div className="card "  >

               
                <div className="card-body">
                <div id={(elem.weather[0].main === "Tornado") ? "hider" : (elem.weather[0].main === "Squall") ? "hider" : (elem.weather[0].main === "Ash") ? "hider" : (elem.weather[0].main === "Dust") ? "hider" : (elem.weather[0].main === "Sand") ? "hider" : (elem.weather[0].main === "Fog") ? "hider" : (elem.weather[0].main === "Haze") ? "hider" : (elem.weather[0].main === "Smoke") ? "hider" : (elem.weather[0].main === "Mist") ? "hider" : "shower"}>
                  <div className="icon sun-shower" >
                    <div className="cloud"></div>
                    <div className="sun">
                      <div className="rays"></div>
                    </div>

                  </div> </div>

                <div id={(elem.weather[0].main === "Drizzle") ? "hider" : "shower"}>
                  <div className="icon sun-shower">
                    <div className="cloud"></div>
                    <div className="rain"></div>

                    <div className="sun" >
                    </div>

                  </div> </div>
                <div >
                  <div className="icon cloudy" id={(elem.weather[0].main === "Clouds") ? "hider" : "shower"}  >
                    <div className="cloud"></div>
                    <div className="cloud"></div>
                  </div>
                </div>
                <div >
                  <div className="icon flurries" id={(elem.weather[0].main === "Snow") ? "hider" : "shower"} >
                    <div className="cloud"></div>
                    <div className="snow">
                      <div className="flake"></div>
                      <div className="flake"></div>
                    </div>
                  </div>
                </div>
                <div id={(elem.weather[0].main === "Clear") ? "hider" : "shower"}>
                  <div className="icon sunny"  >
                    <div className="sun" >
                      <div className="rays"></div>
                    </div>
                  </div>
                </div>

                <div className="icon rainy" id={(elem.weather[0].main === "Rain") ? "hider" : "shower"}>
                  <div className="cloud"></div>
                  <div className="rain"></div>
                </div>
                <div className="icon thunder-storm" id={(elem.weather[0].main === "Thunderstorm") ? "hider" : "shower"}>
                  <div className="cloud"></div>
                  <div className="lightning">
                    <div className="bolt"></div>
                    <div className="bolt"></div>
                  </div>
                </div>

                  <h3 className="card-title white">{(new Date((elem.dt) * 1000).toLocaleDateString("en-US", { weekday: 'long' }))}</h3>
                  <h5 className="card-text" id="test" style={{ color: 'black' }}>{elem.weather[0].main}</h5>
                  <h2 className='heading2'>temprature is  {Math.ceil((elem.temp.eve) - 273)}°C</h2>
                  <h3 className='heading3'> feel during day    {Math.ceil((elem.feels_like.day) - 273)}°C<span className="sapni"><span>feel during night  {Math.ceil((elem.feels_like.night) - 273)}°C</span> mininum temprature    {Math.ceil((elem.temp.min) - 273)}°C <span className="dot ">•</span>  maximum Temperature      {Math.ceil((elem.temp.max)) - 273}°C</span>•
                    <span>feel in the morning {Math.ceil((elem.feels_like.morn) - 273)}°C</span>•<span>
                      feel in the evening{Math.ceil((elem.feels_like.eve) - 273)}°C
                    </span>
                  </h3>
                  <h4 className='black'>sunrise {new Date(elem.sunrise * 1000).toLocaleTimeString()}</h4>•<h4 className='black'>
                    sunset {new Date((elem.sunset) * 1000).toLocaleTimeString()}
                  </h4>
                  <h4 className='heading4'>humidity   {(elem.humidity)}%</h4>
                  <h4 className='heading4'>  Atmospheric Pressure    {(elem.pressure)}millibars</h4>


                </div>
              </div>

            </div>)
          })
        }



      </div>
  )
}

export default Forcast