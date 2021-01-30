import React, { useEffect, useState } from 'react';


const WeatherAPI = () => {
    const [weatherFeatuers, setWeatherFeatures] = useState({
        description: '',
        temp: '',
        location: ''
    })

    const fetchWeather = async () => {
        const apiCall = await fetch('https://weplants.herokuapp.com/api/weather');
        const weather = await apiCall.json();
        const celcius = Math.round(parseFloat(weather.main.temp) - 273.15);
        const description = weather.weather[0].description;
        const location = weather.name;
        
        setWeatherFeatures({description,celcius,location});
    }
    
    useEffect(() => {
        fetchWeather();
    }, [weatherFeatuers]);

    return (
        <div className="row no-gutters">
            <div className="col-sm-6 col-md-8" id="weather">
                <div id="description">{weatherFeatuers.description}</div>
                <h1 id="temp">{weatherFeatuers.celcius}</h1>
                <div id="location">{weatherFeatuers.location}</div>
            </div>
        </div>
    )
};
export default WeatherAPI;
