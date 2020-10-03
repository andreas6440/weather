import React, { useEffect, useState } from 'react'
import axios from 'axios'
import WeatherSearch from './WeatherSearch'
import WeatherData from './WeatherData'
import WeatherEmpty from './WeatherEmpty'
import WeatherMap from './WeatherMap'
import WeatherContent from './WeatherContent'
import { WeatherProvider } from '../store'

const apiKey = '05aae4c68cc9832d2d1badfe1b3a61e0'
const ipapiKey = '21b842766774cb0f5a59cd4a2410b808'

function Main() {
  const [weather, setWeather] = useState({})

  const [error, setError] = useState(
    'There is nothing to display. Search for a city!'
  )

  async function searchCity(city, state = null) {
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}${
          state ? `,${state}` : ''
        }&units=metric&appid=${apiKey}`
      )
      const { coord, main, name, weather } = data

      const description = weather[0].main

      setWeather({ coord, main, name, description })
    } catch (error) {
      setError(`There is no result for "${city}". Try again, please.`)
      setWeather({})
    }
  }

  const handleSearch = async (e) => {
    if (e.key === 'Enter') {
      const search = e.target.value

      if (!search) {
        return setError('The name of the city is required')
      }

      searchCity(search)
    }
  }

  useEffect(() => {
    async function fetchIp() {
      const {
        data: { city, region_name }
      } = await axios.get(
        `http://api.ipapi.com/api/check?access_key=${ipapiKey}`
      )

      searchCity(city, region_name)
    }
    fetchIp()
  }, [])

  return (
    <div className="Main">
      <WeatherProvider value={{ handleSearch, weather, error }}>
        <WeatherSearch />
        <WeatherContent>
          {!Object.keys(weather).length ? (
            <WeatherEmpty />
          ) : (
            <>
              <WeatherData />
              <WeatherMap />
            </>
          )}
        </WeatherContent>
      </WeatherProvider>
    </div>
  )
}

export default Main
