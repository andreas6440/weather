import React from 'react'

function Weather(props) {
  return (
    <section id="dailyForecast">
      <div className="container weather">{props.children}</div>
    </section>
  )
}

export default Weather
