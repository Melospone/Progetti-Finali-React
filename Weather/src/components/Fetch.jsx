import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import BarraRicerca from "./SearchBar";
import RisultatiMeteo from "./ResultWeather";
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData, setDay } from '../reducers/WeatherReduce';

function FetchWeather() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { data: weather, day } = useSelector((state) => state.weather);

  const fetchSearch = async () => {
    try {
      setError(null);  // Azzera l'errore prima di fare la nuova ricerca
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=472fd5a8a4862dffcd7119a94ee5bc4a&units=metric`
      );
      const data = await response.json();
      
      if (response.ok) {
        dispatch(setWeatherData(data));
        fetchForecast(); // Avvia il recupero dei dati di previsione solo se la ricerca corrente ha avuto successo
      } else {
        setError("Città non trovata. Riprova con un altro nome.");
      }

    } catch (error) {
      console.error("Errore nel recupero dei dati ", error);
      setError("Errore nel recupero dei dati.");    
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`);
      const data = await response.json();
      dispatch(setDay(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  const handleSearch = () => {
    if (city.length > 2) {
      fetchSearch();
    }
  };

  return (
    <>
      <Container fluid>
        <BarraRicerca
          className="justify-content-center d-flex"
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
        />
      </Container>

      <Container className="d-flex justify-content-center">
        {error ? (
          <Alert variant="danger">
            {error}
          </Alert>
        ) : (
          <RisultatiMeteo
            city={city}
            setWeatherData={setWeatherData}
            day={day}
          />
        )}
      </Container>
    </>
  );
}

export default FetchWeather;
