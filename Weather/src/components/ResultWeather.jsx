import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

/* IMPORTO L'ESTENSIONE ICON REACT, L'HO TROVATA MOLTO COMODA ED ANCHE RICCA DI TIPI DI ICONE */
import { BiWind } from "react-icons/bi";
import { TiWeatherCloudy } from "react-icons/ti";
import { WiHumidity, WiThermometerExterior, WiThermometer } from "react-icons/wi";

const RisultatiMeteo = ({ city }) => {
  const { data: weather, day } = useSelector((state) => state.weather);

  return (
    <>
      {/* Verifica che TUTTI i dati siano presenti prima di renderizzare il componente */}
      {city && weather && day && (
        <Card className="search text-center w-50 d-flex">
          <Card.Header className='bodyCard display-3 rounded-5'>{city.toUpperCase()}</Card.Header>
          <Card.Body>
            {/* Dati attuali */}
            <Card.Title className='display-5'>{weather.main.temp}°C</Card.Title>
            <Card.Text className='h6'><WiThermometer />Temp max: {weather.main.temp_max}°C</Card.Text>
            <Card.Text className='h6'><WiThermometerExterior />Temp min: {weather.main.temp_min}°C</Card.Text>
            <Card.Text className='h6'><WiHumidity />Humidity: {weather.main.humidity}%</Card.Text>
            <Card.Text className='h6'><TiWeatherCloudy />Weather: {weather.weather[0].description}</Card.Text>
            <Card.Text className='h6'><BiWind />Wind: {weather.wind.speed}KM/h</Card.Text>

            {/* DATI GIORNI SEGUENTI */}

            <Card.Title className='display-5 text-white'>Today</Card.Title>
            <Card.Text className='h5'>Temp: {day.list[0].main.temp}°C</Card.Text>
            <Card.Text className='h5'><WiHumidity />Humidity: {day.list[0].main.humidity}%</Card.Text>
            <Card.Text className='h5'><BiWind />Wind: {day.list[0].wind.speed}km/h</Card.Text>
            <Card.Text className='h5'><TiWeatherCloudy />Weather: {day.list[0].weather[0].description}</Card.Text>

            <Card.Title className='display-5 text-white'>Tomorrow</Card.Title>
            <Card.Text className='h5'>Temp: {day.list[8].main.temp}°C</Card.Text>
            <Card.Text className='h5'><WiHumidity />Humidity: {day.list[8].main.humidity}%</Card.Text>
            <Card.Text className='h5'><BiWind />Wind: {day.list[8].wind.speed}km/h</Card.Text>
            <Card.Text className='h5'><TiWeatherCloudy />Weather: {day.list[8].weather[0].description}</Card.Text>

            <Card.Title className='display-5 text-white'>Day After Tomorrow</Card.Title>
            <Card.Text className='h5'>Temp: {day.list[16].main.temp}°C</Card.Text>
            <Card.Text className='h5'><WiHumidity />Humidity: {day.list[16].main.humidity}%</Card.Text>
            <Card.Text className='h5'><BiWind />Wind: {day.list[16].wind.speed}km/h</Card.Text>
            <Card.Text className='h5'><TiWeatherCloudy />Weather: {day.list[16].weather[0].description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default RisultatiMeteo;