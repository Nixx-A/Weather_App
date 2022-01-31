import { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai'
import { useStateContext } from '../pages/_app'
import styles from '../styles/FormSearch.module.css'
import { ShowData } from "./ShowData.js"
import { SideBar } from './SideBar.js'
/* import { daysWeather } from './NextDaysWeather' */


export const FormSearch = () => {
  const { weatherData } = useStateContext()
  const [text, setText] = useState('')
  const [result, setResult] = useState([])
  const [icon, setIcon] = useState('')
  const [weatherText, setWeatherText] = useState('')
  const [temperature, setTemperature] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [rain, setRain] = useState('')
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    const data = await weatherData(text) 
    console.log(data);
    setResult(data) 
    /* daysWeather(result) */
    const short = data?.current
    setIcon(short?.condition?.icon)
    setWeatherText(short?.condition?.text)
    setTemperature(short?.temp_c + '°')
    setLocation(data?.location?.name + ', ' + data?.location?.country)
    setRain('Rain - ' + data?.forecast?.forecastday[0]?.day?.daily_chance_of_rain + '%')
    setTime(data?.location?.localtime)
    setText('')
  }

  
  const handleChange = (e) => {
    setText(e.target.value)
  }

   return (
     <>
     <div className={styles.formSearch}>
          <form onSubmit={handleSubmit}>
            <AiOutlineSearch className={styles.search}/> 
            <input value={text} className={styles.input} type='text' placeholder='Search for places...' onChange={handleChange} />
            <br></br>
            {text !== '' && (
              <button type="button" className={styles.delete} onClick={() => setText('')}>
                x
              </button>
            )}
          </form>
     </div>
     <ShowData icon={icon} text={weatherText} temperature={temperature} location={location} rain={rain} time={time} />
     <SideBar icon={icon} text={weatherText} temperature={temperature} location={location} rain={rain} time={time} />
    </>
     
   )
}
