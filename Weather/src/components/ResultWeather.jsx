import { BiWind } from "react-icons/bi"; 
import { TiWeatherCloudy } from "react-icons/ti"; 
import { WiHumidity } from "react-icons/wi"; 
import { WiThermometerExterior } from "react-icons/wi"; 
import { WiThermometer } from "react-icons/wi"; 
import React from 'react';
import Card from 'react-bootstrap/Card';


/* prendere i risultati dalla fetch e scambiati dall'altro componente tramite le props "city, weatherData, day" */
const RisultatiMeteo = ({ city, weatherData, day }) => (
  <>

  {/* verifico che i dati non siano vuoti o indefiniti cosi da poter popolare la card, TUTTI i dati devono essere definiti prima del render */}
    {city && weatherData && day && (
      <Card className="search text-center w-50 d-flex">
        <Card.Header className='bodyCard display-3 rounded-5'>{city.toUpperCase()}</Card.Header>
        <Card.Body>
          <Card.Title className='display-5'>{weatherData.main.temp}°C</Card.Title>
          <Card.Text className='h6'><WiThermometer />Temp max: {weatherData.main.temp_max}°C</Card.Text>
          <Card.Text className='h6'><WiThermometerExterior />Temp min: {weatherData.main.temp_min}°C</Card.Text>
          <Card.Text className='h6'><WiHumidity />Humidity: {weatherData.main.humidity}%</Card.Text>
          <Card.Text className='h6'><TiWeatherCloudy />Weather: {weatherData.weather[0].description}</Card.Text>
          <Card.Text className='h6'><BiWind />Wind: {weatherData.wind.speed}KM/h</Card.Text>



          {/* DATI GIORNI SEGUENTI */}

          <Card.Title className='display-5 text-white'>Today</Card.Title>
          <Card.Text className='h5'>Temp: {day.list[0].main.temp}°C</Card.Text>
          <Card.Text className='h5'><WiHumidity />Humidity: {day.list[0].main.humidity}%</Card.Text>
          <Card.Text className='h5'><BiWind />Wind: {day.list[0].wind.speed}km/h</Card.Text>
          <Card.Text className='h5'><TiWeatherCloudy />Weather:{day.list[0].weather[0].description}</Card.Text>

          <Card.Title className='display-5 text-white'>Tomorrow</Card.Title>
          <Card.Text className='h5'>Temp: {day.list[8].main.temp}°C</Card.Text>
          <Card.Text className='h5'><WiHumidity />Humidity: {day.list[8].main.humidity}%</Card.Text>
          <Card.Text className='h5'><BiWind />Wind: {day.list[8].wind.speed}km/h</Card.Text>
          <Card.Text className='h5'><TiWeatherCloudy />Weather:{day.list[8].weather[0].description}</Card.Text>

          <Card.Title className='display-5 text-white'>Day After Tomorrow</Card.Title>
          <Card.Text className='h5'>Temp: {day.list[16].main.temp}°C</Card.Text>
          <Card.Text className='h5'><WiHumidity />Humidity: {day.list[16].main.humidity}%</Card.Text>
          <Card.Text className='h5'><BiWind />Wind: {day.list[16].wind.speed}km/h</Card.Text>
          <Card.Text className='h5'><TiWeatherCloudy />Weather:{day.list[16].weather[0].description}</Card.Text>

        </Card.Body>
      </Card>
    )}
  </>
);

export default RisultatiMeteo;