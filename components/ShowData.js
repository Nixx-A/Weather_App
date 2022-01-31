/* eslint-disable react/no-unescaped-entities */
import { Loading } from "./Loading"
import { Card } from './Card'
import { useStateContext } from '../pages/_app'
/* import { NextDaysWeather } from "./NextDaysWeather"
 */import styles from '../styles/ShowData.module.css'

import { BsCloudRainHeavy } from "react-icons/bs"
import { MdLocationOn } from 'react-icons/md'

export const ShowData = ({ icon, temperature, text, location, rain, time}) => {
const { loading, isData, error} = useStateContext()
  
  if (loading) return <Loading />
  if (!isData) return <h3 className={styles.search}>You haven't done a search yet</h3>
  if (error) return <h3 className={styles.error}>There was a problem... Try again</h3>
  
  return (
    <div className={styles.container}>
      <Card>
        <p className={styles.location}><MdLocationOn />{location}</p>
        <sub className={styles.sub}>{time}</sub>
        <div className={styles.temperature}>
          <img src={icon} alt={icon} className={styles.img} />
          <p className={styles.celsius}>{temperature}</p>
        </div>
        <div className={styles.rightInfo}>
          <p className={styles.text}>{text}</p>
          <p className={styles.text}><BsCloudRainHeavy className={styles.rainIcon}/>{rain}</p>
        </div>
      </Card>
      {/* <Card>
      <NextDaysWeather />
      </Card> */}
      
    </div>
  )
}

