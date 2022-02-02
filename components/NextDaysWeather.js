      export const daysWeather = (data) => {
      const nextDaysWeather = [{
        date: data?.forecast?.forecastday[0]?.date,
        icon: data?.forecast?.forecastday[0]?.day?.condition?.icon,
        maxTemp: data?.forecast?.forecastday[0]?.day?.maxtemp_c,
        minTemp: data?.forecast?.forecastday[0]?.day?.mintemp_c,
        /* date: data?.forecast?.forecastday[1]?.date,
        icon: data?.forecast?.forecastday[1]?.day?.condition?.icon,
        maxTemp: data?.forecast?.forecastday[1]?.day?.maxtemp_c,
        minTemp: data?.forecast?.forecastday[1]?.day?.mintemp_c,
        date: data?.forecast?.forecastday[2]?.date,
        icon: data?.forecast?.forecastday[2]?.day?.condition?.icon,
        maxTemp: data?.forecast?.forecastday[2]?.day?.maxtemp_c,
        minTemp: data?.forecast?.forecastday[2]?.day?.mintemp_c */
      }]
      return nextDaysWeather 

      }



  export const NextDaysWeather = () => {

    const data = daysWeather()
    return (
      <>
      {data.map((weather, i) => (
              <li key={i}>
                {weather?.icon}
                <p>asas</p>
              </li>
            ))}
      {data.map((weather, i) => (
        <div key={i}>
        <p>{weather.date}</p>
        </div> 
        ))}
      <p>aa</p>
      </>
    ) 

    }



  // I didn't know how save the values of the data in the forecastDay object.      Do it more later to learn how do it
      /* export const daysWeather = (data) => {
        console.log(data)
        let forecastDay = []
        for (let i = 0; i < 3; i++) {
      
          forecastDay.date =  data?.forecast?.forecastday[i]?.date,
          forecastDay.icon =  data?.forecast?.forecastday[i]?.day?.condition?.icon,
          forecastDay.maxTemp = data?.forecast?.forecastday[i]?.day?.maxtemp_c,
          forecastDay.minTemp = data?.forecast?.forecastday[i]?.day?.mintemp_c
          
          console.log(forecastDay)
            }
            /* return forecastDay */
         // } 