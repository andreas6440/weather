import React, { useContext } from 'react'
import WeatherContext from '../store'

function WeatherEmpty() {
  const { error } = useContext(WeatherContext)
  return <h1>{error}</h1>
}

export default WeatherEmpty
