import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import ShopContext from '../Shopcontext/itemsContext'
function Newscard() {
  const context = useContext(ShopContext)
  const { weatherarray, state, city, cntry, iconizer,locate } = context

  useEffect(() => {
    iconizer()

  }, [])

  

  return (
    <div className="crd">
      <div className="crdi" >

        <h3 className='heading3'>{city}<span className="sapni">{(state === city) ? "" : state}</span><span className="sapni">{cntry}</span></h3>
        <div className='sizer'>
          <h3 className='heading3'>{weatherarray.weather[0].main}<span className="sapni">Wind: {weatherarray.wind.speed}km/h <span className="dot">•</span> visibility {weatherarray.visibility / 1000} km</span></h3>
          <h2 className='heading2'>{Math.ceil((weatherarray.main.temp) - 273) + `°C`}</h2>
        </div>
        <div id="cloudsunrays">
          <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
              <div className="rays"></div>
            </div>

          </div> </div>


        <div id="cloudsunrain">
          <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="rain"></div>

            <div className="sun">
            </div>

          </div> </div>

        <div className="icon cloudy" id="justcloud"  >
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>

        <div className="icon flurries" id="cloudsnowflakeflake" >
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>

        <div className="icon sunny" id="sunrays" >
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>

        <div className="icon rainy" id='cloudrain'>
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
        <div className="icon thunder-storm" id="thunderstorm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>


        <div className='sizero'>
          <h2 className='heading2'>temprature is  {Math.ceil((weatherarray.main.temp) - 273)}°</h2>
          <h3 className='heading3'> feel      {Math.ceil((weatherarray.main.feels_like) - 273)}°C<span className="sapni"> Mininum temprature    {Math.ceil((weatherarray.main.temp_min) - 273)}°C <span className="dot ">•</span>  Maximum Temperature      {Math.ceil((weatherarray.main.temp_max) - 273)}°C</span></h3>
          <h4 className='heading4'>humidity   {(weatherarray.main.humidity)}%</h4>
          <h4 className='heading4'>  Atmospheric Pressure    {(weatherarray.main.pressure)} mb</h4>
          <h4 className='heading4'>  SunRise   {new Date(weatherarray.sys.sunrise * 1000).toLocaleTimeString()
          }</h4>
          <h4 className='heading4'>  Sunset   {new Date(weatherarray.sys.sunset * 1000).toLocaleTimeString()
          }</h4>

        </div>
      </div>
    </div>
  )
}

export default Newscard