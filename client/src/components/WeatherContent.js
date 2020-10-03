import React from 'react'

function WeatherContent(props) {
  return <div className="row justify-content-around">{props.children}</div>
}

export default WeatherContent
