import { useState } from 'react'
import './App.css'
import API from './API'
import DOGAPI from './DOGAPI'
import CoronaAPI from './CoronaAPI'
import WeatherAPI from './WeatherAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <API/>
      {/* <DOGAPI/> */}
      {/* <CoronaAPI/> */}
      {/* <WeatherAPI/> */}
    </>
  )
}

export default App
