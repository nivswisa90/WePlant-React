import React, { useEffect, useState } from "react";

const WeatherAPI = () => {
  const [weatherFeatures, setWeatherFeatures] = useState({
    description: "",
    temp: "",
    location: "",
  });

  const fetchWeather = async () => {
    const apiCall = await fetch("https://weplants.herokuapp.com/api/weather");
    const weather = await apiCall.json();
    const celcius = Math.round(parseFloat(weather.main.temp) - 273.15);
    const description = weather.weather[0].description;
    const location = weather.name;
    setWeatherFeatures({ description, celcius, location });
  };

  useEffect(() => fetchWeather(), []);

  return (
    <div id="weather">
      <div id="description">{weatherFeatures.description}</div>
      <h1 id="temp">{weatherFeatures.celcius}</h1>
      <div id="location">{weatherFeatures.location}</div>
    </div>
  );
};
export default WeatherAPI;
