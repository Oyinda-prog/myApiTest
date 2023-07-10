import React, { useState } from 'react'
import axios from 'axios'

const Api = () => {
    const [city, setcity] = useState("Lagos")
   
  const [details, setdetails] = useState({
    
        name: "",
        cod: "",
        weather: []
      
  });

     let key = "67fe3dbd6f28d657f591dc7e70e1bc94";
     const getWeather=()=>{
        let endpoint= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        axios.get(endpoint)
        .then((response)=>{
            console.log(response.data);
            setdetails(response.data)
            console.log(details);
            console.log(details.wind.speed);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
  return (
    <>
    
    <input type="text" onChange={(e)=>setcity(e.target.value)} value={city}/>
    <button onClick={getWeather}>Check Weather</button><br />
    
    <div>
        <h2>Location: {details.name}</h2>
    </div>
        <h2>Coord: {details.cod}</h2>
  
      
      
     
        
      
  

   
    </>
  )
}

export default Api