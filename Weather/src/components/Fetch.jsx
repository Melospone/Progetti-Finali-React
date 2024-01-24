import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import BarraRicerca from "./SearchBar";
import RisultatiMeteo from "./ResultWeather";

function FetchWeather() {
  // Stati per gestire la città, i dati meteo e i dati dei giorni successivi
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [day, setDay] = useState(null);
  // Stato per gestire eventuali errori durante la ricerca
  const [error, setError] = useState(null);

  // Funzione per gestire la ricerca dei dati meteo
  const fetchSearch = async () => {
    try {
      setError(null); // Azzera l'errore prima di fare la nuova ricerca
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=472fd5a8a4862dffcd7119a94ee5bc4a&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        fetchForecast(); // Avvia il recupero dei dati di previsione solo se la ricerca corrente ha avuto successo
      } else {
        setError("Città non trovata. Riprova con un altro nome.");
      }
    } catch (error) {
      console.error("Errore nel recupero dei dati:", error);
      setError("Errore nel recupero dei dati.");
    }
  };

  // Funzione per gestire la ricerca dei dati di previsione
  const fetchForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3f64327af1492cb6b843fb2420be96e9&lang=en&units=metric`
      );
      const data = await response.json();
      setDay(data);
    } catch (error) {
      console.error("Errore nel recupero dei dati di previsione:", error);
    }
  };

  // Funzione per gestire la ricerca quando l'utente preme il pulsante di ricerca
  const handleSearch = () => {
    if (city.length > 3) {
      fetchSearch();
    }
  };

  return (
    <>
      {/* Sezione per la barra di ricerca */}
      <Container fluid>
        <BarraRicerca
          className="justify-content-center d-flex"
          city={city}
          handleSearch={handleSearch}
          setCity={setCity}
        />
      </Container>

      {/* Sezione per visualizzare i risultati */}
      <Container className="d-flex justify-content-center">
        {error ? (
          // Mostra l'Alert se c'è un errore
          <Alert variant="danger">
            {error}
          </Alert>
        ) : (
          // Passa i dati alla componente RisultatiMeteo se non ci sono errori
          <RisultatiMeteo
            city={city}
            weatherData={weatherData}
            day={day}
          />
        )}
      </Container>
    </>
  );
}

export default FetchWeather;