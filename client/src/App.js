import React from 'react'
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Weather from './components/Weather'
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather>
          <Main />
        </Weather>
      </header>
    </div>
  )
}

export default App
