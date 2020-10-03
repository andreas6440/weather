import React, { useContext } from 'react'
import WeatherContext from '../store'

function WeatherSearch() {
  const { handleSearch } = useContext(WeatherContext)

  return (
    <div className="row justify-content-center searchBar">
      <div className="col-10 col-lg-8">
        <input
          type="search"
          name="search"
          placeholder="You can search for a city by its name right here. Example: Valencia"
          id="search"
          onKeyPress={(e) => handleSearch(e)}
        />
      </div>
    </div>
  )
}
export default WeatherSearch
