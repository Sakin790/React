import React, { useState, useEffect } from 'react';
import requests from 'requests';

const WeatherComponent = () => {
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY';
    const cityName = 'London';
    const apiUrl = `https://weather-data.p.rapidapi.com/weather?q=${cityName}&units=metric`;

    const headers = {
      'x-rapidapi-host': 'weather-data.p.rapidapi.com',
      'x-rapidapi-key': apiKey
    };

    requests
      .get(apiUrl, { headers })
      .then((response) => {
        if (response.status === 200) {
          const data = JSON.parse(response.body);
          const temperatureData = data.main.temp;
          setTemperature(temperatureData);
        } else {
          setError(`Error: ${response.status}`);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!temperature) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div>
      <h3>Current Temperature in London: {temperature}°C</h3>
    </div>
  );
};

export default WeatherComponent;
