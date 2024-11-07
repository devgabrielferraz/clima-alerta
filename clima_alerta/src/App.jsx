import { useState, useRef } from 'react'
import axios from 'axios';
import './App.css'
import WeatherInfo from './components/WeatherInfo';
import WeatherInfoDays from './components/WeatherInfoDays';

function App() {
  const [weather, setWeather] = useState({})
  const [weatherDays, setWeatherDays] = useState({})
  const inputRef = useRef()

async function searchCity(){
    const city = inputRef.current.value
    //const state = stateRef.current.value (ver como puxar o estado de cada cidade)
    const key = "9a348a78b8ccafeee4760a7f07fe15e2"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    const apiInfoDays = await axios.get(urlDays)
    setWeather(apiInfo.data);
    setWeatherDays(apiInfoDays.data)

    //console.log(apiInfo.data);
    //console.log(apiInfoDays);
    

  }

  return (
   <div className='container'> 
      <center>
        <h1>Clima Alerta - A sua previsão do tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite aqui o nome da cidade' />
        <button onClick={searchCity}>Buscar!</button>

        <WeatherInfo weather={weather}/>
        <WeatherInfoDays weatherDays={weatherDays} />
      </center>
   </div>
  )
}

export default App
