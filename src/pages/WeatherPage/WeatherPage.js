import React from "react";
import WeatherApp from "./WeatherApp";
import "./Weather.css"
import videoBackgroud from "./style/videoBacjground";

const BackgroundWeatherPage = () => {
    return (
      <div className="BackgroundWeatherPage">
        <videoBackgroud />
        <WeatherApp />
      </div>
    );
}

export default BackgroundWeatherPage