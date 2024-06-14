import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMapProvider } from '../provider/map-provider';

const WeatherDisplay: React.FC = () => {
  const { locationFields } = useMapProvider();
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  
  const { latitude, longitude, unit } = locationFields;

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            lat: latitude,
            lon: longitude,
            units: unit,
            appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY
          },
        });
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch weather data.');
      }
    })()
  }, [latitude, longitude, unit]);

  if (error) {
    return <div>
      <h3>Weather forecast:</h3>
      {error}
    </div>;
  }

  if (!weather) {
    return <div>
      <h3>Weather forecast:</h3>
      Loading...
    </div>;
  }

  return <div className="weather-forecast">
    <h3>Weather forecast:</h3>
    <div className="weather-forecast-card">
      <div className="heading">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        <h3 className="">{weather.main.temp}° {unit === 'metric' ? 'C' : 'F'}</h3>
      </div>
      <p><b>Condition:</b> {weather.weather[0].description}</p>
      <p><b>Humidity:</b> {weather.main.humidity}%</p>
      <p><b>Wind Speed:</b> {weather.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
      <p><b>Chance of Rain:</b> {weather.rain ? `${weather.rain['1h']}%` : '0%'}</p>
    </div>
  </div>
}

export default WeatherDisplay;