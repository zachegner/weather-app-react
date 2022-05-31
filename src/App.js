import axios from "axios";
import { useEffect, useState } from "react";
// import './style.css'

function App() {

  const [data, setData] = useState(null)
  const [zipCode, setZipCode] = useState('')

  const url = `https://api.weatherapi.com/v1/forecast.json?key=2d468139df604ef39dc171726223105&q=${zipCode}`

  /* useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }, []) */
  const searchZipCode = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        //console.log(response.data)
      })
      setZipCode('')
    }
  }

  return data ? (
    <div className='app'>
      <div className="search">
        <input 
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
          placeholder='Enter Zipcode'
          onKeyDown={searchZipCode}
          type="text" />
      </div>
      
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.location.name}</p>
          </div>
          <div className="temp">
            <h1>{data.current.temp_f}°F</h1>
          </div>
          <div className="description">
            <p>{data.current.condition.text}</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>{data.current.feelslike_f}°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>{data.current.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>{data.current.wind_mph} MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='app'>
      {console.log(data)}
      <div className="search">
        <input 
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
          placeholder='Enter Zipcode'
          onKeyDown={searchZipCode}
          type="text" />
      </div>    
      </div>
  );
}

export default App;
