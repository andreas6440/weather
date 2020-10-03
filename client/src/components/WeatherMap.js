import React, { useContext } from 'react'
import MapGL from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import WeatherContext from '../store'

//
const apiKey =
  'pk.eyJ1IjoiYW5kcmVhczY0NDAiLCJhIjoiY2tmcTlneGt3MGl3MTMwczljbXZjZGtxNCJ9.z4v6NX2xUdGJNXrMTgA57Q'

function WeatherMap() {
  const {
    weather: {
      coord: { lon, lat }
    }
  } = useContext(WeatherContext)

  return (
    <div className="col-12 col-sm-12 col-md-10 col-lg-7 col-xl-6 dashboard text-center">
      <div className="row justify-content-center dashboardDaily">
        <MapGL
          style={{ width: '570px', height: '400px' }}
          mapStyle="mapbox://styles/mapbox/light-v9"
          accessToken={apiKey}
          latitude={lat}
          longitude={lon}
          zoom={11}
        />
      </div>
      <div className="row sunTimes justify-content-center">
        <div className="col sunrise">
          <p>
            <i className="wi wi-sunrise" /> <span className="sunriseTime" />
          </p>
        </div>
        <div className="col sunset">
          <p>
            <i className="wi wi-sunset" /> <span className="sunsetTime" />
          </p>
        </div>
        <div className="col">
          <p>
            <i className="wi wi-day-cloudy-high" />{' '}
            <span className="cloudCover" />
          </p>
        </div>
        <div className="col">
          <p>
            <i className="wi wi-raindrop" /> <span className="dewPoint" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherMap
