import React, { useState } from "react";
import axios from "axios";


const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
    function fetchForecast() {
      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast/daily?units=metric&appid=a7566f90e4ed0120ac27665a49f3bc9a&q=${city}`)
        .then((result) => {
        setForecast(result.data.list);
        console.log(result);
        });
       }
     return (
      <div className="App">
        <div>
          <h1>Weather</h1>
          <input
            onChange={(event) => {
              setCity(event.target.value);}}>
          </input>
          <button onClick={fetchForecast}> Search </button>
        </div>
        {forecast.map((day) => {
          return (
            <div>
              <span className="text">{day.temp.eve}</span>
              <span className="text">{day.temp.night}</span>
              <span className="text">{day.temp.morn}</span>
            </div>
          );
        })}
      </div>
    );
  };

export default WeatherApp