import React, { useContext } from 'react'
import WeatherContext from '../store'

function WeatherData() {
  const {
    weather: {
      name,
      description,
      main: { temp, temp_max, temp_min, humidity, pressure, feels_like }
    }
  } = useContext(WeatherContext)

  return (
    <div className="col-10 col-lg-5 tempBox text-center">
      <i className="icon ion-location" />
      <p>
        <span className="locName">{name}</span>
      </p>
      <canvas id="weatherIcon" width={100} height={100} />
      <p className="m0">
        <span className="weatherCondition">{description}</span>
      </p>
      <p className="m0">
        <span className="currentTemp" />
        <span className="unit">{temp}°C</span>
      </p>

      <p className="feels">
        <i className="wi wi-barometer" /> Feels Like:{' '}
        <span className="feelsLike">{feels_like}</span>
      </p>

      <div className="row tempBoxSubInfo">
        <div className="col">
          <p>
            <i className="wi wi-cloud-down"></i>
            Min of: <span className="windSpeed">{temp_min}</span> °C
          </p>
          <p>
            <i className="wi wi-windy" />
            Pressure: <span className="windSpeed">{pressure}</span> km/s
          </p>
        </div>
        <div className="col">
          <p>
            <i className="wi wi-cloud-up" />
            Max of: <span className="windSpeed">{temp_max}</span> °C
          </p>
          <p>
            <i className="wi wi-humidity" />
            Humidity: <span className="humidity">{humidity}</span> %
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherData
