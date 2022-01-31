import { createContext, useContext, useState } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

const StateContext = createContext()

const baseUrl = "https://weatherapi-com.p.rapidapi.com/forecast.json?q="
const days = "&days=5"


export const StateContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isData, setIsData] = useState(false)
      const weatherData = async (url) => {
        setError(false)
        setIsData(false)
        setLoading(true)
        
        const res = await fetch(`${baseUrl}${url}${days}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": process.env.KEY,
          }
        })
        setIsData(true)
        const data = await res.json()
        setLoading(false)
      if (res.ok) { return data } {
        setError(true)
      }       
  }

return (
   <StateContext.Provider value={{ weatherData, loading, error, isData}}>
     {children}
   </StateContext.Provider>
   )
}
export const useStateContext = () => useContext(StateContext); 


