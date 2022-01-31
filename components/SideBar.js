import { BsCloudRainHeavy } from 'react-icons/bs'
import styles from '../styles/SideBar.module.css'
import { useStateContext } from '../pages/_app'

export const SideBar = ({ icon, temperature, text, location, rain, time }) => {
  const { isData, error} = useStateContext()

  if (!isData) return <h3 className={styles.search}></h3>
  if (error) return <h3 className={styles.error}></h3>

  return (
    <>
    <div className={styles.sidebar}>
      <div className={styles.imgContainer}>
       <img src={icon} alt={icon} className={styles.img} />
      </div>
      <div className={styles.weatherSidebar}>
        <h3 className={styles.temperature}>{temperature}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.data}>
        <p><BsCloudRainHeavy className={styles.icon}/>{rain}</p>
      </div>

      <p className={styles.location}>{location}</p>
      <sub className={styles.time}>{time}</sub>

    <footer>
      <p className={styles.autor}>Nixx</p>
    </footer>
    </div>
    </>
  )
}
